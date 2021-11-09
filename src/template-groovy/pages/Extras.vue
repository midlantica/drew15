<template>
  <transition name="fade" appear>
    <div>
      <header>
        <NavvyHead/>
      </header>

      <ExtrasC />

      <footer>
        <Footer />
      </footer>
    </div>
  </transition>
</template>

<script setup>
  import NavvyHead from '../components/NavvyHead'
  import Footer from '../components/Footer'
  import ExtrasC from '@/components/ExtrasC'
</script>

<style lang="scss" scoped>
  @import '@/template-groovy/assets/css/groovy-main.scss';

  header {
    color: $ivory;
    background: $groovy-red;
    @include clearfix;
  }

  footer {
    height: 160px;
    color: $ivory;
    background: linear-gradient(
      /* // 0 - 25% */
      $groovy-aqua 0%,
      $groovy-aqua 25%,
      /* // 25% - 50% */
      $groovy-yellow 25%,
      $groovy-yellow 50%,
      /* // 50% - 75% */
      $groovy-orange 50%,
      $groovy-orange 75%,
      /* // 75% - 100% */
      $groovy-red 75%,
      $groovy-red 100%
    );

    @media (max-width: $breakThou) {
      //
    }

  }


</style>
