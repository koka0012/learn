// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const withNativeWind = require("nativewind/metro");

module.exports = withNativeWind(getDefaultConfig(__dirname));
