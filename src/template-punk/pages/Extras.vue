<template>
  <div>
    <header>
      <Navvy />
    </header>

    <transition name="fade" appear>
      <div class='backer'>
        <ExtrasC />
      </div>
    </transition>

  </div>
</template>

<script>
  import Navvy from '../components/Navvy'
  import ExtrasC from '@/components/ExtrasC'

  export default {
    name: 'Extras',
    components: {
      Navvy,
      ExtrasC
    }
  }
</script>

<style lang="scss" scoped>
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
