<template>

  <div>
    <header>
      <Navvy/>
    </header>

    <main>
      <section>
        <HeadAndCopy/>
        <Skills/>
      </section>

      <section>
        <CarouselShow/>
        <About/>
      </section>
    </main>

    <footer>
      <Quotes/>
    </footer>

  </div>

</template>

<script>
  import '@/template-corp/assets/css/fonts/Roboto/Roboto.css'
  import '@/template-corp/assets/css/fonts/cormorantGaramond/cormorantGaramond.css'

  import Navvy from '../components/Navvy'
  import HeadAndCopy from '../components/HeadAndCopy'
  import Skills from '../components/Skills'
  import About from '@/components/About'
  import Quotes from '../components/Quotes/QuoteBasic'
  import CarouselShow from '@/components/Carousel/CarouselShow'

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
    name: 'HomeCorp',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Drew Harper',
      // all titles will be injected into this template
      titleTemplate: '%s - UI/UX Designer, Graphic Designer!',
      bodyAttrs: {
        class: 'corp'
      },
      style: [
        { cssText: 'body.corp .VueCarousel.druCarousel { box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.29); min-height: 21vh; }', type: 'text/css' }
      ]
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Questrial');
  @import '@/assets/css/main.scss';
  @import '@/template-corp/assets/css/corp-main.scss';

  .wrapper {
    //
  }

  header,
  footer {
    color: $ivory;
    // background: none !important;
    // background: url(/img/bg/bg_bag_dk.jpg) repeat;
    // z-index: 10;
    // position: relative;
    box-shadow: none !important;
    background: url(/img/bg/white_paper_patt-01.jpg) repeat !important;
    // background: url(/img/bg/linen.png) repeat !important;
  }

  main {
    display: grid;  // <-- CONTENT GRID
    grid-template-columns: repeat(2, 1fr);
    background: none !important;
    box-shadow: none !important;
    padding-top: 1em;
    padding-bottom: .75em;
    background: url(/img/bg/white_paper_patt-01.jpg) repeat !important;
    // background: url(../assets/img/bg/linen.png) repeat !important;
    //
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }

    > section {
      //
      &:nth-child(1) {
        padding: 0 1em;

        @media screen and (min-width: 1024px) {
          padding: 0em 1em 0em 1em;
        }
      }
      &:nth-child(2) {
        padding: 0 1em;

        @media screen and (min-width: 1024px) {
          padding: 1.15em 1em 0em .5em;
        }
      }

    }

  }

</style>
