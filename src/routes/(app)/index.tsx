import { Link, Stack } from "expo-router";
import { SafeAreaView, Text } from "react-native";

function AppPage() {
  return (
    <SafeAreaView>
      <Text className="text-lg">Ola</Text>
      <Link href="/sign-in">Teste</Link>
    </SafeAreaView>
  );
}

export default AppPage;
