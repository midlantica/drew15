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
  // @import '@/template-bourbon/assets/css/_fonts.scss';
  @import '@/template-bourbon/assets/css/bourbon-main.scss';

  .headBlock {
    display: grid;
    grid-template-columns: 88px auto;
    grid-template-rows: auto;
    grid-column-gap: 6px;
    justify-items: start;
    align-items: center;
    // @include clearfix;

    a.drewhead {
      background-image: url(/img/drew_mug_red.png);
      background-repeat: no-repeat;
      background-size: cover;
      width: 78px;
      height: 94px;
      display: block;
      margin: 0 auto;
      // filter: grayscale(100%);
      // filter:hue-rotate(360deg);
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    h1 {
      font-family: $font-subhead;
      color: $accent-red;
      font-size: calc(1.4rem + 0.5vw);
      // font-size: 1.8rem;
      margin: .25em 0 0;
      padding: 0;
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      transition: .25s ease-in;
    }

  }

  p {
    font-family: $font-copy !important;
    font-size: calc(0.95rem + .75vw);
    // font-size: 0.9rem;
    color: $grey;
    margin: 1em 1em 0em 1em;
    line-height: calc(2.4em + .5vw);
    // line-height: 2.6em;
    letter-spacing: 0.06em;

    @media screen and (min-width: 1024px) {
      font-size: 0.95rem;
      line-height: 2.7em;
      // line-height: calc(1.9em + .6vw);
    }
  }

</style>
