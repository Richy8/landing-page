<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <!-- GRADELY PORTAL TARGET -->
    <portal-target name="gradely-modals"> </portal-target>
  </div>
</template>

<script>
export default {
  name: "App",

  metaInfo: {
    title: "Personalised learning platform",
    titleTemplate: "%s - Gradely.Ng",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
};
</script>

<style lang="scss">
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.225s ease;
}
.fade-leave-active {
  transition: opacity 0.225s ease;
  opacity: 0;
}
</style>
