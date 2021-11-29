<template>
  <div class="parent-section position-relative">
    <div class="gradely-container px-2 px-sm-3 mx-auto position-relative">
      <!-- TITLE TEXT -->
      <div class="title-text brand-navy font-weight-700">
        What our Parents Say…
      </div>

      <div class="parent-bottom">
        <!-- TESTIMONIAL SECTION -->
        <div class="testimonial-section position-relative">
          <img
            :src="loadAsset('Quotation.png', 'tutor')"
            alt=""
            class="quotation"
          />

          <div class="text color-ash">
            This is the testimonial excerpt from the parent testimonial video to
            the right. It circles round each highlighted parent.
          </div>

          <div class="title-text font-weight-700 brand-navy w-100">
            Oluyemisi Ademiju
          </div>

          <div class="description-text color-grey-dark">
            Mum to Tinuke, JSS 2 Student
          </div>
        </div>

        <!-- VIDEO SECTION -->
        <div class="video-section position-relative">
          <img
            v-lazy="loadAsset('blue-shade-circle.png', 'tutor')"
            alt=""
            class="blue-shade"
          />

          <parent-card parent_image="ParentOne.png" active />
          <parent-card parent_image="ParentTwo.png" :active="false" />
          <parent-card parent_image="ParentThree.png" :active="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import parentCard from "@/modules/tutor/components/parent-card";

export default {
  name: "parentSection",

  components: {
    parentCard,
  },

  data() {
    return {
      parent_info: [
        {
          name: "Mr. Emmanuel Kalu",
          designation: "Parent (Home Schooling)",
          testimony:
            "In the very first few days that they interacted with their online tutor, you could see the relief and sheer enthusiasm they had, wanting to log on to their classes. Even when I’m not present with them, they’re always so happy to go on their classes. That has, and will always be a big plus for their mom and I.",
          link: "https://youtu.be/EWftcHly-HQ",
        },

        {
          name: "Maida",
          designation: "7 Year Old Student",
          testimony:
            "With other online learning platforms, they don’t ask for what you need help with, or don’t know. They just start from addition, to subtraction, and then multiplication, without bothering to know if you understand. Gradely helped to change that and that’s why my favorite subject is now Math!",
          link: "https://youtu.be/z-ENEtnMXX8",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.parent-section {
  margin: toRem(85) 0 toRem(75);

  .title-text {
    @include font-height(38, 53);
    margin-bottom: toRem(10);
    width: 25%;

    @include breakpoint-down(xl) {
      width: 28%;
    }

    @include breakpoint-down(lg) {
      @include font-height(34, 48);
      width: 32%;
    }

    @include breakpoint-down(md) {
      @include font-height(30, 45);
      width: 50%;
    }

    @include breakpoint-down(xs) {
      @include font-height(27, 40);
      width: 70%;
    }
  }

  .parent-bottom {
    @include flex-row-between-wrap;
    align-items: flex-start;

    .testimonial-section {
      padding-top: toRem(40);
      width: 22%;

      @include breakpoint-down(lg) {
        padding-top: toRem(35);
      }

      @include breakpoint-down(md) {
        width: 100%;
        order: 2;
      }

      .quotation {
        @include rectangle-shape(32, 28);
        margin-bottom: toRem(10);

        @include breakpoint-down(lg) {
          @include rectangle-shape(28, 25);
        }

        @include breakpoint-down(xs) {
          @include rectangle-shape(24, 21);
        }
      }

      .text {
        @include font-height(15, 30);
        margin-bottom: toRem(30);

        @include breakpoint-down(lg) {
          @include font-height(14, 28);
        }
      }

      .title-text {
        @include font-height(14.5, 19);
        margin-bottom: toRem(5);

        @include breakpoint-down(xs) {
          @include font-height(13.75, 19);
        }
      }

      .description-text {
        @include font-height(13, 18);

        @include breakpoint-down(xs) {
          @include font-height(12.75, 17);
        }
      }
    }

    .video-section {
      @include flex-row-end-wrap;
      align-items: flex-start;
      width: 73%;

      @include breakpoint-down(md) {
        @include flex-row-start-wrap;
        margin-top: toRem(30);
        width: 100%;
        order: 1;
      }

      .blue-shade {
        position: absolute;
        top: toRem(-150);
        left: toRem(-260);
      }
    }
  }
}
</style>
