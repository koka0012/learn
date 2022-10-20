import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          "MazzardM-Bold": require("@assets/fonts/MazzardM-Bold.otf"),
          "MazzardM-Regular": require("@assets/fonts/MazzardM-Regular.otf"),
          "mazzard-light": require("@assets/fonts/MazzardM-Light.otf"),
          "mazzard-thin": require("@assets/fonts/MazzardM-Thin.otf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
