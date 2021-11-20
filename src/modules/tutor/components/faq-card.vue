<template>
  <div class="faq-card">
    <div class="top pointer" @click="toggleAccordion">
      <div class="top-text font-weight-500">{{ faq.title }}</div>

      <div
        class="icon color-ash smooth-transition"
        :class="show_accordion ? 'icon-minus' : 'icon-plus'"
      ></div>
    </div>

    <div class="bottom color-ash smooth-transition" v-if="show_accordion">
      {{ faq.value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "faqCard",

  props: {
    faq: {
      type: Object,
      default: () => ({
        title: "1. What does my child need to use Gradely?",
        value:
          "All you need to get started is a computer or tablet that has access to the internet.",
      }),
    },
  },

  data: () => ({
    show_accordion: true,
  }),

  methods: {
    toggleAccordion() {
      this.show_accordion = !this.show_accordion;
    },
  },
};
</script>

<style lang="scss" scoped>
.faq-card {
  padding: toRem(25) toRem(20);
  border-bottom: toRem(2) solid #dbf5f8;

  .top {
    @include flex-row-between-nowrap;

    .top-text {
      @include font-height(16, 26);
      color: #004680;
    }

    .icon {
      font-size: toRem(20);
    }
  }

  .bottom {
    @include font-height(13.5, 21);
    margin-top: toRem(16);
  }
}
</style>
