<template>
  <div>
    <div class="headBlock">
      <router-link :to="{ name: 'ModernExtras' }" class="drewhead jelloHorizontal" />
      <h1>{{ store.copy.druHead }}</h1>
    </div>
    <p v-html="store.copy.druCopy"></p>
  </div>
</template>

<script lang="ts" setup>
  // import { defineComponent } from 'vue'
  import { inject } from 'vue'

  const store: any = inject('store')
</script>

<style lang="scss" scoped>
  @import "@/template-modern/assets/css/modern-main.scss";

  .headBlock {
    display: grid;
    grid-template-columns: 88px auto;
    grid-template-rows: auto;
    grid-column-gap: 6px;
    justify-items: start;
    align-items: center;
    margin-bottom: 1rem;
    gap: .5rem;

    a.drewhead {
      margin-right: 1em;
      background-image: url(/img/drew_mug_red.png);
      background-repeat: no-repeat;
      background-size: cover;
      width: 78px;
      height: 94px;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      align-self: flex-start;
    }

    h1 {
      display: inline-block;
      font-family: $font-subhead;
      letter-spacing: -0.01ch;
      padding: 0;
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      align-self: center;
      margin-top: 2.2rem;
      // >>>>>>
      width: 20ch;
      color: #da2561 !important;
      font-weight: 400;
      font-size: clamp(.8rem, 1.1rem, 1.25rem) !important;
      text-shadow: 1px 1px 4px black;
      // >>>>>>
      color: white !important;
      font-weight: 500;
      font-size: 1.1rem !important;
      width: 20ch;

      @media (max-width: 535px) {
        width: initial;
        margin-top: .75rem;
      }

      @media (max-width: $breakOne) {
        max-width: initial;
        // font-size: 1.65rem;
      }

      @media (max-width: $breakTwo) {
        max-width: 30ch;
        // font-size: 1.5rem;
      }

      @media (max-width: $breakThree) {
        // font-size: 1.25rem;
      }

    }
  }

  p.smallCaps {
    font-variant: small-caps !important;
    font-size: 185% !important;
    font-weight: 300;
  }

  p {
    font-family: $font-copy;
    font-size: clamp(0.8rem, 0.95rem, 1.35rem);
    line-height: clamp(1.5rem, 2.2rem, 2.6rem);
    font-weight: 300;
    margin: 0rem !important;
    // margin: 0.0rem auto 1rem !important;
    letter-spacing: 0.03rem;

    // @media (max-width: 300000rem) {
    //   // font-size: 1.3rem;
    //   // line-height: 2.5rem !important;
    //   columns: 2 20ch;
    //   column-gap: 3rem;
    //   column-rule: 1px solid transparentize($accent-red, .75);
    //   text-justify: auto;
    //   hyphens: none;
    // }

    // @media (max-width: $breakOne) {
    //   letter-spacing: 0.05rem;
    //   // font-size: 1rem !important;
    //   // columns: 2 200px;
    //   text-justify: auto;
    //   hyphens: auto;
    // }

    // @media (max-width: 670px) {
    //   columns: initial;
    //   text-justify: auto;
    //   hyphens: auto;
    // }

    // @media (max-width: $breakTwo) {
    //   text-justify: auto;
    //   hyphens: auto;
    // }
  }
</style>
