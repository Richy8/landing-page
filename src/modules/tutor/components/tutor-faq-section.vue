<template>
  <div class="tutor-faq-section">
    <div class="gradely-container px-2 px-sm-3 mx-auto position-relative">
      <!-- TITLE TEXT -->
      <div class="title-text brand-navy font-weight-700 text-center">
        Frequently Asked Questions
      </div>

      <!-- FAQ SECTION -->
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-md-8">
          <div class="faq-section">
            <faq-card
              v-for="(faq, index) in faq_data"
              :key="index"
              :faq="faq"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- ORANGE SHADE -->
    <img
      v-lazy="loadAsset('orange-shade.png', 'tutor')"
      alt=""
      class="orange-shade"
    />
  </div>
</template>

<script>
import faqCard from "@/modules/tutor/components/faq-card";

export default {
  name: "tutorFaqSection",

  components: {
    faqCard,
  },

  data: () => ({
    faq_data: [
      {
        title: "1. What does my child need to use Gradely?",
        value:
          "All you need to get started is a computer or tablet that has access to the internet.",
      },
      {
        title: "2. What class does my child have to be in?",
        value:
          "Our lessons cater to Nursery, Primary and Secondary School Students",
      },
      {
        title: "3. When do the group classes hold?",
        value:
          "Group classes hold on weekends. If you miss a class, you will be shared access to the recorded version.",
      },
      {
        title: "4. Can I reschedule my child's class?",
        value:
          "Only 1-on-1 classes can be rescheduled, with prior notice to the tutor.",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.tutor-faq-section {
  position: relative;
  margin: toRem(120) 0 toRem(70);

  .title-text {
    @include font-height(33, 58);
    margin-bottom: toRem(47);
  }

  .faq-section {
    border-top: toRem(2) solid #dbf5f8;
  }

  .orange-shade {
    position: absolute;
    top: toRem(60);
    right: 0;
  }
}
</style>
