<template>
  <div>
    <div class='headBlock'>
      <router-link to='Bourbon/Extras' class='drewhead' />
      <h1>{{ this.$root.druHead }}</h1>
    </div>

    <p>{{ this.$root.druCopy }}</p>
  </div>
</template>

<style lang='scss' scoped>
  @import '@/assets/css/main.scss';
  @import '@/template-bourbon/assets/css/bourbon-main.scss';

  .headBlock {
    // display: block;
    display: grid;
    grid-template-columns: 88px auto;
    grid-template-rows: auto;
    grid-column-gap: 6px;
    justify-items: start;
    align-items: center;
    @include clearfix;

    a.drewhead {
      display: block;
      float: left;
      clear: left;
      margin-right: 1em;
      //
      background-image: url(/img/drew_mug_red.png);
      background-repeat: no-repeat;
      background-size: cover;
      width: 78px;
      height: 94px;
      // margin: 0;
      // filter: grayscale(100%);
      // filter:hue-rotate(360deg);
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      // border: 1px solid red;

      @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
        // display: block;
        // float: left;
        // clear: left;
        // margin-right: 1em;
        // background: purple;
        // border: 2px solid red;
        // width: 97px;
        // height: 45px;
      }
    }

    h1 {
      display: inline-block;
      font-family: $font-subhead;
      color: $accent-red;
      font-size: calc(1.4rem + 0.5vw);
      // font-size: 1.8rem;
      margin: 0.25em 0 0;
      padding: 0;
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      // border: 1px solid red;
      // transition: .25s ease-in;

      @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
        margin-top: 1em;
        float: left;
        width: 72%;
        // clear: left;
        // margin-right: 1em;
        // background: purple;
        // border: 2px solid red;
        // width: 97px;
        // height: 45px;
      }
    }
  }

  p {
    display: block;
    font-family: $font-copy !important;
    font-size: calc(0.85rem + 0.75vw);
    // font-size: 0.9rem;
    color: $grey;
    margin: 1em 0.5em 0em;
    line-height: calc(2.2em + 0.5vw);
    // line-height: 2.6em;
    letter-spacing: 0.03em;

    @media screen and (min-width: $breakThou) {
      font-size: 0.95rem;
      line-height: 3em;
      // line-height: calc(1.9em + .6vw);
    }
  }
</style>
