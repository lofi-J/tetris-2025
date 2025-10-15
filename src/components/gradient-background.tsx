export const GradientBackground = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="h-full gradient-center">
      <div className="h-full gradient-left-bottom">{children}</div>
    </div>
  );
};
