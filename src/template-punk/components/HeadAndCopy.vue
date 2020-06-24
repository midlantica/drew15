<template>
  <div class="copyGrid">
    <h2>ui/ux designer front-end dev</h2>
    <h1>{{ this.$root.druHead }}</h1>
    <p>{{ this.$root.druCopy }}</p>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  @import '@/template-punk/assets/css/punk-main.scss';

  .copyGrid {
    // display: block;
    // position: relative;
    // top: 210px;
    margin-top: 11em;
    // background: transparentize(white, .52);
    transform: rotate(-1deg);

    @media (max-width: $breakOne) {
      // margin-top: 0em;
      margin-bottom: 0em;
    }
  }

  .normalized {
    font-style: normal;
  }

  h2 {
    color: $black;
    font-size: 1.4em;
    font-family: Poppins !important;
    font-weight: 500;
    font-style: normal;
    letter-spacing: .02em;
    transform: rotate(-1.25deg);
    display: inline-block;
    text-transform: lowercase;
    position: relative;
    top: -0.3em;
    left: 1em;
    background: white;
    padding: 0.4em 0em;


    @media (max-width: $breakTwo) {
      display: inline-block;
      font-size: 1.3em !important;
      // margin-top: -3px;
    }

    @media (max-width: $breakThree) {
      font-size: 1.05em !important;
      line-height: 2em;
    }

  }

  h1 {
    // padding: 0.3rem;
    background: hsla(0, 100%, 50%, 0.85);
    color: white;
    font-weight: 700;
    padding: 0.4em 0em;
    transform: rotate(1deg);
    z-index: 10;
  }

  // CHANGE BACKGROUND FROM YELLOW TO HIGHLIGHTING
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
    line-height: calc(2.2em + .3vw);
    // line-height: 2.6em;
    letter-spacing: 0.045em;
    // text-shadow: 0px 0px 0px;
    position: relative;
    // top: -1.1em;
    top: 0em;
    background: #FBC83F;
    // left: 0.8em;
    margin: 1em 1em 0em;
    //
    /////////
    // HIGHLIGHTING EFFECT
    background: linear-gradient(180deg, #fbc83f 100%, #fbc83f 100%);
    display: inline;
    padding: 1em .5em;
    // line-height: 3em;

    @media (min-width: $breakOne) {
      // font-size: 0.875rem;
      // line-height: 2.75em;
      line-height: calc(2.1em + .6vw);
      // margin-bottom: 1em;
      // background: green;
    }

    @media (min-width: 1010px) {
      // font-size: 1rem;
      // line-height: 2.7em;
      line-height: calc(2.4em + 0.3vw);
      // background: red;
    }

  }

</style>
