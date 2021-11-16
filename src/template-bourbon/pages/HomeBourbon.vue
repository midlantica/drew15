<template>
  <transition name="fade" appear>
    <div>

      <transition name="topDown" appear>
        <header>
          <Navvy />
        </header>
      </transition>

      <transition name="bounce2" appear>
        <main class='mainGrid'>

          <transition name="bounce3" appear>
            <div class='copyArea'>
              <HeadAndCopy />
            </div>
          </transition>

          <transition name="bounce6" appear>
            <Skills />
          </transition>

          <div class='slides'>
            <transition name="bounce4" appear>
              <Carousel />
            </transition>
          </div>

          <transition name="bounce8" appear>
            <About />
          </transition>

          <transition name="bounce10" appear>
            <Quotes />
          </transition>

        </main>
      </transition>

      <footer>
        <NavvyEmpty />
      </footer>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import Navvy from '../components/Navvy.vue'
  import NavvyEmpty from '../components/NavvyEmpty.vue'
  import HeadAndCopy from '../components/HeadAndCopy.vue'
  import About from '@/components/About.vue'
  import Skills from '@/components/Skills.vue'
  import Quotes from '../components/Quote.vue'
  import Carousel from '@/components/Carousel/Carousel.vue'
</script>

<style lang='scss' scoped>
  @import '@/template-bourbon/assets/css/bourbon-main.scss';

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
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      //
    }
  }

  .copyArea {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    transition-delay: 250ms;

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

    @media (max-width: $breakThree) {
      margin: 0;
    }

    @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2) {
      margin-top: 0.25em;
      margin-bottom: 0.5em;
      grid-row-gap: 0em;
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

    @media (max-width: $breakThree) {
      margin: 0;
    }
  }
</style>
