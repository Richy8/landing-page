<template>
  <div class="footer-base brand-navy-bg index-1">
    <div class="gradely-container px-2 px-sm-3 mx-auto">
      <!-- TOP SECTION -->
      <div class="top-section">
        <!-- IMAGE COLUMN  -->
        <div class="image-column">
          <img :src="loadAsset('GradelyIcon.svg')" alt="gradely_logo" />
        </div>

        <!-- GRADELY LINK COLUMN  -->
        <div class="link-column">
          <div class="title-text">Inside Gradely</div>

          <a href="https://gradely.ng/" class="link-text">Home</a>
          <a href="https://gradely.ng/about" class="link-text">About Gradely</a>
          <a href="https://gradely.ng/blog" class="link-text">Blog</a>
          <a href="https://gradely.ng/contact-us" class="link-text">Contact Us</a>
          <a href="https://gradely.ng/help-centre" class="link-text">Guides & How-tos</a>
        </div>

        <!-- PRODUCT LINK COLUMN  -->
        <div class="link-column">
          <div class="title-text">Products</div>

          <a href="https://gradely.ng/for-schools" class="link-text">For Schools</a>
          <a href="https://gradely.ng/for-parents" class="link-text">For Parents</a>
          <a href="https://summer.gradely.ng/#" class="link-text">Tutoring</a>
          <a href="https://summer.gradely.ng/#" class="link-text">Catchup!</a>
          <a href="https://summer.gradely.ng/#" class="link-text">Covid-19</a>
        </div>

        <!-- ACCOUNT LINK COLUMN  -->
        <div class="link-column">
          <div class="title-text">Account</div>

          <a href="https://app.gradely.ng/student/signup" class="link-text">Sign up as a Student</a>
          <a href="https://app.gradely.ng/parent/signup" class="link-text">Sign up as a Parent</a>
          <a href="https://app.gradely.ng/teacher/signup" class="link-text">Sign up as a Teacher</a>
          <a href="https://app.gradely.ng/school/signup" class="link-text">Sign up as a School</a>
          <a href="https://gradely.ng/for-schools/tutor_signup.html" class="link-text">Become a Tutor</a>
        </div>

        <!-- SUPPORT LINK COLUM  -->
        <div class="link-column">
          <div class="title-text">Support</div>

          <a href="https://wa.link/ydy5yo" class="link-text support-link-text">
            <img :src="loadAsset('CallPhone.png')" alt="call_gradely" />
            <div class="text">(+234) 810 059 8268</div>
          </a>

          <a href="" class="link-text support-link-text">
            <img :src="loadAsset('Mail.png')" alt="email_gradely" />
            <div class="text">support@gradely.ng</div>
          </a>

          <a href="mailto:support@gradely.ng" class="link-text support-link-text">
            <img :src="loadAsset('Whatsapp.png')" alt="whatsapp_gradely" />
            <div class="text">(+234) 810 059 8268</div>
          </a>

          <a href="https://gradely.ng/help-centre/" class="link-text support-link-text">
            <img :src="loadAsset('QuestionCircle.png')" alt="gradely_help" />
            <div class="text">Visi Help center</div>
          </a>

          <!-- SOCIAL ROW -->
          <div class="social-row">
            <a href="https://www.facebook.com/gradelyng/" class="social-link" title="Follow on facebook">
              <div class="icon icon-facebook"></div>
            </a>

            <a href="https://www.instagram.com/gradelyng/" class="social-link" title="Follow on instagram">
              <div class="icon icon-instagram"></div>
            </a>

            <a href="https://www.twitter.com/gradelyng" class="social-link" title="Follow on twitter">
              <div class="icon icon-twitter"></div>
            </a>

            <a href="https://www.youtube.com/channel/UCsiHe1Qm8SZ_8LD5zkEY1Rw/" class="social-link" title="Subscribe on youtube">
              <div class="icon icon-youtube"></div>
            </a>

            <a href="https://www.linkedin.com/company/gradelyng/about/" class="social-link" title="Connect on linkedin">
              <div class="icon icon-linkedin"></div>
            </a>
          </div>
        </div>
      </div>

      <!-- BOTTOM SECTION -->
      <div class="bottom-section">
        <!-- LEFT SECTION -->
        <div class="left-section">
          <div class="text border-grey-dark">
            Copyright 2020, Gradely Inc.. All rights reserved.
          </div>
        </div>

        <!-- RIGHT SECTION -->
        <div class="right-section">
          <a href="https://gradely.ng/terms/" class="text text-one">Terms & Conditions</a>
          <a href="https://gradely.ng/privacy-policy/" class="text text-two">Privacy Policies</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerBase",
};
</script>

