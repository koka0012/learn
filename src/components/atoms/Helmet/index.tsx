import { Stack } from "expo-router";
import { memo } from "react";

export interface IHelmetProps {
  title?: string;
  headerShown?: boolean;
  children?: React.ReactNode;
}

function Helmet({ title, headerShown = true, children }: IHelmetProps) {
  return (
    <>
      <Stack.Screen options={{ title, headerShown }} />
      {children}
    </>
  );
}

export default memo(Helmet);
