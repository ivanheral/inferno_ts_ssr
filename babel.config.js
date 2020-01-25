const presets = [
  [
    "@babel/env",
    {
      targets: {
        chrome: "72"
      },
      corejs: 3,
      useBuiltIns: "usage"
    }
  ]
];

module.exports = {
  presets
};
