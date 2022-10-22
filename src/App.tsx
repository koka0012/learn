import "@i18n";
import "react-native-url-polyfill/auto";

import { registerRootComponent } from "expo";
import { ExpoRoot, SplashScreen } from "expo-router";
import { Platform } from "react-native";

// Must be exported or Fast Refresh won't update the context >:[
export function App() {
  const ctx = require.context("./routes");

  return (
    <Providers>
      <ExpoRoot context={ctx} />
    </Providers>
  );
}

function isBaseObject(obj: unknown) {
  if (Object.prototype.toString.call(obj) !== "[object Object]") {
    return false;
  }
  const proto = Object.getPrototypeOf(obj);
  if (proto === null) {
    return true;
  }
  return proto === Object.prototype;
}

function isErrorShaped(error: Error) {
  return (
    error &&
    typeof error === "object" &&
    typeof error.name === "string" &&
    typeof error.message === "string"
  );
}

/**
 * After we throw this error, any number of tools could handle it.
 * This check ensures the error is always in a reason state before surfacing it to the runtime.
 */
function convertError(error: Error) {
  if (isErrorShaped(error)) {
    return error;
  }

  if (process.env.NODE_ENV === "development") {
    if (error == null) {
      return new Error("A null/undefined error was thrown.");
    }
  }

  if (isBaseObject(error)) {
    return new Error(JSON.stringify(error));
  }

  return new Error(String(error));
}

(() => {
  try {
    SplashScreen.preventAutoHideAsync();

    registerRootComponent(App);
  } catch (e) {
    // Hide the splash screen if there was an error so the user can see it.
    SplashScreen.hideAsync();

    const error = convertError(e as Error);
    // Prevent the app from throwing confusing:
    //  ERROR  Invariant Violation: "main" has not been registered. This can happen if:
    // * Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
    // * A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.

    // Console is pretty useless on native, on web you get interactive stack traces.
    if (Platform.OS === "web") {
      console.error(error);
      console.error(
        `A runtime error has occurred while rendering the root component.`
      );
    }

    // Give React a tick to render before throwing.
    setTimeout(() => {
      throw error;
    });

    // TODO: Render a production-only error screen.
  }
})();
