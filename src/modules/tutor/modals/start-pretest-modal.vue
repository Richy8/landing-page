<template>
  <modal-cover :modal_style="{ size: 'modal-mini' }">
    <!-- MODAL HEADER  -->
    <template slot="modal-cover-header">
      <div class="modal-cover-header text-center">
        <img
          :src="loadAsset('session-starts.png', 'tutor')"
          alt="gradely-session"
        />
      </div>
    </template>

    <!-- MODAL BODY  -->
    <template slot="modal-cover-body">
      <div class="modal-cover-body">
        <!-- TITLE TEXT -->
        <div class="title-text text-center brand-navy font-weight-700 mgt-5">
          Class Booked!
        </div>
        <div class="body-text text-center mgt-19">
          <p class="text-center description-text ">
            Thank you, your free
          <span class="font-weight-900">Mathematics</span> class been booked for
          <span class="font-weight-900">Friday, 24th Dec, 2021 at </span>
          <span class="font-weight-900">12:45 pm</span>
          </p>
          <p class="body-text text-center description-text">Take a pretest to prepare for your class.</p>
        </div>
      </div>
    </template>

    <!-- MODAL FOOTER  -->
    <template slot="modal-cover-footer">
      <div class="modal-cover-footer d-flex justify-content-center mgb-15">
        <a :href="redirect_url">
          <button class="btn btn-soft-accent gfont-10-5">
            Start Pretest Now
          </button>
        </a>
      </div>
    </template>
  </modal-cover>
</template>
<script>
import modalCover from "@/shared/components/global-comps/modal-cover";

export default {
  name: "startProtestModal",
  components: {
    modalCover,
  },
  props: {
    redirect_url: {
      type: String,
      default: ""
    },
    date: {
      type: Date,
      default: "",
    },
    time: {
      type: String,
      default: "",
    },
    subject: {
      type: String,
      default: "",
    }

  }
};
</script>
