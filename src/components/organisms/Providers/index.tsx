import { SplashScreen } from "expo-router";
import { ComponentType, memo, Suspense } from "react";
import { RecoilRoot } from "recoil";

import SessionListener from "../SessionListener";

interface IProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: IProvidersProps) {
  return (
    <RecoilRoot>
      <SessionListener>{children}</SessionListener>
    </RecoilRoot>
  );
}

function withProviders<P extends object>(Component: ComponentType<P>) {
  return function ProvidersWrapper(props: P) {
    return (
      <Suspense fallback={<SplashScreen />}>
        <Providers>
          <Component {...props} />
        </Providers>
      </Suspense>
    );
  };
}

export { withProviders };
export default Providers;
