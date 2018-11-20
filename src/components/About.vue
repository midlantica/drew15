<template>
  <div class="about">
    <div class="aboutBox">
      <div class="flagFlex">
        <div class="flag" />
      </div>
      <p>I'm half-English/half-American, worked in Advertising most my life, switched to web in late '90s. Travelled the world, enjoy reading history, love NFL, Rugby, Footy.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  // @import '@/template-techy/assets/css/techy-main.scss';

  $breakThou: 1024px;
  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 530px;
  
  .about {
    background: #FBF3BB; 
    @include shadow;
    padding: 0.8em 1.1em 0.8em 1.1em;
    //
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-self: center;

    @media (max-width: $breakThou) {
      //
    }

  }

  .aboutBox {
    // background: lightgrey;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    // @include shadow;
    
    @media (max-width: $breakOne) {
      // margin-top: initial;
    }

    @media (max-width: $breakTwo) {
      // margin-top: initial;
    }
    
    .flagFlex {
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      justify-content: center;
      align-self: center;
    }

    .flag {
      background: url('/img/brit_amer_flag.svg');
      background-repeat: no-repeat;
      background-size: contain;
      width: 100px;
      max-width: 100px;
      height: 60px;
      max-height: 60px;
      margin-right: 1em; 
      flex-grow: 1;
      align-content: center;
      align-items: center;
      justify-content: center;
      align-self: center;

      @media (max-width: $breakThou) {
        // width: calc(30%);
        // min-width: 17%;
      }

      @media (max-width: $breakOne) {
        // width: calc(36%);
        // min-width: 20%;
      }

      @media (max-width: $breakTwo) {
        // width: calc(60%);
        // height: 54px;
        // min-width: 20%;
      }

      @media (max-width: $breakThree) {
        // width: calc(30%);
        // height: 54px;
        // min-width: 30%;
      }

    }

    p {
      // font-family: initial !important;
      color: lighten($grey, 15);
      font-size: .95em;
      line-height: 1.4em;
      // font-weight: 500;
      letter-spacing: 0.05em;
      // flex-grow: 1;
      align-content: center;
      align-items: center;
      justify-content: center;
      align-self: center;

      @media (max-width: $breakThou) {
        font-size: 1.8vw;
        // color: red;
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







