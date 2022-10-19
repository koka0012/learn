import { RouteProp, useFocusEffect } from "@react-navigation/native";
import { Stack } from "expo-router";
import { memo } from "react";
import { SafeAreaView, Text, View } from "react-native";

function Details({
  route,
}: {
  route: RouteProp<{ Details: { id: string } }, "Details">;
}) {
  return (
    <>
      <SafeAreaView>
        <Text>{route.params.id}</Text>
      </SafeAreaView>
    </>
  );
}

export default memo(Details);
