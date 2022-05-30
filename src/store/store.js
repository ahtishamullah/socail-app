import create from "zustand";
import { LoginHook } from "../hooks/loginHook";
export const userStore = create((set) => ({
  accessToken: false,
  userName: [],
  setRenderData: (newData) =>
    set((state) => ({ userName: [...state.userName, { newData }] })),
  deletePost: (data) => set((state) => ({ userName: { data } })),
  setLogOut: () => set(() => ({ accessToken: false })),
  // setLogOut: () => set(() => ({ accessToken: false })),
}));

// export const userStore = () => {
//   const store = create((set) => ({
//     accessToken: false,
//   }));
//   return {
//     store,
//   };
// };
