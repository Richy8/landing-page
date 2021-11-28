<template>
  <modal-cover
    @closeModal="$emit('closeTriggered')"
    show_close_btn
    :modal_style="{ size: 'modal-mini' }"
  >
    <!-- MODAL HEADER  -->
    <template slot="modal-cover-header">
      <div class="modal-cover-header d-flex justify-content-center">
        <div class="wrapper w-75">
          <div
          v-if="free"
            class="
              title-text
              text-center
              brand-tonic
              text-uppercase
              mgb-10
              font-weight-600
            "
          >
            One More Step
          </div>

          <div
            class="description-text text-center brand-navy smooth-transition"
          >
            {{
              is_sign_up
                ? "Create a Gradely parent account to confirm your booking"
                : "Login to your Gradely account to confirm your booking"
            }}
          </div>
        </div>
      </div>
    </template>

    <!-- MODAL BODY  -->
    <template slot="modal-cover-body">
      <div class="modal-cover-body">
        <div class="form-area mgt-20">
          <!-- PARENT NAME -->
          <div
            class="form-group compact-row w-100 smooth-transition"
            v-if="is_sign_up"
          >
            <label for="parentName" class="label-compact label-sm">Name</label>
            <input
              type="text"
              id="parentName"
              class="form-control"
              placeholder="Enter your first & last name"
              required
              v-model.trim="form.parent_name"
            />
          </div>

          <!-- PARENT EMAIL -->
          <div class="form-group compact-row w-100">
            <label for="parentEmail" class="label-compact label-sm"
              >Email Address</label
            >
            <input
              type="email"
              id="parentEmail"
              class="form-control"
              placeholder="Enter your email address"
              required
              v-model.trim="form.email"
            />
          </div>

          <!-- PHONE NUMBER -->
          <div
            class="form-group compact-row smooth-transition"
            v-if="is_sign_up"
          >
            <label for="phone_number" class="label-compact label-sm"
              >Phone Number</label
            >
            <div class="input-group phone-group">
              <!-- AREA CODE  -->
              <div class="area-code">
                <div class="inner-wrapper w-auto h-auto d-flex">
                  <div class="avatar">
                    <img
                      v-lazy="loadAsset('FlagIcon.svg')"
                      class="avatar-img"
                      alt=""
                    />
                  </div>

                  <!-- CODE  -->
                  <div class="code">+234</div>
                </div>
              </div>

              <input
                type="number"
                id="phone_number"
                class="form-control"
                required
                placeholder="Enter phone number"
                v-model.trim="form.phone_number"
              />
            </div>
          </div>

          <!-- PASSWORD -->
          <!-- PASSWORD -->
          <div class="form-group compact-row">
            <label for="password" class="label-compact label-sm"
              >Password</label
            >
            <div class="input-group">
              <input
                :type="passwordType ? 'password' : 'text'"
                class="form-control"
                id="password"
                required
                placeholder="Create a password"
                v-model.trim="form.password"
              />

              <!-- ADDON  -->
              <div
                class="addon smooth-transition"
                :class="
                  passwordType
                    ? ['icon-eye', 'brand-inverse']
                    : ['icon-hide', 'brand-accent']
                "
                @click="togglePasswordType"
                title="Toggle Password"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- MODAL FOOTER  -->
    <template slot="modal-cover-footer">
      <div
        class="modal-cover-footer d-flex flex-column align-items-center mgb-15"
      >
        <button class="btn btn-accent gfont-10-5" @click="signupParentHandler">
          {{ is_sign_up ? "CREATE ACCOUNT" : "LOG iN" }}
        </button>

        <div class="help-text color-grey-dark mgt-18">
          {{
            is_sign_up
              ? "Already have an account?"
              : "Don't have an account on Gradely"
          }}
          <span
            class="brand-accent smooth-transition pointer"
            @click="toggleSignup"
            >{{ is_sign_up ? "Log In now" : "Create Account" }}</span
          >
        </div>
      </div>
    </template>
  </modal-cover>
</template>

<script>
import modalCover from "@/shared/components/global-comps/modal-cover";
import { mapActions } from "vuex";

export default {
  name: "tutorAuthModal",

  components: {
    modalCover,
  },

  props: {
    free: {
      type: Boolean,
      default: true,
    }
  },

  data: () => ({
    passwordType: true,
    is_sign_up: true,
    form: {
      parent_name: "",
      password: "",
      phone_number: null,
      email: "",
    },
  }),

  methods: {
    ...mapActions({ signupParent: "dbTutor/signupParent" }),

    // SIGNUP PARENT
    signupParentHandler() {
      const parentNames = this.form.parent_name.split(" ");

      const parentInfo = {
        first_name: parentNames[0],
        last_name: parentNames[1],
        email: this.form.email,
        phone: this.form.phone_number,
        password: this.form.password
      }

      this.signupParent(parentInfo).then((response) => {
        
        if (response.code === 200) {
         const importantInfo = {
           parent_id: response.data.id,
           token: response.data.token,
           password: this.form.password
         }
         if (!this.free) return this.$emit('pSignedUpSuccessfullyPaid', importantInfo);

         this.$emit('parentSignedUpSuccessfully', importantInfo)
        }
      })
      .catch((error) => {
        console.log(error);
      })
    },

    togglePasswordType() {
      this.passwordType = !this.passwordType;
    },

    toggleSignup() {
      this.is_sign_up = !this.is_sign_up;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-cover-header {
  .title-text {
    @include font-height(13.5, 18);
  }

  .description-text {
    @include font-height(14.5, 24);
  }
}

.modal-cover-body {
  margin-top: toRem(-18);
  margin-bottom: toRem(-25);
}

.phone-group {
  input {
    padding-left: toRem(68);
  }
}

.btn {
  padding: toRem(14) toRem(34);
}

.help-text {
  @include font-height(12.75, 17);

  span {
    &:hover {
      color: $brand-inverse !important;
    }
  }
}
</style>
