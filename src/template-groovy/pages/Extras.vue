<template>
  <div>

    <header>
      <NavvyHead/>
    </header>

    <ExtrasC/>

    <footer>
      <Footer />
    </footer>

  </div>
</template>

<script>
  import NavvyHead from '../components/NavvyHead'
  import Footer from '../components/Footer'
  import ExtrasC from '@/components/ExtrasC'

  export default {
    name: 'Extras',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      // title: 'Drew Harper',
      // all titles will be injected into this template
      titleTemplate: '%s - Extras!',
      bodyAttrs: {
        class: 'groovy extras'
      },
      style: [
        { cssText: '.wrapper { background: #fffae4; }', type: 'text/css' }
      ]
    },
    components: {
      NavvyHead,
      Footer,
      ExtrasC
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/template-groovy/assets/css/groovy-main.scss';

  header {
    // grid-column: 1 / 4;
    // grid-row: 1;
    color: $ivory;
    background: $groovy-red;
    // height: 175px;
    @include clearfix;
  }

  footer {
    // grid-column: 1 / 4;
    // grid-row: -1;
    // grid-row: 4;
    height: 160px;
    color: $ivory;
    background: linear-gradient(
      /* // 0 - 25% */
      $groovy-aqua 0%,
      $groovy-aqua 25%,
      /* // 25% - 50% */
      $groovy-yellow 25%,
      $groovy-yellow 50%,
      /* // 50% - 75% */
      $groovy-orange 50%,
      $groovy-orange 75%,
      /* // 75% - 100% */
      $groovy-red 75%,
      $groovy-red 100%
    );

    @media (max-width: $breakThou) {
      // grid-column: span 1;
      // grid-row: 5;
    }

  }


</style>
