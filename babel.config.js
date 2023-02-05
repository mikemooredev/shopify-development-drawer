const presets = [];
const plugins = [
  [
    "@babel/plugin-transform-react-jsx",
    { runtime: "automatic", importSource: "/src/core" },
  ]
];

module.exports = {
  presets,
  plugins,
};
