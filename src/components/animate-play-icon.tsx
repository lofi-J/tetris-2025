import { motion, useTime, useTransform } from "framer-motion";
import { Button } from "./button";

export const AnimatePlayIcon = () => {
  const time = useTime();

  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });

  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #ff4545 0%, #00ff99 100%)`;
  });

  return (
    <div className="relative">
      <Button
        type="button"
        className="relative bg-amber-400 px-4 py-2 rounded-md z-20"
      >
        TEST
      </Button>
      <motion.div
        className="absolute -inset-[1px] rounded-md z-10"
        style={{
          background: rotatingBg,
        }}
      />
    </div>
  );
};
