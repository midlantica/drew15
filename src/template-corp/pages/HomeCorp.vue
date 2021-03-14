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
        <CarouselFlux />
      </div>
      <About />
      <Skills />
    </main>
    <footer>
      <Quotes />
    </footer>
  </div>
</template>

<script>
  import Navvy from '../components/Navvy'
  import HeadAndCopy from '../components/HeadAndCopy'
  import Skills from '../components/Skills'
  import About from '@/components/About'
  import Quotes from '../components/Quote'
  import CarouselFlux from '@/components/Carousel/CarouselFlux'

  export default {
    name: 'HomeCorp',
    components: {
      Navvy,
      HeadAndCopy,
      CarouselFlux,
      About,
      Skills,
      Quotes,
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/template-corp/assets/css/corp-main.scss";
  @import url('https://fonts.googleapis.com/css2?family=Alegreya+SC:ital,wght@0,400;0,500;1,400;1,500&family=Alegreya:ital,wght@0,400;0,500;1,400;1,500&display=swap');

  .about {
    background: white;
    font-size: 0.95em;
    // margin-bottom: 0.5em;

    @media (max-width: $breakThou) {
      // margin-bottom: 0.5em;
    }
  }

  header,
  footer {
    color: $ivory;
    box-shadow: none !important;
    background: url(/img/bg/white_paper_patt-01.jpg) repeat !important;
  }

  .mainGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: .5rem 1rem;
    // grid-row-gap: 1rem 1rem;
    margin: 0.25rem 1rem .5rem;
    // background: none !important;
    // box-shadow: none !important;

    @media (max-width: $breakThou) {
      grid-template-columns: 1fr;
      grid-row-gap: 1em;
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      //
    }
  }

  .copyArea {
    grid-column: 1 / 2;
    grid-row: 1 / 3;

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 1;
      margin-bottom: -1em;
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
    grid-row: 1;

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 3;
      margin-top: initial;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 3;
      margin-top: initial;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 3;
      margin-top: initial;
    }
  }

  .skillsGrid {
    grid-column: 1 / 2;
    grid-row: 2;

    @media (max-width: $breakThou) {
      grid-row: 2;
    }

    @media (max-width: $breakOne) {
      grid-row: 2;
    }

    @media (max-width: $breakTwo) {
      grid-row: 2;
    }
  }

  .about {
    grid-column: 2 / 3;
    grid-row: 2;

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 4;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 4;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 4;
    }
  }

  .quoteBlock {
    grid-column: 2 / 3;
    grid-row: 3;

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 5;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 5;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 5;
    }
  }
</style>
