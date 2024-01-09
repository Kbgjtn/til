import { clsx, type ClassValue } from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function getSlug(children: ReactNode) {
  if (typeof children === "string") {
    return children.toLowerCase().replace(/\s/g, "-");
  }

  return "";
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
