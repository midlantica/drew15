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
  import Navvy from '../components/Navvy'
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
      Quotes,
      Navvy,
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

  .mainGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto;
    //                  1-2 2-3  3-4 4-5
    grid-auto-flow: column;
    background: $groovy-yellow-pale;

    @media (min-width: 1024px) {
      grid-template-columns: 1fr;
    }

  }

  header {
    grid-column: 1 / 4;
    // grid-row: 1 / 2;
    color: $ivory;
    background: $groovy-red;
    height: 200px;
    // position: relative;
    // z-index: 0;
  }

  footer {
    grid-column: 1 / 4;
    grid-row-end: -1;
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
      $groovy-red 100%),
  }

  > section {
    //
    &:nth-child(1) {
      // grid-column-start: span 1;
      grid-column: 1 / 2;
      // padding: 0 1em;

      // @media screen and (min-width: 1024px) {
      //   padding: 0em 1em 0em 1em;
      // }
    }
    &:nth-child(2) {
      // grid-column-end: span 1;
      grid-column: 2 / 3;
      // padding: 0 1em;

      // @media screen and (min-width: 1024px) {
      //   padding: 0em 1em 0em .5em;
      // }
    }

  }

  .skillsGrid {
    grid-column: 1 / 4;
    grid-row: 3;
  }

</style>
