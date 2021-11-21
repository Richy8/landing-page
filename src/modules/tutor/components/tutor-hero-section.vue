<template>
  <div class="tutor-hero-section position-relative w-100 h-auto">
    <!-- HERO DECORE -->
    <svg
      class="hero-decore"
      viewBox="0 0 732 695"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.9384 178.806C-18.6053 108.002 5.62855 -35.9384 22.9384 -99.0582L721.674 -203L788 76.408L748.41 694.913C667.516 695.942 487.117 688.224 412.667 649.117C319.605 600.234 361.766 521.505 284.643 480.34C207.52 439.175 251.737 330.602 225.001 289.437C198.265 248.272 74.868 267.311 22.9384 178.806Z"
        fill="#FCEACF"
      />
    </svg>

    <!-- CONTENT  -->
    <div class="gradely-container px-2 px-sm-3 mx-auto">
      <!-- TEXT CONTENT -->
      <div class="text-content">
        <!-- TITLE TEXT -->
        <div class="title-text brand-navy font-weight-700">
          A+ Online Tutoring for Your Child's Needs
        </div>

        <!-- STROKE -->
        <img
          :src="loadAsset('TutorStroke.png', 'tutor')"
          alt="gradely-tutor"
          class="gradely-tutor-stroke"
        />

        <!-- DESCRIPTION TEXT -->
        <div class="description-text color-ash">
          Private or group lessons for your child's exam preparation, homework
          help, and homeschooling needs.
        </div>

        <!-- HIGHLIGHT TEXT -->
        <div class="highlight-text brand-tonic font-weight-700">
          ANY SUBJECT, ANYTIME
        </div>

        <!-- BOOK SESSION CTA -->
        <button class="btn btn-accent left-btn" @click="toggleOneOnOneModal">
          Book a Free 1-on-1 Session
        </button>
      </div>

      <!-- IMAGE CONTENT -->
      <div class="image-content">
        <!-- SCREEN -->
        <img
          :src="loadAsset('TutorHeroScreen.png', 'tutor')"
          alt=""
          class="tutor-screen"
        />

        <!-- LIVE SCREEN -->
        <img
          :src="loadAsset('TutorHeroLive.png', 'tutor')"
          alt=""
          class="tutor-live index-1"
        />

        <!-- CHAT CARD -->
        <img
          :src="loadAsset('TutorHeroChat.png', 'tutor')"
          alt=""
          class="tutor-chat"
        />

        <!-- BOOK SESSION CTA -->
        <button class="btn btn-accent right-btn" @click="toggleOneOnOneModal">
          Book a Free 1-on-1 Session
        </button>
      </div>
    </div>

    <!-- MODALS -->
    <portal to="gradely-modals">
      <transition name="fade" v-if="show_one_on_one_modal">
        <one-on-one-modal @closeTriggered="toggleOneOnOneModal" />
      </transition>

      <transition name="fade" v-if="show_auth_modal">
        <tutor-auth-modal @closeTriggered="toggleAuthModal" />
      </transition>
    </portal>
  </div>
</template>

<script>
import oneOnOneModal from "@/modules/tutor/modals/one-on-one-modal";
import tutorAuthModal from "@/modules/tutor/modals/tutor-auth-modal";

export default {
  name: "tutorHeroSection",

  components: {
    oneOnOneModal,
    tutorAuthModal,
  },

  data: () => ({
    show_one_on_one_modal: false,
    show_auth_modal: true,
  }),

  methods: {
    toggleOneOnOneModal() {
      this.show_one_on_one_modal = !this.show_one_on_one_modal;
    },

    toggleAuthModal() {
      this.show_auth_modal = !this.show_auth_modal;
    },
  },
};
</script>

