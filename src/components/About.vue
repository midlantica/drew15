<template>
  <div class="about">
    <div class="flagBox">
      <div class="flag">&nbsp;</div>
    </div>
    <p>{{ this.$root.aboutCopy }}</p>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  // @import '@/template-techy/assets/css/techy-main.scss';

  .about {
    background: #fbf3bb;
    padding: 0.8em 1.1em 0.8em 1.1em;
    // display: block;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    //
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: center;
    @include shadow;
    @include clearfix;

    @media (max-width: $breakFour) {
      flex-direction: column;
    }
  }

  .flagBox {
    // display: block;
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
    flex-basis: auto;

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

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
      // display: block;
      // float: left;
      // clear: left;
      // background: purple;
      //
      // border: 2px solid red;
      // width: 550px;
      // height: auto;
    }

    @media (max-width: $breakFour) {
      margin-bottom: 0.5em;
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

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
      // display: block;
      // float: left;
      // clear: left;
      // background: purple;
      // border: 2px solid red;
      // width: 105px;
      // height: 53px;
    }
  }

  p {
    display: block;
    color: lighten($grey, 15);
    font-size: 1em;
    line-height: 1.4em;
    letter-spacing: 0.05em;
    //
    align-content: center;
    align-items: center;
    justify-content: center;
    align-self: center;
    text-align: left;

    @media (max-width: $breakFour) {
      text-align: center;
    }
  }
</style>







