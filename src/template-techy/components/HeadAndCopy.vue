<template>
  <section>
    <p>Whether it’s a prototype, a responsive website, a wireframe, an interactive PDF, a new mobile app UI, a quick skin job, a few more buttons, a dialog box, filling up a bucket, or getting in the trenches with  HTML 5 and CSS 3, I can deliver. I don’t let ‘design’ get in the way. Oh and I’m a coder groupie&nbsp;<big>😃</big>
    </p>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  @import '@/template-techy/assets/css/techy-main.scss';
  
  section {
    // margin-top: 1em;
    padding-top: 0em;

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      padding-top: 1em;
      // padding-bottom: 1em;
      // background: red;
    }

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape)
    {
      //
    }
  }

  p {
    font-family: $font-copy;
    font-size: 1.2rem;
    line-height: 2.6em;
    // color: $grey;
    color: transparentize($blueTech, .0);
    letter-spacing: 0.06em;
    margin: .25em 2.25em 0em;
    // background: purple;

    @media (max-width: $breakThou) {
      font-size: 1.3rem;
      line-height: 2.3em;
      margin: 1em 1.5em 0;
      letter-spacing: 0.05em;
      // background: purple;
    }

    @media (max-width: $breakOne) {
      // font-size: 1rem;
      // line-height: 2.2em;
      // margin: 1.5em .5em 0;
      // letter-spacing: 0.00em;
      // background: red;
    }

    @media (max-width: $breakTwo) {
      font-size: 1.2rem;
      line-height: 2.3em;
      margin: 1em 1em 0;
      letter-spacing: 0.01em;
      // background: red;
    }

    @media (max-width: $breakTwo) 
    and (-webkit-min-device-pixel-ratio: 2) 
    {
      // font-size: 1.2rem;
      // line-height: 2.4em;
      // margin: 1em 1em 0;
      padding: 0 1em;
      // background: red;
    }

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      margin: 1em 0em 0em;
      // padding-bottom: 1em;
      font-size: 1.35em;
      // background: purple;
    }

    @media only screen 
    and (min-device-width : 375px) 
    and (max-device-width : 667px) {
      // background: red;
    }

  }

</style>
