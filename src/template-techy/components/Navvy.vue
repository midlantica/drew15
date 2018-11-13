<template>
  <nav>
    <div class="mastMain">

      <div class="masty">

        <div class="DHmast">
          <router-link class="drewHeadPic" to="/Techy/Extras" />
          <mastDrew class="svgArt mastDrew" />
          <mastHarper class="svgArt mastHarper" />
        </div>

        <div class="jobDesc clearfix">
          <h2>ui/ux designer +</h2>
          <h2>front&nbsp;end&nbsp;dev</h2>
        </div>
      </div>

      <div class="bar">
        <div class="contact">
          <p class='email'><a href="mailto:druharper@gmail.com">druharper@gmail.com</a></p>
          <p class='resume'>Resume: 
            <a href="img/resume/drew_harper_resume_portfolio.pdf">Lg</a>/<a href="img/resume/drew_harper_resume_portfolio_short.docx">Sm</a>
          </p>
        </div>
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

  // @import '../assets/css/_colors.scss';
  // @import '@/assets/css/main.scss';
  @import '@/template-techy/assets/css/techy-main.scss';

  $break1000: 1000px;
  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 430px;

  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-grow: 1;
    // padding: .5em 1.25em;

    @media (max-width: $breakOne) {
      // justify-content: center;
    }


  }
  
  nav .mastMain {
    width: 100%;
    // display: grid;
    // grid-auto-flow: column;
    // grid-gap: 1em;
    background: $mango;

    @media (max-width: $breakOne) {
      // flex-grow: 1;
      // width: 70%;
    }
    
    @media (max-width: $breakTwo) {
      // flex-grow: 1;
      // flex-wrap: wrap;
      // justify-content: center;
      // align-content: center;
      // align-items: center;
      // width: 100%;
    }
 

    .masty {
      // @include clearfix;    

      .DHmast {
        display: grid;
        grid-template-columns: 2fr 4fr 7fr;
        // grid-template-rows: auto;
        grid-gap: 1em;
        align-items: center;
        margin: 0 auto;
        //

        @media (max-width: $break1000) {
          grid-template-columns: auto auto;
          justify-content: center;
          justify-items: center;
          grid-gap: .5em;
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

        ////
        a.drewHeadPic {
          // display: block;
          // float: left;
          // clear: left;
          width: 120px;
          height: 144px;
          padding: 1em 1em 0em 1em;
          background-image: url(/img/drew_mug_pix.png);
          background-repeat: no-repeat;
          background-size: cover;
          // width: 98px;
          // height: 119px;
          // display: block;
          // position: relative;
          // top: 2.8em;
          // left: 3.5em;
          margin: 1em 0em 0em 0em;
          grid-column: 1 / 2;
          grid-row: 1 / 3;
          justify-self: end;

          @media (max-width: $break1000) {
            width: 106px;
            height: 127px;
            // float: left;
            // display: block;
            // clear: left;
            grid-column: 1 / 2;
            grid-row: 1 / 1;
            justify-self: right;
            // display: block;
            // clear: left;
          }

          @media (max-width: $breakTwo) {
            width: 89px;
            height: 107px;
          }

          @media (max-width: $breakThree) {
            width: 70px;
            height: 86px;
          }
        }
        
        .svgArt {
          height: 5.9em;
          // margin: 2em 0 0em 1em;
          // display: block;
          // float: left;
          // flex-grow: 1;

          @media (max-width: $break1000) {
            height: 11.5vw;
          }
          @media (max-width: $breakOne) {
            height: 15vw;
          }
          @media (max-width: $breakTwo) {
            height: 18vw;
          }
          @media (max-width: $breakThree) {
            height: 19vw;
          }



        }

        .mastDrew {
          // width: 17em;
          // height: 12vw;
          // margin-top: -1.5em; 
          grid-column: 2 / 3; 
          grid-row: 1 / 3;

          @media (max-width: $break1000) {
            grid-column: 2 / 3 ; 
            grid-row: 1 / 1;
            align-self: end;
            margin-bottom: -1em;
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
          grid-column: 3 / 4; 
          grid-row: 1 / 3;

          @media (max-width: $break1000) {
            grid-column: 1 / 3; 
            grid-row: 2 / 3;
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

  }

  nav .jobDesc {
    margin: -2em 0em 1em 12em;
    text-align: center;
    // margin-top: -1em;
    // @include clearfix;

    @media (max-width: $break1000) {
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
      color: $blueTech;
      text-transform: lowercase;
      font-size: 2em;
      line-height: 1.1em;
      letter-spacing: .03em;

      &:nth-child(1) {
        //
      }

      &:nth-child(2) {
        // font-size: 1.75em;
      }

      @media (max-width: $break1000) {
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

  nav .bar {
    // width: 100%;
    padding: 1em;
    background: $blueTech;
    color: $ivory;
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    //

    .contact {
      font-family: Dosis;
      font-weight: 400;
      color: $ivory;
      // text-transform: uppercase;
      margin-top: 0.2em;
      margin-left: 1em;
      margin-bottom: 4px;
      //
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      flex-grow: 1;
      width: 45%;

      @media (max-width: $breakOne) {
        width: 100%
      }

      @media (max-width: $breakTwo) {
        width: 100%
      }

      @media (max-width: $breakThree) {
        width: 100%
      }

      p {
        color: $ivory !important;
        font-family: $font;
        font-weight: 500;
        letter-spacing: .09em;
        color: $blueTech;
        font-size: 1.3em;
        line-height: 1.3em;
        
        > a {
          color: $ivory !important;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }

        &:nth-child(1) {
        }

        &:nth-child(2) {
          margin-left: .5em;
        }

        @media (max-width: $breakOne) {
          justify-content: center;
          font-size: 1.27em !important;
          letter-spacing: .1em !important;
          margin-top: -.3em;

          &:nth-child(1) {
            float: left;
            clear: left;
            margin-right: .5em;
          }

          &:nth-child(2) {
            float: left;
          }
        }

        @media (max-width: $breakTwo) {
          font-size: .87em !important;
          letter-spacing: 0.09em !important;

          &:nth-child(1) {
            // color: lightgrey;
          }

          &:nth-child(2) {
            // color: lightgrey;
          }
        }

        @media (max-width: $breakThree) {
          justify-content: center;
          font-size: 1.04em !important;
          letter-spacing: 0.09em !important;
          line-height: 1.25em;
          margin-bottom: -4px;
          text-align: center;

          &:nth-child(1) {
            float: initial;
            clear: initial;
            margin-right: 0em;
          }

          &:nth-child(2) {
            float: initial;
            font-size: 1.04em !important;
            line-height: 1.6em;
            margin-left: 0 !important;
          }
        }

      }
    }
  }



</style>
