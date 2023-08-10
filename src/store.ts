import { create } from 'zustand';

interface GameQuery {
  searchText?: string;
  genreId?: number;
  platformId?: number;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((state) => ({
      gameQuery: {
        ...state.gameQuery,
        genreId,
        searchText: undefined,
      },
    })),
  setPlatformId: (platformId) =>
    set((state) => ({
      gameQuery: {
        ...state.gameQuery,
        platformId,
        searchText: undefined,
      },
    })),
}));

export default useGameQueryStore;
