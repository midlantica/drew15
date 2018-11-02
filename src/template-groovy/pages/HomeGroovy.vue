<template>

  <div class="mainGrid">
    <header>
      <NavvyHead/>
    </header>

    <div class="cols">
      <HeadAndCopy/>
    </div>

    <div class="cols">
      <CarouselShow/>
      <About/>
    </div>

    <Skills/>

    <footer>
      <!-- <Navvy/> -->
    </footer>

  </div>

</template>

<script>
  const NavvyHead = () => import('../components/NavvyHead')
  const HeadAndCopy = () => import('../components/HeadAndCopy')
  const Skills = () => import('../components/Skills')
  const About = () => import('../components/About')
  const CarouselShow = () => import('../components/Carousel/CarouselShow')
  const Quotes = () => import('../components/Quotes/QuoteBasic')

  export default {
    layout: 'default',
    components: {
      NavvyHead,
      HeadAndCopy,
      CarouselShow,
      About,
      Skills,
      Quotes
    },
    name: 'HomeGroovy',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Drew Harper',
      // all titles will be injected into this template
      titleTemplate: '%s - UI/UX Designer, Graphic Designer!',
      bodyAttrs: {
        class: 'groovy'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  @import '@/template-groovy/assets/css/groovy-main.scss';

  $BreakOne: 1024px;
  $BreakTwo: 860px;

  .mainGrid {
    display: grid;
    grid-template-columns: 7fr 6fr;
    grid-template-rows: auto auto auto auto;
    //                  1-2  2-3  3-4  4-5
    grid-auto-flow: column;
    background: $groovy-yellow-pale;

  }

  header {
    grid-column: 1 / 4;
    grid-row: 1;
    color: $ivory;
    background: $groovy-red;
    height: 175px;

  }

  footer {
    grid-column: 1 / 4;
    grid-row: -1;
    // grid-row: 4;
    height: 160px;
    color: $ivory;
    background: linear-gradient(
      // 0 - 25%
      $groovy-aqua 0%,
      $groovy-aqua 25%,
      // 25% - 50%
      $groovy-yellow 25%,
      $groovy-yellow 50%,
      // 50% - 75%
      $groovy-orange 50%,
      $groovy-orange 75%,
      // 75% - 100%
      $groovy-red 75%,
      $groovy-red 100%
    );

    @media (max-width: $BreakOne) {
      // grid-column: span 1;
      grid-row: 5;
    }

    @media (max-width: $BreakTwo) {
      // grid-column: span 1;
      grid-row: 6;
    }

  }

  .cols:nth-of-type(1) {
    grid-column: 1 / 2;
    grid-row: 2;


    @media (max-width: $BreakOne) {
      grid-column: 1 / 2;
      grid-row: 2;
    }

    @media (max-width: $BreakTwo) {
      grid-column: 1 / 4;
      grid-row: 2;
    }

  }

  .cols:nth-of-type(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    z-index: 10;
    padding: 0 1em;

    @media (max-width: $BreakOne) {
      grid-column: 2 / 3;
      grid-row: 2;
    }

    @media (max-width: $BreakTwo) {
      grid-column: 1 / 4;
      grid-row: 3;
    }


  }

  .skillsGrid {
    grid-column: 1 / 4;
    grid-row: 3;

    @media (max-width: $BreakOne) {
      grid-row: 4;
    }

    @media (max-width: $BreakTwo) {
      grid-row: 5;
    }
  }

</style>
