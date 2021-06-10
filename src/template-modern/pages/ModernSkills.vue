<template>
  <div name="bounce" appear>
    <transition name="bounce2" appear>
      <Skills />
    </transition>
    <transition name="bounce4" appear>
      <SkillsBubble />
    </transition>
    </div>
</template>

<script>
  import Skills from '@/components/Skills'
  import SkillsBubble from '@/components/SkillsBubble'

  export default {
    // layout: 'default',
    name: 'ModernSkills',
    components: {
      Skills,
      SkillsBubble
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
