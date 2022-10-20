import { memo } from "react";
import { Image, ImageSourcePropType, View } from "react-native";

export interface IHeroImageProps {
  source: ImageSourcePropType;
}

function HeroImage({ source }: IHeroImageProps) {
  return <Image source={source} resizeMode="contain" className="w-full" />;
}

export default memo(HeroImage);
