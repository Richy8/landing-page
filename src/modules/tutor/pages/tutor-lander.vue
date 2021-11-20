<template>
  <div class="tutor-lander">
    <!-- TUTOR HERO SECTION -->
    <tutor-hero-section />

    <!-- RECENT TUTOR SECTION -->
    <recent-tutor-section />

    <!-- TUTOR PLANS SECTION -->
    <tutor-plans-section />

    <!-- PARENT SECTION -->
    <parent-section />

    <!-- TUTOR FAQ SECTION -->
    <tutor-faq-section />

    <!-- CONTACT SECTION -->
    <contact-section />
  </div>
</template>

<script>
import tutorHeroSection from "@/modules/tutor/components/tutor-hero-section";
import recentTutorSection from "@/modules/tutor/components/recent-tutor-section";

export default {
  name: "tuTorLander",

  metaInfo: {
    title: "Tutoring",
    titleTemplate: "%s - Gradely.Ng",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },

  components: {
    tutorHeroSection,
    recentTutorSection,
    tutorPlansSection: () =>
      import(
        /* webpackChunkName: "tutorPlansSection" */ "@/modules/tutor/components/tutor-plans-section"
      ),
    parentSection: () =>
      import(
        /* webpackChunkName: "parentSection" */ "@/modules/tutor/components/parent-section"
      ),
    tutorFaqSection: () =>
      import(
        /* webpackChunkName: "tutorFaqSection" */ "@/modules/tutor/components/tutor-faq-section"
      ),
    contactSection: () =>
      import(
        /* webpackChunkName: "contactSection" */ "@/modules/tutor/components/contact-section"
      ),
  },
};
</script>
