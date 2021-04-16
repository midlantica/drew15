<template>
  <div>

    <header>
      <Navvy />
    </header>

    <transition name="fade" appear>
      <ExtrasC />
    </transition>

    <footer>
      <NavvyEmpty />
    </footer>

  </div>
</template>

<script>
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
