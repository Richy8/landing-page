<template>
  <div class="plan-card rounded-20 white-text-bg">
    <!-- PLAN TITLE  -->
    <div class="plan-title brand-navy font-weight-700 text-center">
      1-on-1 Tutoring
    </div>

    <!-- PLAN AMOUNT  -->
    <div class="plan-amount brand-navy font-weight-700 text-center">₦2,500</div>

    <!-- META TEXT  -->
    <div class="meta-text color-grey-dark text-center">Per Hour</div>

    <!-- PLAN DESCRIPTION -->
    <div class="plan-description color-ash text-center">
      Private lessons focused on your child’s specific needs and goals.
    </div>

    <!-- PLAN HIGHLIGHTS -->
    <div class="plan-highlight">
      <div class="icon icon-accept"></div>
      <div class="text">Rewatch class recordings</div>
    </div>

    <div class="plan-highlight">
      <div class="icon icon-accept"></div>
      <div class="text">4,000+ Assessment per Class & Weekly Reports</div>
    </div>

    <div class="plan-highlight">
      <div class="icon icon-accept"></div>
      <div class="text">
        Illustrative Video Lessons comes with each Monthly Plan
      </div>
    </div>

    <!-- BOOK BUTTON -->
    <button class="btn btn-accent mgt-10">Book a Paid Session</button>
  </div>
</template>

<script>
export default {
  name: "planCard",
};
</script>

<style lang="scss" scoped>
.plan-card {
  padding: toRem(35) toRem(20);
  @include flex-column-center;
  justify-content: flex-start;
  border: 1px solid #d5d5d5;
  height: toRem(470);
  width: 32%;

  .plan-title {
    @include font-height(17, 30);
    margin-bottom: toRem(10);
  }

  .plan-amount {
    @include font-height(28, 38);
    letter-spacing: 0.05em;
  }

  .meta-text {
    @include font-height(12.5, 18);
    margin-bottom: toRem(15);
  }

  .plan-description {
    @include font-height(13.5, 24);
    margin-bottom: toRem(20);
    width: 80%;
  }

  .plan-highlight {
    @include flex-row-start-nowrap;
    align-items: flex-start;
    margin-bottom: toRem(14);
    width: 100%;

    .icon {
      @include font-height(14, 24);
      margin-right: toRem(14);
      color: $brand-inverse;
      position: relative;
      top: toRem(1.25);
    }

    .text {
      @include font-height(13, 23);
      color: $color-ash;
    }
  }

  .btn {
    padding: toRem(13.5) toRem(46);
    font-size: toRem(11.5) !important;
  }
}
</style>
