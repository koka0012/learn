import { Link, Stack } from "expo-router";
import { SafeAreaView, Text } from "react-native";

function IndexPage() {
  return (
    <SafeAreaView>
      <Text className="text-lg">Ola</Text>
      <Link href="/details/1">Augusto</Link>
    </SafeAreaView>
  );
}

export default IndexPage;
