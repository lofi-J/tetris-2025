import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "transparent";
};

export const Button = ({
  className,
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const classes = clsx({
    "bg-red-500": variant === "primary",
    "bg-transparent": variant === "transparent",
  });
  return (
    <button {...props} className={clsx(classes, className)}>
      {children}
    </button>
  );
};
