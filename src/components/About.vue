<template>
  <div class="about">
    <div class="flagBox">
      <div class="flag">&nbsp;</div>      
    </div>
    <p>I'm half-English/half-American, worked in Advertising most my life, switched to web in late '90s. Travelled the world, enjoy reading history, love NFL, Rugby, Footy.</p>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  // @import '@/template-techy/assets/css/techy-main.scss';
  
  .about {
    background: #FBF3BB; 
    padding: 0.8em 1.1em 0.8em 1.1em;
    display: block; 
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    //
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: center;
    //
    @include shadow;
    @include clearfix;
  }

  .flagBox {
    display: block; 
    display: flex;
    flex-direction: column;
    // 
    align-content: center;
    align-items: center;
    justify-content: center;
    align-self: center;
    //
    float: left;
    clear: left;
    // width: 129px;
    // height: 76px;
    // margin-right: 1em;
    flex-basis: 70%;

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
      // width: 100px;
      // height: 84px;
      // background: red;
    }

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      display: block;
      float: left;
      clear: left;
      // background: purple;
      //
      // border: 2px solid red;
      width: 550px;
      // height: auto;
    }

  }

  .flag {
    display: block;
    background: url('/img/brit_amer_flag.svg');
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 1em;
    background-position-y: center;
    //
    align-content: center;
    align-items: center;
    justify-content: center;
    align-self: center;
    // max-width: 100px;
    // max-height: 60px;
    // margin-right: 1em; 
    // width: 129px;
    // height: 76px;
    width: 100px;
    height: 60px;

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
      // width: 100px;
      // height: 84px;
    }

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      // display: block;
      // float: left;
      // clear: left;
      // background: purple;
      // border: 2px solid red;
      width: 105px;
      height: 53px;
    }

  }

  p {
    display: block;
    color: lighten($grey, 15);
    font-size: .9em;
    line-height: 1.4em;
    letter-spacing: 0.05em;
    //
    align-content: center;
    align-items: center;
    justify-content: center;
    align-self: center;
  }

  

</style>







