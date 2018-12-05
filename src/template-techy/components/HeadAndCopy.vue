<template>
  <div>
    <p>Whether it’s a prototype, a responsive website, a wireframe, an interactive PDF, a new mobile app UI, a quick skin job, a few more buttons, a dialog box, filling up a bucket, or getting in the trenches with  HTML 5 and CSS 3, I can deliver. I don’t let ‘design’ get in the way. Oh and I’m a coder groupie&nbsp;<big>😃</big>
    </p>
  </div>
</template>

<style lang="scss" scoped>
  // @import '@/assets/css/main.scss';
  @import '@/template-techy/assets/css/techy-main.scss';
  
  $breakThou: 1024px;
  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 430px;

  // .copyArea {
  //   margin: 0.7em 2.9em 0em;
    
  //   @media (max-width: $breakOne) {
  //     margin: 0em 2em 0em;
  //   }

  //   @media (max-width: $breakTwo) {
  //     margin: 0em 2em 0em;
  //   }
  // }

  // h1 {
  //   font-family: $font-subhead;
  //   color: $accent-red;
  //   font-size: calc(1.4rem + 0.5vw);
  //   margin: .25em 0 0;
  //   padding: 0;
  //   transition: .25s ease-in;
  // }

  p {
    font-family: $font-copy;
    font-size: 1.2rem;
    line-height: 2.5em;
    // color: $grey;
    color: transparentize($blueTech, .0);
    letter-spacing: 0.06em;
    margin: .25em 2.25em 0em;

    @media (max-width: $breakThou) {
      font-size: 1.3rem;
      line-height: 2.2em;
      margin: 1em 1.5em 0;
      letter-spacing: 0.05em;
    }

    @media (max-width: $breakOne) {
      // font-size: 1rem;
      // line-height: 2.2em;
      // margin: 1.5em .5em 0;
      // letter-spacing: 0.00em;
    }

    @media (max-width: $breakTwo) {
      font-size: 1.2rem;
      line-height: 2em;
      margin: 1em 1.25em 0;
      letter-spacing: 0.01em;
    }
  }

</style>
