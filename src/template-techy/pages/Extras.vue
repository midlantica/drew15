<template>
  <transition name="bounce" appear>
    <div>
      <header>
        <Navvy />
      </header>

      <transition name="bounce2" appear>
        <div class='backer'>
          <ExtrasC />
        </div>
      </transition>

      <footer>
        <Footy />
      </footer>
    </div>
  </transition>
</template>

<script setup>
  import Navvy from '../components/Navvy'
  import Footy from '../components/Footy'
  import ExtrasC from '@/components/ExtrasC'
</script>

<style lang="scss" scoped>
  @import '@/template-techy/assets/css/techy-main.scss';

  header {
    color: $ivory;
    background: $groovy-red;
    background: $mango;
    box-shadow: none;
    // margin-bottom: -1.2em;
  }

  footer {
    color: $ivory;
    background: $mango;
    box-shadow: none;
  }

  .flexContainer {
    background: #fffff1;
  }

  .backer {
    width: 100%;
    background: #fffff1;
  }
</style>
