<template>
  <modal-cover
    @closeModal="$emit('closeTriggered')"
    show_close_btn
    :modal_style="{ size: 'modal-sm-md-init' }"
  >
    <!-- MODAL HEADER  -->
    <template slot="modal-cover-header">
      <div class="modal-cover-header">
        <div class="modal-cover-title text-capitalize">
          Book a Group Session
        </div>
      </div>
    </template>

    <!-- MODAL BODY  -->
    <template slot="modal-cover-body">
      <div class="modal-cover-body">
        <!-- TUTOR INFORMATION -->
        <div class="tutor-info">
          <div class="top mgb-20">
            <div class="avatar rounded-8 brand-inverse-light-bg">
              <!-- TUTOR IMAGE -->
              <img
                :src="loadAsset('damola.png', 'tutor')"
                alt=""
                class="tutor-img"
              />
            </div>

            <div class="info">
              <!-- LIVE ALERT -->
              <div class="live-alert-card rounded-15 mgb-12">
                <div class="live-alert rounded-circle mgr-5"></div>
                <div class="live-text color-text font-weight-700">LIVE</div>
              </div>
              <!-- TUTOR NAME -->
              <div class="tutor-name color-ash">Gloria Elendu</div>

              <!-- TUTOR TOPIC -->
              <div class="tutor-topic brand-navy font-weight-700">
                Grammar - Argumentative Pronouns
              </div>

              <!-- TUTOR DATE -->
              <div class="tutor-date color-grey-dark">Sat, Nov 6, 2:45 PM</div>
            </div>
          </div>

          <div class="bottom">
            <div class="column mgr-30">
              <img :src="loadAsset('grad.svg')" alt="" />
              <div class="info">
                <div class="title-text mgb-4 brand-navy font-weight-700">
                  English Language
                </div>

                <div class="meta-text color-grey-dark">Subject</div>
              </div>
            </div>

            <div class="column">
              <img :src="loadAsset('slack.svg')" alt="" />
              <div class="info">
                <div class="title-text mgb-4 brand-navy font-weight-700">
                  Free
                </div>

                <div class="meta-text color-grey-dark">Price</div>
              </div>
            </div>
          </div>
        </div>

        <div class="form-area mgt-30">
          <!-- CHILD NAME -->
          <div
            class="form-group compact-row w-100 smooth-transition"
            v-if="connected"
          >
            <label for="childCode" class="label-compact label-sm"
              >Child's Code</label
            >
            <input
              type="text"
              id="childCode"
              class="form-control"
              placeholder="Enter your child's class code"
              required
            />
          </div>

          <div class="form-group compact-row w-100 smooth-transition" v-else>
            <label for="childName" class="label-compact label-sm"
              >Child's Name</label
            >
            <input
              type="text"
              id="childName"
              class="form-control"
              placeholder="Enter your child's name"
              required
            />
          </div>
        </div>
      </div>
    </template>

    <!-- MODAL FOOTER  -->
    <template slot="modal-cover-footer">
      <div
        class="modal-cover-footer d-flex flex-column align-items-center mgb-15"
        style="margin-top: -15px"
      >
        <button class="btn btn-accent gfont-10-5">Book Session</button>

        <div class="help-text color-grey-dark mgt-18">
          {{
            connected
              ? "I don't have a child on Gradely!"
              : "Is your child already on Gradely ?"
          }}
          <span
            class="brand-accent smooth-transition pointer"
            @click="toggleConnection"
            >Book here</span
          >
        </div>
      </div>
    </template>
  </modal-cover>
</template>

<script>
import modalCover from "@/shared/components/global-comps/modal-cover";
import tutorWavyBg from "@/modules/tutor/components/tutor-wavy-bg";

export default {
  name: "tutorAuthModal",

  components: {
    modalCover,
    tutorWavyBg,
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
.modal-cover-body {
  margin-top: toRem(5);
  padding-bottom: 0;

  .tutor-info {
    .top {
      @include flex-row-start-nowrap;

      .avatar {
        @include rectangle-shape(140, 130);
        margin-right: toRem(15);

        .tutor-img {
          @include center-x;
          height: auto;
          max-height: toRem(120);
          width: auto;
          z-index: 1;
          bottom: 0;
        }
      }

      .info {
        .live-alert-card {
          background: $color-white;
          @include flex-row-center-nowrap;
          padding: toRem(6) toRem(12);
          width: max-content;

          .live-alert {
            border: toRem(3) solid $brand-tonic;
            @include square-shape(10.25);
          }

          .live-text {
            @include font-height(10.25, 13);
            letter-spacing: 0.02em;
          }
        }

        .tutor-name {
          @include font-height(15.5, 22);
          margin-bottom: toRem(12);
        }

        .tutor-topic {
          @include font-height(13, 18);
          margin-bottom: toRem(5);
        }

        .tutor-date {
          @include font-height(13, 18);
        }
      }
    }

    .bottom {
      @include flex-row-start-nowrap;

      .column {
        @include flex-row-start-nowrap;
        align-items: flex-start;

        img {
          @include square-shape(26);
          margin-right: toRem(12);
        }

        .info {
          .title-text {
            @include font-height(13.5, 19);
          }

          .meta-text {
            @include font-height(11.5, 16);
          }
        }
      }
    }
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
