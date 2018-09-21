<template>
  <div class="tabs">
    <a href="#" class="bourbon">Bourbon</a>
    <a href="#" class="groovy">Groovy</a>
    <a href="#" class="techy">Techy</a>
    <a href="#" class="corp">Corp</a>
    <a href="#" class="punk">Punk</a>
    <!-- <a href="#" class="samurai">Samurai</a> -->
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/css/main.scss';

  .tabs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    font-size: .7em;
    background: #333;

    a {
      flex-grow: 1;
      color: transparentize($ivory, .25);
      padding: .65em 0;
      border-right: 1px solid transparentize($ivory, .75);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.2em;

      &:last-child {
        border-right: none;
      }

      &:hover {
        color: orange;
      }

    }
  }

</style>
