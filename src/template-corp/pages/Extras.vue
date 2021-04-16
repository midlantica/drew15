<template>
  <div>
    <header>
      <Navvy />
    </header>

    <transition name="fade" appear>
      <ExtrasC />
    </transition>

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
