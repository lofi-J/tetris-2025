import { create } from "zustand";

type GameSettingStore = {
  cellSize: number; // px
  previewCellSize: number; // px
};

export const useGameSettingStore = create<GameSettingStore>((set) => ({
  cellSize: 20,
  previewCellSize: 12,
  setCellSize: (cellSize: number) => set({ cellSize }),
  setPreviewCellSize: (previewCellSize: number) => set({ previewCellSize }),
}));
