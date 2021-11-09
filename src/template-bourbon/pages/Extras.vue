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
  import Navvy from '@/template-bourbon/components/Navvy.vue'
  import NavvyEmpty from '@/template-bourbon/components/NavvyEmpty.vue'
  import ExtrasC from '@/components/ExtrasC.vue'

</script>

<style lang="scss">
  @import '@/template-bourbon/assets/css/bourbon-main.scss';
</style>
