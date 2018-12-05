<template>
  <section>
    <p>Whether it’s a prototype, a responsive website, a wireframe, an interactive PDF, a new mobile app UI, a quick skin job, a few more buttons, a dialog box, filling up a bucket, or getting in the trenches with  HTML 5 and CSS 3, I can deliver. I don’t let ‘design’ get in the way. Oh and I’m a coder groupie&nbsp;<big>😃</big>
    </p>
  </section>
</template>

<style lang="scss" scoped>
  // @import '@/assets/css/main.scss';
  @import '@/template-bourbon/assets/css/bourbon-main.scss';

  $breakThou: 1024px;
  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 530px;

  section {
    margin-top: 1.4em;

    @media (max-width: $breakThou) {
      margin-top: 2.4em;
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      //
    }

    @media (max-width: $breakThree) {
      //
    }
  }

  p {
    font-family: $font-copy;
    color: $grey;
    font-size: 0.95rem;
    // font-weight: bold;
    margin: 0em 2.5em 0em 2em;
    line-height: calc(1.25em + 2vw);
    // line-height: 3.2em;
    letter-spacing: 0.04em;

    // @media screen and (min-width: 1024px) {
    //   font-size: 1.1rem;
    //   line-height: 3.2em;
    //   // line-height: calc(1.9em + .6vw);
    // }

    // -->>
    // MIN -- MIN -- MIN -- MIN -- MIN
    @media (min-width: $breakThou) {
      line-height: 3.2em;
    }

    @media (max-width: $breakThou) {
      // margin: 2.25em 1.5em 0.5em;
      margin: 0 1em;
      //
    }

    @media (max-width: $breakOne) {
      // margin: 2.25em 1.5em 0.5em;
      // font-size: 1rem;
      line-height: 2.75em;
    }

    @media (max-width: $breakTwo) {
      font-size: 1rem;
      // line-height: 2.75em;
    }

    @media (max-width: $breakThree) {
      font-size: .95rem;
      line-height: calc(2em + 2vw);
      // line-height: 2.5em;
    }

  }

</style>
