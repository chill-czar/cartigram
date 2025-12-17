"use client";

import { usePathname } from "next/navigation";
import { PageHeader } from "./PageHeader";

const ROUTE_TITLES: Record<string, string> = {
  "/menu": "Menu",
  "/services": "Services",
  "/gallery": "Gallery",
  "/reviews": "Reviews",
  "/coupons": "Coupons",
  "/contact": "Contact Us",
};

export function ClientPageHeader() {
  const pathname = usePathname();
  // Default to formatted pathname if not in map, or fallback to empty
  const title =
    ROUTE_TITLES[pathname] ||
    pathname
      .split("/")
      .pop()
      ?.replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase()) ||
    "Page";

  return <PageHeader title={title} />;
}
