import supabase from "@libs/supabase";
import { Link, Stack } from "expo-router";
import { useCallback } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";

function AppPage() {
  const logout = useCallback(() => {
    supabase.auth.signOut();
  }, []);

  return (
    <SafeAreaView>
      <Text className="text-lg">Ola</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default AppPage;
