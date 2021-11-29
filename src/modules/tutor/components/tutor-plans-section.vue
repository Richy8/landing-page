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
        <tutor-plan-card
          v-for="(plan, index) in plan_data"
          :key="index"
          :plan="plan"
        />

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

  data: () => ({
    plan_data: [
      {
        title: "1-on-1 Tutoring ",
        value: "₦2,500",
        description:
          "Private lessons focused on your child’s specific needs and goals.",
        highlights: [
          "Rewatch class recordings",
          "4,000+ Assessment per Class & Weekly Reports",
          "Illustrative Video Lessons comes with each Monthly Plan",
        ],
        type: "single",
      },

      {
        title: "Small Group Tutoring",
        value: "₦1,000",
        description:
          "Group lessons tailored to each child’s specific learning needs and goals",
        highlights: [
          "Small classes of 3-5 students ",
          "Individualized Learning Path",
          "Weekly improvement reports",
        ],
        type: "group",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.tutor-plans-section {
  margin: toRem(100) 0 toRem(90);

  @include breakpoint-down(xs) {
    margin: toRem(40) 0 toRem(50);
  }

  .pink-shade {
    position: absolute;
    right: 0;
    top: toRem(-300);
  }

  .title-text {
    @include font-height(36, 60);
    margin-bottom: toRem(47);

    @include breakpoint-down(lg) {
      @include font-height(34, 56);
    }

    @include breakpoint-down(md) {
      @include font-height(30, 48);
      margin-bottom: toRem(40);
    }

    @include breakpoint-down(xs) {
      @include font-height(24, 36);
      margin-bottom: toRem(36);
    }
  }

  .plan-row {
    @include flex-row-between-wrap;
  }

  .spiral {
    position: absolute;
    z-index: -1;
    bottom: 0;

    @include breakpoint-down(xl) {
      display: none;
    }
  }

  .left-spiral {
    left: toRem(-68);
  }

  .right-spiral {
    right: toRem(-66);
  }
}
</style>
