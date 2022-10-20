import supabase from "@libs/supabase";
import { Session } from "@supabase/supabase-js";
import { atom } from "recoil";

const sessionAtom = atom<Session | null>({
  key: "session",
  default: new Promise((resolve) =>
    supabase.auth.getSession().then(({ data: { session } }) => resolve(session))
  ),
});

export default sessionAtom;
