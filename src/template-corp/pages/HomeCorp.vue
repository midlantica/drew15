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

          <transition name="bounce9" appear>
            <About />
          </transition>

          <transition name="bounce7" appear>
            <Skills />
          </transition>

        </main>
      </transition>

      <footer>
        <Quotes />
      </footer>
    </div>
  </transition>
</template>

<script setup>
  import Navvy from '../components/Navvy'
  import HeadAndCopy from '../components/HeadAndCopy'
  import Skills from '../components/Skills'
  import About from '@/components/About'
  import Quotes from '../components/Quote'
  import Carousel from '@/components/Carousel/Carousel'
</script>

<style lang="scss" scoped>
  @import "@/template-corp/assets/css/corp-main.scss";

  .about {
    background: white;
    font-size: 0.95em;

    @media (max-width: $breakThou) {
      //
    }
  }

  header,
  footer {
    // color: $ivory;
    box-shadow: none !important;
  }

  .mainGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: .5rem 1rem;
    margin: 0.25rem 1rem 1rem;

    @media (max-width: $breakThou) {
      grid-template-columns: 1fr;
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
    grid-row: 1 / 3;

    @media (max-width: $breakThou) {
      grid-column: 1 / 3;
      grid-row: 1;
      margin-bottom: -1em;
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
      margin-top: initial;
    }

    @media (max-width: $breakOne) {
      grid-column: 1 / 3;
      grid-row: 3;
      margin-top: initial;
    }

    @media (max-width: $breakTwo) {
      grid-column: 1 / 3;
      grid-row: 3;
      margin-top: initial;
    }
  }

  .skillsGrid {
    grid-column: 1 / 2;
    grid-row: 2;

    @media (max-width: $breakThou) {
      grid-row: 2;
    }

    @media (max-width: $breakOne) {
      grid-row: 2;
    }

    @media (max-width: $breakTwo) {
      grid-row: 2;
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
  }
</style>
