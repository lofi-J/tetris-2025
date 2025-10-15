import clsx from "clsx";
import { Topbar } from "../components/topbar";

export default function Scene({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "h-screen w-screen select-none relative text-theme-foreground bg-theme-background",
        className,
      )}
    >
      <Topbar />
      <main className="h-full">{children}</main>
    </div>
  );
}
