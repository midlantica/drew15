<template>
  <nav>
  </nav>
</template>

<style lang='scss' scoped>
  @import '@/template-modern/assets/css/modern-main.scss';

  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 1.25em;

    @media (max-width: $breakOne) {
      justify-content: center;
    }
  }
</style>
