<template>
  <div class="contact-section position-relative">
    <div class="gradely-container px-2 px-sm-3 mx-auto position-relative">
      <div class="help-text text-center color-text">Have more Questions?</div>

      <!-- CONTACT BUTTON    -->
      <router-link to class="btn btn-default-outline mgt-25">
        <img
          :src="loadAsset('Whatsapp.png')"
          alt="contact-gradely"
          class="mgr-10"
        />
        <div class="text">CONTACT US</div>
      </router-link>

      <!-- WAVY LINE -->
      <div class="wavy-line mgt-30">
        <img :src="loadAsset('wavy-line.png')" alt="" />
      </div>

      <!-- PHONE NUMBER  -->
      <div class="phone text-center color-text mgt-25">
        Or you can call us on:
        <a href="tel:+2348100598268" class="brand-tonic font-weight-600"
          >(+234) 810 059 8268</a
        >
      </div>

      <!-- SPONSORS -->
      <div class="sponsor-section">
        <div
          class="
            title-text
            text-center
            border-grey-dark
            font-weight-700
            mgb-20
            text-uppercase
          "
        >
          Proudly supported and endorsed by
        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-12 sponsor-row">
            <img
              :src="loadAsset('co-creative.png', 'tutor')"
              alt="co-creative"
            />

            <img :src="loadAsset('ng-hub.png', 'tutor')" alt="ng-hub" />

            <img
              :src="loadAsset('naps.png', 'tutor')"
              alt="national-association-of-propietors"
            />

            <img :src="loadAsset('wizitup.png', 'tutor')" alt="wizitup" />

            <img
              :src="loadAsset('micro-traction.png', 'tutor')"
              alt="micro-traction"
            />

            <img
              :src="loadAsset('min-edu.png', 'tutor')"
              alt="ministry-of-education"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- BLUE SHADE -->
    <img
      v-lazy="loadAsset('blue-shade-edge.png', 'tutor')"
      alt=""
      class="blue-shade-edge"
    />
  </div>
</template>

<script>
export default {
  name: "contactSection",
};
</script>

<style lang="scss" scoped>
.contact-section {
  margin: toRem(40) 0 toRem(70);

  .gradely-container {
    @include flex-column-center;
    justify-content: flex-start;

    .help-text {
      @include font-height(19, 32);
    }

    .btn {
      padding: toRem(13) toRem(36);
    }

    .sponsor-section {
      margin: toRem(70) 0 0;

      .title-text {
        @include font-height(17, 22);
      }

      .sponsor-row {
        @include flex-row-center-wrap;

        img {
          margin: 0 toRem(18);
        }
      }
    }
  }

  .blue-shade-edge {
    position: absolute;
    bottom: toRem(-400);
    left: 0;
    z-index: -1;
  }
}
</style>
