import { create } from "zustand";
import type { GameAction, Status } from "./game.type";

type GameStatusStore = {
  status: Status;
  dispatch: ((action: GameAction) => void) | null;
  setDispatch: (dispatch: (action: GameAction) => void) => void;
};

export const useGameStatusStore = create<GameStatusStore>((set) => ({
  status: "idle",
  dispatch: null,
  setDispatch: (dispatch) => set({ dispatch }),
}));
