<template>
  <div class="about">
    <div class="flagFlex">
      <img src="/img/brit_amer_flag.svg" class="flag">
    </div>
    <p>I'm half-English/half-American, worked in Advertising most my life, switched to web in late '90s. Travelled the world, enjoy reading history, love NFL, Rugby, Footy.</p>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  // @import '@/template-techy/assets/css/techy-main.scss';

  $breakThou: 1024px;
  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 430px;
  
  .about {
    background: #FBF3BB; 
    @include shadow;
    padding: 0.8em 1.1em 0.8em 1.1em;
    //
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;

    @media (max-width: $breakThou) {
      //
    }

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      margin-top: .5em;
      margin-bottom: .5em;
    }

  }

    
  .flagFlex {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    align-self: center;

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      display: block;
      float: left;
      clear: left;
    }
  }

  .flag {
    // background: url('/img/brit_amer_flag.svg');
    // background-repeat: no-repeat;
    // background-size: contain;
    width: 100px;
    max-width: 100px;
    // height: 60px;
    // max-height: 60px;
    margin-right: 1em; 
    // flex-grow: 1;
    // align-content: center;
    // align-items: center;
    // justify-content: center;
    // align-self: center;

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

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      display: table-cell;
      vertical-align: middle;
      // float: left;
      // clear: left;
      // background: purple;
      // border: 2px solid red;
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
    // align-content: center;
    // align-items: center;
    // justify-content: center;
    // align-self: center;

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

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      font-size: .6em;
      // display: block;
      float: left;
      display: table-cell;
      vertical-align: middle;
      // clear: left;
    }

  }

  

</style>







