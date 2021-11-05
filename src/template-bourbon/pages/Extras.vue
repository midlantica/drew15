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

<script lang="ts">
  import Navvy from '@/template-bourbon/components/Navvy'
  import NavvyEmpty from '@/template-bourbon/components/NavvyEmpty'
  import ExtrasC from '@/components/ExtrasC'
  export default {
    name: 'Extras',
    components: {
      Navvy,
      NavvyEmpty,
      ExtrasC
    }
  }
</script>

<style lang="scss">
  @import '@/template-bourbon/assets/css/bourbon-main.scss';
</style>
