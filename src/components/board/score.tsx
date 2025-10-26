import { motion } from "framer-motion";
import { TrophyIcon } from "lucide-react";

type ScoreProps = {
  score: number;
};

export const Score = ({ score }: ScoreProps) => {
  return (
    <motion.div
      key={score} // Animate when score changes
      initial={{ scale: 1.15, opacity: 0.8 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex items-center gap-1"
    >
      <TrophyIcon className="size-4" />
      {score.toLocaleString()}
    </motion.div>
  );
};
