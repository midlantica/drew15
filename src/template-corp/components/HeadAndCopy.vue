<template>
  <div>
    <h2><span class="cappy">ui/ux</span> designer + <span class="cappy">front-end</span> dev</h2>
    <p>Whether it’s a prototype, a responsive website, a wireframe, an interactive PDF, a new mobile app UI, a quick skin job, a few more buttons, a dialog box, filling up a bucket, or getting in the trenches with  HTML 5 and CSS 3, I can deliver. I don’t let ‘design’ get in the way. Oh and I’m a coder groupie&nbsp;<big>😃</big>
    </p>

  </div>
</template>

<style lang="scss" scoped>
  // @import '@/assets/css/main.scss';
  @import '@/template-corp/assets/css/corp-main.scss';

  h2 {
    font-family: $font-subhead;
    color: transparentize($blue-dark, .15);
    text-transform: lowercase;
    font-size: 1.8em;
    // font-size: calc(1.45rem + 0.5vw);
    // font-size: 1.8rem;
    margin: .5em 0em 0em .5em;
    padding: 0;
    // grid-column: 2 / 3;
    // grid-row: 1 / 2;
    transition: .25s ease-in;
    text-align: center;

    .cappy {
      color: $accent-red;
      font-size: 0.85em;
      font-family: cormorantGaramond-Bold;
      text-transform: uppercase;
    }

  }

  p {
    color: $black;
    font-family: $font-light !important;
    font-size: 1.2em;
    // font-size: calc(1rem + .2vw);
    line-height: 2.335em;
    margin: 1.1em 0em 1.25em .725em;
    // line-height: 2.6em;
    letter-spacing: 0.06em;
    // word-spacing: .1em;
  }

</style>
