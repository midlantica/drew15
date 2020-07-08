<template>
  <div>
    <header>
      <Navvy />
    </header>

    <ExtrasC />

    <footer>
      <Navvy />
    </footer>
  </div>
</template>

<script>
  import Navvy from '@/template-bourbon/components/Navvy'
  import ExtrasC from '@/components/ExtrasC'
  export default {
    name: 'Extras',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      // title: 'Drew Harper',
      // all titles will be injected into this template
      titleTemplate: '%s - Extras!',
      bodyAttrs: {
        class: 'bourbon extras'
      }
    },
    components: {
      Navvy,
      ExtrasC
    }
  }
</script>

<style lang="scss">
  @import '../assets/css/fonts/AmericanTypewriter/AmericanTypewriter.css';
  @import '@/template-bourbon/assets/css/bourbon-main.scss';
</style>
