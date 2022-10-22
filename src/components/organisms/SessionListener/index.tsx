import supabase from "@libs/supabase";
import session from "@recoil/session";
import { useEffect } from "react";
import { memo } from "react";
<<<<<<< HEAD
import { useRecoilValue, useSetRecoilState } from "recoil";
=======
import { useSetRecoilState } from "recoil";
>>>>>>> d71395156d38d8e407c6e2e6375d1e3d643def99

interface ISessionListenerProps {
  children: React.ReactNode;
}

function SessionListener({ children }: ISessionListenerProps) {
  const setSession = useSetRecoilState(session);
<<<<<<< HEAD
  const x = useRecoilValue(session);

  useEffect(() => {
    (async () => {
      const a = await supabase.auth.getSession();
      console.log(x);
    })();

=======

  useEffect(() => {
>>>>>>> d71395156d38d8e407c6e2e6375d1e3d643def99
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      console.debug("SessionListener: onAuthStateChange", session);
      setSession(session);
    });

<<<<<<< HEAD
    return () => {
      console.log("unsub");
      subscription.unsubscribe();
    };
  }, [setSession, x]);
=======
    return subscription.unsubscribe;
  }, [setSession]);
>>>>>>> d71395156d38d8e407c6e2e6375d1e3d643def99

  return <>{children}</>;
}

export default memo(SessionListener);
