import { create } from 'zustand'

interface UserState {
  userid: string
  setUser: (newUser: string) => void
}

const useUserContext = create<UserState>((set) => ({
  userid: "",
  setUser: (newUser) => set(() => ({ userid: newUser })),
}));

export default useUserContext;
