<template>
  <div>

    <header>
      <Navvy/>
    </header>

    <ExtrasC/>
    
    <footer>
      <Quotes/>
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
        class: 'corp'
      }
    },
    components: {
      Navvy,
      Quotes,
      ExtrasC
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Questrial');
  @import '@/assets/css/main.scss';
  @import '@/template-corp/assets/css/corp-main.scss';

</style>
