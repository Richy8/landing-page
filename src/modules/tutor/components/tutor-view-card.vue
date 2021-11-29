<template>
  <div
    class="tutor-view-card pointer smooth-transition"
    @click="toggleGroupModal"
  >
    <div class="tutor-display rounded-20 overflow-hidden">
      <tutor-wavy-bg :card_color="card_color" />

      <!-- LIVE ALERT -->
      <div class="live-alert-card rounded-15" v-if="tutor.live_status">
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
    <div class="mid-text brand-navy font-weight-700">
      {{ tutor.topic.topic }}
    </div>

    <!-- BOTTOM TEXT -->
    <div class="bottom-text color-grey-dark">
      <span class="date-time">{{
        `${tutor.session_date}  ${tutor.session_time}`
      }}</span>
      <span class="dot"></span>
      <span class="class-name">{{ tutor.class.class_name }}</span>
      <span class="dot"></span>
      <span class="status brand-tonic font-weight-700 text-uppercase">{{
        tutor.amount === 0 ? "FREE" : tutor.amount
      }}</span>
    </div>

    <!-- MODALS -->
    <portal to="gradely-modals">
      <transition name="fade" v-if="show_group_modal">
        <group-session-modal
          @closeTriggered="toggleGroupModal"
          :tutor_details="tutor"
          @submitChildInfo="submitChildInfoHandler($event)"
        />
      </transition>

      <transition name="fade" v-if="show_auth_modal">
        <tutor-auth-modal
          @closeTriggered="toggleAuthModal"
          @parentSignedUpSuccessfully="
            parentSignedUpSuccessfullyHandler($event)
          "
        />
      </transition>

      <transition name="fade" v-if="show_start_pretest_modal">
        <start-pretest-modal
          :redirect_url="redirect_url"
          :subject="one_on_one_form.lesson_subject_name"
        ></start-pretest-modal>
      </transition>
    </portal>
  </div>
</template>

<script>
import tutorWavyBg from "@/modules/tutor/components/tutor-wavy-bg";
import groupSessionModal from "@/modules/tutor/modals/group-session-modal";
import tutorAuthModal from "@/modules/tutor/modals/tutor-auth-modal";
import startPretestModal from "@/modules/tutor/modals/start-pretest-modal";

import { mapActions } from "vuex";

import { APP_BASE_URL } from "@/env";

export default {
  name: "tuTorViewCard",

  components: {
    tutorWavyBg,
    groupSessionModal,
    tutorAuthModal,
    startPretestModal,
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
    show_start_pretest_modal: false,

    one_on_one_form: {
      child_name: "",
      child_class: null,
      lesson_subject: null,
      date: "",
      time: "",
      lesson_subject_name: "",
    },

    parent_account_form: {
      password: "",
      token: "",
      parent_id: null,
    },
    redirect_url: "",
    student_id: null,
  }),

  methods: {
    ...mapActions({
      signupStudent: "dbTutor/signupStudent",
      bookSession: "dbTutor/bookSession",
    }),
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

      // BUILD UP PAYLOAD
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
            this.student_id = response.data.id;
            this.redirect_url = `${APP_BASE_URL}/sms/login/${this.parent_account_form.token}?path=catchup/resources/${this.student_id}`;
            this.show_start_pretest_modal = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    bookSessionHandler() {
      // BUILD PAYLOAD DATA
      const payload = {
        class: this.one_on_one_form.child_class,
        subject: this.one_on_one_form.lesson_subject,
        requester_id: this.parent_account_form.parent_id,
        tutoring_type: "one_on_one",
        name: this.one_on_one_form.child_name,
        session_date: this.one_on_one_form.date,
        session_time: this.one_on_one_form.time,
      };

      this.bookSession(payload)
        .then((response) => {
          if (response.code === 200) {
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    submitChildInfoHandler(form) {
      this.toggleGroupModal();

      this.one_on_one_form = form;

      this.toggleAuthModal();
    },

    parentSignedUpSuccessfullyHandler(form) {
      this.parent_account_form = form;

      this.bookSessionHandler();

      this.signupStudentHandler();
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
      height: toRem(155);
      width: auto;
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
