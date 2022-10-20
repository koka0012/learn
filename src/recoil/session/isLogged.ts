import { selector } from "recoil";
import sessionAtom from "./atom";

const authIsLogged = selector({
  key: "authIsLogged",
  get: ({ get }) => {
    return !!get(sessionAtom);
  },
});

export default authIsLogged;
