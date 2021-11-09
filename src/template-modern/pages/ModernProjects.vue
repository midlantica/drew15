<template>
  <div class='slides'>
    <transition name="bounce4" appear>
      <Carousel />
    </transition>
  </div>
</template>

<script setup>
  import Carousel from '@/components/Carousel/Carousel'
</script>

<style lang='scss' scoped>
  @import '@/template-modern/assets/css/modern-main.scss';
</style>
