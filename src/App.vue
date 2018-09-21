<template>
  <div class="wrapper">

    <Tabs/>

    <header>
      <Navvy/>
    </header>

    <router-view/>

    <footer>
      <Navvy/>
    </footer>

  </div>
</template>

<script>
  import Navvy from '@/components/Navvy'
  import Tabs from '@/components/Tabs'
  export default {
    components: {
      Navvy,
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

  // .page-enter-active,
  // .page-leave-active {
  //   transition: opacity .5s;
  // }
  // .page-enter,
  // .page-leave-to {
  //   opacity: 0;
  // }

  header,
  footer {
    color: $ivory;
    background: url(/img/bg/bg_bag_dk.jpg) repeat;
    // z-index: 10;
    position: relative;
    @include shadow;
    // box-shadow: 0px 0px 6px 1px black;
  }

  .wrapper {
    max-width: 1024px;
    margin: 0 auto;
    background: white; // ivory
    @include shadow;
  }

</style>
