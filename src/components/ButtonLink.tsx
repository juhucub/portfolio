import type { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const variantClass =
    variant === "primary" ? "button-link-primary" : "button-link-secondary";
  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  return (
    <a
      className={`button-link ${variantClass}`}
      href={href}
      {...(isExternal
        ? {
            target: "_blank",
            rel: "noreferrer",
          }
        : undefined)}
    >
      {children}
    </a>
  );
}
