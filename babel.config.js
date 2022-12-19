module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ["module-resolver",{
      "alias":{
        "@assets":"./src/assets",
        "@components": "./src/components",
        "@container": "./src/container",
        "@context": "./src/context",
        "@features": "./src/features",
        "@navigation": "./src/navigation",
        "@store": "./src/store",
        "@styles": "./src/styles",
        "@utils": "./src/utils"

      }
    }]
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
