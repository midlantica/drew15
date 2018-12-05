<template>

  <div>
  
    <header>
      <Navvy/>
    </header>

    <main class="mainGrid">
      
      <div class="copyArea">
        <HeadAndCopy/>
      </div>

      <Skills/>

      <div class="slides">
        <CarouselShow/>
      </div>

      <About/>

      <Quotes/>

    </main>

    <footer>
      <Navvy/>
    </footer>

  </div>

</template>

<script>
  import '@/template-bourbon/assets/css/fonts/Veneer/Veneer.css'
  import '@/template-bourbon/assets/css/fonts/AmericanTypewriter/AmericanTypewriter.css'

  import Navvy from '../components/Navvy'
  import HeadAndCopy from '../components/HeadAndCopy'
  import About from '@/components/About'
  import Skills from '../components/Skills'
  import Quotes from '../components/Quotes/QuoteBasic'
  const CarouselShow = () => import('@/components/Carousel/CarouselShow')

  export default {
    layout: 'default',
    components: {
      Navvy,
      HeadAndCopy,
      CarouselShow,
      About,
      Skills,
      Quotes
    },
    name: 'HomeBourbon',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Drew Harper',
      // all titles will be injected into this template
      titleTemplate: '%s - UI/UX Designer, Graphic Designer!',
      bodyAttrs: {
        class: 'bourbon'
      },
      style: [
        { cssText: '.VueCarousel.druCarousel { min-height: ; }', type: 'text/css' }
      ]
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  @import '@/template-bourbon/assets/css/bourbon-main.scss';

  $breakThou: 1024px;
  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 430px;

  header, 
  footer {
    @include shadow;
  }

  .mainGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
    margin: 1em 1em;

    @media (max-width: $breakThou) {
      grid-template-columns: 1fr;
      grid-gap: 0em;
      grid-row-gap: 1em;
      // grid-column: 1 / 3;
      // grid-row: 1;
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      //
    }

    // @media only screen 
    //   and (min-device-width: 375px) 
    //   and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    //     background: red;
    // }

  }

  .copyArea {
    grid-column: 1 / 2;
    grid-row: 1 / 4;

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
    grid-row: 1;
    // z-index: 10;

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 3;
    }

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
    grid-column: 1 / 2;
    grid-row: 2 / 4;

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

  // .about {
  //   grid-column: 2 / 3;

  //   @media (max-width: $breakThou) {
  //     grid-column: 1 / 3;
  //   }

  // }

</style>
