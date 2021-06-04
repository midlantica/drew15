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

  .skillsGrid {
    grid-column: 1 / 2;
    grid-row: 2 / 4;

    @media (max-width: $breakThou) {
      grid-row: 2;
    }

    @media (max-width: $breakOne) {
      grid-row: 2;
    }

    @media (max-width: $breakTwo) {
      grid-row: 2;
    }
  }


</style>
