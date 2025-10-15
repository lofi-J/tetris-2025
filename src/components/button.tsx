import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children?: React.ReactNode;
  variant?: "secondary" | "transparent" | "link";
};

export const Button = ({
  className,
  children,
  variant = "secondary",
  ...props
}: ButtonProps) => {
  const classes = clsx("", {
    "bg-red-500": variant === "secondary",
    "bg-transparent": variant === "transparent",
    "bg-transparent text-[color-mix(in srgb, var(--color-theme-foreground) 50%, transparent)] hover:text-[var(--color-theme-foreground)]":
      variant === "link",
  });
  return (
    <button {...props} className={clsx(classes, className)}>
      {children}
    </button>
  );
};
