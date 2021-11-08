<template>
  <div class='slides'>
    <transition name="bounce4" appear>
      <Carousel />
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { ref, defineComponent } from 'vue'
  import Carousel from '@/components/Carousel/Carousel'

  defineComponent ({
    data() {
      return {
        show: true
      }
    }
  })
</script>

<style lang='scss' scoped>
  @import '@/template-modern/assets/css/modern-main.scss';
</style>
