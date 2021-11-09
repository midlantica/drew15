<template>
  <transition name="fade" appear>
    <div>

      <transition name="topDown" appear>
        <header>
          <Navvy />
        </header>
      </transition>

      <transition name="bounce2" appear>
        <main class="mainGrid">

          <transition name="bounce3" appear>
            <div class="copyArea">
              <HeadAndCopy />
            </div>
          </transition>

          <transition name="bounce4" appear>
            <div class="slides">
              <Carousel />
            </div>
          </transition>

          <transition name="bounce8" appear>
            <About />
          </transition>

          <transition name="bounce10" appear>
            <Skills />
          </transition>

        </main>
      </transition>

      <footer>
        <Footy />
      </footer>
    </div>
  </transition>

</template>

<script setup>
  import Navvy from '../components/Navvy'
  import HeadAndCopy from '../components/HeadAndCopy'
  import Skills from '@/components/Skills'
  import About from '@/components/About'
  import Footy from '../components/Footy'
  import Carousel from '@/components/Carousel/Carousel'
</script>

<style lang="scss" scoped>
  @import "@/template-techy/assets/css/techy-main.scss";

  .mainGrid {
    display: grid;
    grid-template-columns: 7fr 6fr;
    grid-gap: 1rem 1rem;
    padding: 0 1em 0.5em;

    @media (min-width: $breakThou) and (min-device-width: 768px) {
      grid-template-columns: 7fr 6fr;
    }

    @media (max-width: $breakThou) {
      grid-template-columns: 1fr;
    }

    // IPAD LANDSCAPE
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      grid-template-columns: 1fr;
    }

    // IPAD PRO LANDSCAPE
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      grid-template-columns: 7fr 6fr;
    }
  }

  header {
    color: $ivory;
    background: $groovy-red;
    background: $mango;
    box-shadow: none;
  }

  .copyArea {
    grid-column: 1 / 2;
    grid-row: 1 / 3;

    // IPAD LANDSCAPE
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }

    // IPAD PRO LANDSCAPE
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }

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
    grid-row: 1 / 2;
    z-index: 10;
    margin-top: -5.5em;

    // IPAD LANDSCAPE
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      z-index: 10;
    }

    // IPAD PRO LANDSCAPE
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      z-index: 10;
    }

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 2;
      margin-top: 0;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 2;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 2;
    }
  }

  .about {
    grid-column: 2 / 3;
    grid-row: 2;

    // IPAD LANDSCAPE
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      grid-column: 2 / 3;
      grid-row: 2;
    }

    // IPAD PRO LANDSCAPE
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      grid-column: 2 / 3;
      grid-row: 2;
    }

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
  }

  .skillsGrid {
    grid-column: 1 / -1;
    grid-row: 3 / 4;

    // IPAD LANDSCAPE
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      grid-column: 1 / -1;
      grid-row: 3 / 4;
    }

    // IPAD PRO LANDSCAPE
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) {
      grid-column: 1 / -1;
      grid-row: 3 / 4;
    }

    @media (max-width: $breakThou) {
      grid-row: 3;
    }

    @media (max-width: $breakOne) {
      grid-row: 3;
    }

    @media (max-width: $breakTwo) {
      grid-row: 3;
    }
  }

  footer {
    color: $ivory;
    background: $mango;
    box-shadow: none;

    @media (max-width: $breakThou) {
      //
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      //
    }
  }
</style>
