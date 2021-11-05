<template>
  <transition name="bounce" appear>
    <div>
      <header>
        <Navvy />
      </header>

      <ExtrasC />

      <footer>
        <Quotes />
      </footer>
    </div>
  </transition>
</template>

<script lang="ts">
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
