<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <!-- SNACK TOAST BAR  -->
    <toast-snack-bar
      v-if="show_alert"
      :message="alert.message"
      :type="alert.type"
      @closeAlert="toggleAlert"
    />

    <!-- GRADELY PORTAL TARGET -->
    <portal-target name="gradely-modals"> </portal-target>
  </div>
</template>

<script>
import toastSnackBar from "@/shared/components/global-comps/toast-snack-bar";

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

  components: {
    toastSnackBar,
  },

  data: () => ({
    alert: {
      message: "Alert message here...",
      type: "success",
    },

    show_alert: false,
  }),

  created() {
    // RESPONSE ALERT EVENT
    this.$bus.$on("show_response_alert", (data) => this.toggleAlert(data));
  },

  methods: {
    toggleAlert(data = {}) {
      Object.keys(data).length ? (this.alert = data) : null;
      this.show_alert = !this.show_alert;
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
