// src/recoil/authAtom.js
import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: {
    isAuthenticated: false,
    user: null,
    username: "", 
  },
});
