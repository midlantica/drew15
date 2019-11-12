<template>
  <div>

    <header>
      <Navvy/>
    </header>

    <div class="backer">
      <ExtrasC/>
    </div>

    <footer>
      <Footy/>
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
      { cssText: '.techy > .flexContainer { background: #fffff1 !important; }', type: 'text/css' }
    ]
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800');
  @import '@/assets/css/main.scss';
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
