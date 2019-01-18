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
    padding: .5em 2em .6em;
    @include shadow;
    // @include clearfix;
    text-align: center;

    p {
      font-family: $font-head !important;
      font-size: 1.15em;
      color: $ivory;
      text-align: center;
      letter-spacing: .09em;
      // word-spacing: .1em;
      font-weight: bold;
      @include font-smoothing(on);
    }

  }
</style>
