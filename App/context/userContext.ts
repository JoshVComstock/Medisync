import { create } from 'zustand'

interface UserState {
  user: string
  setUser: (newUser: string) => void
}

const useUserContext = create<UserState>((set) => ({
  user: "",
  setUser: (newUser) => set(() => ({ user: newUser })),
}));

export default useUserContext;