<style lang="scss" scoped>
.footer-base {
  padding: toRem(60) 0;

  @include breakpoint-down(xl) {
    padding: toRem(45) 0;
  }

  .gradely-container {
    .top-section {
      @include flex-row-start-nowrap;
      align-items: flex-start;

      @include breakpoint-down(md) {
        @include flex-column-center;
        justify-content: flex-start;
      }

      .image-column {
        margin-right: toRem(70);

        @include breakpoint-down(xl) {
          margin-right: toRem(50);
        }

        @include breakpoint-down(lg) {
          margin-right: toRem(40);
        }

        @include breakpoint-custom-down(920) {
          margin-right: toRem(25);
        }

        @include breakpoint-down(md) {
          margin-right: 0;
          margin-bottom: toRem(30);
        }
      }

      .link-column {
        margin-right: toRem(140);

        @include breakpoint-down(xl) {
          margin-right: toRem(110);
        }

        @include breakpoint-down(lg) {
          margin-right: toRem(90);
        }

        @include breakpoint-custom-down(920) {
          margin-right: toRem(75);
        }

        @include breakpoint-custom-down(840) {
          margin-right: toRem(60);
        }

        @include breakpoint-down(md) {
          margin-right: 0;
          margin-bottom: toRem(30);
        }

        @include breakpoint-down(xs) {
          width: 100%;
        }

        &:last-of-type {
          margin-right: 0;
        }

        .title-text {
          color: rgba(245, 245, 245, 0.45);
          @include font-height(14.35, 19);
          margin-bottom: toRem(25);
          font-weight: 700;

          @include breakpoint-down(lg) {
            @include font-height(13.75, 18);
          }

          @include breakpoint-custom-down(840) {
            @include font-height(13.5, 18);
          }

          @include breakpoint-down(md) {
            text-align: center;
          }
        }

        .link-text {
          transition: all 0.4s ease-in-out;
          @include font-height(13.25, 18);
          color: $brand-inverse-light;
          margin-bottom: toRem(15);
          display: block;
          width: max-content;

          @include breakpoint-down(lg) {
            @include font-height(12.5, 16);
          }

          @include breakpoint-custom-down(840) {
            @include font-height(12.25, 16);
          }

          @include breakpoint-down(md) {
            margin-bottom: toRem(18);
            text-align: center;
            width: auto;
          }

          &:hover {
            color: $brand-accent;
          }
        }

        .support-link-text {
          @include font-height(13, 18);
          @include flex-row-start-nowrap;
          margin-bottom: toRem(16);

          @include breakpoint-custom-down(840) {
            margin-bottom: toRem(14);
          }

          @include breakpoint-down(md) {
            @include flex-row-center-nowrap;
          }

          img {
            position: relative;
            top: toRem(1);
            @include square-shape(20);
            margin-right: toRem(15);
          }

          .text {
            font-size: toRem(13.5);

            @include breakpoint-down(lg) {
              font-size: toRem(12.75);
            }

            @include breakpoint-custom-down(840) {
              font-size: toRem(12.25);
            }
          }
        }

        .social-row {
          @include flex-row-start-nowrap;
          margin-top: toRem(26);

          @include breakpoint-down(md) {
            @include flex-row-center-nowrap;
          }

          .social-link {
            background: $brand-inverse-light;
            @include square-shape(26);
            @include transition(0.4s);
            margin-right: toRem(20);
            border-radius: 50%;
            position: relative;

            @include breakpoint-custom-down(840) {
              margin-right: toRem(16);
            }

            @include breakpoint-down(md) {
              margin-right: 0;
              margin: 0 toRem(10);
            }

            .icon {
              @include center-placement;
              @include transition(0.4s);
              font-size: toRem(18);
              color: $brand-navy;
            }

            &:hover {
              background: $brand-accent-light;

              .icon {
                color: darken($brand-accent, 5%);
              }
            }
          }
        }
      }
    }

    .bottom-section {
      @include flex-row-between-wrap;
      @include font-height(12.5, 16);
      margin-top: toRem(55);

      @include breakpoint-custom-down(840) {
        @include font-height(12.25, 15);
      }

      @include breakpoint-down(sm) {
        margin-top: toRem(30);
        @include flex-column-center;
        justify-content: flex-start;
      }

      .right-section {
        @include flex-row-end-nowrap;
        color: $brand-inverse-light;
        @include transition(0.4s);

        @include breakpoint-down(sm) {
          @include flex-row-center-nowrap;
          margin-top: toRem(15);
          color: $border-grey;
        }

        &:hover {
          color: $brand-accent-light;
        }

        .text-one {
          margin-right: toRem(40);

          @include breakpoint-down(sm) {
            margin-right: 0;
          }
        }

        .text {
          @include breakpoint-down(sm) {
            margin: 0 toRem(10);
          }
        }
      }
    }
  }
}
</style>
