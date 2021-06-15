<template>
  <transition name="fade" appear>
    <div class="wrapper">
      <Tabs />
      <router-view v-slot="{ Component }">
        <transition name="fade" appear>
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </transition>
</template>

<script>
  import Tabs from '@/components/Tabs.vue'
  export default {
    name: 'App',
    components: {
      Tabs,
    }
  }
</script>

<style lang="scss">
  @import '@/assets/css/_colors.scss';
  @import "@/assets/css/main.scss";

  $font-groovy: "Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
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
      font-family: "AmericanTypewriterStd-Med";
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

    &.extras .extrasWrapper {
      //
      h1 {
        font-size: 1.75em;
        padding-top: 1em;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-family: "VeneerTwo", Helvetica, Arial, sans-serif;
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
  // MODERN
  .modern {
    background: hsl(320, 100%, 9%);

    .wrapper {
      background: #110e1d;
      background-image: url(./template-modern/assets/img/bg/bg_bak_dk4.jpeg);
      background-size: 100vw 100vh;
      min-height: 780px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      @media (max-width: $breakOne) {
        //
      }

      header,
      footer {
        // background: url(./template-modern/assets/img/bg/bg_bag_dk.jpg) repeat;
        box-shadow: none;
      }
    }

    .about {
      // background: hsla(340, 76%, 48%, 1) !important;
      background: linear-gradient(180deg,hsl(340deg 76% 48% / 61%),hsl(340deg 76% 31% / 62%)) !important;
      width: 50%;
      margin: 0 auto;
    }

    &.extras .extrasWrapper {
      //
      h1 {
        font-size: clamp(1rem, 1.3rem, 0.75rem) !important;
        padding-top: 1em;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-family: 'Spartan', Helvetica, Arial, sans-serif;
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
        darken($backer, 10) 100%
      );

      @media (max-width: $breakOne) {
        // background-size: 110% 50%;
      }

    }

    .about > p {
      font-size: 0.85rem !important;
      font-family: $font-groovy;
      line-height: 1.25rem;
      margin: 0.25rem 0;
    }

    .smallCaps {
      font-variant: small-caps !important;
      font-size: 87.5% !important;
      letter-spacing: 0.05rem;
    }

    &.extras .extrasWrapper {
      //
      h1 {
        font-size: 1.5em;
        padding-top: 1em;
        font-family: $font-groovy;
        font-weight: 300;
        text-transform: capitalize;
      }
      p {
        font-family: $font-groovy;
        font-size: 1em !important;
      }
    }
  }

  // #############################
  // TECHY
  .techy {
    background: $backBlack;

    .wrapper {
      background: #fffdf4;
    }

    &.extras .extrasWrapper {
      background: #fffff1 !important;

      h1 {
        font-family: Helvetica !important;
        font-size: 1.5em;
        color: lighten(black, 30);
        padding-top: 1em;
        text-transform: capitalize;
      }
    }

    .about {
      background: #FFE268 !important; box-shadow: none !important;

      p {
        font-family: Dosis, "Helvetica Neue", Arial, sans-serif !important;
        margin: 0rem auto;
      }
    }

    .smallCaps {
      font-variant: small-caps !important;
      font-size: 87.5% !important;
      letter-spacing: 0.05rem;
    }

    &.extras .extrasWrapper {
      //
      h1 {
        font-size: 1.75em;
        padding-top: 1em;
        font-family: Dosis, "Helvetica Neue", Arial, sans-serif !important;
        font-weight: 500;
      }
      p {
        font-family: Dosis, "Helvetica Neue", Arial, sans-serif !important;
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
    }

    .smallCaps {
      font-variant: small-caps !important;
      font-size: 90% !important;
      letter-spacing: 0.03rem;
    }

    &.extras .extrasWrapper {
      //
      h1 {
        font-size: 1.75em;
        padding-top: 1em;
        font-family: "Alegreya SC", "Times New Roman", Times, serif !important;
        font-weight: 300;
        color: #01487F !important;
        text-transform: capitalize;
      }

      p {
        font-family: Alegreya, "Times New Roman", Times, serif !important;
        font-size: 1em;
      }
    }

    .about p {
      font-family: Alegreya, "Times New Roman", Times, serif !important;
      font-size: 1em;
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

    &.extras .extrasWrapper {
      //
      h1 {
        font-size: 1.75em;
        padding-top: 1em;
        font-family: Poppins, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
        font-weight: 300;
        text-transform: capitalize;
      }

      p {
        font-family: Poppins, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
      }
    }

    .smallCaps {
      font-variant: small-caps !important;
      font-size: 95% !important;
      letter-spacing: 0.05rem;
    }
  }
</style>
