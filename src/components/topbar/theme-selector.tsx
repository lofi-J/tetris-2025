import { languageIconConfig, themeConfig } from "../../config/theme.config";
import {
  useTheme,
  type ProgrammingLanguage,
} from "../../context/theme-provider";

export const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  const borderColor = themeConfig[theme].boardColor;
  const backgroundColor = themeConfig[theme].backgroundColor;

  return (
    <div
      className="absolute top-[56px] left-0 border p-4 rounded-md"
      style={{ borderColor, backgroundColor }}
    >
      <div>
        <h1 className="text-nowrap font-semibold text-sm">Language Theme</h1>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {Object.keys(themeConfig).map((theme: string) => {
            const LanguageIcon =
              languageIconConfig[theme as ProgrammingLanguage];
            return (
              <button
                key={theme}
                type="button"
                className="size-6 rounded-sm"
                onClick={() => setTheme(theme as ProgrammingLanguage)}
              >
                <LanguageIcon />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
