module.exports = {
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
  // Add '.mjs' extension for make-plural package. Did not work.
  // See: https://github.com/eemeli/make-plural/issues/15#issuecomment-672116286
  //resolver: {
  //  sourceExts: ['js', 'ts', 'tsx', 'mjs'],
  //},
};
