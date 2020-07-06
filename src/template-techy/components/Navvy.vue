<template>
  <nav>
    <div class="mastMain">

      <div class="masty">

        <div class="DHmast">
          <router-link to="/Techy/Extras" class="drewHeadPic" />
          <router-link to="/Techy" class="svgArt mastDrew" >
            <mastDrew />
          </router-link>
          <router-link to="/Techy" class="svgArt mastHarper">
            <mastHarper />
          </router-link>
        </div>

        <div class="jobDesc block text-align-left">
          <h2>ui/ux designer +</h2>
          <h2 class="marLH">front&nbsp;end&nbsp;dev</h2>
        </div>
      </div>

      <div class="bar">
        <div class="contact">
          <p class='email'>
            <a href="mailto:druharper@gmail.com">druharper@gmail.com</a>
          </p>
          <p class='resume'>Resume:
            <a href="resume/drew_harper_resume_portfolio.pdf">Lg</a>/<a href="resume/drew_harper_resume_portfolio_short.docx">Sm</a>
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
  // @import '@/assets/css/main.scss';
  @import '@/template-techy/assets/css/techy-main.scss';

  /* purgecss start ignore */
  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-grow: 1;

    @media (max-width: $breakOne) {
      //
    }
  }

  nav .mastMain {
    width: 100%;
    background: $mango;

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      //
    }

    .masty {
      margin: 0 auto;
      text-align: center;

      .DHmast {
        display: grid;
        grid-template-columns: 2fr 4fr 7fr;
        grid-gap: 2em;
        align-items: center;
        margin: 0 auto;
        padding-top: 1em;
        //

        @media (max-width: $breakThou) {
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

        @media only screen and (max-device-width: 667px)
        and (-webkit-device-pixel-ratio: 2)
        {
          padding-top: 1em;
        }

        a.drewHeadPic {
          width: 92px;
          height: 109px;
          padding: 1em 1em 0em 1em;
          background-image: url(/img/drew_mug_dig.png);
          background-repeat: no-repeat;
          background-size: cover;
          grid-column: 1 / 2;
          grid-row: 1 / 3;
          justify-self: end;

          @media (max-width: $breakThou) {
            width: 92px;
            // height: 109px;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            margin: 0 .5em 0 0;
            justify-self: right;
          }

          @media (max-width: $breakTwo) {
            width: 74px;
            height: 87px;
          }

          @media (max-width: $breakThree) {
            width: 63px;
            height: 74px;
            margin: 0;
          }

          @media (max-device-width: 667px)
          and (-webkit-device-pixel-ratio: 2)
          {
            margin-right: 0.5em;
            margin-left: 0em;
            width: 65px !important;
            height: 77px !important;
            margin: 0em;
          }

          @media (max-width: $breakFour) {
            width: 39px !important;
            height: 46px !important;
            margin: 0em;
          }

        }

        a.svgArt {
          height: 5.9em;

          @media (max-width: $breakThou) {
            height: 11.5vw;
          }
          @media (max-width: $breakOne) {
            height: 14vw;
          }
          @media (max-width: $breakTwo) {
            height: 14vw;
          }
          @media (max-width: $breakThree) {
            height: 14vw;
          }
        }

        a.mastDrew {
          grid-column: 2 / 3;
          grid-row: 1 / 3;
          width: 19em;

          @media (max-width: $breakThou) {
            grid-column: 2 / 3 ;
            grid-row: 1 / 1;
            align-self: end;
            margin-bottom: -1em;
            width: 40vw;
          }

          @media (max-width: $breakOne) {
            //
          }

          @media (max-width: $breakTwo) {
            //
          }

          @media (max-width: $breakThree) {
            margin-bottom: 0em;
            width: 56vw;
          }
        }

        a.mastHarper {
          display: initial;
          grid-column: 3 / 4;
          grid-row: 1 / 3;
          width: 25.3em;

          @media (max-width: $breakThou) {
            grid-column: 1 / 3;
            grid-row: 2 / 3;
            width: 50vw;
          }

          @media (max-width: $breakOne) {
            //
          }

          @media (max-width: $breakTwo) {
            margin-left: 0;
            margin-top: 0;
          }

          @media (max-width: $breakThree) {
            width: 77vw;
            height: 20vw;
          }
        }
      }
    }
  }

  nav .jobDesc {
    margin: -1em 0em 1em 11.1em;
    // text-align: center;
    // margin-top: -1em;
    // @include clearfix;

    @media (max-width: $breakThou) {
      margin: 1em 0em;
      text-align: center;
    }

    @media (max-width: $breakOne) {
      margin: 0rem 0rem 1rem;
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
      font-size: 1.7em;
      line-height: 1.1em;
      letter-spacing: .03em;
      display: inline;

      &:nth-child(1) {
        //
      }

      &:nth-child(2) {
        //
      }

      @media (max-width: $breakThou) {
        display: inline;
        font-size: 3.3vw;
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
        font-size: 3.7vw;
        margin-top: -3px;

        &:nth-child(1) {
          //
        }

        &:nth-child(2) {
          margin-left: .25em !important;
        }
      }

      @media (max-width: $breakTwo) {
        font-size: 5.8vw;
      }
    }
  }

  nav .bar {
    padding: 0.5vh 1em;
    background: $blueTech;
    color: $ivory;
    grid-column: 1 / 3;
    grid-row: 3 / 4;

    .contact {
      font-weight: 400;
      color: $ivory;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      flex-grow: 1;
      width: 50%;

      @media (max-width: 1024px) {
        width: 100%;
      }

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
        font-family: $font;
        font-weight: 500;
        letter-spacing: .09em;
        color: $ivory;
        font-size: 1.3em;
        line-height: 2.5em;
        margin-left: 0.5em;

        > a {
          color: transparentize($ivory, .1);
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }

        &:nth-child(1) {
          //
        }

        &:nth-child(2) {
          //
        }

        @media (max-width: $breakOne) {
          justify-content: center;
          font-size: 1.2em !important;
          letter-spacing: .1em !important;

          &:nth-child(1) {
            //
          }

          &:nth-child(2) {
            //
          }
        }

        @media (max-width: $breakTwo) {
          letter-spacing: 0.09em !important;

          &:nth-child(1) {
            //
          }

          &:nth-child(2) {
            //
          }
        }

        @media (max-width: $breakThree) {
          justify-content: center;
          font-size: 1.1em !important;
          letter-spacing: 0.07em !important;
          line-height: 2em;
          text-align: center;

          &:nth-child(1) {
            //
          }

          &:nth-child(2) {
            //
          }
        }
      }
    }
  }

  /* purgecss end ignore */


</style>
