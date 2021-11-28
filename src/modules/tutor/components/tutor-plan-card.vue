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
        <one-on-one-modal
          :free="false"
          @closeTriggered="toggleOneOnOneModal"
          @submitChildInfoPaid="submitChildInfoPaidHandler"
        />
      </transition>

      <transition name="fade" v-if="show_group_modal">
        <group-session-modal @closeTriggered="toggleGroupModal" />
      </transition>

      <transition name="fade" v-if="show_auth_modal">
        <tutor-auth-modal
          :free="false"
          @closeTriggered="toggleAuthModal"
          @pSignedUpSuccessfullyPaid="parentSignedUpSuccessfullyPaidHandler"
        />
      </transition>
    </portal>
  </div>
</template>

<script>
import oneOnOneModal from "@/modules/tutor/modals/one-on-one-modal";
import groupSessionModal from "@/modules/tutor/modals/group-session-modal";
import tutorAuthModal from "@/modules/tutor/modals/tutor-auth-modal";

import { APP_BASE_URL } from "@/env";

import { mapActions } from "vuex";

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

    one_on_one_form: {
      child_name: "",
      lesson_subject: "",
      date_time: null,
      child_class: null,
    },

    redirect_url: "",
    student_id: null,

    parent_account_form: {
      password: "",
      token: "",
      parent_id: null,
    },
  }),

  methods: {
    ...mapActions({
      signupStudent: "dbTutor/signupStudent",
      bookSession_: "dbTutor/bookSession",
    }),

    toggleOneOnOneModal() {
      this.show_one_on_one_modal = !this.show_one_on_one_modal;
    },

    toggleGroupModal() {
      this.show_group_modal = !this.show_group_modal;
    },

    toggleAuthModal() {
      this.show_auth_modal = !this.show_auth_modal;
    },
    signupStudentHandler() {
      let first_name;
      let last_name;

      // ENSURE THAT THERE IS A FIRST NAME AND SECOND NAME
      if (this.one_on_one_form.child_name.includes(" ")) {
        const child_names = this.one_on_one_form.child_name.split(" ");
        first_name = child_names[0];
        last_name = child_names[1];
      } else {
        first_name = this.one_on_one_form.child_name;
        last_name = this.one_on_one_form.child_name;
      }

      // BUILD UP YOUR PAYLOAD
      const payload = {
        first_name,
        last_name,
        password: this.parent_account_form.password,
        class: this.one_on_one_form.child_class,
        country: "nigeria",
        parent_id: this.parent_account_form.parent_id,
        class_code: "ADESC/YEAR7B",
        relationship: "Guardian",
      };

      this.signupStudent(payload)
        .then((response) => {
          if (response.code === 200) {
            console.log(response.data);
            this.student_id = response.data.id;
            this.redirect_url = `${APP_BASE_URL}/sms/login/${this.parent_account_form.token}?path=parent/settings/tutoring-plan`;
            window.location.href = this.redirect_url;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    submitChildInfoPaidHandler(childDataForm) {
      this.toggleOneOnOneModal();

      this.one_on_one_form = childDataForm;

      this.toggleAuthModal();
    },

    bookSessionHandler() {
      let session_date;
      let session_time;
      const dateTime = this.one_on_one_form.date_time.split("T");

      session_date = dateTime[0];
      session_time = dateTime[1];

      // BUILD PAYLOAD DATA
      const payload = {
        class: this.one_on_one_form.child_class,
        subject: this.one_on_one_form.lesson_subject,
        requester_id: this.parent_account_form.parent_id,
        tutoring_type: "one_on_one",
        name: this.one_on_one_form.child_name,
        session_date,
        session_time,
      };

      this.bookSession_(payload)
        .then((response) => {
          if (response.code === 200) {
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    parentSignedUpSuccessfullyPaidHandler(parentDataForm) {
      this.parent_account_form = parentDataForm;
      console.log(this.parent_account_form);

      this.bookSessionHandler();

      this.signupStudentHandler();
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
