<template>
  <div class="quoteBlock">
    <div class="quotePad">
      <p>&ldquo;Everything should be made as simple as possible, but not simpler.&rdquo;</p>
      <cite>&ndash; Albert Einstein</cite>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  // @import '@/template-bourbon/assets/css/_fonts.scss';
  @import '@/template-bourbon/assets/css/bourbon-main.scss';

  .quoteBlock {
    background: darken($accent-red, 10);
    // margin-bottom: .5em;
    // padding: .75em 2em 1em;
    // @include clearfix;
    // text-align: center;
    display: flex;
    justify-content: center;
    // align-content: center;
    align-items: center;
    @include shadow;

    .quotePad {
      // padding: 0.0em 2em 0em;
    }

    p {
      font-size: 3.2vw;
      color: $ivory !important;
      // text-align: center;
      letter-spacing: .02em;
      font-weight: bold;
      line-height: 1.5em;
      // @include font-smoothing(on);

      @media only screen 
      and (min-device-width: 375px) 
      and (max-device-width: 660px)
      and (-webkit-min-device-pixel-ratio: 2)
      {
        //
      }
    }

    cite {
      font-family: $font-copy;
      font-size: 3.2vw;
      color: $ivory;
      font-style: italic;
      // margin: 0 4em 0 0;
      display: block;
      text-align: right;
      letter-spacing: .02em;
    }
  }
</style>
