<template>
  <transition name="bounce7" appear>
    <div class='quoteBlock'>
      <div class='quotePad'>
        <p>&ldquo;Everything should be made as simple as possible, but not simpler.&rdquo;</p>
        <cite>&ndash; Albert Einstein</cite>
      </div>
    </div>
  </transition>
</template>

<style lang='scss' scoped>
  @import '@/template-modern/assets/css/modern-main.scss';

  .quoteBlock {
    background: darken($accent-red, 10);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75em 2em 1em;
    text-align: center;
    border-radius: 2px;
    @include box-shadow(0px, 1px, 2px, 0px, hsla(0, 0%, 0%, 0.5));

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
      clear: both;
      margin-top: 0.5em;
      margin-bottom: 0.5em;
      grid-row-gap: 0em;
    }

    .quotePad {
      text-align: center !important;
    }

    p {
      font-size: 0.9em;
      color: $ivory !important;
      letter-spacing: 0.05em;
      line-height: 1.5em;
      text-align: center;

      @media only screen and (min-device-width: 700px) and (max-device-width: $breakThou) {
        font-size: 0.9em;
      }

      @media only screen and (min-device-width: 0px) and (max-device-width: 700px) {
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
      letter-spacing: 0.02em;

      @media only screen and (min-device-width: 700px) and (max-device-width: $breakThou) {
        // font-size: 1.5vw;
        font-size: 0.9em;
      }

      @media only screen and (min-device-width: 0px) and (max-device-width: 700px) {
        // font-size: 3vw;
        font-size: 0.9em;
      }
    }
  }
</style>
