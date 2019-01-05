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

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      // display: block;
      clear: both;
      margin-top: .5em;
      margin-bottom: .5em;
      grid-row-gap: 0em;
    }

    .quotePad {
      // padding: 0.0em 2em 0em;
    }

    p {
      font-size: 0.9em;
      color: $ivory !important;
      // text-align: center;
      letter-spacing: .05em;
      font-weight: bold;
      line-height: 1.5em;
      // @include font-smoothing(on);

      @media only screen 
      and (min-device-width: 700px) 
      and (max-device-width: $breakThou)
      {
        // font-size: 1.5vw;
        font-size: 0.9em;
      }

      @media only screen 
      and (min-device-width: 0px) 
      and (max-device-width: 700px)
      {
        // font-size: .9vw;
        font-size: 0.9em;
      }

    }

    cite {
      font-family: $font-copy;
      font-size: 0.9em;
      color: $ivory;
      font-style: italic;
      // margin: 0 4em 0 0;
      display: block;
      text-align: right;
      letter-spacing: .02em;

      @media only screen 
      and (min-device-width: 700px) 
      and (max-device-width: $breakThou)
      {
        // font-size: 1.5vw;
        font-size: 0.9em;
      }

      @media only screen 
      and (min-device-width: 0px) 
      and (max-device-width: 700px)
      {
        // font-size: 3vw;
        font-size: 0.9em;
      }


    }
  }
</style>
