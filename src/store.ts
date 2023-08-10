import { create } from 'zustand';

interface GameQuery {
  searchText?: string;
  genreId?: number;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, genreId, searchText: '' },
    })),
}));

export default useGameQueryStore;
