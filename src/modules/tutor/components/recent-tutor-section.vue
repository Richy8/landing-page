<template>
  <div class="recent-tutor-section position-relative">
    <div class="gradely-container px-2 px-sm-3 mx-auto position-relative">
      <!-- STAR DECOR  -->
      <img
        :src="loadAsset('StarDecore.png', 'tutor')"
        alt="gradely-star-decore"
        class="star-decore"
      />

      <!-- META TEXT -->
      <div
        class="meta-text brand-tonic font-weight-700 position-relative index-1"
      >
        HAPPENING THIS WEEK
      </div>

      <!-- TITLE TEXT -->
      <div
        class="title-text brand-navy font-weight-700 position-relative index-1"
      >
        Live Group Sessions
      </div>

      <!-- TUTOR DISPLAY ROW -->
      <div class="tutor-display-row">
        <tutor-view-card card_color="#FCEACF" />
        <tutor-view-card card_color="#DBF5F8" />
        <tutor-view-card card_color="#FFDCDE" />
        <tutor-view-card card_color="#FDE1B5" />
      </div>
    </div>
  </div>
</template>

<script>
import tutorViewCard from "@/modules/tutor/components/tutor-view-card";

export default {
  name: "recentTutorSection",

  components: {
    tutorViewCard,
  },
};
</script>

<style lang="scss" scoped>
.recent-tutor-section {
  margin: toRem(90) 0;

  .gradely-container {
    .meta-text {
      @include font-height(14, 19);
      margin-bottom: toRem(2);
      letter-spacing: 0.02em;
    }

    .title-text {
      @include font-height(35, 55);
      margin-bottom: toRem(30);
    }

    .tutor-display-row {
      @include flex-row-start-nowrap;
    }

    .star-decore {
      position: absolute;
      left: toRem(-50);
      top: toRem(20);
    }
  }
}
</style>
