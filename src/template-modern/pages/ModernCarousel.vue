<template>
  <div class='slides'>
    <transition name="bounce4" appear>
      <Carousel />
    </transition>
  </div>
</template>


<script>
  import Carousel from '@/components/Carousel/Carousel'

  export default {
    // layout: 'default',
    name: 'ModernCarousel',
    components: {
      Carousel,
    },
    data() {
      return {
        show: true
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '@/template-modern/assets/css/modern-main.scss';

</style>
