<template>
  <modal-cover
    @closeModal="$emit('closeTriggered')"
    show_close_btn
    :modal_style="{ size: 'modal-mini' }"
  >
    <!-- MODAL HEADER  -->
    <template slot="modal-cover-header">
      <div class="modal-cover-header text-center">
        <img
          :src="loadAsset('personal-session.png', 'tutor')"
          alt="gradely-session"
        />
      </div>
    </template>

    <!-- MODAL BODY  -->
    <template slot="modal-cover-body">
      <div class="modal-cover-body">
        <!-- TITLE TEXT -->
        <div class="title-text text-center font-weight-700 color-grey-dark">
          Book a Free 1-on-1 Session
        </div>

        <div class="form-area mgt-17">
          <div
            class="
              connection-alert
              brand-accent-light-bg
              rounded-12
              mgb-25
              smooth-transition
            "
          >
            {{
              connected
                ? "Oh! I don't have a child connected to Gradely!"
                : "Is your child already on Gradely?"
            }}
            <span
              class="font-weight-500 pointer brand-tonic"
              @click="toggleConnection"
              >Book here</span
            >
          </div>

          <!-- CHILD NAME -->
          <template v-if="connected">
            <div class="form-group compact-row w-100 smooth-transition">
              <label for="childCode" class="label-compact label-sm"
                >Child's Code
              </label>
              <input
                type="text"
                id="childCode"
                class="form-control"
                placeholder="Enter your child's code"
                required
              />
            </div>
          </template>

          <template v-else>
            <div class="form-group compact-row w-100 smooth-transition">
              <label for="childName" class="label-compact label-sm"
                >Child's Name
              </label>
              <input
                type="text"
                id="childName"
                class="form-control"
                placeholder="Enter the name of your child"
                required
              />
            </div>

            <!-- CHILD CLASS  -->
            <div class="form-group compact-row w-100 smooth-transition">
              <label for="childClass" class="label-compact label-sm"
                >Child's Class
              </label>
              <select class="form-control" id="childClass">
                <option disabled selected value="">Select Class</option>
                <option value="">Junior Secondary School 1</option>
                <option value="">Senior Secondary School 2</option>
              </select>
            </div>
          </template>

          <!-- LESSON SUBJECT  -->
          <div class="form-group compact-row w-100">
            <label for="lessonSubject" class="label-compact label-sm"
              >Lesson Subject
            </label>
            <select class="form-control" id="lessonSubject">
              <option disabled selected value="">Select lesson subject</option>
              <option value="">English language</option>
              <option value="">Mathematics</option>
            </select>
          </div>

          <!-- LESSON DAY AND TIME -->
          <div class="form-group compact-row w-100">
            <label for="lessonDateTime" class="label-compact label-sm"
              >Lesson Day and Time
            </label>
            <input
              type="datetime-local"
              id="lessonDateTime"
              class="form-control"
              required
            />
          </div>
        </div>
      </div>
    </template>

    <!-- MODAL FOOTER  -->
    <template slot="modal-cover-footer">
      <div class="modal-cover-footer d-flex justify-content-center mgb-15">
        <button class="btn btn-accent gfont-10-5">Book your Free Class</button>
      </div>
    </template>
  </modal-cover>
</template>

<script>
import modalCover from "@/shared/components/global-comps/modal-cover";

export default {
  name: "oneOnOneModal",

  components: {
    modalCover,
  },

  data: () => ({
    connected: false,
  }),

  methods: {
    toggleConnection() {
      this.connected = !this.connected;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-cover-header {
  margin-top: toRem(-4);
}

.modal-cover-body {
  margin-top: toRem(-18);
  margin-bottom: toRem(-25);

  .title-text {
    @include font-height(15.5, 19);
  }

  .connection-alert {
    font-size: toRem(12);
    padding: toRem(10) toRem(15);
    letter-spacing: 0.03em;

    span {
      text-decoration: underline;
      transition: all 0.4s ease-in-out;

      &:hover {
        color: $brand-accent !important;
      }
    }
  }
}
.btn {
  padding: toRem(14) toRem(34);
}
</style>
