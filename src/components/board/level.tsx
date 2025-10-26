import { motion } from "framer-motion";
import { ZapIcon } from "lucide-react";

type LevelProps = {
  level: number;
  linesCleared: number;
};

export const Level = ({ level, linesCleared }: LevelProps) => {
  return (
    <motion.div
      key={level} // Animate when level changes
      initial={{ scale: 1.2, opacity: 0.7 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, type: "spring", bounce: 0.5 }}
      className="flex items-center gap-1"
    >
      <ZapIcon className="size-4" />
      <span>{level}</span>
      <span className="text-xs opacity-60">({linesCleared} lines)</span>
    </motion.div>
  );
};
