import { create } from 'zustand';

interface GameQuery {
  genre?: number;
}

interface GameQueryStore {
  query: GameQuery;
  setGenre: (id: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  query: {},
  setGenre: (id) => set(() => ({ query: { genre: id } })),
}));

export default useGameQueryStore;
