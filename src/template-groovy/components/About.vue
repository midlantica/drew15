<template>
  <div class="about">
    <img class="flag">
    <p>I’m half-English/half-American, worked in Advertising most my life, switched to web in late ’90s. Travelled the world, enjoy reading history, love NFL, Rugby, Footy.</p>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  @import '@/template-bourbon/assets/css/bourbon-main.scss';
  
  $breakThou: 1024px;
  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 530px;

  .about {
    margin-bottom: .75em;
    background: $groovy-yellow;
    // width: calc(100%);
    // width: 500px;
    @include shadow;
    @include clearfix;
    @include font-smoothing(on);
    margin: 0em auto 1em;
    border-radius: .5em;
    box-shadow: 0px 6px 0px transparentize($black, .75);

    .flag {
      width: 104px;
      height: 59px;
      margin: 1em ;
      float: left;
      clear: left;
      background: url('/img/brit-amer_flag.svg');
      background-repeat: none;
      background-size: cover;
    }

    p {
      color: lighten($grey, 15);
      font-size: .9em;
      font-weight: 400;
      margin: 1em 1em 0.7em 10.7em;
      padding: 0.9em 0 0 0;

      @media (max-width: $breakThou) {
        //
      }

      @media (max-width: $breakOne) {
        //
      }

      @media (max-width: $breakTwo) {
        //
      }

      @media (max-width: $breakThree) {
        //
      }

    }
  }

</style>
