<template>
  <div class='copyGrid'>
    <h2 v-html='this.$root.uiuxDesigner'/>
    <h2 v-html='this.$root.frontEndDev'/>
    <div>
      <h1 v-html='this.$root.druHead' />
      <p v-html='this.$root.druCopy' />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/template-punk/assets/css/punk-main.scss';

  .copyGrid {
    margin-top: 1em;
    transform: rotate(-1deg);

    @media (max-width: $breakOne) {
      margin-bottom: 0em;
    }
  }

  .normalized {
    font-style: normal;
  }

  h2 {
    color: $black;
    font-size: 1.1em;
    font-family: Poppins !important;
    font-weight: 500;
    font-style: normal;
    letter-spacing: .02em;
    transform: rotate(-1.25deg);
    text-transform: lowercase;
    position: relative;
    top: -0.3em;
    left: 1em;
    background: white;
    display: inline;
    padding: 0.3em 0.5em;

    @media (max-width: $breakTwo) {
      font-size: 1.3em !important;
      // margin-top: -3px;
    }

    @media (max-width: $breakThree) {
      font-size: 1em !important;
      line-height: 2em;
    }

    &:nth-of-type(1) {
      transform: rotate(-.5deg);
      left: 0rem;
      display: inline-block;
    }

    &:nth-of-type(2) {
      transform: rotate(1deg);
      left: .5rem;
      display: inline-block;
    }

  }

  h1 {
    font-size: 1.25rem;
    background: hsla(0, 100%, 50%, 0.85);
    color: white;
    font-weight: 500;
    padding: 0 0em 0.1em 0.2rem;
    transform: rotate(1deg);
    z-index: 10;
    display: inline-block;
    line-height: 1.7rem;

    &:nth-of-type(1) {
      transform: rotate(1.5deg);
    }
  }

  p.smallCaps {
    font-size: 90% !important;
    font-variant: small-caps !important;
    color: red !important;
  }

  p {
    font-family: Poppins !important;
    font-weight: 400;
    font-style: italic;
    // font-family: $font-copy !important;
    // font-weight: bold;
    // font-size: calc(0.8rem + .75vw);
    font-size: 1em;
    // font-size: 0.9rem;
    color: $grey;
    line-height: 2.25rem;
    // line-height: 2.6em;
    letter-spacing: 0.045em;
    // text-shadow: 0px 0px 0px;
    position: relative;
    // top: -1.1em;
    top: 0em;
    background: #FBC83F;
    // left: 0.8em;
    margin: 1em 1em 0em;
    display: inline;
    padding: 0.4em 0.1em;
    //
    /////////
    // HIGHLIGHTING EFFECT
    background: linear-gradient(180deg, #fbc83f 100%, #fbc83f 100%);
    // line-height: 3em;

    @media (min-width: $breakOne) {
      // font-size: 0.875rem;
      // line-height: 2.75em;
      // line-height: calc(2.1em + .6vw);
      // margin-bottom: 1em;
      // background: green;
    }

    @media (min-width: 1010px) {
      // font-size: 1rem;
      // line-height: 2.7em;
      // line-height: calc(2.4em + 0.3vw);
      // background: red;
    }


  }




</style>
