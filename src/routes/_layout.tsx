import { Layout, Stack } from "expo-router";
import { memo, useEffect, useState } from "react";

function RootLayout() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuth(true);
    }, 5000);
  }, []);

  return (
    <Layout>
      <Layout.Screen name="(app)/index" redirect={!auth} />
      <Layout.Screen name="sign-in" redirect={auth} />
      <Layout.Children />
    </Layout>
  );
}

export default memo(RootLayout);
