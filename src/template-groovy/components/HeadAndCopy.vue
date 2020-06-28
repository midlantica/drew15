<template>
  <section>
    <h1 v-html="this.$root.druHead"></h1>
    <p v-html="this.$root.druCopy"></p>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  @import '@/template-groovy/assets/css/groovy-main.scss';

  $breakThou: 1024px;
  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 530px;

  section {
    margin: 3rem 1.5rem 0rem;

    @media (max-width: $breakThou) {
      // margin-top: 2.4em;
    }

    @media (max-width: $breakOne) {
      margin: 2rem 2rem 0rem;
    }

    @media (max-width: $breakTwo) {
      margin: 2rem 1.5rem 0rem;
    }

    @media (max-width: $breakThree) {
      //
    }
  }

  h1 {
    // font-family: $font-copy !important;
    font-family: "Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
    text-transform: initial;
    font-size: 1.1rem;
    line-height: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.00rem;
    margin-bottom:.5rem;

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

  p {
    // font-family: $font-copy !important;
    font-family: "Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
    color: $grey;
    font-size: 1rem;
    letter-spacing: 0.009rem;
    line-height: 2.25rem;

    @media (max-width: $breakThou) {
      columns: 2 200px;
      column-gap: 3rem;
      column-rule: 2px dotted transparentize($orange, 0.5);
      text-justify: auto;
      hyphens: auto;
    }

    @media (max-width: $breakOne) {
      letter-spacing: 0.05rem;
      columns: 2 200px;
    }

    @media (max-width: 670px) {
      columns: initial;
      font-size: 1.05rem;
      line-height: 2.4rem;
      padding-left: 1.3rem;
      border-left: 2px dotted transparentize($orange, 0.5);
      margin-right: 0.5rem;
    }

    @media (max-width: $breakTwo) {
      //
    }

  }

</style>
