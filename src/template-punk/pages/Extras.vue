<template>
  <transition name="bounce" appear>
    <div>
      <header>
        <Navvy />
      </header>

      <div class='backer'>
        <ExtrasC />
      </div>

    </div>
  </transition>
</template>

<script setup>
  import Navvy from '../components/Navvy'
  import ExtrasC from '@/components/ExtrasC'
</script>

<style lang="scss" scoped>
  @import '@/template-punk/assets/css/punk-main.scss';

  header,
  footer {
    color: $ivory;
    background: initial !important;
    box-shadow: none;
  }

  .backer {
    background: $ivory;
  }
</style>
