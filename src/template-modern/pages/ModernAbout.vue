<template>
  <transition name="bounce2" appear>
    <div>
      <transition name="bounce4" appear>
        <HeadAndCopy />
      </transition>
      <transition name="bounce6" appear>
        <About />
      </transition>
    </div>
  </transition>
</template>

<script>
  import HeadAndCopy from '../components/HeadAndCopy'
  import About from '@/components/About'

  export default {
    // layout: 'default',
    name: 'ModernAbout',
    components: {
      HeadAndCopy,
      About
    },
    data() {
      return {
        show: true
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '@/template-modern/assets/css/modern-main.scss';

  .about {
    grid-column: 2 / 3;
    grid-row: 2;
    margin: 0rem 2rem;

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

</style>
