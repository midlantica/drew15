<template>
  <div class="wrapper">
    <Tabs/>
    <router-view/>
  </div>
</template>

<script>
  import Tabs from '@/components/Tabs.vue'
  export default {
    components: {
      Tabs
    },
    name: 'App',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Drew Harper',
      // all titles will be injected into this template
      titleTemplate: '%s - UI/UX Designer, Graphic Designer'
    }
  }
</script>

<style lang="scss">
  @import '@/assets/css/main.scss';
  @import 'assets/css/vendor/html5Boilerplate.css';
  
  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 430px;

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
    background: #222;
    // background: url(/img/bg/bricks-bg-02.jpg) repeat;

    .wrapper {
      background: url(./template-bourbon/assets/img/bg/graphy_2.png) repeat;
      // background: url(/img/bg/Drew-punk-back.jpg) repeat;
      // background-size: 110% 100%;
      // background-image: url(/img/bg/check-patt.png);
      
      @media (max-width: $breakOne) {
        // background-size: 110% 50%;
      }

      //
      header, footer {
        background: url(./template-bourbon/assets/img/bg/bg_bag_dk.jpg) repeat;
      }
    }
  }

  // #############################
  // GROOVY
  .groovy {
    // background: initial;
    background: #333;
    // background: url(/img/bg/bricks-bg-02.jpg) repeat;

    .wrapper {
      // background: url(/img/bg/Drew-punk-back.jpg) repeat;
      // background-size: 110% 100%;
      // background-image: url(/img/bg/check-patt.png);
      
      @media (max-width: $breakOne) {
        // background-size: 110% 50%;
      }

      //
      header, footer {
        // background: url(./template-bourbon/assets/img/bg/bg_bag_dk.jpg) repeat;
      }
    }
  }

  
  // #############################
  // TECHY
  .techy {
    background: darken(#423BA0, 35);
    .wrapper { 
      //
    }
  }

  // #############################
  // CORP
  .corp {
    background: #222;
    background: url(/img/bg/black-parch-bg-1.jpg) repeat;

    .wrapper {
      // background: url(/img/bg/Drew-punk-back.jpg) repeat;

      //
      header, footer {
        // background: url(./template-bourbon/assets/img/bg/bg_bag_dk.jpg) repeat;
      }
    }
  }

  // #############################
  // PUNK
  .punk {
    // background: initial;
    background: #222;
    // background: url(/img/bg/bricks-bg-01.jpg) repeat;

    .wrapper {
      background: 
        url(/img/bg/circles.svg), 
        url(/img/bg/Drew-punk-back.jpg); 
      background-repeat: 
        repeat-y,
        repeat-y;
      background-size: 
        100% 600%,
        100% 100%;
      background-position: 
        center center, 
        center center;

      @media (max-width: $breakOne) {
        background-size: 
          100% 600%, 
          130% 90%;
        background-position: 
          center center, 
          -3em 0em;
      }

      @media (max-width: $breakTwo) {
        background-size: 
          100% 600%,
          120% 100%;
        background-position: 
          center center, 
          -3em 11em;
      }

      @media (max-width: $breakTwo) {
        background-size: 
          100% 600%,
          250% 70%;
        background-position: 
          center center, 
          -3em 3em;
      }

      //
      header {
        // background: initial !important;
      }
    }
  }

</style>







