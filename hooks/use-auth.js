"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Define the store
const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      setUser: (userData) => set({ user: userData }),
      setAccessToken: (token) => set({ accessToken: token }),
      clearUser: () => set({ user: null, accessToken: null }),
    }),
    {
      name: "user-storage", // name of the item in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);

const useUser = () => {
  const { user, accessToken, setUser, setAccessToken, clearUser } =
    useUserStore();

  return { user, accessToken, setUser, setAccessToken, clearUser };
};

export default useUser;
