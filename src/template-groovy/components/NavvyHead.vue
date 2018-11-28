<template>
  <nav>

    <div class="groovyCircle">
      <router-link to="/Groovy/Extras" class="drewhead"/>
    </div>

    <div class="headyStuff">

      <a href="/" class="DHmast">
        <mastDrew class="svgArt mastDrew" />
        <mastHarper class="svgArt mastHarper" />
      </a>

      <div class="jobDesc">
        <h2>ui/ux designer + front&nbsp;end&nbsp;dev</h2>
      </div>

      <div class="contact">
        <p class='email'>
          <a href="mailto:druharper@gmail.com">druharper@gmail.com</a>
        </p>
        <p class='resume'>Resume: 
          <a href="img/resume/drew_harper_resume_portfolio.pdf">Lg</a>/<a href="img/resume/drew_harper_resume_portfolio_short.docx">Sm</a>
        </p>
      </div>

    </div>

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
  // @import '@/assets/css/_colors.scss';
  @import '@/assets/css/main.scss';
  @import '@/template-groovy/assets/css/groovy-main.scss';

  $breakThou: 1024px;
  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 430px;

  nav {
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
    // justify-content: center;
    // align-items: center;
    padding: .5em 1.25em;
  }

  nav .groovyCircle {
    width: 210px;
    height: 210px;
    box-shadow: 8px 6px 0px rgba(37, 37, 37, .25);
    border-radius: 10em;
    position: relative;
    top: -2em;
    left: -4em;
    float: left;
    z-index: 5;
    //
    background-image: radial-gradient(
      // 0 - 25%
      $groovy-aqua 0%,
      $groovy-aqua 35%,
      // 25% - 50%
      $groovy-yellow 35%,
      $groovy-yellow 47%,
      // 50% - 75%
      $groovy-orange 47%,
      $groovy-orange 59%,
      // 75% - 100%
      $groovy-red 59%,
      $groovy-red 100%
    );
    clip-path: polygon(
      21% 0%, 100% 0%, 110% 50%,
      100% 100%, 21% 110%
    );

    a.drewhead {
      background-image: url(/img/drew_mug.png);
      background-repeat: no-repeat;
      background-size: cover;
      width: 98px;
      height: 119px;
      display: block;
      position: relative;
      top: 2.8em;
      left: 3.5em;
      // background-position: 0px 0px;
    }
  }

  nav .headyStuff {
    // display: block;
    width: 36%;
    position: relative;
    left: -3em;
    float: left;
    margin: 1.5em -3em 0em 0em;
    // width: auto;
    // border: 2px dashed blue;

    @media (max-width: $breakThou) {
      position: initial;
      float: initial;
      left: 0em;
      justify-content: center;
      width: 80% !important;
      // float: initial;
      // width: 100%;
      // margin-top: 1em;
      // background: aqua;
      grid-column-gap: 1em;
    }

    @media (max-width: $breakOne) {
      position: initial;
      float: initial;
      left: 0em;
      justify-content: left;
      width: 100% !important;
      // float: initial;
      // width: 100%;
      // margin-top: 1em;
      // background: aqua;
    }

    // @media (max-width: 1000px) {
    //   // width: 50vw;
    //   width: 80%;
    //   margin-top: 1em;
    //   // background: lightgreen;
    // }

    @media (max-width: $breakOne) {
      // width: 50vw;
      width: 80%;
      margin-top: 1.5em;
      // background: orange;
    }

    // @media (max-width: 700px) {
    //   // width: 50vw;
    //   width: 80%;
    //   margin-top: 2em;
    //   // background: orange;
    // }

    @media (max-width: $breakTwo) {
      margin-top: 2.5em;
      width: 80%;
      // background: orange;
    }

    // @media (max-width: 600px) {
    //   // width: 50vw;
    //   width: 80%;
    //   margin-top: 3em;
    //   // background: orange;
    // }

    .DHmast {
      display: grid;
      grid-template-columns: 4fr 6fr;
      // grid-template-rows: auto;
      // grid-gap: 1em;
      align-items: center;
      margin: 0 auto;
      grid-column-gap: 1.5em;
      //

      @media (max-width: $breakThou) {
        grid-template-columns: auto;
        justify-content: center;
        justify-items: center;
        grid-gap: 1em;
        // grid-column-gap: 1.5em;
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

      .svgArt {
        height: 3.1em;
        // margin: 2em 0 0em 1em;
        // display: block;
        // float: left;
        // flex-grow: 1;

        @media (max-width: $breakThou) {
          height: 8vw;
        }
        @media (max-width: $breakOne) {
          height: 8vw;
        }
        @media (max-width: $breakTwo) {
          height: 11vw;
        }
        @media (max-width: $breakThree) {
          height: 12vw;
        }

      }
      .mastDrew {
        // width: 17em;
        // height: 12vw;
        // margin-top: -1.5em; 
        grid-column: 1 / 2; 
        // grid-row: 1 / 3;

        @media (max-width: $breakThou) {
          grid-column: 1 / 2 ; 
          // grid-row: 1 / 1;
          // align-self: end;
          // margin-bottom: -1em;
          // justify-self: center;
          // display: block;
        }

        @media (max-width: $breakOne) {
          // width: 45vw;
          // height: 17vh;
          // margin-top: 1em;
        }

        @media (max-width: $breakTwo) {
          // width: 60vw;
          // height: 17vh;
          // margin-top: 1em;
          // order: 1;
        }
      }

      .mastHarper {
        // width: 24em;
        // height: 20vh;
        // transform: rotate(1deg);
        // margin-top: -0.6em;
        // margin-left: 2em;
        display: initial;
        // float: initial;
        grid-column: 2 / 3; 
        // grid-row: 1 / 3;

        @media (max-width: $breakThou) {
          grid-column: 3 / 4; 
          // grid-row: 2 / 3;
        }

        @media (max-width: $breakOne) {
          // width: 45vw;
          // height: 17vh;
          // margin-top: 1em;
        }

        @media (max-width: $breakTwo) {
          // width: 86vw;
          // height: 20vh;
          // margin-top: -1.5em;
          margin-left: 0;
          margin-top: 0;
        }
      }

    }

  }

  nav .headyStuff .contact {
    background: none;

    @media (max-width: $breakThou) {
      margin: 0 auto;
      text-align: center;
    }

    p {
      display: inline-block;
      font-family: $font-copy;
      font-size: 1.17em;
      letter-spacing: 0.0em;
      text-transform: none;
      line-height: 0.7em;
      text-align: center;

      &:nth-child(1) {
        margin: 0;
      }

      &:nth-child(2) {
        // margin-left: .25em !important;
        margin: 0 0 0 0.5em;
      }

      a {
        color: $ivory;
        text-decoration: none;

        &:link {
          color: $ivory;
          text-decoration: none;
        }

        &:hover {
          color: lighten($accent, 10) !important;
        }
      }

      @media (max-width: $breakThou) {
        font-size: 2.125vw;
        line-height: 0.5em;
        text-align: center;
        margin: 0 auto;
        // background: lightgreen;
      }

      @media (max-width: $breakOne) {
        font-size: 2.125vw;
        text-align: center;
        margin: 0 auto;
        // background: orange;
      }
    }
  }

  nav .jobDesc {
    margin: 1em 0em;
    // margin: -2em 0em 1em 12em;
    text-align: center;
    // margin-top: -1em;
    // @include clearfix;

    @media (max-width: $breakThou) {
      margin: 1em 0em;
      text-align: center;
    }

    @media (max-width: $breakOne) {
      margin: 1em 0em;
    }

    @media (max-width: $breakTwo) {
      //

      &:nth-child(1) {
        //
      }

      &:nth-child(2) {
        //
      }
    }

    h2 {
      margin: 0;
      font-family: Dosis;
      font-weight: 400;
      color: $ivory;
      text-transform: lowercase;
      font-size: 1.45em;
      line-height: 0.5em;
      letter-spacing: .03em;

      &:nth-child(1) {
        //
      }

      &:nth-child(2) {
        // font-size: 1.75em;
      }

      @media (max-width: $breakThou) {
        display: inline;
        font-size: 1.85em !important;
        margin-top: -3px;

        &:nth-child(1) {
          //
        }

        &:nth-child(2) {
          margin-left: .25em !important;
        }
      }

      @media (max-width: $breakOne) {
        display: inline;
        font-size: 1.85em !important;
        margin-top: -3px;

        &:nth-child(1) {
          //
        }

        &:nth-child(2) {
          margin-left: .25em !important;
        }
      }

      @media (max-width: $breakTwo) {
        // font-size: 1.25em !important;
      }

    }
  }




</style>
