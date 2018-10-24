<template>
  <div class="copyGrid">

    <div class="headBlock">
      <router-link to="/Punk/Extras" class='drewhead' />
       <section class="jobDesc">
      <h2>ui/ux designer front-end dev</h2>
    </section>
    </div>

    <p>Whether it’s a prototype, a responsive website, a wireframe, an interactive PDF, a new mobile app UI, a quick skin job, a few more buttons, a dialog box, filling up a bucket, or getting in the trenches with  HTML 5 and CSS 3, I can deliver. I don’t let ‘design’ get in the way. Oh and I’m a coder groupie&nbsp;<span class="normalized">😃</span>
    </p>

  </div>
</template>

<style lang="scss" scoped>
  // @import '@/assets/css/main.scss';
  @import '@/template-punk/assets/css/punk-main.scss';

  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 430px;

  .copyGrid {
    display: block;
    position: relative;
    top: 210px;
    background: transparentize(white, .60);
    transform: rotate(-1deg);
  }

  .normalized {
    font-style: normal;
  }

  h2 {
    color: white;
    font-size: 1.6em;
    font-family: Poppins !important;
    font-weight: 700;
    font-style: normal;
    letter-spacing: .02em;
    transform: rotate(1deg);
    display: block;
    text-transform: lowercase;
    position: relative;
    top: -0.6em;
    left: 1.1em;

    @media (max-width: $breakTwo) {
      display: inline-block;
      font-size: 1.85em !important;
      // margin-top: -3px;
    }

    @media (max-width: $breakThree) {
      font-size: 1.25em !important;
      line-height: 2em;
    }

  }

  p {
    font-family: Poppins !important;
    font-weight: 400;
    font-style: italic;
    // font-family: $font-copy !important;
    // font-weight: bold;
    font-size: calc(0.8rem + .75vw);
    // font-size: 0.9rem;
    color: $grey;
    margin: 1em 1.15em 0em;
    line-height: calc(2.3em + .5vw);
    // line-height: 2.6em;
    letter-spacing: 0.05em;
    // text-shadow: 0px 0px 0px;
    display: block;
    position: relative;
    top: -1.1em;
    // left: 0.8em;

    @media screen and (min-width: 1024px) {
      font-size: 1rem;
      line-height: 2.2em;
      // line-height: calc(1.9em + .6vw);
    }
  }

</style>
