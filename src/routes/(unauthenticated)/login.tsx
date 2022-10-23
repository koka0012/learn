import { Helmet, HeroImage, Title } from "@components/atoms";
import supabase from "@libs/supabase";
import { useEffect } from "react";
import { Text, View } from "react-native";

function LoginPage() {
  return (
    <Helmet headerShown={false}>
      <HeroImage source={require("@assets/images/login_banner.png")} />
      <Title>Test</Title>
      <View className="bg-red-500">
        <Text className="text-red-900">Si Mazzard</Text>
      </View>
    </Helmet>
  );
}

export default LoginPage;
