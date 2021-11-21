<template>
  <div class="plan-card rounded-20 white-text-bg position-relative">
    <!-- PLAN TITLE  -->
    <div class="plan-title brand-navy font-weight-700 text-center">
      {{ plan.title }}
    </div>

    <!-- PLAN AMOUNT  -->
    <div class="plan-amount brand-navy font-weight-700 text-center">
      {{ plan.value }}
    </div>

    <!-- META TEXT  -->
    <div class="meta-text color-grey-dark text-center">Per Hour</div>

    <!-- PLAN DESCRIPTION -->
    <div class="plan-description color-ash text-center">
      {{ plan.description }}
    </div>

    <!-- PLAN HIGHLIGHTS -->
    <div
      class="plan-highlight"
      v-for="(highlight, index) in plan.highlights"
      :key="index"
    >
      <div class="icon icon-accept"></div>
      <div class="text">{{ highlight }}</div>
    </div>

    <!-- BOOK BUTTON -->
    <button
      class="btn btn-accent mgt-10 position-absolute"
      @click="bookSession"
    >
      Book a Paid Session
    </button>

    <!-- MODALS -->
    <portal to="gradely-modals">
      <transition name="fade" v-if="show_one_on_one_modal">
        <one-on-one-modal @closeTriggered="toggleOneOnOneModal" />
      </transition>

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
import oneOnOneModal from "@/modules/tutor/modals/one-on-one-modal";
import groupSessionModal from "@/modules/tutor/modals/group-session-modal";
import tutorAuthModal from "@/modules/tutor/modals/tutor-auth-modal";

export default {
  name: "planCard",

  components: {
    oneOnOneModal,
    groupSessionModal,
    tutorAuthModal,
  },

  props: {
    plan: {
      type: Object,
    },
  },

  data: () => ({
    show_one_on_one_modal: false,
    show_group_modal: false,
    show_auth_modal: false,
  }),

  methods: {
    toggleOneOnOneModal() {
      this.show_one_on_one_modal = !this.show_one_on_one_modal;
    },

    toggleGroupModal() {
      this.show_group_modal = !this.show_group_modal;
    },

    toggleAuthModal() {
      this.show_auth_modal = !this.show_auth_modal;
    },

    bookSession() {
      this.plan.type === "single"
        ? this.toggleOneOnOneModal()
        : this.toggleGroupModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.plan-card {
  padding: toRem(35) toRem(20);
  @include flex-column-center;
  justify-content: flex-start;
  border: 1px solid #d5d5d5;
  height: toRem(470);
  width: 32%;

  @include breakpoint-down(lg) {
    padding: toRem(30) toRem(15);
    width: 32.75%;
  }

  @include breakpoint-down(md) {
    margin-bottom: toRem(30);
    width: 100%;
  }

  .plan-title {
    @include font-height(17, 30);
    margin-bottom: toRem(10);

    @include breakpoint-down(lg) {
      @include font-height(16, 28);
    }

    @include breakpoint-down(md) {
      @include font-height(18, 30);
    }

    @include breakpoint-down(xs) {
      @include font-height(16.5, 28);
    }
  }

  .plan-amount {
    @include font-height(28, 38);
    letter-spacing: 0.05em;

    @include breakpoint-down(lg) {
      @include font-height(26, 34);
    }

    @include breakpoint-down(md) {
      @include font-height(28, 36);
    }

    @include breakpoint-down(xs) {
      @include font-height(26, 34);
    }
  }

  .meta-text {
    @include font-height(12.5, 18);
    margin-bottom: toRem(15);

    @include breakpoint-down(lg) {
      @include font-height(12, 17);
    }

    @include breakpoint-down(md) {
      @include font-height(13, 20);
    }

    @include breakpoint-down(xs) {
      @include font-height(12.5, 19);
    }
  }

  .plan-description {
    @include font-height(13.5, 24);
    margin-bottom: toRem(20);
    width: 80%;

    @include breakpoint-down(lg) {
      @include font-height(12.75, 22);
    }

    @include breakpoint-down(md) {
      @include font-height(13.5, 25);
    }
  }

  .plan-highlight {
    @include flex-row-start-nowrap;
    align-items: flex-start;
    margin-bottom: toRem(14);
    width: 100%;

    .icon {
      @include font-height(14, 24);
      margin-right: toRem(14);
      color: $brand-inverse;
      position: relative;
      top: toRem(1.25);

      @include breakpoint-down(lg) {
        margin-right: toRem(12);
      }

      @include breakpoint-down(md) {
        margin-right: toRem(14);
      }
    }

    .text {
      @include font-height(13, 23);
      color: $color-ash;

      @include breakpoint-down(lg) {
        @include font-height(12, 21);
      }

      @include breakpoint-down(md) {
        @include font-height(13, 23);
      }
    }
  }

  .btn {
    padding: toRem(13.5) toRem(46);
    font-size: toRem(11.5) !important;
    bottom: toRem(60);

    @include breakpoint-down(lg) {
      bottom: toRem(40);
    }

    @include breakpoint-down(md) {
      bottom: toRem(50);
    }
  }
}
</style>
