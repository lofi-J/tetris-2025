# Lofi-J Tetris 2025

2025년 개인 Frontend 스킬 체크용 프로젝트

## Project

- Vite v7.1.7
- React.js v19
- TypeScript v5.9.3

## Formatting

- Biome v2.2.2

### biome.json

```json
{
  "files": {
    "ignoreUnknown": true,
    "ignore": ["node_modules"]
  },

  "organizeImports": {
    "enabled": true
  },

  "formatter": {
  "enabled": true,
    "formatWithErrors": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineEnding": "lf",
    "trimTrailingWhitespace": true,
    "wrapLength": 120,
    "attributePosition": "auto"
  },

  "linter": {
    "recommended": true,
    "complexity": {
      "noVoid": "error"
    },
    "correctness": {
      "noUnusedImports": "error"
    }
  }
}
```
