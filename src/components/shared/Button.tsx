import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
};

type ButtonAsAnchorProps = ButtonBaseProps &
  { href: string } &
  ComponentPropsWithoutRef<"a">;

type NativeButtonProps = Omit<ComponentPropsWithoutRef<"button">, "type"> & {
  type?: "button" | "submit" | "reset";
};

type ButtonAsButtonProps = ButtonBaseProps &
  { href?: undefined } &
  NativeButtonProps;

type ButtonProps = ButtonAsAnchorProps | ButtonAsButtonProps;

const variants = {
  primary:
    "bg-indigo-600 text-white shadow-soft hover:bg-indigo-700 focus-visible:outline-indigo-600",
  secondary:
    "border border-slate-200 bg-white text-slate-800 hover:border-indigo-200 hover:bg-indigo-50 focus-visible:outline-indigo-500",
  ghost:
    "text-slate-600 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-slate-500"
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm sm:text-base"
};

export function Button(props: ButtonProps) {
  const { children, className, variant = "primary", size = "md" } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in props && props.href) {
    const {
      children: _children,
      className: _className,
      variant: _variant,
      size: _size,
      href,
      ...anchorProps
    } = props;

    return (
      <a className={classes} href={href} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonOnlyProps = props as ButtonAsButtonProps;
  const {
    children: _children,
    className: _className,
    variant: _variant,
    size: _size,
    href: _href,
    type,
    ...buttonProps
  } = buttonOnlyProps;

  return (
    <button className={classes} type={type ?? "button"} {...buttonProps}>
      {children}
    </button>
  );
}
