<template>
  <div class="media-viewer smooth-animation h-100 w-100">
    <!-- CLOSE TRIGERE -->
    <div
      class="close-trigger rounded-circle position-absolute pointer"
      @click="$emit('closeTriggered')"
    >
      <div class="position-relative w-100 h-100">
        <div class="icon icon-close"></div>
      </div>
    </div>

    <!-- BOTTOM SECTION -->
    <div class="bottom-section w-100">
      <div
        class="
          gradely-container
          m-auto
          px-2 px-sm-3 px-md-4 px-xl-5
          w-100
          h-100
        "
      >
        <div
          class="
            bottom-content
            position-relative
            w-100
            h-100
            my-auto
            justify-content-center
          "
        >
          <!-- MEDIA RENDERER -->
          <div class="media-renderer h-auto white-text w-100">
            <template>
              <!-- VIDEO BLOCK -->
              <template>
                <video
                  controls
                  crossorigin
                  playsinline
                  :poster="loadAsset(media.thumbnail, tutor)"
                  class="smooth-animation"
                >
                  <source :src="media.resource" type="video/mp4" />
                </video>
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
export default {
  name: "mediaViewer",

  props: {
    media: {
      type: Object,
      default: () => ({
        resource: "",
        thumbnail: "",
      }),
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

  .close-trigger {
    z-index: 2999;
    @include square-shape(42);
    top: toRem(50);
    right: toRem(50);
    background: rgba($border-grey-dark, 0.5);

    .icon {
      @include center-placement;
      font-size: toRem(18);
      color: $color-white;
    }
  }

  .bottom-section {
    height: 100vh;
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

        video {
          height: auto;
          width: auto;
          max-height: 70vh;
          max-width: 100%;
        }
      }
    }
  }
}
</style>
