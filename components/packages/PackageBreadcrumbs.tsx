import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PackageBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function PackageBreadcrumbs({ items }: PackageBreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://khushitravel.in${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="py-3 px-4 md:px-0 text-xs sm:text-sm text-gray-500 font-medium"
      >
        <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx} className="flex items-center gap-1.5 sm:gap-2">
                {idx > 0 && <span className="text-gray-400">/</span>}
                {isLast || !item.href ? (
                  <span className="text-amber-600 font-semibold" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-[#1a365d] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
