<template>
  <div>
    <header>
      <Navvy />
    </header>

    <ExtrasC />

    <footer>
      <Quotes />
    </footer>
  </div>
</template>

<script>
  import Navvy from '../components/Navvy'
  import Quotes from '../components/Quote'
  import ExtrasC from '@/components/ExtrasC'

  export default {
    name: 'Extras',
    metaInfo: {
      titleTemplate: '%s - Extras!',
      bodyAttrs: {
        class: 'corp extras'
      },
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Alegreya+SC:ital,wght@0,400;0,500;1,400;1,500&family=Alegreya:ital,wght@0,400;0,500;1,400;1,500&display=swap' },
      ]
    },
    components: {
      Navvy,
      Quotes,
      ExtrasC
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/template-corp/assets/css/corp-main.scss';
</style>
