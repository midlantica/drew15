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
  // import '@/template-corp/assets/css/fonts/BodoniXT/BodoniXT.css'
  import '@/template-corp/assets/css/fonts/cormorantGaramond/cormorantGaramond.css'

  const Navvy = () => import('../components/Navvy')
  const HeadAndCopy = () => import('../components/HeadAndCopy')
  const Skills = () => import('../components/Skills')
  const CarouselShow = () => import('../components/Carousel/CarouselShow')
  const About = () => import('../components/About')
  const Quotes = () => import('../components/Quotes/QuoteBasic')

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
      }
      // style: [
      //   { cssText: 'html { background: url(img/bg/black-parch-bg.jpg ) !important; }', type: 'text/css' },
      //   { cssText: 'body { background: transparent !important }', type: 'text/css' }
      // ]
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Questrial');
  @import '@/assets/css/main.scss';
  @import '@/template-corp/assets/css/corp-main.scss';

  .wrapper {
    // background: url(/template-corp/assets/img/bg/linen.png) repeat !important;
    // background: url(/img/bg/linen.png) repeat !important;
    // background: url(/img/bg/concrete_seamless.png) repeat !important;
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
          padding: 0em 1em 0em .5em;
        }
      }

    }

  }

</style>
