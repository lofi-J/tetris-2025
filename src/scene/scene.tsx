import { Topbar } from "../components/topbar";

export default function Scene({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen min-w-screen select-none relative text-theme-foreground bg-theme-background">
      <Topbar />
      <main className="mt-[86px]">{children}</main>
    </div>
  );
}
