<template>

  <div>
    
    <header>
      <Navvy/>
    </header>

    <main>
      <section>
        <HeadAndCopy/>
      </section>

      <section>
        <CarouselShow/>
        <About/>
      </section>

    </main>

    <Skills/>

    <footer>
      <!-- <Quotes/> -->
    </footer>

  </div>

</template>

<script>
  // import '@/assets/fonts/Roboto/Roboto.css'
  import '@/assets/fonts/AmericanTypewriter/AmericanTypewriter.css'
  import '@/assets/fonts/BodoniXT/BodoniXT.css'

  import Navvy from '../components/Navvy'
  import HeadAndCopy from '../components/HeadAndCopy'
  import Skills from '../components/Skills'
  import About from '@/components/About'
  // import Quotes from '../components/Quotes/QuoteBasic'
  import CarouselShow from '@/components/Carousel/CarouselShow'

  export default {
    layout: 'default',
    components: {
      Navvy,
      HeadAndCopy,
      CarouselShow,
      About,
      Skills
      // Quotes
    },
    name: 'HomePunk',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Drew Harper',
      // all titles will be injected into this template
      titleTemplate: '%s - UI/UX Designer, Graphic Designer!',
      bodyAttrs: {
        class: 'punk'
      },
      style: [
        { cssText: 'body.punk .VueCarousel.druCarousel { box-shadow: 0px 0px 0px 4px #333; min-height: 21vh; }', type: 'text/css' },
        { cssText: '.about p { font-family: Poppins, "Helvetica Neue", Arial, sans-serif !important; font-size: .9em !important; }', type: 'text/css' }
      ]
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i');  
  @import '@/assets/css/main.scss';
  @import '@/template-punk/assets/css/punk-main.scss';

  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 430px;

  header,
  footer {
    color: $ivory;
    background: initial !important;
    box-shadow: none;
  }

  main {
    display: grid;  // <-- CONTENT GRID
    grid-template-columns: repeat(2, 1fr);
    background: transparent;
    padding: 0;
    box-shadow: none;
    //
    @media (max-width: $breakOne) {
      grid-template-columns: 1fr;
    }

    > section {
      //
      &:nth-child(1) {
        padding: 0 1em;

        @media (min-width: $breakOne) {
          padding: 0em 1em 0em 1em;
          margin-bottom: 1em;
        }
      }

      &:nth-child(2) {
        padding: 0 1em;

        @media (min-width: $breakOne) {
          padding: 0em 1em 0em .5em;
        }
      }

    }

  }

</style>
