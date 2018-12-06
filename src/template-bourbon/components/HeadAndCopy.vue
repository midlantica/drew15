<template>
  <div>

    <div class="headBlock">
      <router-link to="Bourbon/Extras" class='drewhead' />
      <h1>Don’t let design get in the way of communication</h1>
    </div>

    <p>Whether it’s a prototype, a responsive website, a wireframe, an interactive PDF, a new mobile app UI, a quick skin job, a few more buttons, a dialog box, filling up a bucket, or getting in the trenches with  HTML 5 and CSS 3, I can deliver. I don’t let ‘design’ get in the way. Oh and I’m a coder groupie&nbsp;<big>😃</big>
    </p>

  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  @import '@/template-bourbon/assets/css/bourbon-main.scss';

  // $breakThou: 1024px;
  // $breakOne: 840px;
  // $breakTwo: 630px;
  // $breakThree: 430px;

  .headBlock {
    display: block;
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

      @media only screen 
      and (min-device-width: 375px) 
      and (max-device-width: 660px)
      and (-webkit-min-device-pixel-ratio: 2)
      {
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
      margin: .25em 0 0;
      padding: 0;
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      // border: 1px solid red;
      // transition: .25s ease-in;

      @media only screen 
      and (min-device-width: 375px) 
      and (max-device-width: 660px)
      and (-webkit-min-device-pixel-ratio: 2)
      {
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
    font-size: calc(0.85rem + .75vw);
    // font-size: 0.9rem;
    color: $grey;
    margin: 1em 0.5em 0em;
    line-height: calc(2.2em + .5vw);
    // line-height: 2.6em;
    letter-spacing: 0.03em;

    @media screen and (min-width: $breakThou) {
      font-size: 0.95rem;
      line-height: 3em;
      // line-height: calc(1.9em + .6vw);
    }
  }

</style>
