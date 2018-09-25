<template>

  <div class="mainGrid">
    <header>
      <NavvyHead/>
    </header>

    <!-- <main> -->
      <section>
        <HeadAndCopy/>
      </section>

      <section>
        <CarouselShow/>
        <About/>
        <!-- <Quotes/> -->
      </section>

      <Skills/>

    <!-- </main> -->

    <footer>
      <!-- <Navvy/> -->
    </footer>

  </div>

</template>

<script>
  import NavvyHead from '../components/NavvyHead'
  // import Navvy from '../components/Navvy'
  import HeadAndCopy from '../components/HeadAndCopy'
  import About from '../components/About'
  import Skills from '../components/Skills'
  // import Quotes from '@/components/Quotes/QuotesVueCarousel'
  // import Quotes from '@/components/Quotes/QuotesVueSwiper'
  // import Quotes from '@/components/Quotes/QuotesSiema'
  // import Quotes from '@/components/Quotes/QuotesVueAgile'
  import Quotes from '../components/Quotes/QuoteBasic'
  const CarouselShow = () => import('../components/Carousel/CarouselShow')

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

  $LargeScreen: 1024px;

  .mainGrid {
    display: grid;
    grid-template-columns: 7fr 6fr;
    grid-template-rows: auto auto auto auto;
    //                  1-2  2-3  3-4  4-5
    grid-auto-flow: column;
    background: $groovy-yellow-pale;

    // @media (max-width: $LargeScreen) {
    //   // grid-template-columns: 1fr !important;
    // }

  }

  header {
    grid-column: 1 / 4;
    grid-row: 1;
    color: $ivory;
    background: $groovy-red;
    height: 175px;

    @media (max-width: $LargeScreen) {
      grid-row: 1;
    }
  }

  footer {
    grid-column: 1 / 4;
    grid-row: -1;
    // grid-row: 4;
    height: 250px;
    color: $ivory;
    // position: relative;
    // z-index: 0;
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

    @media (max-width: $LargeScreen) {
      // grid-column: span 1;
      grid-row: -1;
    }
  }

  section:nth-of-type(1) {
    // grid-column-start: span 1;
    grid-column: 1 / 2;
    // padding: 0 1em;

    // @media screen and (min-width: 1024px) {
    //   padding: 0em 1em 0em 1em;
    // }

    @media (max-width: 768px) {
      grid-column: 1 / 4;
    }
  }

  section:nth-of-type(2) {
    // grid-column-end: span 1;
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    z-index: 10;
    // padding: 0 1em;

    // @media screen and (min-width: 1024px) {
    //   padding: 0em 1em 0em .5em;
    // }

    @media (max-width: 768px) {
      grid-column: 1 / 4;
      grid-row: 3;
    }
  }

  .skillsGrid {
    grid-column: 1 / 4;
    grid-row: 3;

    @media (max-width: $LargeScreen) {
      grid-row: 4;
    }
  }

</style>
