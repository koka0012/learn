const nativewind = require("nativewind/babel");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "nativewind/babel"],
    plugins: [
      "transform-inline-environment-variables",
      require.resolve("expo-router/babel"),
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./assets",
            "@components": "./src/components",
            "@atoms": "./src/components/atoms",
            "@molecules": "./src/components/molecules",
            "@organisms": "./src/components/organisms",
            "@libs": "./src/libs",
            "@i18n": "./src/libs/i18n",
            "@helpers": "./src/helpers",
            "@hooks": "./src/hooks",
            "@recoil": "./src/recoil",
          },
        },
      ],
    ],
  };
};
