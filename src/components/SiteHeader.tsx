"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/personal", label: "Personal" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-ink transition-colors hover:text-accent"
        >
          Soaiba Nuzhat
        </Link>

        <ul className="flex items-center gap-1">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                    active
                      ? "bg-ink text-paper"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
