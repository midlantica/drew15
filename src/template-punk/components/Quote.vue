<template>
  <div class="quoteBlock">
    <p>&ldquo;Everything should be made as simple as possible, but not simpler.&rdquo;</p>
    <cite>&ndash; Albert Einstein</cite>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/template-punk/assets/css/punk-main.scss';

  .quoteBlock {
    background: rgba(7, 97, 7, 0.79);
    // background: transparentize($purple, .35);
    // margin-bottom: .5em;
    padding: 1em 2em 1em;
    // @include shadow;
    // @include clearfix;
    text-align: center;

    p {
      font-size: 0.8em;
      color: $ivory !important;
      text-align: center;
      letter-spacing: .08em;
      font-weight: bold;
    }

    cite {
      font-family: $font-copy;
      font-size: .7em;
      color: $ivory;
      font-style: italic;
      margin: 0 4em 0 0;
      display: block;
      text-align: right;
      letter-spacing: .08em;
    }
  }
</style>
