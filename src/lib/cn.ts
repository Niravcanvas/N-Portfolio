import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Compose + dedupe Tailwind class lists so overrides resolve predictably. */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
