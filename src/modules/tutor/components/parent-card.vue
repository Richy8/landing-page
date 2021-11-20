<template>
  <div
    class="
      parent-card
      position-relative
      rounded-15
      overflow-hidden
      pointer
      smooth-transition
    "
    @click="toggleOverlay"
  >
    <img :src="loadAsset('ParentOne.png', 'tutor')" alt="" />

    <!-- VIDEO BUTTON -->
    <div class="video-btn rounded-30 white-text-bg smooth-transition pointer">
      <div class="icon icon-play-bg brand-accent"></div>
      <div class="text color-text">Watch Video</div>
    </div>

    <!-- CARD OVERLAY -->
    <div
      class="
        card-overlay
        index-1
        position-absolute
        w-100
        h-100
        smooth-transition
      "
      v-if="show_overlay"
    ></div>
  </div>
</template>

<script>
export default {
  name: "parentCard",

  data: () => ({
    show_overlay: true,
  }),

  methods: {
    toggleOverlay() {
      this.show_overlay = !this.show_overlay;
    },
  },
};
</script>

<style lang="scss" scoped>
.parent-card {
  margin-left: toRem(15);
  width: toRem(238);
  height: toRem(310);

  img {
    @include background-cover;
  }

  .video-btn {
    @include flex-row-center-nowrap;
    padding: toRem(8) toRem(14);
    position: absolute;
    width: max-content;
    bottom: toRem(20);
    left: toRem(20);

    &:hover {
      transform: scale(0.98);
    }

    .icon {
      margin-right: toRem(10);
      font-size: toRem(20);
    }

    .text {
      @include font-height(14, 19);
    }
  }

  .card-overlay {
    background: linear-gradient(
      0deg,
      rgba($black-text, 0.75),
      rgba($black-text, 0.75)
    );
  }
}
</style>
