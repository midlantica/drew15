<template>
  <div class="copyArea">
    <p>Whether it’s a prototype, a responsive website, a wireframe, an interactive PDF, a new mobile app UI, a quick skin job, a few more buttons, a dialog box, filling up a bucket, or getting in the trenches with  HTML 5 and CSS 3, I can deliver. I don’t let ‘design’ get in the way. Oh and I’m a coder groupie&nbsp;<big>😃</big>
    </p>
  </div>
</template>

<style lang="scss" scoped>
  // @import '@/assets/css/main.scss';
  @import '@/template-techy/assets/css/techy-main.scss';
  
  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 430px;

  .copyArea {
    margin: 0.7em 2.9em 0em;
    
    @media (max-width: $breakOne) {
      margin: 0em 2em 0em;
    }

    @media (max-width: $breakTwo) {
      margin: 0em 2em 0em;
    }
  }

  h1 {
    font-family: $font-subhead;
    color: $accent-red;
    font-size: calc(1.4rem + 0.5vw);
    margin: .25em 0 0;
    padding: 0;
    transition: .25s ease-in;
  }

  p {
    font-family: $font-copy !important;
    font-size: 1.2rem !important;
    line-height: 2.5em !important;
    // color: $grey;
    color: transparentize($blueTech, .0);
    letter-spacing: 0.06em;

    @media (max-width: $breakOne) {
      font-size: 0.9rem;
      line-height: 2.6em;
    }

    @media (max-width: $breakTwo) {
      //
    }
  }

</style>
