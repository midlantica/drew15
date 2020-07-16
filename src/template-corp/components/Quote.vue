<template>
  <div class='quoteBlock'>
    <p>&ldquo;Everything should be made as simple as possible, but not simpler.&rdquo; &ndash; Albert Einstein</p>
  </div>
</template>

<style lang='scss' scoped>
  @import '@/template-corp/assets/css/corp-main.scss';

  .quoteBlock {
    background: $blue-dark;
    padding: 1em 2em 1.2rem;
    @include shadow;
    text-align: center;

    p {
      font-family: $font-head;
      font-weight: 400;
      font-size: 1em;
      color: $ivory;
      text-align: center;
      letter-spacing: -0.00rem;
      letter-spacing: 0.07rem;
      line-height: 1.6;

      @media (max-width: $breakThou) {
        //
      }

      @media (max-width: $breakOne) {
        //
      }

      @media (max-width: $breakTwo) {
        font-size: .85rem;
      }

      @media (max-width: $breakThree) {
        //
      }

      @media (max-width: $breakFour) {
        //
      }

    }
  }
</style>
