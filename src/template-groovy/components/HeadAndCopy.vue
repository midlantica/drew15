<template>
  <div>
    <p>Whether it’s a prototype, a responsive website, a wireframe, an interactive PDF, a new mobile app UI, a quick skin job, a few more buttons, a dialog box, filling up a bucket, or getting in the trenches with  HTML 5 and CSS 3, I can deliver. I don’t let ‘design’ get in the way. Oh and I’m a coder groupie&nbsp;<big>😃</big>
    </p>
  </div>
</template>

<style lang="scss" scoped>
  // @import '@/assets/css/main.scss';
  @import '@/template-bourbon/assets/css/bourbon-main.scss';

  p {
    font-family: $font-copy !important;
    font-size: calc(0.8rem + .75vw);
    // font-size: 0.9rem;
    color: $grey;
    margin: 1em 0em .5em .725em;
    line-height: calc(2.3em + .5vw);
    // line-height: 2.6em;
    letter-spacing: 0.06em;

    @media screen and (min-width: 1024px) {
      font-size: 0.9rem;
      line-height: 2.6em;
      // line-height: calc(1.9em + .6vw);
    }
  }

</style>
