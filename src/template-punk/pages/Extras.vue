<template>
  <div>
    <header>
      <Navvy />
    </header>

    <div class="backer">
      <ExtrasC />
    </div>

    <br />
    <br />
    <br />
  </div>
</template>

<script>
  import Navvy from '../components/Navvy'
  import ExtrasC from '@/components/ExtrasC'

  export default {
    name: 'Extras',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      // title: 'Drew Harper',
      // all titles will be injected into this template
      titleTemplate: '%s - Extras!',
      bodyAttrs: {
        class: 'punk extras'
      }
    },
    components: {
      Navvy,
      ExtrasC
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i');
  @import '@/template-punk/assets/css/punk-main.scss';

  header,
  footer {
    color: $ivory;
    background: initial !important;
    box-shadow: none;
  }

  .backer {
    background: $ivory;
  }
</style>
