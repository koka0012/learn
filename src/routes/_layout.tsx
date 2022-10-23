import { withProviders } from "@components/organisms/Providers";
import useCachedResources from "@hooks/useCachedResources";
import { SplashScreen, Stack } from "expo-router";
import { memo, Suspense } from "react";

function RootLayout() {
  // const logged = useRecoilValue(isLogged);

  const loadedResources = useCachedResources();

  if (!loadedResources) return <SplashScreen />;

  return (
    <Suspense fallback={<SplashScreen />}>
      <Stack>
        <Stack.Screen name="(app)/index" redirect={true} />
        <Stack.Screen name="(unauthenticated)/login" redirect={false} />
      </Stack>
    </Suspense>
  );
}

export default memo(withProviders(RootLayout));
