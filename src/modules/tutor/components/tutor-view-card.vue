<template>
  <div
    class="tutor-view-card pointer smooth-transition"
    @click="toggleGroupModal"
  >
    <div class="tutor-display rounded-20 overflow-hidden">
      <tutor-wavy-bg :card_color="card_color" />

      <!-- LIVE ALERT -->
      <div class="live-alert-card rounded-15">
        <div class="live-alert rounded-circle mgr-5"></div>
        <div class="live-text color-text font-weight-700">LIVE</div>
      </div>

      <!-- TUTOR IMAGE -->
      <img :src="tutor.image" alt="" class="tutor-img" />
    </div>

    <!-- TOP TEXT -->
    <div class="top-text color-grey-dark">
      JOIN: <span class="color-text font-weight-700">{{ tutor.name }}</span>
    </div>

    <!-- MID TEXT -->
    <div class="mid-text brand-navy font-weight-700">{{ tutor.topic.topic }}</div>

    <!-- BOTTOM TEXT -->
    <div class="bottom-text color-grey-dark">
      <span class="date-time">{{ `${tutor.session_date}  ${tutor.session_time}` }}</span>
      <span class="dot"></span>
      <span class="class-name">{{ tutor.class.class_name }}</span>
      <span class="dot"></span>
      <span class="status brand-tonic font-weight-700 text-uppercase">{{
        tutor.status
      }}</span>
    </div>

    <!-- MODALS -->
    <portal to="gradely-modals">
      <transition name="fade" v-if="show_group_modal">
        <group-session-modal @closeTriggered="toggleGroupModal" />
      </transition>

      <transition name="fade" v-if="show_auth_modal">
        <tutor-auth-modal @closeTriggered="toggleAuthModal" />
      </transition>
    </portal>
  </div>
</template>

<script>
import tutorWavyBg from "@/modules/tutor/components/tutor-wavy-bg";
import groupSessionModal from "@/modules/tutor/modals/group-session-modal";
import tutorAuthModal from "@/modules/tutor/modals/tutor-auth-modal";

export default {
  name: "tuTorViewCard",

  components: {
    tutorWavyBg,
    groupSessionModal,
    tutorAuthModal,
  },

  props: {
    card_color: {
      type: String,
    },

    tutor: {
      type: Object,
    },
  },

  data: () => ({
    show_group_modal: false,
    show_auth_modal: false,
  }),

  methods: {
    toggleGroupModal() {
      this.show_group_modal = !this.show_group_modal;
    },

    toggleAuthModal() {
      this.show_auth_modal = !this.show_auth_modal;
    },
  },
};
</script>

<style lang="scss" scoped>
.tutor-view-card {
  margin-right: toRem(14);

  @include breakpoint-down(lg) {
    margin-right: toRem(10);
  }

  .tutor-display {
    margin-bottom: toRem(10);
    position: relative;
    height: toRem(175);
    width: toRem(275);

    @include breakpoint-down(lg) {
      width: toRem(240);
      height: toRem(145);
    }

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

      @include breakpoint-down(lg) {
        height: toRem(135);
        width: auto;
      }
    }
  }

  .top-text {
    @include font-height(12.65, 18);
    margin-bottom: toRem(5);

    @include breakpoint-down(lg) {
      @include font-height(12, 17);
    }
  }

  .mid-text {
    @include font-height(14, 21);
    margin-bottom: toRem(8);

    @include breakpoint-down(lg) {
      @include font-height(13, 19);
    }
  }

  .bottom-text {
    @include font-height(12.5, 18);

    @include breakpoint-down(lg) {
      @include font-height(11.75, 17);
    }
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
