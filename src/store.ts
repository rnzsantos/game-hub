import { create } from 'zustand';

interface GameQuery {
  searchText?: string;
  genreId?: number;
  platformId?: number;
  order?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setOrder: (order: string) => void;
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
  setOrder: (order) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, order } })),
}));

export default useGameQueryStore;
