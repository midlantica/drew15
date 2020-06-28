<template>
  <div class="quoteBlock">
    <p>&ldquo;Everything should be made as simple as possible, but not simpler.&rdquo; &ndash; Albert Einstein</p>
  </div>
</template>

<style lang="scss" scoped>
  // @import '@/assets/css/main.scss';
  @import '@/template-corp/assets/css/corp-main.scss';

  .quoteBlock {
    background: $blue-dark;
    // margin-bottom: .5em;
    padding: 1em 2em 1.2rem;
    @include shadow;
    // @include clearfix;
    text-align: center;

    p {
      font-family: $font-head !important;
      font-size: 1.15em;
      color: $ivory;
      text-align: center;
      letter-spacing: -0.00rem;
      // word-spacing: .1em;
      font-weight: 500;
      letter-spacing: 0.07rem;
      line-height: 1.6;
    }
  }
</style>
