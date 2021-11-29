<template>
  <div class="tutor-brochure-card rounded-20">
    <!-- SPIRALS -->
    <img v-lazy="loadAsset('Spirals.svg', 'tutor')" alt="" class="spirals-bg" />

    <!-- BROCHURE ICON -->
    <img
      :src="loadAsset('BrochureImg.png', 'tutor')"
      alt=""
      class="brochure-img index-1"
    />

    <div class="title-text white-text font-weight-700 text-center">
      Download the brochure
    </div>

    <div class="description-text white-text text-center">
      Take a look at our unified curriculum. Built to suite whichever
      examination you are preparing for.
    </div>

    <a
      :href="loadAsset('tutoring.pdf', 'tutor')"
      download
      class="btn btn-whitish"
    >
      Download Broachure <span class="icon-download gfont-16 mgl-10"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: "tutorProchureCard",
};
</script>

<style lang="scss" scoped>
.tutor-brochure-card {
  padding: toRem(50) toRem(30);
  @include flex-column-center;
  background: #004680;
  height: toRem(470);
  position: relative;
  overflow: hidden;
  width: 32%;

  @include breakpoint-down(lg) {
    padding: toRem(50) toRem(15);
  }

  @include breakpoint-down(md) {
    width: 100%;
  }

  .spirals-bg {
    position: absolute;
    height: auto;
    width: 100%;
    left: 0;
    top: 0;
  }

  .brochure-img {
    margin-bottom: toRem(20);
  }

  .title-text {
    @include font-height(18, 28);
    margin-bottom: toRem(10);

    @include breakpoint-down(lg) {
      @include font-height(16, 25);
    }
  }

  .description-text {
    @include font-height(13.75, 24);
    margin-bottom: toRem(30);

    @include breakpoint-down(lg) {
      @include font-height(12.75, 21);
    }
  }
}
</style>
