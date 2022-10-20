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

export default Providers;
