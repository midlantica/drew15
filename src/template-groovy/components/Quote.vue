<template>
  <div class='quoteBlock'>
    <p>&ldquo;Everything should be made as simple as possible, but not simpler.&rdquo;</p>
    <cite>&ndash; Albert Einstein</cite>
  </div>
</template>

<style lang='scss' scoped>
  @import '@/template-groovy/assets/css/groovy-main.scss';

  .quoteBlock {
    background: darken($accent-red, 10);
    padding: .75em 2em 1em;
    @include shadow;
    text-align: center;

    p {
      font-family: $font-copy;
      font-size: 0.8em;
      color: $ivory !important;
      text-align: center;
      letter-spacing: .08em;
      font-weight: bold;
      line-height: 2rem !important;
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
