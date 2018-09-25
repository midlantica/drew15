<template>
  <div class="wrapper">
    <Tabs/>
    <router-view/>
  </div>
</template>

<script>
  import Tabs from '@/components/Tabs.vue'
  export default {
    components: {
      Tabs
    },
    name: 'App',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Drew Harper',
      // all titles will be injected into this template
      titleTemplate: '%s - UI/UX Designer, Graphic Designer'
    }
  }
</script>

<style lang="scss">
  @import '@/assets/css/main.scss';

  .wrapper {
    max-width: 1024px;
    margin: 0 auto;
    background: white; // ivory
    @include shadow;
  }

</style>
