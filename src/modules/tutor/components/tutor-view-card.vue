<template>
  <div class="tutor-view-card">
    <div class="tutor-display rounded-20 overflow-hidden">
      <tutor-wavy-bg :card_color="card_color" />

      <!-- LIVE ALERT -->
      <div class="live-alert-card rounded-15">
        <div class="live-alert rounded-circle mgr-5"></div>
        <div class="live-text color-text font-weight-700">LIVE</div>
      </div>

      <!-- TUTOR IMAGE -->
      <img :src="loadAsset('damola.png', 'tutor')" alt="" class="tutor-img" />
    </div>

    <!-- TOP TEXT -->
    <div class="top-text color-grey-dark">
      JOIN: <span class="color-text font-weight-700">Oyindamola Ajewole</span>
    </div>

    <!-- MID TEXT -->
    <div class="mid-text brand-navy font-weight-700">Simple Present Tense</div>

    <!-- BOTTOM TEXT -->
    <div class="bottom-text color-grey-dark">
      <span class="date-time">Tue, Nov 16, 11:00 AM</span>
      <span class="dot"></span>
      <span class="class-name">Primary 2</span>
      <span class="dot"></span>
      <span class="status brand-tonic font-weight-700">FREE</span>
    </div>
  </div>
</template>

<script>
import tutorWavyBg from "@/modules/tutor/components/tutor-wavy-bg";

export default {
  name: "tuTorViewCard",

  components: {
    tutorWavyBg,
  },

  props: {
    card_color: {
      type: String,
    },

    tutor: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.tutor-view-card {
  margin-right: toRem(14);

  .tutor-display {
    margin-bottom: toRem(10);
    height: toRem(170);
    position: relative;
    width: toRem(285);

    .live-alert-card {
      background: rgba(255, 255, 255, 0.5);
      @include flex-row-center-nowrap;
      padding: toRem(6) toRem(12);
      width: max-content;
      position: absolute;
      bottom: toRem(15);
      left: toRem(10);
      z-index: 9;

      .live-alert {
        border: toRem(3) solid $brand-tonic;
        @include square-shape(10.25);
      }

      .live-text {
        @include font-height(10.25, 13);
        letter-spacing: 0.02em;
      }
    }

    .tutor-img {
      @include center-x;
      z-index: 1;
      bottom: 0;
    }
  }

  .top-text {
    @include font-height(12.75, 18);
    margin-bottom: toRem(5);
  }

  .mid-text {
    @include font-height(15, 22);
    margin-bottom: toRem(8);
  }

  .bottom-text {
    @include font-height(12.75, 18);
  }

  .dot {
    background: $border-grey;
    @include square-shape(6);
    display: inline-block;
    margin: 0 toRem(8);
    position: relative;
    border-radius: 50%;
    top: toRem(-2);
  }
}
</style>
