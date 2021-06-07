<template>
  <transition name="bounce6" appear>
    <Skills />
  </transition>
</template>

<script>
  import Skills from '@/components/Skills'

  export default {
    // layout: 'default',
    name: 'ModernSkills',
    components: {
      Skills
    },
    data() {
      return {
        show: true
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '@/template-modern/assets/css/modern-main.scss';
</style>
