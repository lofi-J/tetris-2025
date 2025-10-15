export const GridBackground = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="h-full grid-background">
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
