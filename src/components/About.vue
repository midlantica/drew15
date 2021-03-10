<template>
  <div class='about'>
    <div class='flagBox'>
      <div class='flag'>&nbsp;</div>
    </div>
    <p>I’m half-English/half-American, worked in Advertising most my life, switched to web in late ’90s. Travelled the world, enjoy reading history, love NFL, Rugby, Footy.</p>
  </div>
</template>

<style lang="scss" scoped>
  // @import '@/assets/css/main.scss';
  // @import '@/template-techy/assets/css/techy-main.scss';

  .about {
    background: #fbf3bb;
    padding: 0.75rem 1.1rem .75rem 1.1rem;
    // display: block;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    //
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: center;
    border-radius: 2px;
    // margin: 0rem 0 .5rem;
    @include box-shadow(0px, 1px, 2px, 0px, hsla(0, 0%, 0%, 0.5));

    @media (max-width: $breakThou) {
      margin: 0rem 0 .5rem;
    }

    @media (max-width: $breakOne) {
      margin: 0 0 .5rem;
    }

    @media (max-width: $breakTwo) {
      // margin: 0 0 .5rem;
    }

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
    font-size: .9em;
    line-height: 1.4em;
    letter-spacing: 0.05em;
    //
    align-content: center;
    align-items: center;
    justify-content: center;
    align-self: center;
    text-align: left;

    @media (max-width: $breakThou) {
      font-size: 1rem;
    }

    @media (max-width: $breakOne) {
      // font-size: 1rem;
    }

    @media (max-width: $breakTwo) {
      // font-size: 1rem;
    }

    @media (max-width: $breakThree) {
      // font-size: 1rem;
    }

    @media (max-width: $breakFour) {
      text-align: center;
    }
  }

  .corp .about {
    @include box-shadow(0px, 0px, 3px, -1px, hsla(0, 14%, 22%, 0.5));
    border-radius: 2px;
    font-family: Alegreya;
  }

  .punk .about {
    //
    p {
      margin: .25rem auto;
    }
  }

  .corp .about {
    //
    p {
      font-family: Alegreya, 'Times New Roman', Times, serif !important;
      font-size: 1rem;
      letter-spacing: .001rem;
      line-height: 1.4rem;
      margin: 0;
      font-weight: 500;

      @media (max-width: $breakThou) {
        font-size: 1.15rem;
        line-height: 1.75rem;
      }

      @media (max-width: $breakOne) {
        // font-size: 1.85vw;
      }

      @media (max-width: $breakTwo) {
        font-size: 1rem;
        line-height: 1.5rem;
      }

      @media (max-width: $breakThree) {
        // font-size: 3vw;
      }
    }
  }

</style>
