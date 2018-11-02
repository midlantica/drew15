<template>
  <div>
    <!-- <h1>TECHY!! - Don’t let design get in the way of communication</h1> -->

    <p>Whether it’s a prototype, a responsive website, a wireframe, an interactive PDF, a new mobile app UI, a quick skin job, a few more buttons, a dialog box, filling up a bucket, or getting in the trenches with  HTML 5 and CSS 3, I can deliver. I don’t let ‘design’ get in the way. Oh and I’m a coder groupie&nbsp;<big>😃</big>
    </p>

  </div>
</template>

<style lang="scss" scoped>
  // @import '@/assets/css/main.scss';
  @import '@/template-techy/assets/css/techy-main.scss';

  h1 {
    font-family: $font-subhead;
    color: $accent-red;
    font-size: calc(1.4rem + 0.5vw);
    // font-size: 1.8rem;
    margin: .25em 0 0;
    padding: 0;
    transition: .25s ease-in;
  }

  p {
    font-family: $font-copy !important;
    font-size: 1.2rem !important;
    line-height: calc(2.4em + .5vw) !important;
    // font-size: calc(0.6rem + .75vw) !important;
    // font-size: 0.9rem;
    color: $grey;
    // line-height: 2.6em;
    letter-spacing: 0.06em;
    margin: 1em 1.5em 0 2.5em;

    @media screen and (min-width: 1024px) {
      font-size: 0.9rem;
      line-height: 2.6em;
      // line-height: calc(1.9em + .6vw);
    }
  }

</style>
