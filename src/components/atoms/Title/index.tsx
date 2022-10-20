import { memo } from "react";
import { Text, TextProps } from "react-native";

function Title(props: TextProps) {
  return <Text className="text-4xl" {...props} />;
}

export default memo(Title);
