<template>
  <div class="about">
    <div class="flag" />
    <p>I'm half-English/half-American, worked in Advertising most my life, switched to web in late '90s. Travelled the world, enjoy reading history, love NFL, Rugby, Footy.</p>
  </div>
</template>

<style lang="scss">
  @import '@/assets/css/main.scss';
  // @import '@/template-techy/assets/css/techy-main.scss';

  $breakThou: 1024px;
  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 530px;

  .about {
    background: lighten($mango, 30);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    padding: .5em 1em .5em .75em;
    margin-bottom: 1em;
    
    @media (max-width: $breakOne) {
      margin-top: initial;
    }

    @media (max-width: $breakTwo) {
      margin-top: initial;
    }

    .flag {
      background: url('/img/brit_amer_flag.svg');
      background-repeat: no-repeat;
      background-size: contain;
      width: calc(100%);
      min-width: 20%;
      height: 72px;
      border: none !important;
      flex-shrink: 1;
      margin: 0.5em 1em 0.5em .5em;
      // margin: 1em 1em 1em .5em;
      border: 0;
      align-items: center;
      align-content: center;
      align-self: center;

      @media (max-width: $breakThou) {
        width: calc(30%);
        min-width: 17%;
      }

      @media (max-width: $breakOne) {
        width: calc(36%);
        min-width: 20%;
      }

      @media (max-width: $breakTwo) {
        width: calc(60%);
        height: 54px;
        min-width: 20%;
      }

      @media (max-width: $breakThree) {
        width: calc(30%);
        // height: 54px;
        // min-width: 30%;
      }

    }

    p {
      font-family: initial !important;
      color: lighten($grey, 15);
      font-size: .85em;
      line-height: 1.5em;
      font-weight: 500;
      letter-spacing: 0.05em;
      flex-grow: 1;

      @media (max-width: $breakThou) {
        font-size: 2vw;
      }

      @media (max-width: $breakOne) {
        font-size: 2.25vw;
      }

      @media (max-width: $breakTwo) {
        font-size: 2.75vw;
      }

      @media (max-width: $breakThree) {
        font-size: 3.25vw;
      }

    }

  }

</style>







