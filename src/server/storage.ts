import "server-only";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { env } from "@/lib/env";

const g = globalThis as unknown as { _r2?: S3Client | null };

/** Shared R2 (S3-compatible) client, or `null` when R2 isn't configured. */
function getR2(): S3Client | null {
  if (g._r2 !== undefined) return g._r2;
  const e = env();
  if (!e.R2_ACCOUNT_ID || !e.R2_ACCESS_KEY_ID || !e.R2_SECRET_ACCESS_KEY) {
    g._r2 = null;
    return null;
  }
  g._r2 = new S3Client({
    region: "auto",
    endpoint:
      e.R2_ENDPOINT ?? `https://${e.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: e.R2_ACCESS_KEY_ID,
      secretAccessKey: e.R2_SECRET_ACCESS_KEY,
    },
  });
  return g._r2;
}

const SAFE_KEY = /^[a-zA-Z0-9/_.-]+$/;
function assertKey(key: string): void {
  if (!SAFE_KEY.test(key) || key.includes("..")) {
    throw new Error("Invalid object key");
  }
}

/** Public URL for an image in R2, served through the CDN domain. */
export function r2PublicUrl(key: string): string {
  assertKey(key);
  const base = env().NEXT_PUBLIC_CDN_URL?.replace(/\/$/, "");
  return base ? `${base}/${key}` : `/${key}`;
}

export async function uploadImage(
  key: string,
  body: Uint8Array | Buffer,
  contentType: string,
): Promise<boolean> {
  const r2 = getR2();
  const bucket = env().R2_BUCKET;
  if (!r2 || !bucket) return false;
  assertKey(key);
  await r2.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body,
      ContentType: contentType,
    }),
  );
  return true;
}

export async function presignDownload(
  key: string,
  expiresSec = 3600,
): Promise<string | null> {
  const r2 = getR2();
  const bucket = env().R2_BUCKET;
  if (!r2 || !bucket) return null;
  assertKey(key);
  return getSignedUrl(
    r2,
    new GetObjectCommand({ Bucket: bucket, Key: key }),
    { expiresIn: expiresSec },
  );
}
