<template>
  <div class='wrapper'>
    <Tabs />
    <router-view />
  </div>
</template>

<script>
  // import '@/template-bourbon/assets/css/fonts/Veneer/veneer.css'
  // import '@/template-bourbon/assets/css/fonts/AmericanTypewriter/AmericanTypewriter.css'

  import Tabs from '@/components/Tabs.vue'
  export default {
    components: {
      Tabs,
    },
    name: 'App',
    metaInfo: {
      title: 'Drew Harper',
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
  }

  // #############################
  // BOURBON
  .bourbon {
    background: $backBlack;

    .wrapper {
      background: url(./template-bourbon/assets/img/bg/graphy_2.png) repeat;

      @media (max-width: $breakOne) {
        //
      }

      header,
      footer {
        background: url(./template-bourbon/assets/img/bg/bg_bag_dk.jpg) repeat;
      }
    }

    .about > p {
      font-family: 'AmericanTypewriterStd-Med';
      font-size: 0.85em;
      margin: 0.25rem auto;

      @media (max-width: $breakThou) {
        font-size: 1.65vw;
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
        font-size: 1.75em;
        padding-top: 1em;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-family: 'VeneerTwo', Helvetica, Arial, sans-serif;
        font-weight: 300;
      }
    }

    .smallCaps {
      font-variant: small-caps !important;
      font-size: 90% !important;
      letter-spacing: 0.05rem;
    }
  }

  // #############################
  // GROOVY
  .groovy {
    background: $backBlack;

    .wrapper {
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
        //
      }

    }

    .wrapper {
      background: #fffae4;
    }

    .about > p {
      font-size: 0.85rem !important;
      font-family: 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
      line-height: 1.25rem;
      margin: 0.25rem 0;
    }

    .smallCaps {
      // font-family: $font-caps;
      font-variant: small-caps !important;
      font-size: 87.5% !important;
      letter-spacing: 0.05rem;
    }

    &.extras .flexContainer {
      //
      h1 {
        font-size: 1.75em;
        padding-top: 1em;
        font-family: 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
        font-weight: 300;
      }
      p {
        font-family: 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
        font-size: 1em !important;
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
          //
        }
      }
    }

    &.extras .flexContainer {
      background: #fffff1 !important;

      h1 {
        font-family: Helvetica !important;
        font-size: 1.5em;
        color: lighten(black, 30);
        padding-top: 1em;
      }
    }

    .about {
      background: #FFE268 !important; box-shadow: none !important;

      p {
        font-family: Dosis, "Helvetica Neue", Arial, sans-serif !important;
        margin: 0rem auto;
      }
    }

    .skillsGrid {
      //
    }

    .smallCaps {
      font-variant: small-caps !important;
      font-size: 87.5% !important;
      letter-spacing: 0.05rem;
    }

    &.extras .flexContainer {
      //
      h1 {
        font-size: 1.75em;
        padding-top: 1em;
        font-family: Dosis, 'Helvetica Neue', Arial, sans-serif !important;
        font-weight: 300;
      }
      p {
        font-family: Dosis, 'Helvetica Neue', Arial, sans-serif !important;
        font-size: 1em !important;
      }
    }

    &.extras .contact {
      width: 100% !important;
    }

  }

  // #############################
  // CORP
  .corp {
    background: $backBlack;

    .wrapper {
      background: url(/img/bg/white_paper_patt-01.jpg) repeat;

      header,
      footer {
        //
      }
    }

    .smallCaps {
      font-variant: small-caps !important;
      font-size: 90% !important;
      letter-spacing: 0.03rem;
    }

    &.extras .flexContainer {
      //
      h1 {
        font-size: 1.75em;
        padding-top: 1em;
        font-family: Alegreya, 'Times New Roman', Times, serif !important;
        font-weight: 300;
        color: #01487F !important;
      }

      p {
        font-family: Alegreya, 'Times New Roman', Times, serif !important;
        font-size: 1em;
      }
    }

    .about p {
      font-family: "Alegreya", "Times New Roman", Times, serif !important;
      font-size: 1em;
    }

    .skillsGrid {
      margin: 0 auto 0 .5rem !important;
    }

  }

  // #############################
  // PUNK
  .punk {
    background: $backBlack;

    .wrapper {
      width: 100%;
      background: url(/img/bg/circles.svg), url(/img/bg/Drew-punk-back.jpg);
      background-repeat: repeat-y, repeat-y;
      background-size: 100% 640%, 100% 100%;
      background-position: center center, center center;

      @media (max-width: $breakOne) {
        background-size: 100% 640%, 130% 90%;
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
        //
      }
    }

    .about > p {
      font-family: Poppins, "Helvetica Neue", Arial, sans-serif !important;
      font-size: 0.8em !important;

      @media (max-width: $breakThou) {
        font-size: 1.65vw !important;
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
        font-size: 1.75em;
        padding-top: 1em;
        font-family: Poppins, 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
        font-weight: 300;
      }

      p {
        font-family: Poppins, 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
      }
    }


    .smallCaps {
      font-variant: small-caps !important;
      font-size: 95% !important;
      letter-spacing: 0.05rem;
    }
  }
</style>
