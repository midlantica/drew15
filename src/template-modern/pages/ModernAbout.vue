<template>
  <transition name="bounce2" appear>
    <div class="aboutGrid">
      <transition name="bounce3" appear>
        <HeadAndCopy />
      </transition>
      <transition name="bounce4" appear>
        <About />
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import HeadAndCopy from '../components/HeadAndCopy.vue'
  import About from '../../components/About.vue'
</script>

<style lang='scss' scoped>
  @import '@/template-modern/assets/css/modern-main.scss';

  .aboutGrid {
    display: grid;
    grid-template-columns: minmax(auto, 2fr) minmax(225px, 1fr);
    // grid-template-columns: minmax(5rem, 1fr) minmax(auto, 70rem) minmax(5rem, 1fr)
    // grid-column: 2 / 3;
    // grid-row: 2;
    width: 80%;
    gap: 2rem;
    margin: auto;

    @media (max-width: 850px) {
      width: 90%;
      grid-template-columns: 1fr;
    }

    // @media (max-width: $breakOne) {
    //   grid-column: 1 / 3;
    //   grid-row: 4;
    // }

    // @media (max-width: $breakTwo) {
    //   grid-column: 1 / 3;
    //   grid-row: 4;
    // }

    // @media (max-width: $breakThree) {
    //   margin: 0;
    // }

    // @media (min-device-width: 375px)
    // and (max-device-width: 660px)
    // and (-webkit-min-device-pixel-ratio: 2) {
    //   margin-top: 0.25em;
    //   margin-bottom: 0.5em;
    //   grid-row-gap: 0em;
    // }
  }

</style>
