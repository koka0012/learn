import supabase from "@libs/supabase";
import session from "@recoil/session";
import { useEffect } from "react";
import { memo } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

interface ISessionListenerProps {
  children: React.ReactNode;
}

function SessionListener({ children }: ISessionListenerProps) {
  const setSession = useSetRecoilState(session);
  const x = useRecoilValue(session);

  useEffect(() => {
    (async () => {
      const a = await supabase.auth.getSession();
      console.log(x);
    })();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      console.debug("SessionListener: onAuthStateChange", session);
      setSession(session);
    });

    return () => {
      console.log("unsub");
      subscription.unsubscribe();
    };
  }, [setSession, x]);

  return <>{children}</>;
}

export default memo(SessionListener);
