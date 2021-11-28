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
      <div class="wrapper position-relative">
        <div
          class="tutor-display-row position-relative w-100 smooth-transition"
          ref="tutorRow"
        >
          <tutor-view-card
            v-for="(tutor, index) in tutors_from_api"
            :key="index"
            :tutor="tutor"
            :card_color="tutor.background"
          />
        </div>

        <!-- NAVIGATION -->
        <div class="nav left-nav" @click="scrollTutors(-150)">
          <div class="wrapper position-relative w-100 h-100">
            <div class="icon icon-caret-left"></div>
          </div>
        </div>

        <div class="nav right-nav" @click="scrollTutors(+150)">
          <div class="wrapper position-relative w-100 h-100">
            <div class="icon icon-caret-right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tutorViewCard from "@/modules/tutor/components/tutor-view-card";
import { mapActions } from "vuex";

export default {
  name: "recentTutorSection",
  mounted() {
    this.fetchAllLiveTutors();
  },

  components: {
    tutorViewCard,
  },

  data: () => ({
    tutors: [
      {
        name: "Oyindamola Ajewole",
        topic: "Simple Present Tense",
        date: "Tue, Nov 16, 11:00 AM",
        class: "Primary 2",
        status: "FREE",
        image: "damola.png",
        background: "#FCEACF",
      },
      {
        name: "Rachel Abaire",
        topic: "Parts of Speech",
        date: "Thur, Nov 18, 5:00 PM ",
        class: "Primary 3",
        status: "FREE",
        image: "racheal.png",
        background: "#DBF5F8",
      },
      {
        name: "Adebowale Yekini",
        topic: "Vowel Sounds /i:/ and /i/",
        date: "Tue, Nov 16, 1:00 PM ",
        class: "JSS 1",
        status: "FREE",
        image: "ade.png",
        background: "#FFDCDE",
      },
      {
        name: "Ezekiel Arinola",
        topic: "Algebraic Manipulation",
        date: "Tue, Nov 16, 11:00 AM",
        class: "Jss 2",
        status: "FREE",
        image: "ezekiel.png",
        background: "#FDE1B5",
      },
    ],
    tutors_from_api: [],
    tutors_bg: ["#FCEACF", "#DBF5F8", "#FFDCDE", "#FDE1B5"],
    limit: 4,
  }),

  methods: {
    ...mapActions({ getLiveTutors: "dbTutor/getLiveTutors" }),

    fetchAllLiveTutors() {
      this.getLiveTutors(this.limit)
        .then((response) => {
          if (response.code == 200) {
            let counter = 0;
            for (let tutor of response.data) {
              tutor.background = this.tutors_bg[counter];
              counter++;
            }
            this.tutors_from_api = response.data;
          }
        })
        .catch((error) => console.log(error));
    },
    scrollTutors(scroll_value) {
      let tutor_row = this.$refs.tutorRow;
      tutor_row.scrollLeft += scroll_value;
      tutor_row.scrollBehaviour = "smooth";
    },
  },
};
</script>

<style lang="scss" scoped>
.recent-tutor-section {
  margin: toRem(90) 0;

  @include breakpoint-down(lg) {
    margin: toRem(120) 0 toRem(90);
  }

  @include breakpoint-down(md) {
    margin: toRem(370) 0 toRem(20);
  }

  .gradely-container {
    .meta-text {
      @include font-height(14, 19);
      margin-bottom: toRem(2);
      letter-spacing: 0.02em;

      @include breakpoint-down(lg) {
        @include font-height(13, 18);
      }

      @include breakpoint-down(sm) {
        @include font-height(11.75, 17);
      }
    }

    .title-text {
      @include font-height(35, 55);
      margin-bottom: toRem(30);

      @include breakpoint-down(lg) {
        @include font-height(30, 48);
      }

      @include breakpoint-down(md) {
        @include font-height(26, 44);
      }

      @include breakpoint-down(sm) {
        @include font-height(24, 36);
      }

      @include breakpoint-down(xs) {
        @include font-height(22, 30);
      }
    }

    .tutor-display-row {
      @include flex-row-start-nowrap;
      align-items: flex-start;
      padding-bottom: toRem(30);
      overflow: auto;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .nav {
      background: $color-white;
      @include transition(0.4s);
      @include square-shape(33);
      margin-top: toRem(-35);
      border-radius: 50%;
      @include center-y;
      cursor: pointer;
      z-index: 9;

      &:hover {
        background: rgba($color-white, 0.25);
      }

      .icon {
        @include center-placement;
        font-size: toRem(12);
        color: $brand-navy;

        @include breakpoint-down(md) {
          font-size: toRem(15);
        }
      }
    }

    .left-nav {
      left: 0;
    }

    .right-nav {
      right: 0;
    }

    .star-decore {
      position: absolute;
      left: toRem(-50);
      top: toRem(20);
    }
  }
}
</style>
