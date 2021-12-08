<template>
  <div class="marT1 marL1H marRH">
    <div class="headBlock">
      <router-link :to="{ name: 'ExtrasBourbon' }" class="drewhead jelloHorizontal" />
      <h1>{{ store.copy.druHead }}</h1>
    </div>
    <p v-html="store.copy.druCopy"></p>
  </div>
</template>

<script lang="ts" setup>
  import { inject } from 'vue'

  const store: any = inject('store')
</script>

<style lang="scss" scoped>
  @import "@/template-bourbon/assets/css/bourbon-main.scss";

  .headBlock {
    display: grid;
    grid-template-columns: 88px auto;
    grid-template-rows: auto;
    grid-column-gap: 6px;
    justify-items: start;
    align-items: center;
    margin-top: .5rem;

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
      color: $accent-red;
      font-size: 1.7rem;
      padding: 0;
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      align-self: center;
      max-width: 30ch;

      @media (min-width: $breakThou) {
        max-width: 30ch;
      }

      @media (max-width: $breakOne) {
        max-width: initial;
        font-size: 1.65rem;
      }

      @media (max-width: $breakTwo) {
        max-width: 30ch;
        font-size: 1.5rem;
      }

      @media (max-width: $breakThree) {
        font-size: 1.25rem;
      }

    }
  }

  p.smallCaps {
    font-variant: small-caps !important;
    font-size: 185% !important;
    // font-weight: 500;
  }

  p {
    font-family: $font-copy;
    font-size: 1.1rem !important;
    line-height: 2.6rem;
    color: $grey;
    margin: 0.5rem 0.5rem 0rem !important;
    letter-spacing: 0.03rem;

    @media (max-width: $breakThou) {
      columns: 2 20ch;
      line-height: 2.25rem !important;
      column-gap: 3rem;
      column-rule: 1px solid transparentize($accent-red, .75);
      text-justify: auto;
      hyphens: auto;
    }

    @media (max-width: $breakOne) {
      letter-spacing: 0.05rem;
      // columns: 2 200px;
      text-justify: auto;
      hyphens: auto;
    }

    @media (max-width: 670px) {
      columns: initial;
      text-justify: auto;
      hyphens: auto;
    }

    @media (max-width: $breakTwo) {
      text-justify: auto;
      hyphens: auto;
    }
  }
</style>
