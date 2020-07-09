<template>
  <div>
    <header>
      <Navvy />
    </header>

    <div class='backer'>
      <ExtrasC />
    </div>

    <footer>
      <Footy />
    </footer>
  </div>
</template>

<script>
  import Navvy from '../components/Navvy'
  import Footy from '../components/Footy'
  import ExtrasC from '@/components/ExtrasC'

  export default {
    name: 'Extras',
    metaInfo: {
      titleTemplate: '%s - Extras!',
      bodyAttrs: {
        class: 'techy extras'
      }
    },
    components: {
      Navvy,
      Footy,
      ExtrasC
    },
    style: [
      //
    ]
  }
</script>

<style lang="scss" scoped>
  @import '@/template-techy/assets/css/techy-main.scss';

  header {
    color: $ivory;
    background: $groovy-red;
    background: $mango;
    box-shadow: none;
    // margin-bottom: -1.2em;
  }

  footer {
    color: $ivory;
    background: $mango;
    box-shadow: none;
  }

  .flexContainer {
    background: #fffff1;
  }

  .backer {
    width: 100%;
    background: #fffff1;
  }
</style>
