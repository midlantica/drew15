<template>
  <div class="modernTabs">
    <router-link to="/Modern/Carousel">Carousel</router-link>
    <router-link to="/Modern/Skills">Skills</router-link>
    <router-link to="/Modern/About">About</router-link>
  </div>
</template>

<style lang='scss' scoped>
  @import '@/template-modern/assets/css/modern-main.scss';

  .modernTabs {
    margin: 2rem 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    // justify-content: space-between;
    // justify-content: space-evenly;
    // justify-content: space-around;
    font-family: 'Spartan', Helvetica, Arial, sans-serif !important;


    a {
      color: white;
      margin: auto 0.75rem;

      &:hover {
        color: $accent-red;
      }
    }
  }

</style>
