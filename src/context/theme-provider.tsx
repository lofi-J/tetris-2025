import { createContext, useContext, useState } from "react";

type ProgrammingLanguage =
  | "javascript"
  | "typescript"
  | "python"
  | "java"
  | "c++"
  | "c#"
  | "ruby"
  | "swift"
  | "rust"
  | "go";
type ThemeContextType = {
  theme: ProgrammingLanguage;
  setTheme: (theme: ProgrammingLanguage) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ProgrammingLanguage>("javascript");
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
