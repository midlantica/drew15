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
        <Quotes/>
      </section>
    </main>

    <footer>
      <Navvy/>
    </footer>

  </div>

</template>

<script>
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
      Navvy,
      HeadAndCopy,
      CarouselShow,
      About,
      Skills,
      Quotes
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
  @import '@/assets/css/main.scss';
  @import '@/template-techy/assets/css/techy-main.scss';

  header,
  footer {
    color: $ivory;
    background: royalblue;
    // background: url(/img/bg/bg_bag_dk.jpg) repeat;
    // z-index: 10;
    position: relative;
    @include shadow;
    // box-shadow: 0px 0px 6px 1px black;
  }

  main {
    display: grid;  // <-- CONTENT GRID
    grid-template-columns: repeat(2, 1fr);
    background: url(../assets/img/bg/graphy_2.png) repeat;
    box-shadow: 3px 5px 4px transparentize(black, 0.8),
                3px 3px 5px transparentize(black, 0.2);
    padding-top: 1em;
    padding-bottom: .75em;
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
          padding: 0em 1em 0em .5em;
        }
      }

    }

  }

</style>
