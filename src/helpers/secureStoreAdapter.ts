import { SupportedStorage } from "@supabase/supabase-js";
import * as SecureStore from "expo-secure-store";

function secureStoreAdapter(): SupportedStorage {
  const getItem = async (key: string) => {
    return SecureStore.getItemAsync(key, {
      keychainAccessible: SecureStore.WHEN_UNLOCKED,
      keychainService: "your-club",
    });
  };

  const setItem = async (key: string, value: string) => {
    return SecureStore.setItemAsync(key, value, {
      keychainAccessible: SecureStore.WHEN_UNLOCKED,
      keychainService: "your-club",
    });
  };

  const removeItem = async (key: string) => {
    return SecureStore.deleteItemAsync(key, { keychainService: "your-club" });
  };

  return { getItem, setItem, removeItem };
}

export default secureStoreAdapter;
