import type { ProgrammingLanguage } from "../context/theme-provider";

type ThemeDesign = {
  foregroundColor: string;
  backgroundColor: string;
  accentColor: string;
  boardColor: string;
  cellColor: string;
};

export type ThemeConfig = { name: ProgrammingLanguage; config: ThemeDesign };

export const themeConfig = {};
