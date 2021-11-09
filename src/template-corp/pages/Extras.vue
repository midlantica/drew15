<template>
  <transition name="bounce" appear>
    <div>
      <header>
        <Navvy />
      </header>

      <ExtrasC />

      <footer>
        <Quotes />
      </footer>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import Navvy from '../components/Navvy.vue'
  import Quotes from '../components/Quote.vue'
  import ExtrasC from '@/components/ExtrasC.vue'
</script>

<style lang="scss" scoped>
  @import '@/template-corp/assets/css/corp-main.scss';
</style>
