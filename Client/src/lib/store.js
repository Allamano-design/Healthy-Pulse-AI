import { create } from 'zustand';


export const useAppStore = create((set) => ({
  isAuthenticated: false,
  // 1. Expanded user object
  user: {
    name: '',
    email: '',
    location: '',
    bio: '',
    profilePic: null
  },
  recentChecks: [],
  chatOpen: false,

  // 2. Modified login to accept full object
  login: (userData) => set({ 
    isAuthenticated: true, 
    user: { ...userData } 
  }),

  // 3. New Update function
  updateProfile: (newData) => set((state) => ({
    user: { ...state.user, ...newData }
  })),

  logout: () => set({ isAuthenticated: false, user: null, recentChecks: [] }),
  addCheck: (result) => set((state) => ({ recentChecks: [result, ...state.recentChecks].slice(0, 10) })),
  toggleChat: () => set((state) => ({ chatOpen: !state.chatOpen })),
  setChatOpen: (open) => set({ chatOpen: open }),
}));