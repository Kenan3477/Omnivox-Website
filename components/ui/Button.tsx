import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "paper";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "disabled" | "onClick"> {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-cta-500 text-white hover:bg-cta-600 font-semibold shadow-[0_0_0_1px_rgba(37,99,235,0.35)]",
  secondary: "bg-ink-700 text-ink-100 border border-ink-600 hover:border-ink-400 hover:bg-ink-600",
  outline: "border border-signal-400/50 text-signal-300 hover:bg-signal-400/10",
  ghost: "text-ink-200 hover:text-signal-300 hover:bg-white/5",
  paper: "bg-ink text-paper hover:bg-ink-800 font-semibold",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2.5 text-sm",
  lg: "px-5 py-3 text-sm",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  onClick,
  external = false,
  disabled,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md transition-colors duration-150 disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
