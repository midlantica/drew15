<template>
  <nav>

    <div class="greenBar">&nbsp;</div>
    <p class='email'><a :href='`mailto:`+`${store.copy.druEmail}`'>{{ store.copy.druEmail }}</a></p>

    <div class="mastMain">
      <router-link :to="{ name: 'Punk' }">
        <mastDrew class="svgArt mastDrew" />
      </router-link>
      <router-link :to="{ name: 'Punk' }">
        <mastHarper class="svgArt mastHarper" />
      </router-link>
      <router-link :to="{ name: 'ExtrasPunk' }" class="DrewHead jelloHorizontal">&nbsp;</router-link>
    </div>

  </nav>
</template>

<script setup lang="ts">
  import { inject } from 'vue'
  import mastDrew from './masthead/mastDrew.vue'
  import mastHarper from './masthead/mastHarper.vue'

  const store: any = inject('store')
</script>

<style lang="scss" scoped>
  @import '@/template-punk/assets/css/punk-main.scss';

  $outRed: rgba(221, 9, 22, .3);
  $outBlue: rgba(92, 201, 245, .3);

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
      margin-top: -1.5em;
      z-index: 2;
      width: 100%;
      //

      @media (max-width: $breakThou) {
        //
      }

      @media (max-width: $breakOne) {
        flex-wrap: wrap;
      }

      @media (max-width: $breakTwo) {
        //
      }

      @media (max-width: $breakThree) {
        //
      }

      a {
        //

        &:nth-child(1) {
          width: 60vw;
          // background: red;

          @media (max-width: $breakThou) {
            order: 1;
          }

          @media (max-width: $breakOne) {
            order: 1;
            width: 47vw;
            margin-bottom: -1.5em;
          }

          @media (max-width: $breakTwo) {
            order: 1;
            width: 59vw;
            // flex-grow: 0;
          }

          @media (max-width: $breakThree) {
            width: 63vw;
            order: 1;
          }
        }

        &:nth-child(2) {
          width: 80vw;
          // background: green;

          @media (max-width: $breakThou) {
            order: 1;
          }

          @media (max-width: $breakOne) {
            order: 3;
            width: 68vw;
          }

          @media (max-width: $breakTwo) {
            width: 88vw;
            order: 3;
          }

          @media (max-width: $breakThree) {
            order: 3;
            width: 92vw;
          }
        }

        &:nth-child(3) {
          // width: 130px;
          // height: 150px;
          // background: blue;

          @media (max-width: $breakThou) {
            order: 3;
          }

          @media (max-width: $breakOne) {
            order: 2;
          }

          @media (max-width: $breakTwo) {
            order: 2;
          }

          @media (max-width: $breakThree) {
           order: 2;
          }
        }

      }

      a.svg.svgArt.mastDrew {
        // display: block;
        width: 200px;
        width: 170px;
        // height: 12vw;
        // transform: rotate(1deg);
        // margin-top: -1.5em;
        // order: 1;

        @media (max-width: $breakThou) {
          // width: 34vw;
          // height: 17vh;
          // margin-top: 1em;
          // order: 1;
        }

        @media (max-width: $breakOne) {
          // width: 130px;
          // height: 140px;
          // margin-top: 1em;
          // order: 1;
        }

        @media (max-width: $breakTwo) {
          // width: 55vw;
          // height: 17vh;
          // margin-top: 1em;
          // order: 1;
        }

        @media (max-width: $breakThree) {
          // width: 55vw;
          // height: 17vh;
          // margin-top: 1em;
          // order: 1;
        }
      }

      a.svg.svgArt.mastHarper {
        // display: block;
        // width: 480px;
        // width: 32.4vw;
        // height: 20vh;
        // transform: rotate(1deg);
        // margin-top: -0.6em;
        // margin-left: 1em;
        // order: 2;

        @media (max-width: $breakThou) {
          // order: 2;
          // width: 46vw;
          // height: 20vh;
          // margin-top: -1.5em;
          // flex-grow: 1;
        }

        @media (max-width: $breakOne) {
          // order: 3;
          // width: 68vw;
          // height: 20vh;
          // margin-top: -1.5em;
          // flex-grow: 1;
        }

        @media (max-width: $breakTwo) {
          // order: 3;
          // width: 64vw;
          // height: 20vh;
          // margin-top: -1.5em;
          // flex-grow: 1;
        }

        @media (max-width: $breakThree) {
          // order: 3;
          // width: 64vw;
          // height: 20vh;
          // margin-top: -1.5em;
          // flex-grow: 1;
        }

      }

      a.DrewHead {
        // display: block;
        // min-width: 114px;
        // height: 132px;
        background-image: url(/img/drew_mug_punk.png);
        filter:hue-rotate(360deg);
        //
        background-repeat: no-repeat;
        background-size: contain;
        // width: 240px;
        width: 18vw;
        height: 120px;
        text-decoration: none;
        // display: block;
        // position: relative;
        // top: 2.8em;
        // left: 3.5em;
        // margin-left: .5em;
        // margin-top: 0.5em;
        // order: 3;
        // flex-grow: 1;
        // background: green !important;

        @media (max-width: $breakOne) {
          width: 122px;
          height: 122px;
          margin-top: 1em;
          // background: red !important;
          // order: 2;
        }

        @media (max-width: $breakTwo) {
          width: 122px;
          height: 135px;
          margin-top: .5em;
          // background: blue !important;
        }

        @media (max-width: $breakThree) {
          width: 82px;
          height: 93px;
          // background: purple !important;
          // order: 2;
        }


      }
    }

}

</style>
