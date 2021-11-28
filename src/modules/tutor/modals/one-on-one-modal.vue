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
          Book a {{ free ? "Free" : "" }} 1-on-1 Session
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
                v-model="form.child_name"
              />
            </div>

            <!-- CHILD CLASS  -->
            <div class="form-group compact-row w-100 smooth-transition">
              <label for="childClass" class="label-compact label-sm"
                >Child's Class
              </label>
              <select
                v-model="form.child_class"
                class="form-control"
                id="childClass"
                @change="fechClassSubjects"
              >
                <option disabled selected value="">Select Class</option>
                <option
                  :value="class_item.id"
                  v-for="class_item in class_list"
                  :key="class_item.id"
                >
                  {{ class_item.description }}
                </option>
              </select>
            </div>
          </template>

          <!-- LESSON SUBJECT  -->
          <div class="form-group compact-row w-100">
            <label for="lessonSubject" class="label-compact label-sm"
              >Lesson Subject
            </label>
            <select
              v-model="form.lesson_subject"
              class="form-control"
              id="lessonSubject"
            >
              <option disabled selected value="">Select lesson subject</option>
              <option
                :value="subject.id"
                v-for="subject in subjects"
                :key="subject.id"
              >
                {{ subject.name }}
              </option>
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
              v-model="form.date_time"
              ref="minDate"
            />
          </div>
        </div>
      </div>
    </template>

    <!-- MODAL FOOTER  -->
    <template slot="modal-cover-footer">
      <div class="modal-cover-footer d-flex justify-content-center mgb-15">
        <button class="btn btn-accent gfont-10-5" @click="submitChildInfo">
          Book your {{ free ? "free" : "" }} Class
        </button>
      </div>
    </template>
  </modal-cover>
</template>

<script>
import modalCover from "@/shared/components/global-comps/modal-cover";
import { mapActions } from "vuex";
import { addHours } from "date-fns";

export default {
  name: "oneOnOneModal",

  components: {
    modalCover,
  },

  data: () => ({
    connected: false,
    show_lesson_subjects: false,
    minDateTime: "",
    
    form: {
      child_name: "",
      child_class: null,
      lesson_subject: null,
      date_time: null,
      lesson_subject_name: "",
    },

    class_list: [],
    subjects: [],
  }),

  props: {
    free: {
      type: Boolean,
      default: true,
    }
  },

  watch: {
    'form.lesson_subject': function() {
      const subjectObj = this.subjects.find(subject => subject.id === this.form.lesson_subject);
      if (subjectObj) {
        this.form.lesson_subject_name = subjectObj.name;
      }
    },
  },
  created() {
    
    },

  mounted() {
    this.setDateMin();
    this.fetchAllClasses();
  },

  methods: {
    ...mapActions({
      getAllClasses: "dbTutor/getAllClasses",
      getClassSubjects: "dbTutor/getClassSubjects",
    }),

    setDateMin() {
      const date = new Date();
      const customHours = date.getHours() <= 9 ? `0${date.getHours()}` : date.getHours();
      this.minDateTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}T${
        customHours
      }:${date.getMinutes()}:00`;
      this.$refs.minDate.min = this.minDateTime;
      
    },

    fetchAllClasses() {
      this.getAllClasses()
        .then((response) => {
          this.class_list = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    fechClassSubjects() {
      this.class_id = this.form.child_class;
      this.getClassSubjects(this.class_id)
        .then((response) => {
          this.subjects = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    toggleConnection() {
      this.connected = !this.connected;
    },

    submitChildInfo() {
      // TODO... check if date and time is valid;
      let formattedDateTime = this.form.date_time.split("T");

      const date = formattedDateTime[0].split("-");
      const time = formattedDateTime[1].split(":");

      let createdDate = new Date(
        date[0],
        Number(date[1] - 1),
        date[2],
        time[0],
        time[1]
      );

      let todayPlusTwoHrs = addHours(new Date(), 2);

      if (todayPlusTwoHrs < createdDate) {
        console.log("Time is valid");
      } else {
        console.log("Time is invalid");
      }
      if (!this.free) return this.$emit("submitChildInfoPaid", this.form);

      this.$emit("submitChildInfo", this.form);
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
