<template>

  <div class="mainGrid">
    <header>
      <Navvy/>
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
      <Footy/>
    </footer>

  </div>

</template>

<script>
  // import '../assets/css/fonts/connection/connection.css'
  const Navvy = () => import('../components/Navvy')
  const HeadAndCopy = () => import('../components/HeadAndCopy')
  const Skills = () => import('../components/Skills')
  const CarouselShow = () => import('../components/Carousel/CarouselShow')
  const About = () => import('../components/About')
  const Quotes = () => import('../components/Quotes/QuoteBasic')
  const Footy = () => import('../components/Footy')

  export default {
    layout: 'default',
    components: {
      Navvy,
      HeadAndCopy,
      CarouselShow,
      About,
      Skills,
      Quotes,
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800');
  @import '../assets/css/fonts/connection/connection.css';
  @import '@/assets/css/main.scss';
  @import '@/template-techy/assets/css/techy-main.scss';

  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 430px;

  .mainGrid {
    display: grid;
    grid-template-columns: 7fr 6fr;
    grid-template-rows: auto auto auto auto;
    //                  1-2  2-3  3-4  4-5
    grid-auto-flow: column;
    background: $ivory;

  }

  header {
    grid-column: 1 / -1;
    grid-row: 1;
    color: $ivory;
    background: $groovy-red;
    // height: 175px;
    background: $mango;
    box-shadow: none;
  }

  footer {
    grid-column: 1 / -1;
    grid-row: -1;
    color: $ivory;
    background: $mango;
    box-shadow: none;

    @media (max-width: $breakOne) {
      // grid-column: span 1;
      // grid-row: -1;
    }

    @media (max-width: $breakTwo) {
      // grid-column: span 1;
      // grid-row: -1;
    }

  }

  .cols:nth-of-type(1) {
    grid-column: 1 / 2;
    grid-row: 2;


    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 2;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 2;
    }

  }

  .cols:nth-of-type(2) {
    grid-column: 2 / -1;
    grid-row: 2;
    z-index: 10;
    padding: 0 1em;

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 3;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 3;
    }
  }

  .skillsGrid {
    grid-column: 1 / -1;
    grid-row: 3;

    @media (max-width: $breakOne) {
      grid-row: 4;
    }

    @media (max-width: $breakTwo) {
      grid-row: 5;
    }
  }

</style>
