import useCachedResources from "@hooks/useCachedResources";
import { isLogged } from "@recoil/session";
import { SplashScreen, Stack } from "expo-router";
import { memo } from "react";
import { useRecoilValue } from "recoil";

function RootLayout() {
  const logged = useRecoilValue(isLogged);

  const loadedResources = useCachedResources();

  if (!loadedResources) return <SplashScreen />;

  return (
    <Stack>
      <Stack.Screen name="(app)/index" redirect={logged} />
      <Stack.Screen name="(unauthenticated)/login" redirect={!logged} />
    </Stack>
  );
}

export default memo(RootLayout);
