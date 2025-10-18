import { motion, useTime, useTransform } from "framer-motion";
import { languageIconConfig, themeConfig } from "../../config/theme.config";
import { useTheme } from "../../context/theme-provider";

export const LanguageMotion = () => {
  const { theme } = useTheme();
  const time = useTime();

  const SelectedThemeIcon = languageIconConfig[theme];

  const rotateSpeed = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });

  const themeForegroundColor = themeConfig[theme].foregroundColor;
  const rotatingBackground = useTransform(rotateSpeed, (r) => {
    return `conic-gradient(from ${r}deg, ${themeForegroundColor} 15%, transparent 0%)`;
  });

  return (
    <button type="button" className="relative size-6">
      <div className="relative z-10 rounded-sm overflow-hidden">
        <SelectedThemeIcon />
      </div>
      <motion.div
        className="absolute -inset-[2px] rounded-sm z-0"
        style={{
          background: rotatingBackground,
        }}
      />
    </button>
  );
};
