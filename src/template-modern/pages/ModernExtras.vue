<template>
  <transition name="bounce2" appear>
    <ExtrasC />
  </transition>
</template>

<script>
  import ExtrasC from '@/components/ExtrasC'
  export default {
    name: 'Extras',
    components: {
      ExtrasC
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/template-modern/assets/css/modern-main.scss';
</style>
