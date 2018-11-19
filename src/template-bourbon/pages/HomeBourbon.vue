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
        { cssText: '.VueCarousel.druCarousel { box-shadow: 0 0 4px black, 0 3px 5px rgba(0, 0, 0, 0); min-height: 21vh; }', type: 'text/css' },
        { cssText: '.about { box-shadow: 0 0 4px black, 0 3px 5px rgba(0, 0, 0, 0); }', type: 'text/css' }
      ]
    }
  }
</script>

<style lang="scss">
  @import '@/assets/css/main.scss';
  @import '@/template-bourbon/assets/css/bourbon-main.scss';

  $breakThou: 1024px;
  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 530px;

  header,
  footer {
    color: $ivory;
    position: relative;
    @include shadow;
  }

  main {
    display: grid;  // <-- CONTENT GRID
    grid-template-columns: repeat(2, 1fr);
    box-shadow: 3px 5px 4px transparentize(black, 0.8),
                3px 3px 5px transparentize(black, 0.2);
    padding-top: 1em;
    padding-bottom: .75em;
    //
    @media (max-width: $breakThou) {
      grid-template-columns: 1fr;
    }

    > section {
      //
      &:nth-child(1) {
        padding: 0 1em;

        @media screen and (min-width: $breakThou) {
          padding: 0em 1em 0em 1em;
        }
      }
      &:nth-child(2) {
        padding: 0 1em;

        @media screen and (min-width: $breakThou) {
          padding: 0em 1em 0em .5em;
        }
      }

    }

  }

  .about p {
    font-size: 0.8em;
    font-family: "AmericanTypewriterStd-Med", Helvetica, Times, serif !important;
    // color: red;

    @media (max-width: $breakThou) {
      font-size: 1.7vw;
    }

    @media (max-width: $breakOne) {
      font-size: 2.05vw;
    }

    @media (max-width: $breakTwo) {
      font-size: 2.35vw;
    }

    @media (max-width: $breakThree) {
      font-size: 2.85vw;
    }
  }

</style>
