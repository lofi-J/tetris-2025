import { languageIconConfig, themeConfig } from "../../config/theme.config";
import {
  useTheme,
  type ProgrammingLanguage,
} from "../../context/theme-provider";

export const ThemeSelector = ({ close }: { close: () => void }) => {
  const { setTheme } = useTheme();

  const handleClick = (theme: ProgrammingLanguage) => {
    setTheme(theme);
    close();
  };

  return (
    <div className="absolute top-[56px] left-0 border border-[rgb(33,33,33)] bg-[rgba(33,33,33,0.45)] p-4 rounded-md w-[200px]">
      <h1 className="text-nowrap font-semibold text-sm text-center">
        Language Theme
      </h1>
      <div className="grid grid-cols-4 gap-4 mt-4 w-full">
        {Object.keys(themeConfig).map((theme: string) => {
          const LanguageIcon = languageIconConfig[theme as ProgrammingLanguage];
          return (
            <button
              key={theme}
              type="button"
              className="size-7 rounded-sm"
              onClick={() => handleClick(theme as ProgrammingLanguage)}
            >
              <LanguageIcon />
            </button>
          );
        })}
      </div>
    </div>
  );
};
