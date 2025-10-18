import CppIcon from "../assets/languages/cplusplus.svg?react";
import CsharpIcon from "../assets/languages/csharp.svg?react";
import GoIcon from "../assets/languages/go.svg?react";
import JavaIcon from "../assets/languages/java.svg?react";
import JavascriptIcon from "../assets/languages/javascript.svg?react";
import PythonIcon from "../assets/languages/python.svg?react";
import RubyIcon from "../assets/languages/ruby.svg?react";
import RustIcon from "../assets/languages/rust.svg?react";
import SwiftIcon from "../assets/languages/swift.svg?react";
import TypescriptIcon from "../assets/languages/typescript.svg?react";
import type { ProgrammingLanguage } from "../context/theme-provider";

type ThemeDesign = {
  foregroundColor: string;
  backgroundColor: string;
  accentColor: string;
  boardColor: string;
  cellColor: string;
};

export type ThemeConfig = { name: ProgrammingLanguage; config: ThemeDesign };

export const themeConfig: Record<ProgrammingLanguage, ThemeDesign> = {
  javascript: {
    foregroundColor: "#0000ff",
    backgroundColor: "#000",
    accentColor: "#ff0000",
    boardColor: "#ff0000",
    cellColor: "#ff0000",
  },
  typescript: {
    foregroundColor: "#fff",
    backgroundColor: "#000",
    accentColor: "#ff0000",
    boardColor: "#ff0000",
    cellColor: "#ff0000",
  },
  python: {
    foregroundColor: "#fff",
    backgroundColor: "#000",
    accentColor: "#ff0000",
    boardColor: "#ff0000",
    cellColor: "#ff0000",
  },
  java: {
    foregroundColor: "#fff",
    backgroundColor: "#000",
    accentColor: "#ff0000",
    boardColor: "#ff0000",
    cellColor: "#ff0000",
  },
  "c++": {
    foregroundColor: "#fff",
    backgroundColor: "#000",
    accentColor: "#ff0000",
    boardColor: "#ff0000",
    cellColor: "#ff0000",
  },
  "c#": {
    foregroundColor: "#fff",
    backgroundColor: "#000",
    accentColor: "#ff0000",
    boardColor: "#ff0000",
    cellColor: "#ff0000",
  },
  ruby: {
    foregroundColor: "#fff",
    backgroundColor: "#000",
    accentColor: "#ff0000",
    boardColor: "#ff0000",
    cellColor: "#ff0000",
  },
  swift: {
    foregroundColor: "#fff",
    backgroundColor: "#000",
    accentColor: "#ff0000",
    boardColor: "#ff0000",
    cellColor: "#ff0000",
  },
  rust: {
    foregroundColor: "#fff",
    backgroundColor: "#000",
    accentColor: "#ff0000",
    boardColor: "#ff0000",
    cellColor: "#ff0000",
  },
  go: {
    foregroundColor: "#fff",
    backgroundColor: "#000",
    accentColor: "#ff0000",
    boardColor: "#ff0000",
    cellColor: "#ff0000",
  },
};

export const languageIconConfig: Record<ProgrammingLanguage, string> = {
  javascript: JavascriptIcon,
  typescript: TypescriptIcon,
  python: PythonIcon,
  java: JavaIcon,
  "c++": CppIcon,
  "c#": CsharpIcon,
  ruby: RubyIcon,
  swift: SwiftIcon,
  rust: RustIcon,
  go: GoIcon,
};
