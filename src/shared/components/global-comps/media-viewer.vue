<template>
  <div class="media-viewer smooth-animation h-100 w-100">
    <!-- TOP SECTION -->
    <div class="top-section w-100 black-text-bg">
      <div class="gradely-container mx-auto px-2 px-sm-3 px-md-4 px-xl-5">
        <div class="top-content">
          <!-- LEFT  -->
          <div class="left">
            <div class="avatar avatar-square brand-inverse-light-bg">
              <img
                v-lazy="
                  user.image
                    ? user.image
                    : mxDynamicAsset('Four.png', 'onboarding')
                "
                class="avatar-img"
                alt=""
              />
            </div>

            <div>
              <div class="top-text brand-inverse-light font-weight-600 mgb-2">
                {{ user.full_name }}
              </div>
              <div class="bottom-text color-grey-dark">
                {{ getDisplayDate }}
              </div>
            </div>
          </div>

          <!-- RIGHT  -->
          <div class="right">
            <!-- DOWNLOAD MEDIA ICON  -->
            <div
              class="icon icon-cloud-download download-icon"
              title="Download Media"
            ></div>

            <!-- SHARE MEDIA ICON  -->
            <template v-if="media.sharable">
              <div class="icon icon-share share-icon" title="Share Media"></div>
            </template>

            <!-- SEPARATOR  -->
            <div class="separator"></div>

            <!-- CLOSE ICON  -->
            <div
              class="icon icon-close close-icon"
              title="Close Preview"
              @click="$emit('closeTriggered')"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- BOTTOM SECTION -->
    <div class="bottom-section w-100">
      <div
        class="gradely-container m-auto px-2 px-sm-3 px-md-4 px-xl-5 w-100 h-100"
      >
        <div
          class="bottom-content position-relative w-100 h-100 my-auto justify-content-center"
        >
          <!-- MEDIA RENDERER -->
          <div class="media-renderer h-auto white-text w-100">
            <!-- LOADING STATE  -->
            <template v-if="loading">
              <div class="loader-icon icon-dotted-spinner animate"></div>
            </template>

            <!-- RESOURCE STATE -->
            <template v-else>
              <!-- IMAGE BLOCK -->
              <template v-if="media.type === 'image'">
                <img
                  v-lazy="media.resources[current_index]"
                  alt=""
                  class="smooth-animation"
                />

                <!-- IMAGE NAVIGATION -->
                <template
                  name="image-navigation"
                  v-if="media.resources.length > 1"
                >
                  <div class="nav left-nav" title="Previous">
                    <div class="wrapper position-relative w-100 h-100">
                      <div class="icon icon-caret-left"></div>
                    </div>
                  </div>

                  <div class="nav right-nav" title="Next">
                    <div class="wrapper position-relative w-100 h-100">
                      <div class="icon icon-caret-right"></div>
                    </div>
                  </div>
                </template>
              </template>

              <!-- VIDEO BLOCK -->
              <template v-if="media.type === 'video'">
                <template v-if="is_popcorn">
                  <div class="popcorn-viewer h-100">
                    <vue-iframe
                      :src="media.resources[current_index]"
                      allow="camera *; geolocation *; microphone *; autoplay *"
                      frame-id="my-ifram"
                      @load="onLoad"
                      name="my-frame"
                    />
                  </div>
                </template>

                <video
                  v-else
                  controls
                  crossorigin
                  playsinline
                  :poster="
                    media.thumbnails[current_index] ||
                      mxStaticImg('VideoPoster.png')
                  "
                  class="smooth-animation"
                >
                  <source
                    :src="media.resources[current_index]"
                    type="video/mp4"
                  />
                </video>
              </template>

              <!-- DOCUMENT BLOCK -->
              <template v-if="media.type == 'document'">
                <template v-if="true">
                  <div class="file-wrapper w-100 h-auto">
                    <div class="d-none">
                      <pdf
                        :src="mxDynamicAsset('FileTwo.pdf')"
                        @num-pages="pageCount = $event"
                      ></pdf>
                    </div>

                    <div
                      class="mb-1 mb-md-2"
                      v-for="(_, index) in pageCount"
                      :key="index"
                    >
                      <pdf
                        :src="mxDynamicAsset('FileTwo.pdf')"
                        :page="index + 1"
                      ></pdf>
                    </div>
                  </div>
                </template>

                <template v-else>
                  <div class="file-wrapper w-100 h-auto">
                    <VueDocPreview url="" type="office"></VueDocPreview>
                  </div>
                </template>
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- style="display: inline-block; width: 100%; height: auto;max-height: 82vh;" -->
</template>

<script>
import { format } from "date-fns";
import pdf from "vue-pdf";
import VueDocPreview from "vue-doc-preview";