<style lang="scss" scoped>
.tutor-hero-section {
  height: 100vh;

  .hero-decore {
    position: absolute;
    height: toRem(695);
    width: toRem(732);
    right: 0;
    top: 0;

    @include breakpoint-down(sm) {
      height: toRem(775);
      top: toRem(-170);
    }

    @include breakpoint-down(xs) {
      width: toRem(450);
    }
  }

  .gradely-container {
    @include flex-row-between-wrap;
    align-items: flex-start;
    padding-top: toRem(160);
    position: relative;
    height: 100vh;

    @include breakpoint-down(md) {
      padding-top: toRem(130);
    }

    @include breakpoint-down(xs) {
      padding-top: toRem(110);
    }

    @include breakpoint-custom-down(360) {
      padding-top: toRem(9 0);
    }

    .text-content {
      position: relative;
      width: 40%;

      @include breakpoint-down(xl) {
        width: 45%;
      }

      @include breakpoint-down(lg) {
        width: 43%;
      }

      @include breakpoint-down(md) {
        @include flex-column-center;
        justify-content: flex-start;
        width: 100%;
      }

      .title-text {
        @include font-height(49, 68);
        margin-bottom: toRem(12);
        letter-spacing: -0.04em;

        @include breakpoint-down(xl) {
          @include font-height(48, 65);
        }

        @include breakpoint-down(lg) {
          @include font-height(43, 60);
        }

        @include breakpoint-custom-down(860) {
          @include font-height(38, 58);
        }

        @include breakpoint-down(md) {
          text-align: center;
          width: 90%;
        }

        @include breakpoint-down(sm) {
          @include font-height(35, 56);
          width: 80%;
        }

        @include breakpoint-down(xs) {
          @include font-height(28, 48);
          margin-bottom: toRem(8);
          width: 80%;
        }

        @include breakpoint-custom-down(360) {
          @include font-height(23, 40);
          width: 75%;
        }
      }

      .gradely-tutor-stroke {
        position: absolute;
        top: toRem(60);
        left: 0;

        @include breakpoint-down(lg) {
          top: toRem(53);
        }

        @include breakpoint-custom-down(860) {
          top: toRem(48);
        }

        @include breakpoint-down(md) {
          left: toRem(80);
        }

        @include breakpoint-down(xs) {
          top: toRem(41);
          left: toRem(30);
          width: 80%;
        }

        @include breakpoint-custom-down(360) {
          @include font-height(38, 58);
          top: toRem(34);
        }
      }

      .description-text {
        @include font-height(14.75, 25);
        margin-bottom: toRem(20);

        @include breakpoint-down(lg) {
          @include font-height(14, 22);
        }

        @include breakpoint-custom-down(860) {
          @include font-height(13.75, 21);
        }

        @include breakpoint-down(md) {
          text-align: center;
          width: 60%;
        }

        @include breakpoint-down(sm) {
          width: 75%;
        }

        @include breakpoint-down(xs) {
          @include font-height(13.25, 21);
          width: 80%;
        }

        @include breakpoint-custom-down(360) {
          @include font-height(12.5, 19);
          width: 90%;
        }
      }

      .highlight-text {
        @include font-height(12.5, 18);
        margin-bottom: toRem(40);
        letter-spacing: 0.02em;

        @include breakpoint-down(lg) {
          @include font-height(12, 17);
        }

        @include breakpoint-custom-down(860) {
          margin-bottom: toRem(30);
        }

        @include breakpoint-down(xs) {
          @include font-height(11.5, 16);
        }
      }

      .btn {
        padding: toRem(14) toRem(38);

        @include breakpoint-custom-down(860) {
          padding: toRem(14) toRem(33);
        }
      }

      .left-btn {
        @include breakpoint-down(md) {
          display: none;
        }
      }
    }

    .image-content {
      position: relative;
      width: 56%;

      @include breakpoint-down(xl) {
        width: 55%;
      }

      @include breakpoint-down(md) {
        width: 100%;
        @include flex-column-center;
        margin-top: toRem(-90);
      }

      @include breakpoint-down(sm) {
        margin-top: toRem(-110);
      }

      @include breakpoint-down(xs) {
        margin-top: toRem(-120);
      }

      @include breakpoint-custom-down(360) {
        margin-top: toRem(-140);
      }

      .tutor-screen {
        position: absolute;
        right: toRem(-10);
        top: toRem(-25);

        @include breakpoint-down(xl) {
          width: 90%;
        }

        @include breakpoint-down(lg) {
          width: 92%;
          right: 0;
        }

        @include breakpoint-custom-down(860) {
          width: 98%;
        }

        @include breakpoint-down(md) {
          width: 85%;
        }

        @include breakpoint-custom-down(360) {
          width: 90%;
        }
      }

      .tutor-live {
        position: absolute;
        top: toRem(175);
        left: toRem(-80);
        width: 60%;

        @include breakpoint-down(xl) {
          width: 54%;
          left: toRem(-25);
        }

        @include breakpoint-down(lg) {
          width: 58%;
          top: toRem(150);
          left: toRem(-38);
        }

        @include breakpoint-custom-down(860) {
          top: toRem(140);
          left: toRem(-48);
          width: 63%;
        }

        @include breakpoint-down(md) {
          left: toRem(-38);
          width: 55%;
        }

        @include breakpoint-down(sm) {
          top: toRem(110);
          left: toRem(-10);
          width: 54%;
        }

        @include breakpoint-down(xs) {
          top: toRem(80);
          left: toRem(-25);
          width: 58%;
        }

        @include breakpoint-custom-down(360) {
          top: toRem(50);
          left: toRem(-38);
          width: 62%;
        }
      }

      .tutor-chat {
        position: absolute;
        top: toRem(320);
        right: toRem(30);

        @include breakpoint-down(xl) {
          top: toRem(275);
          right: toRem(50);
          width: 50%;
        }

        @include breakpoint-down(lg) {
          top: toRem(255);
          width: 54%;
        }

        @include breakpoint-custom-down(860) {
          top: toRem(225);
          right: toRem(20);
          width: 58%;
        }

        @include breakpoint-down(md) {
          top: toRem(298);
          right: toRem(55);
          width: 50%;
        }

        @include breakpoint-down(sm) {
          top: toRem(235);
          right: toRem(55);
          width: 50%;
        }

        @include breakpoint-down(xs) {
          top: toRem(175);
          right: toRem(30);
          width: 57%;
        }

        @include breakpoint-custom-down(360) {
          top: toRem(150);
          width: 58%;
        }
      }

      .right-btn {
        display: none;

        @include breakpoint-down(md) {
          padding: toRem(14) toRem(33);
          display: unset;
          top: toRem(450);
        }

        @include breakpoint-down(sm) {
          top: toRem(370);
        }

        @include breakpoint-down(xs) {
          top: toRem(295);
          font-size: toRem(10);
        }

        @include breakpoint-custom-down(360) {
          padding: toRem(12) toRem(28);
          top: toRem(250);
        }
      }
    }
  }
}
</style>
