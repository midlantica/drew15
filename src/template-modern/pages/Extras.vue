<template>
  <transition name="bounce" appear>
    <div>

      <header>
        <Navvy />
      </header>

      <ExtrasC />

      <footer>
        <NavvyEmpty />
      </footer>

    </div>
  </transition>
</template>

<script setup lang="ts">
  import '../template-modern/components/Navvy.vue'
  import '../template-modern/components/NavvyEmpty.vue'
  import '../../components/ExtrasC.vue'
</script>

<style lang="scss">
  @import '@/template-modern/assets/css/modern-main.scss';
</style>
