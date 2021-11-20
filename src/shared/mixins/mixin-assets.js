const MixinAssets = {
  methods: {
    loadAsset(src, module = null) {
      if (module) return require(`@/modules/${module}/assets/static/${src}`);
      else return require(`@/shared/assets/static/${src}`);
    },
  },
};

export { MixinAssets };
