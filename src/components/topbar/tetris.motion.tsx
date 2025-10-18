import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getCSSVariable } from "../../util";

export const TetrisMotion = () => {
  const [charIndex, setCharIndex] = useState(0);

  const hoverDotPosition = {
    0: 5,
    1: 24,
    2: 43,
    3: 62,
    4: 81.5,
    5: 100,
  };

  const tetrominoColor = {
    0: "--color-tomato",
    1: "--color-orange",
    2: "--color-tomato",
    3: "--color-green",
    4: "--color-blue",
    5: "--color-purple",
  };

  const handleMouseEnter = (index: number) => {
    setCharIndex(index);

    const tetrominoColorValue = getCSSVariable(
      tetrominoColor[index as keyof typeof tetrominoColor],
    );
    const prevTetrominoColorValue = getCSSVariable(
      tetrominoColor[charIndex as keyof typeof tetrominoColor],
    );

    // set CSS variable "--color-topbar-accent"
    document.documentElement.style.setProperty(
      "--color-topbar-accent",
      tetrominoColorValue,
    );
    // set CSS variable "--color-topbar-accent-1"
    document.documentElement.style.setProperty(
      "--color-topbar-accent-1",
      prevTetrominoColorValue,
    );
  };

  return (
    <Link to="/" className="space-x-1 relative">
      <motion.div
        className="absolute top-0 size-1 bg-theme-foreground rounded-full"
        animate={{
          x: hoverDotPosition[charIndex as keyof typeof hoverDotPosition],
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      />
      <Char
        char="T"
        className="text-tomato"
        onMouseEnter={() => handleMouseEnter(0)}
      />
      <Char
        char="E"
        className="text-orange"
        onMouseEnter={() => handleMouseEnter(1)}
      />
      <Char
        char="T"
        className="text-tomato"
        onMouseEnter={() => handleMouseEnter(2)}
      />
      <Char
        char="R"
        className="text-green"
        onMouseEnter={() => handleMouseEnter(3)}
      />
      <Char
        char="I"
        className="text-blue"
        onMouseEnter={() => handleMouseEnter(4)}
      />
      <Char
        char="S"
        className="text-purple"
        onMouseEnter={() => handleMouseEnter(5)}
      />
    </Link>
  );
};

const Char = ({
  char,
  className,
  ...props
}: {
  char: string;
  className: string;
} & React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={clsx("text-xl font-bold font-silkscreen", className)}
      {...props}
    >
      {char}
    </span>
  );
};
