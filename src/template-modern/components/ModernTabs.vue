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
    margin: .85rem 0 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    // justify-content: space-between;
    // justify-content: space-evenly;
    // justify-content: space-around;
    font-family: 'Spartan', Helvetica, Arial, sans-serif !important;


    a {
      color: $black;
      margin: .5rem 0.5rem;
      padding: 0.55rem 1rem 0.4rem;
      // border: 1px solid $ruby !important;
      border-radius: 1.25rem;
      text-decoration: none !important;
      text-transform: uppercase;
      font-size: .65rem;
      font-weight: 600;
      letter-spacing: 0.075ch;
      background: $ruby;
      background: linear-gradient(180deg,
        darken($ruby, 0),
        darken($ruby, 15)
      );

      &:hover {
        color: $white;
        background: $ruby;
        background: linear-gradient(0deg,
        darken($ruby, 0),
        darken($ruby, 15)
      );
      }
    }
  }

</style>
