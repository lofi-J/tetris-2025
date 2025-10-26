import { motion } from "framer-motion";
import { TimerIcon } from "lucide-react";
import { useEffect, useState } from "react";
import type { Status } from "../../game/game.type";

type TimerProps = {
  status: Status;
};

export const Timer = ({ status }: TimerProps) => {
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    // Only run timer when status is "playing"
    if (status !== "playing") return;

    const interval = setInterval(() => {
      setMilliseconds((prev) => prev + 10);
    }, 10); // Update every 10ms

    return () => clearInterval(interval);
  }, [status]);

  // Format time as MM:SS:MS
  const formatTime = (totalMilliseconds: number) => {
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    const ms = Math.floor((totalMilliseconds % 1000) / 10); // Display centiseconds (00-99)

    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}:${String(ms).padStart(2, "0")}`;
  };

  return (
    <motion.div
      key={Math.floor(milliseconds / 1000)} // Animate every 1 second for smoother performance
      initial={{ scale: 1.05, opacity: 0.9 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      className="flex items-center gap-1"
    >
      <TimerIcon className="size-4" />
      {formatTime(milliseconds)}
    </motion.div>
  );
};
