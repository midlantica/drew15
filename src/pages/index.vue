<template>
  <div class="content">

    <section>
      <HeadAndCopy/>
      <Skills/>
    </section>

    <section>
      <CarouselShow/>
      <About/>
      <Quotes/>
    </section>

  </div>
</template>

<script>
  import HeadAndCopy from '@/components/HeadAndCopy'
  import About from '@/components/About'
  import Skills from '@/components/Skills'
  // import Quotes from '@/components/Quotes/QuotesVueCarousel'
  // import Quotes from '@/components/Quotes/QuotesVueSwiper'
  // import Quotes from '@/components/Quotes/QuotesSiema'
  // import Quotes from '@/components/Quotes/QuotesVueAgile'
  import Quotes from '@/components/Quotes/QuoteBasic'
  const CarouselShow = () => import('@/components/Carousel/CarouselShow')

  export default {
    layout: 'default',
    components: {
      HeadAndCopy,
      CarouselShow,
      About,
      Skills,
      Quotes
    }
  }
</script>

<style lang="scss">
    @import '../assets/css/main.scss';

  .content {
    display: grid;  // <-- CONTENT GRID
    grid-template-columns: repeat(2, 1fr);
    background: url(../assets/img/bg/graphy_2.png) repeat;
    box-shadow: 3px 5px 4px transparentize(black, 0.8),
                3px 3px 5px transparentize(black, 0.2);
    padding-top: .5em;
    padding-bottom: .5em;
    //
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }

    > section {
      //
      &:nth-child(1) {
        padding: 0 1em;

        @media screen and (min-width: 1024px) {
          padding: 0em .5em 0em 1em;
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
