<template>
  <div class="lander-base-layout">
    <!-- NAV TOP BAR SECTION -->
    <nav-top-bar />

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <!-- FOOTER BASE -->
    <footer-base />
  </div>
</template>

<script>
import navTopBar from "@/shared/components/nav-footer-comps/nav-top-bar";
import footerBase from "@/shared/components/nav-footer-comps/footer-base";

export default {
  name: "landerBaseLayout",

  components: {
    navTopBar,
    footerBase,
  },
};
</script>

<style lang="scss" scoped>
.lander-base-layout {
}
</style>