export default {
  name: "mediaViewer",

  components: {
    pdf,
    VueDocPreview,
  },

  props: {
    user: {
      type: Object,
      default: () => ({
        image: "",
        full_name: "Richy Jones",
        date: "2021-10-03 18:27:00",
      }),
    },

    media: {
      type: Object,
      default: () => ({
        resources: [],
        thumbnails: [],
        sharable: true,
        type: "image", //video, doc
      }),
    },
  },

  computed: {
    getDisplayDate() {
      return this.user.date
        ? format(new Date(this.user.date), "do MMM, yyyy hh:mm aaa")
        : "No date";
    },
  },

  data() {
    return {
      loading: true,
      is_popcorn: false,
      myIframe: null,

      pageCount: 1,
      currentPage: 1,
      current_index: 0,
    };
  },

  mounted() {
    this.loadMedia();
    if (this.media.type === "video") this.isPopCornVideoType();
  },

  methods: {
    loadMedia() {
      setTimeout(() => (this.loading = false), 1000);
    },

    onLoad(frame) {
      this.myIframe = frame.contentWindow;
    },

    setupPopcorn() {
      this.$nextTick(() => {
        let popCorn = document.createElement("script");
        popCorn.setAttribute(
          "src",
          "http://popcornjs.org/code/dist/popcorn-complete.min.js"
        );
        popCorn.setAttribute("async", true);
        popCorn.setAttribute("defer", true);
        document.head.appendChild(popCorn);
      });
    },

    isPopCornVideoType() {
      if (!this.media?.resources[0].endsWith(".mp4")) {
        this.is_popcorn = true;
        this.setupPopcorn();
      } else this.is_popcorn = false;
    },
  },
};
</script>

<style lang="scss" scooped>
.media-viewer {
  background: rgba(#000000, 0.96) !important;
  @include transition(0.5s);
  @include fixed-display-area;
  overflow: auto !important;
  z-index: 2500;
  height: 100vh;

  .top-section {
    border-bottom: toRem(0.35) solid rgba($brand-inverse-light, 0.15);
    padding: toRem(12) 0;

    .top-content {
      @include flex-row-between-nowrap;

      .left {
        @include flex-row-start-nowrap;
        .avatar {
          @include square-shape(37);
          margin-right: toRem(10);

          @include breakpoint-down(xs) {
            @include square-shape(32);
            margin-right: toRem(6);
          }
        }

        .top-text {
          @include font-height(12, 18);

          @include breakpoint-down(md) {
            @include font-height(11.75, 17);
            margin-bottom: 0 !important;
          }

          @include breakpoint-down(xs) {
            @include font-height(11, 17);
          }
        }

        .bottom-text {
          @include font-height(11, 16);

          @include breakpoint-down(xs) {
            @include font-height(11, 16);
          }
        }
      }

      .right {
        @include flex-row-end-nowrap;

        .icon {
          color: $brand-inverse-light;
          margin: 0 toRem(9);
          cursor: pointer;

          @include breakpoint-down(xs) {
            margin: 0 toRem(7.5);
          }
        }

        .download-icon {
          font-size: toRem(24);

          @include breakpoint-down(md) {
            font-size: toRem(21);
          }

          @include breakpoint-down(xs) {
            font-size: toRem(20.5);
          }
        }

        .share-icon {
          font-size: toRem(16.5);

          @include breakpoint-down(md) {
            font-size: toRem(14.5);
          }

          @include breakpoint-down(xs) {
            font-size: toRem(13.75);
          }
        }

        .separator {
          background: rgba($brand-inverse-light, 0.6);
          height: toRem(23);
          width: toRem(0.5);
          margin: 0 toRem(11);

          @include breakpoint-down(xs) {
            margin: 0 toRem(7);
          }
        }

        .close-icon {
          font-size: toRem(15);
          margin-right: 0;

          @include breakpoint-down(md) {
            font-size: toRem(14);
          }
        }
      }
    }
  }

  .bottom-section {
    height: 90vh;
    overflow: auto;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }

    .bottom-content {
      @include flex-column-center;
      padding: toRem(10) 0;

      .media-renderer {
        @include flex-column-center;
        height: 100%;

        img,
        video {
          height: auto;
          width: auto;
          max-height: 70vh;
          max-width: 100%;
        }

        .popcorn-viewer {
          min-height: toRem(430);
          height: auto;
          min-width: toRem(650);
          width: auto;

          @include breakpoint-down(md) {
            min-width: toRem(540);
            min-height: toRem(380);
          }

          @include breakpoint-down(sm) {
            min-width: toRem(480);
            min-height: toRem(320);
          }

          @include breakpoint-custom-down(502) {
            min-width: toRem(400);
            min-height: toRem(260);
          }

          @include breakpoint-down(xs) {
            min-width: toRem(320);
            min-height: toRem(220);
          }
        }

        .file-wrapper {
          padding: auto;
          margin: auto;
          overflow: hidden;
          -ms-overflow-style: none;

          &::-webkit-scrollbar {
            display: none;
          }
        }
      }

      .nav {
        border: toRem(0.5) solid rgba($color-white, 0.45);
        @include transition(0.4s);
        @include square-shape(33);
        border-radius: 50%;
        @include center-y;
        cursor: pointer;
        z-index: 1;

        @include breakpoint-down(md) {
          background: rgba($color-white, 0.75);
        }

        &:hover {
          background: rgba($color-white, 0.25);
        }

        .icon {
          @include center-placement;
          font-size: toRem(12);
          color: rgba($color-white, 0.6);

          @include breakpoint-down(md) {
            color: $brand-navy;
            font-size: toRem(15);
          }
        }
      }

      .left-nav {
        left: 0;

        @include breakpoint-down(sm) {
          .icon {
            margin-left: toRem(-1);
            margin-top: toRem(1);
          }
        }
      }

      .right-nav {
        right: 0;

        @include breakpoint-down(sm) {
          .icon {
            margin-right: toRem(-2);
            margin-top: toRem(1);
          }
        }
      }
    }
  }

  .loader-icon {
    color: rgba($color-grey-dark, 0.75);
    font-size: toRem(40);
    margin-top: toRem(-20);

    @include breakpoint-down(sm) {
      font-size: toRem(45);
    }

    @include breakpoint-down(xs) {
      font-size: toRem(40);
    }
  }
}
</style>
