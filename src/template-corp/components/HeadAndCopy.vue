<template>
  <div class="wrap">
    <h1>{{ store.copy.druHead }}</h1>
    <p v-html="store.copy.druCopy"></p>
  </div>
</template>

<script lang="ts" setup>
  import { inject } from 'vue'

  const store: any = inject('store')
</script>

<style lang="scss" scoped>

  @import "@/template-corp/assets/css/corp-main.scss";

  // $breakOne: 840px;
  // $breakTwo: 630px;
  // $breakThree: 430px;

  $paleBlue: #7cc3fa;

  .wrap {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 1em 1em 1em 1.5rem;
    // position: relative;

    @media (max-width: $breakTwo) {
      margin: 0em 1em 1em;
    }
  }

  h1 {
    font-family: $font-head;
    // font-weight: 500;
    color: $blue-dark;
    text-transform: none;
    // font-size: 1.5em;
    margin: 0em 0em .5em;
    padding: 0;
    line-height: 2rem;
    transition: 0.25s ease-in;
    letter-spacing: 0.01rem;
    width: 100%;
    //
    font-weight: 600;
    max-width: 28ch;
    font-size: 1.3rem;

    @media (min-width: $breakThou) {
      max-width: 28ch;
    }

    @media (max-width: $breakThou) {
      max-width: initial;
    }

    @media (max-width: $breakOne) {
      max-width: initial;
    }

    @media (max-width: $breakTwo) {
      max-width: 28ch;
    }

    @media (max-width: $breakThree) {
      max-width: initial;
    }

  }

  p.smallCaps {
    font-family: $font-caps;
    font-variant: small-caps;
    font-size: 75%;
    font-weight: 500;
  }

  p {
    color: transparentize($black, 0.15);
    font-family: $font-copy;
    font-weight: normal;
    font-size: 1.1rem;
    line-height: 2.6rem;
    padding-left: 1.7rem;
    text-align: justify;
    border-left: 2px dotted $paleBlue;
    margin-right: 1rem;
    letter-spacing: -0.01rem;

    @media (max-width: $breakThou) {
      columns: 2 200px;
      column-gap: 3rem;
      column-rule: 2px dotted $paleBlue;
      text-justify: auto;
      hyphens: auto;
    }

    @media (max-width: $breakOne) {
      letter-spacing: 0.05rem;
      columns: 2 200px;
    }

    @media (max-width: 670px) {
      columns: initial;
      // font-size: 1.05rem;
      // line-height: 2.4rem;
      padding-left: 1.3rem;
      border-left: 2px dotted $paleBlue;
      margin-right: 0.5rem;
    }

    @media (max-width: $breakTwo) {
      //
    }
  }
</style>
