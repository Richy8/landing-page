<template>
  <div class="tutor-plans-section position-relative">
    <!-- PINK SHADE -->
    <img
      v-lazy="loadAsset('pink-shade.png', 'tutor')"
      alt=""
      class="pink-shade"
    />

    <div class="gradely-container px-2 px-sm-3 mx-auto position-relative">
      <!-- TITLE TEXT -->
      <div class="title-text brand-navy font-weight-700 text-center">
        Our Plans
      </div>

      <!-- PLAN ROW -->
      <div class="plan-row position-relative">
        <tutor-plan-card />
        <tutor-plan-card />

        <tutor-brochure-card />

        <!-- SPIRALS -->
        <div class="spiral left-spiral rotate-180">
          <tutor-spirals color="#11BDCF" />
        </div>

        <div class="spiral right-spiral">
          <tutor-spirals color="#F7A43F" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tutorPlanCard from "@/modules/tutor/components/tutor-plan-card";
import tutorBrochureCard from "@/modules/tutor/components/tutor-brochure-card";
import tutorSpirals from "@/modules/tutor/components/tutor-spirals";

export default {
  name: "tutorPlansSection",

  components: {
    tutorPlanCard,
    tutorBrochureCard,
    tutorSpirals,
  },
};
</script>

<style lang="scss" scoped>
.tutor-plans-section {
  margin: toRem(100) 0 toRem(90);

  .pink-shade {
    position: absolute;
    right: 0;
    top: toRem(-300);
  }

  .title-text {
    @include font-height(36, 60);
    margin-bottom: toRem(47);
  }

  .plan-row {
    @include flex-row-between-wrap;
  }

  .spiral {
    position: absolute;
    z-index: -1;
    bottom: 0;
  }

  .left-spiral {
    left: toRem(-68);
  }

  .right-spiral {
    right: toRem(-66);
  }
}
</style>
