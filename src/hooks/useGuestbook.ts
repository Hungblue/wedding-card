import { create } from 'zustand';
import { Wish } from '@/types';

interface GuestbookStore {
  wishes: Wish[];
  isLoading: boolean;
  error: string | null;
  _hasHydrated: boolean;
  fetchWishes: () => Promise<void>;
  addWish: (name: string, message: string) => Promise<boolean>;
}

export const useGuestbookStore = create<GuestbookStore>()((set) => ({
  wishes: [],
  isLoading: false,
  error: null,
  _hasHydrated: false,

  fetchWishes: async () => {
    set({ isLoading: true, error: null });
    try {
      const res = await fetch('/api/wishes');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      set({ wishes: data.wishes, isLoading: false, _hasHydrated: true });
    } catch {
      set({ error: 'Không thể tải lời chúc', isLoading: false, _hasHydrated: true });
    }
  },

  addWish: async (name: string, message: string) => {
    try {
      const res = await fetch('/api/wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });
      if (!res.ok) throw new Error('Failed to post');
      const data = await res.json();
      set((state) => ({
        wishes: [data.wish, ...state.wishes],
      }));
      return true;
    } catch {
      return false;
    }
  },
}));
