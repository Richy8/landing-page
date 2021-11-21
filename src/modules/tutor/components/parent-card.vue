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
    <img :src="loadAsset(parent_image, 'tutor')" alt="" />

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
      v-if="!show_overlay"
    ></div>
  </div>
</template>

<script>
export default {
  name: "parentCard",

  props: {
    parent_image: String,

    active: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      show_overlay: this.active,
    };
  },

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

  @include breakpoint-down(xl) {
    width: toRem(220);
    height: toRem(290);
  }

  @include breakpoint-down(lg) {
    width: toRem(180);
    height: toRem(250);
  }

  @include breakpoint-custom-down(840) {
    width: toRem(160);
    height: toRem(230);
  }

  @include breakpoint-down(md) {
    width: toRem(160);
    height: toRem(160);
  }

  @include breakpoint-down(sm) {
    width: toRem(120);
    height: toRem(120);
    border-radius: toRem(18);
  }

  @include breakpoint-down(xs) {
    width: toRem(80);
    height: toRem(80);
  }

  img {
    @include background-cover;

    @include breakpoint-down(md) {
      background-position: start center;
    }
  }

  .video-btn {
    @include flex-row-center-nowrap;
    padding: toRem(8) toRem(14);
    position: absolute;
    width: max-content;
    bottom: toRem(20);
    left: toRem(20);

    @include breakpoint-custom-down(840) {
      left: toRem(15);
      bottom: toRem(15);
      padding: toRem(7) toRem(12);
    }

    @include breakpoint-down(sm) {
      padding: 0 !important;
      height: toRem(20);
      @include center-placement;
      //   background-color: transparent !important;
    }

    &:hover {
      transform: scale(0.98);
    }

    .icon {
      margin-right: toRem(10);
      font-size: toRem(20);

      @include breakpoint-down(sm) {
        font-size: toRem(28);
        margin-right: 0;
      }
    }

    .text {
      @include font-height(14, 19);

      @include breakpoint-custom-down(840) {
        @include font-height(12, 18);
      }

      @include breakpoint-down(sm) {
        display: none;
      }
    }
  }

  .card-overlay {
    background: linear-gradient(
      0deg,
      rgba($black-text, 0.25),
      rgba($black-text, 0.25)
    );
  }
}
</style>
