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
        <!-- <Quotes/> -->
      </section>

    </main>

    <Skills/>

  </div>

</template>

<script>
  import '@/assets/fonts/Roboto/Roboto.css'
  import '@/assets/fonts/AmericanTypewriter/AmericanTypewriter.css'
  import '@/assets/fonts/BodoniXT/BodoniXT.css'

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
        { cssText: '', type: 'text/css' }
      ]
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');
  @import '@/assets/css/main.scss';
  @import '@/template-punk/assets/css/punk-main.scss';

  header,
  footer {
    color: $ivory;
    // background: magenta;
    background: initial !important;
    box-shadow: none;
  }

  main {
    display: grid;  // <-- CONTENT GRID
    grid-template-columns: repeat(2, 1fr);
    background: transparent;
    // box-shadow: 3px 5px 4px transparentize(black, 0.8),
    //             3px 3px 5px transparentize(black, 0.2);
    padding-top: 1em;
    padding-bottom: .75em;
    box-shadow: none;
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
