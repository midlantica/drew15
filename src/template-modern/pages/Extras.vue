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

<script setup>
  import Navvy from '@/template-modern/components/Navvy'
  import NavvyEmpty from '@/template-modern/components/NavvyEmpty'
  import ExtrasC from '@/components/ExtrasC'
</script>

<style lang="scss">
  @import '@/template-modern/assets/css/modern-main.scss';
</style>
