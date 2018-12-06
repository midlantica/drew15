<template>
  <nav>
    
    <div class="greenBar">&nbsp;</div>
    <p class='email'><a href="mailto:druharper@gmail.com">druharper@gmail.com</a></p>

    <div class="mastMain">
      <mastDrew class="svgArt mastDrew" />
      <mastHarper class="svgArt mastHarper" />
      <a class="DrewHead" href="/Extras">&nbsp;</a>
    </div>

    <p class='resume'>Resume: 
      <a href="img/resume/drew_harper_resume_portfolio.pdf">Large</a>/
      <a href="img/resume/drew_harper_resume_portfolio_short.docx">Small</a>
    </p>

  </nav>
</template>

<script>
  import mastDrew from './masthead/mastDrew'
  import mastHarper from './masthead/mastHarper'
  export default {
    components: {
      mastDrew,
      mastHarper
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/_colors.scss';
  // @import '@/assets/css/main.scss';
  @import '@/template-punk/assets/css/punk-main.scss';

  $outRed: rgba(221, 9, 22, .3);
  $outBlue: rgba(92, 201, 245, .3);

  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 430px;

  nav {
    display: flex;
    flex-direction: column;
    align-content: center;
    // align-items: center;
    padding: .5em 1em;

    @media (max-width: $breakOne) {
      justify-content: center;
      align-content: center;
      align-items: center;
      // width: 50%;
      // margin: 0 auto;
    }
    
    .greenBar {
      display: block;
      // width: 1024px;
      width: 100%;
      max-width: 1024px;
      z-index: 0;
      position: absolute;
      top: 0;
      left: 50%;
      height: 5em;
      align-self: center;
      transform: translate(-50%, 0%);
      //
      filter: saturate(2.5);
      background: rgba(0, 128, 0, 0.25);
      // background: transparentize(green, .5);
    }
    
    p.email {
      font-family: $font;
      font-size: 1.5em;
      color: $ivory;
      letter-spacing: 0.03em;
      text-shadow: 1px 1px 2px black;
      text-transform: lowercase;
      align-self: flex-end;
      transform: rotate(-1deg);
      margin-top: -0.4em;

      a {
        color: $ivory;
        letter-spacing: 0.05em;
        font-size: .9em;
      }

      @media (max-width: $breakOne) {
        align-self: center;
      }
    }

    // ###############################
    // ###############################

    .mastMain {
      display: flex;
      flex-direction: row;
      flex-wrap: no-wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      margin-top: -1em;
      z-index: 2;
      //

      @media (max-width: $breakOne) {
        // flex-grow: 1;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        align-items: center;
        width: 80%;
      }
      
      @media (max-width: $breakTwo) {
        // flex-grow: 1;
        // flex-wrap: wrap;
        // justify-content: center;
        // align-content: center;
        // align-items: center;
        width: 100%;
      }
      
      .svgArt {
        //
      }

      .svgArt.mastDrew {
          width: 32vw;
          // height: 12vw;
          transform: rotate(1deg);
          margin-top: -1.5em;
          order: 1;

          @media (max-width: $breakOne) {
            width: 49vw;
            // height: 17vh;
            margin-top: 1em;
            order: 1;
          }

          @media (max-width: $breakTwo) {
            width: 55vw;
            // height: 17vh;
            // margin-top: 1em;
            // order: 1;
          }
        }
      }

      .svgArt.mastHarper {
        width: 48vw;
        // height: 20vh;
        transform: rotate(1deg);
        margin-top: -0.6em;
        order: 2;

        @media (max-width: $breakOne) {
          order: 3;
          width: 49vw;
          // height: 20vh;
          // margin-top: -1.5em;
          flex-grow: 1;
        }

        @media (max-width: $breakOne) {
          order: 3;
          width: 38vw;
          // height: 20vh;
          // margin-top: -1.5em;
          flex-grow: 1;
        }

      }

      a.DrewHead {
        display: block;
        // min-width: 114px;
        // height: 132px;
        background-image: url(/img/drew_mug_punk.png);
        filter:hue-rotate(360deg);
        //
        background-repeat: no-repeat;
        background-size: contain;
        width: 158px;
        height: 139px;
        text-decoration: none;
        // display: block;
        // position: relative;
        // top: 2.8em;
        // left: 3.5em;
        // margin-left: .5em;
        // margin-top: 0.5em;
        order: 3;
        // flex-grow: 1;

        @media (max-width: $breakOne) {
          width: 116px;
          height: 126px;
          order: 2;
        }

        @media (max-width: $breakTwo) {
          width: 98px;
          height: 117px;
        }

        @media (max-width: $breakThree) {
          width: 75px;
          height: 82px;
        }

      }
    }
    

    // ###############################
    // ###############################

  p.resume {
    font-size: 1.5em;
    letter-spacing: 0.03em;
    text-shadow: 1px 1px 2px black;
    font-family: $font;
    // text-align: right;
    transform: rotate(1deg);
    // position: relative;
    // top: -0.8em;
    align-self: flex-end;
    // align-content: flex-end;
    // flex-grow: 1;
    margin-top: -0.6em;
    //
    a {
      // text-align: right;
      color: $ivory;
      margin: 0 .25em;
    }

    @media (max-width: $breakOne) {
      font-size: 1.25em;
      letter-spacing: .05em;
      align-self: center;
    }
  }


</style>
