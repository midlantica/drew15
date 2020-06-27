<template>
  <div class="wrap">
    <h1 v-html="this.$root.druHead"></h1>
    <p v-html="this.$root.druCopy"></p>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  // @import '@/assets/css/main.scss';
  @import '@/template-corp/assets/css/corp-main.scss';

  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 430px;

  $paleBlue: #7cc3fa;

  .wrap {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0em 1.25em 1em;
    // position: relative;
  }

  h1 {
    font-family: $font-head;
    font-weight: 500;
    color: $blue-dark;
    text-transform: none;
    font-size: 1.4em;
    // font-size: calc(1.45rem + 0.5vw);
    // font-size: 1.8rem;
    margin: 0em 0em .5em;
    padding: 0;
    line-height: 2rem;
    // grid-column: 2 / 3;
    // grid-row: 1 / 2;
    transition: 0.25s ease-in;
    // text-align: center;
    letter-spacing: 0.01rem;
    width: 100%;

    @media (min-width: $breakThou) {
      // font-size: 1em;
      // line-height: 2.935em;
      // margin: 0em;
      max-width: 26ch;
    }

    @media (max-width: $breakThou) {
      // font-size: 1em;
      // line-height: 2.935em;
      // margin: 0em;
      max-width: initial;
    }

    @media (max-width: $breakOne) {
      // font-size: 1em;
      // line-height: 2.935em;
      // margin: 0em;
      max-width: initial;
    }

    @media (max-width: $breakTwo) {
      // font-size: 1em;
      // line-height: 2.935em;
      // margin: 0em;
      max-width: 26ch;
    }

    @media (max-width: $breakThree) {
      // font-size: 1em;
      // line-height: 1.5rem;
      // margin: 0em;
      max-width: initial;
    }

  }

  p.smallCaps {
    font-family: $font-caps;
    font-variant: small-caps;
    font-size: 80%;
    font-weight: 500;
  }

  p {
    color: transparentize($black, 0.15);
    font-family: $font-copy;
    font-weight: normal;
    // letter-spacing: -0.027rem;
    text-align: justify;
    font-size: 1.25rem;
    line-height: 2.7rem;
    padding-left: 2rem;
    border-left: 2px dotted $paleBlue;
    margin-right: 1rem;
    letter-spacing: -0.01rem;

    @media (max-width: $breakThou) {
      // font-size: 1.3rem;
      // line-height: 2.25rem;
      // letter-spacing: 0.05rem;
      columns: 2 200px;
      column-gap: 3rem;
      column-rule: 2px dotted $paleBlue;
      text-justify: auto;
      hyphens: auto;
    }

    @media (max-width: $breakOne) {
      // font-size: 1.3rem;
      // line-height: 2.25rem;
      letter-spacing: 0.05rem;
      columns: 2 200px;
      text-justify: auto;
      hyphens: auto;
    }

    @media (max-width: 670px) {
      // font-size: 1.3rem;
      // line-height: 2.25rem;
      // letter-spacing: 0.05rem;
      columns: initial;
      // column-gap: 1.5em;
      // column-rule: 1px dotted #ddd;
      // text-justify: distribute;
      text-justify: auto;
      hyphens: auto;
    }

    @media (max-width: $breakTwo) {
      // font-size: 1.4rem;
      // line-height: 2.25rem;
      // letter-spacing: 0.02rem;
      text-justify: auto;
      hyphens: auto;
    }
  }
</style>
