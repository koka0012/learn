import supabase from "@libs/supabase";
import session from "@recoil/session";
import { useEffect } from "react";
import { memo } from "react";
import { useSetRecoilState } from "recoil";

interface ISessionListenerProps {
  children: React.ReactNode;
}

function SessionListener({ children }: ISessionListenerProps) {
  const setSession = useSetRecoilState(session);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      console.debug("SessionListener: onAuthStateChange", session);
      setSession(session);
    });

    return subscription.unsubscribe;
  }, [setSession]);

  return <>{children}</>;
}

export default memo(SessionListener);
