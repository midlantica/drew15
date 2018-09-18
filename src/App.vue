<template>

  <div id="app">
    <div class="grid">

      <div></div>

      <main>
        <header>
          <Navvy/>
        </header>

        <router-view/>

        <footer>
          <Navvy/>
        </footer>

      </main>

      <div></div>

    </div>
  </div>

</template>

<script>
  import Navvy from '@/components/Navvy'
  export default {
    components: {
      Navvy
    }
  }
</script>

<style lang="scss">
  @import '@/assets/css/main.scss';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    // color: #2c3e50;
    // margin-top: 60px;
  }

  header,
  footer {
    color: $ivory;
    background: url(/img/bg/bg_bag_dk.jpg) repeat;
    // @include shadow;
    z-index: 10;
    box-shadow: 0px 0px 6px 1px black;

  }

  .grid {
    display: grid;
    // COLUMNS ||  ||  ||
    grid-template-columns:
      minmax(0, 1fr) // 1st Coloumn
      repeat(1, minmax(auto, 1024px)) // Second Column
      minmax(0, 1fr); // Third Column
    grid-gap: 0em;
    // @include shadow;

    > main {
      display: grid;
      // ROWS
      grid-template-rows: 1fr auto 1fr;
      background: white; // ivory
      @include shadow;

      header,
      footer {
        // background-color: #aaa;
        // padding: 1em;
      }
    }
  }

</style>
