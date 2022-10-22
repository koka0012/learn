import { Helmet, HeroImage, Title } from "@components/atoms";
import supabase from "@libs/supabase";
import { useEffect } from "react";
import { Text, View } from "react-native";

function LoginPage() {
<<<<<<< HEAD
  return (
    <Helmet headerShown={false}>
      <HeroImage source={require("@assets/images/login_banner.png")} />
      <Title>Test</Title>
      <View className="bg-red-500">
        <Text className="text-red-900">Si Mazzard</Text>
=======
  useEffect(() => {
    (async () => {
      const { error } = await supabase.auth.signInWithPassword({
        email: "augustocezarchmieleski@gmail.com",
        password: "123456",
      });

      console.error(error);
    })();
  });

  return (
    <Helmet headerShown={false}>
      <HeroImage source={require("@assets/images/login_banner.png")} />
      <Text className="font-[arial]">No Mazzard</Text>
      <View className="bg-red-500">
        <Text className="text-3xl font-[MazzardM-Bold]">Si Mazzard</Text>
>>>>>>> d71395156d38d8e407c6e2e6375d1e3d643def99
      </View>
    </Helmet>
  );
}

export default LoginPage;
