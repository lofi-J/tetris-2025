import { motion, useTime, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { languageIconConfig, themeConfig } from "../../config/theme.config";
import { useTheme } from "../../context/theme-provider";
import { ThemeSelector } from "./theme-selector";

export const LanguageMotion = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
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

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    // 약간의 지연을 두고 이벤트 리스너 추가 (현재 클릭 이벤트 이후)
    setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 0);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        className="relative size-6"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="relative z-10 rounded-sm overflow-hidden bg-[rgba(33,33,33)]">
          <SelectedThemeIcon />
        </div>
        <motion.div
          className="absolute -inset-[2px] rounded-sm z-0"
          style={{
            background: rotatingBackground,
          }}
        />
      </button>
      {open && <ThemeSelector />}
    </div>
  );
};
