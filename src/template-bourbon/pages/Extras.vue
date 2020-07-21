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
      titleTemplate: '%s - Extras!',
      bodyAttrs: {
        class: 'bourbon extras'
      },
      style: [
        //
      ],
    },
    components: {
      Navvy,
      ExtrasC
    }
  }
</script>

<style lang="scss">
  @import '@/template-bourbon/assets/css/bourbon-main.scss';
</style>
