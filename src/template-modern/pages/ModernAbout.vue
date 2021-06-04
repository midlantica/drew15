<template>
  <transition name="bounce6" appear>
    <div>
      <HeadAndCopy />
      <About />
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
  // @import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,300;0,700;0,900;1,100;1,300;1,700;1,900&display=swap');
  @import '@/template-modern/assets/css/modern-main.scss';

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

</style>
