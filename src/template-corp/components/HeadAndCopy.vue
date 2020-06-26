<template>
  <div class="wrap">
    <h1>{{ this.$root.druHead }}</h1>
    <p>{{ this.$root.druCopy }}</p>
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

  .wrap {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0em 1em 1em;
  }

  h1 {
    font-family: $font-head;
    font-weight: bold;
    color: transparentize($blue-dark, 0.15);
    text-transform: none;
    font-size: 1.5em;
    // font-size: calc(1.45rem + 0.5vw);
    // font-size: 1.8rem;
    margin: 0em 0em .5em;
    padding: 0;
    line-height: 2rem;
    // grid-column: 2 / 3;
    // grid-row: 1 / 2;
    transition: 0.25s ease-in;
    // text-align: center;

    @media (max-width: $breakTwo) {
      // font-size: 1em;
      // line-height: 2.935em;
      margin: 0em;
    }

    @media (max-width: $breakThree) {
      // font-size: 1em;
      line-height: 1em;
      margin: 0em;
    }

    .cappy {
      color: darken($accent-red, 5);
      font-size: 0.85em;
      font-family: cormorantGaramond-Bold;
      text-transform: uppercase;
    }
  }

  p {
    color: transparentize($black, 0.15);
    font-family: $font-copy;
    font-weight: 100;
    letter-spacing: -0.027rem;
    text-align: justify;
    font-size: 1.35rem;
    line-height: 2.7rem;

    @media (max-width: $breakThou) {
      // font-size: 1.3rem;
      // line-height: 2.25rem;
      // letter-spacing: 0.05rem;
      columns: 2 200px;
      column-gap: 2rem;
      column-rule: 1px dotted #ddd;
      text-justify: auto;
      text-justify: auto;
      hyphens: auto;
    }

    @media (max-width: $breakOne) {
      // font-size: 1.3rem;
      // line-height: 2.25rem;
      letter-spacing: 0.05rem;
      columns: 2 200px;
      column-gap: 1.5rem;
      column-rule: 1px solid grey;
      column-rule: 1px dotted #ddd;
      text-justify: auto;
    }

    @media (max-width: 670px) {
      // font-size: 1.3rem;
      // line-height: 2.25rem;
      // letter-spacing: 0.05rem;
      columns: initial;
      // column-gap: 1.5em;
      // column-rule: 1px dotted #ddd;
      // text-justify: distribute;
    }

    @media (max-width: $breakTwo) {
      // font-size: 1.4rem;
      // line-height: 2.25rem;
      // letter-spacing: 0.02rem;
    }
  }
</style>
