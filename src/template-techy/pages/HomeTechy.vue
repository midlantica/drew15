<template>
  <div>
    <header>
      <Navvy />
    </header>

    <main class="mainGrid">
      <div class="copyArea">
        <HeadAndCopy />
      </div>

      <div class="slides">
        <CarouselShow />
      </div>

      <About />

      <Skills />
    </main>

    <footer>
      <Footy />
    </footer>
  </div>
</template>

<script>
  import Navvy from '../components/Navvy'
  import HeadAndCopy from '../components/HeadAndCopy'
  import Skills from '@/components/Skills'
  import About from '@/components/About'
  import Footy from '../components/Footy'
  import CarouselShow from '@/components/Carousel/CarouselShow'

  export default {
    layout: 'default',
    components: {
      Navvy,
      HeadAndCopy,
      CarouselShow,
      About,
      Skills,
      Footy
    },
    name: 'HomeTechy',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Drew Harper',
      // all titles will be injected into this template
      titleTemplate: '%s - UI/UX Designer, Graphic Designer!',
      bodyAttrs: {
        class: 'techy'
      },
      style: [
        { cssText: '.about { background: #FFE268 !important; box-shadow: none !important; }', type: 'text/css' },
        { cssText: '.about p { font-family: Dosis, "Helvetica Neue", Arial, sans-serif !important; }', type: 'text/css' }
      ]
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800');
  @import '@/template-techy/assets/css/techy-main.scss';

  .mainGrid {
    display: grid;
    grid-template-columns: 7fr 6fr;
    grid-gap: 1rem 1rem;
    background: $ivory;
    padding: 0 1em 0.5em;
    // width: 100%;

    @media (min-width: $breakThou) and (min-device-width: 768px) {
      grid-template-columns: 7fr 6fr;
    }

    @media (max-width: $breakThou) {
      grid-template-columns: 1fr;
    }

    // IPAD LANDSCAPE
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      grid-template-columns: 1fr;
    }

    // IPAD PRO LANDSCAPE
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      grid-template-columns: 7fr 6fr;
      // background: red;
      // border: 10px solid green;
    }
  }

  header {
    // grid-column: 1 / -1;
    // grid-row: 1;
    color: $ivory;
    background: $groovy-red;
    background: $mango;
    box-shadow: none;
    // margin-bottom: -1.2em;
  }

  .copyArea {
    grid-column: 1 / 2;
    grid-row: 1 / 3;

    // IPAD LANDSCAPE
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
      // background: red;
      // border: 10px solid green;
    }

    // IPAD PRO LANDSCAPE
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
      // background: red;
      // border: 10px solid green;
    }

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 1;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 1;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 1;
    }
  }

  .slides {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    z-index: 10;
    margin-top: -5.5em;

    // IPAD LANDSCAPE
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      z-index: 10;
      // background: red;
      // border: 10px solid green;
    }

    // IPAD PRO LANDSCAPE
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      z-index: 10;
      // background: red;
      // border: 10px solid green;
    }

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 2;
      margin-top: 0;
      // margin: 0 1em;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 2;
      // margin: 0 1em;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 2;
      // margin: 0 1em;
    }
  }

  .about {
    grid-column: 2 / 3;
    grid-row: 2;
    // margin: 0 1em 0 0;

    // IPAD LANDSCAPE
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      grid-column: 2 / 3;
      grid-row: 2;
      // margin: 0 1em 0 0;
      // background: red;
      // border: 10px solid green;
    }

    // IPAD PRO LANDSCAPE
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      grid-column: 2 / 3;
      grid-row: 2;
      // margin: 0 1em 0 0;
      // background: red;
      // border: 10px solid green;
    }

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 4;
      // margin: 0 1em 1em;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 4;
      // margin: 0 1em 1em;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 4;
      // margin: 0 1em 1em;
    }
  }

  .skillsGrid {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
    // background: red;
    // border: 10px solid green;

    // IPAD LANDSCAPE
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      grid-column: 1 / -1;
      grid-row: 3 / 4;
      // background: red;
      // border: 10px solid green;
    }

    // IPAD PRO LANDSCAPE
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      grid-column: 1 / -1;
      grid-row: 3 / 4;
      // background: red;
      // border: 10px solid green;
    }

    @media (max-width: $breakThou) {
      grid-row: 3;
    }

    @media (max-width: $breakOne) {
      grid-row: 3;
    }

    @media (max-width: $breakTwo) {
      grid-row: 3;
    }
  }

  footer {
    // grid-column: 1 / -1;
    // grid-row: 5;
    color: $ivory;
    background: $mango;
    box-shadow: none;

    @media (max-width: $breakThou) {
      // grid-column: 1 / -1;
      // grid-row: 6;
    }

    @media (max-width: $breakOne) {
      // grid-column: 1 / -1;
      // grid-row: 6;
    }

    @media (max-width: $breakTwo) {
      // grid-column: 1 / -1;
      // grid-row: 6;
    }
  }
</style>
