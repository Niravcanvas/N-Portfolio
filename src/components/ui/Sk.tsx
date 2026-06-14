import { cn } from "@/lib/cn";

/** Shared skeleton placeholder primitive for loading states. */
export const Sk = ({ className }: { className?: string }) => (
  <div className={cn("animate-pulse rounded bg-black/10", className)} />
);
