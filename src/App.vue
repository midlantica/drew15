<template>
  <div class="wrapper">
    <Tabs />
    <router-view />
  </div>
</template>

<script>
  import Tabs from '@/components/Tabs.vue'
  // import MY_JSON from './assets/data.json'
  export default {
    // myJson: MY_JSON,
    components: {
      Tabs,
    },
    name: 'App',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Drew Harper',
      // all titles will be injected into this template
      titleTemplate: '%s - UI/UX Designer, Graphic Designer',
    },
  }
</script>

<style lang='scss'>
  @import '@/assets/css/main.scss';

  $backer: #fffae4;
  $backBlack: #1f1f1f;

  .wrapper {
    max-width: 1024px;
    margin: 0 auto;
    // background: white; // ivory
    // @include shadow;
  }

  // #############################
  // BOURBON
  .bourbon {
    // background: initial;
    background: $backBlack;
    // background: url(/img/bg/bricks-bg-02.jpg) repeat;

    .wrapper {
      background: url(./template-bourbon/assets/img/bg/graphy_2.png) repeat;
      // background: url(/img/bg/Drew-punk-back.jpg) repeat;
      // background-size: 110% 100%;
      // background-image: url(/img/bg/check-patt.png);

      @media (max-width: $breakOne) {
        // background-size: 110% 50%;
      }

      header,
      footer {
        background: url(./template-bourbon/assets/img/bg/bg_bag_dk.jpg) repeat;
      }
    }

    .about > p {
      font-family: 'AmericanTypewriterStd-Med';
      font-size: 0.85em;

      @media (max-width: $breakThou) {
        font-size: 1.65vw;
        // color: red;
      }

      @media (max-width: $breakOne) {
        font-size: 1.85vw;
      }

      @media (max-width: $breakTwo) {
        font-size: 2.5vw;
      }

      @media (max-width: $breakThree) {
        font-size: 3vw;
      }
    }

    &.extras .flexContainer {
      //
      h1 {
        // font-family: Times !important;
        font-size: 1.75em;
        // color: lighten(black, 20);
        padding-top: 1em;
        // text-transform: capitalize;
      }
    }
  }

  // #############################
  // GROOVY
  .groovy {
    // background: initial;
    background: $backBlack;
    // background: url(/img/bg/bricks-bg-02.jpg) repeat;

    .wrapper {
      // background: url(/img/bg/Drew-punk-back.jpg) repeat;
      // background-size: 110% 100%;
      // background-image: url(/img/bg/check-patt.png);
      // background: #fffae4;
      background: linear-gradient(
        lighten($backer, 10) 0%,
        darken($backer, 05) 85%,
        darken($backer, 15) 100%
      );

      @media (max-width: $breakOne) {
        // background-size: 110% 50%;
      }

      //
      header,
      footer {
        // background: url(./template-bourbon/assets/img/bg/bg_bag_dk.jpg) repeat;
      }
    }

    .about > p {
      font-size: 0.9em !important;
    }

    &.extras .flexContainer {
      //
      h1 {
        font-family: Helvetica !important;
        font-size: 1.5em;
        color: lighten(black, 30);
        margin-top: 0.5em;
      }
    }
  }

  // #############################
  // TECHY
  .techy {
    background: $backBlack;

    .wrapper {
      //
    }

    .copyArea {
      //
      section {
        //
        p {
          // background: purple;
        }
      }
    }

    &.extras .flexContainer {
      //
      h1 {
        font-family: Helvetica !important;
        font-size: 1.5em;
        color: lighten(black, 30);
        padding-top: 1em;
      }
    }
  }

  // #############################
  // CORP
  .corp {
    background: $backBlack;

    .wrapper {
      // background: url(/img/bg/black-parch-bg-1.jpg) repeat;
      background: url(/img/bg/white_paper_patt-01.jpg) repeat;
      // background: url(/img/bg/Drew-punk-back.jpg) repeat;

      //
      header,
      footer {
        // background: url(./template-bourbon/assets/img/bg/bg_bag_dk.jpg) repeat;
      }
    }

    .about > p {
      font-family: cormorantGaramond-Semi-Bold, 'Times New Roman', Times, serif !important;
      font-size: 1em;

      @media (max-width: $breakThou) {
        font-size: 1.65vw;
        // color: red;
      }

      @media (max-width: $breakOne) {
        font-size: 1.85vw;
      }

      @media (max-width: $breakTwo) {
        font-size: 2.5vw;
      }

      @media (max-width: $breakThree) {
        font-size: 3vw;
      }
    }

    &.extras .flexContainer {
      //
      h1 {
        font-family: Times !important;
        font-size: 1.5em;
        color: lighten(black, 20);
        margin-top: 0.5em;
        text-transform: capitalize;
      }
    }
  }

  // #############################
  // PUNK
  .punk {
    // background: initial;
    background: $backBlack;
    // background: url(/img/bg/bricks-bg-01.jpg) repeat;

    .wrapper {
      width: 100%;
      background: url(/img/bg/circles.svg), url(/img/bg/Drew-punk-back.jpg);
      background-repeat: repeat-y, repeat-y;
      background-size: 100% 600%, 100% 100%;
      background-position: center center, center center;

      @media (max-width: $breakOne) {
        background-size: 100% 600%, 130% 90%;
        background-position: center center, -3em 0em;
      }

      @media (max-width: $breakTwo) {
        background-size: 100% 600%, 120% 100%;
        background-position: center center, -3em 11em;
      }

      @media (max-width: $breakTwo) {
        background-size: 100% 600%, 250% 70%;
        background-position: center center, -3em 3em;
      }

      //
      header {
        // background: initial !important;
      }
    }

    .about > p {
      // font-family: 'AmericanTypewriterStd-Med' !important;
      font-size: 0.8em !important;

      @media (max-width: $breakThou) {
        font-size: 1.65vw !important;
        // color: red;
      }

      @media (max-width: $breakOne) {
        font-size: 1.85vw !important;
      }

      @media (max-width: $breakTwo) {
        font-size: 2.5vw !important;
      }

      @media (max-width: $breakThree) {
        font-size: 3vw !important;
      }
    }

    &.extras .flexContainer {
      //
      h1 {
        font-family: Helvetica !important;
        font-size: 1.5em;
        color: lighten(black, 20);
        padding-top: 1em;
        text-transform: capitalize;
      }
    }
  }
</style>
