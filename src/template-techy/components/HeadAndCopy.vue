<template>
  <section>
    <h1>When UX design is done right the design seems inevitable</h1>
    <p>Whether it’s a prototype, a responsive website, a wireframe, an interactive <span class="smallCaps">PDF</span>, a new mobile app <span class="smallCaps">UI</span>, a quick skin job, a few more buttons, a dialog box, filling up a bucket, or getting in the trenches with  <span class="smallCaps">HTML</span> and <span class="smallCaps">CSS</span>, I can deliver. I don’t let ‘design’ get in the way. Oh and I’m a coder groupie 😃</p>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/template-techy/assets/css/techy-main.scss';

  section {
    margin: 2rem 1.85rem 0rem 2.25rem;

    @media (min-width: $breakThou) {
      // margin-top: 1.5rem;
      // margin-left: 1.5rem;
      // margin-right: 1.5rem;
    }

    @media (max-width: $breakThou) {
      margin-top: 1.5rem;
      margin-left: 2rem;
      margin-right: 2rem;
    }

    @media (max-width: $breakOne) {
      margin-left: 1rem;
      margin-right: 1rem;
    }

    @media (max-width: $breakTwo) {
      // margin-left: .75rem;
      // margin-right: .75rem;
    }

    @media (max-width: $breakThree) {
      // margin-left: .25rem;
      // margin-right: .25rem;
    }
  }

  h1 {
    font-family: $font-head;
    font-weight: 600;
    text-transform: initial;
    line-height: 2rem;
    font-size: 1.5rem;
    margin-bottom: .85rem;
    color: $blueTech;

    @media (min-width: $breakThou) {
      max-width: 26ch;
    }

    @media (max-width: $breakThou) {
      max-width: initial;
    }

    @media (max-width: $breakOne) {
      max-width: initial;
    }

    @media (max-width: $breakTwo) {
      max-width: 26ch;
    }

    @media (max-width: $breakThree) {
      max-width: initial;
    }
  }

  p.smallCaps {
    // font-family: $font-caps;
    font-variant: small-caps;
    font-size: 80%;
    // font-weight: 500;
  }

  p {
    font-family: $font-copy;
    font-size: 1.3rem;
    line-height: 2.85rem;
    color: transparentize($blueTech, .2);
    letter-spacing: 0.06em;

    @media (min-width: $breakThou)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      // font-size: 1.2rem;
      // line-height: 2.6em;
    }

    @media (max-width: $breakThou) {
      font-size: 1.2rem;
      line-height: 2.1em;
      letter-spacing: 0.05em;
      text-align: justify;
      columns: 2 200px;
      column-gap: 3rem;
      text-justify: auto;
      hyphens: auto;
      column-rule: 2px dotted transparentize($blueTech, .5);
    }

    @media (max-width: $breakOne) {
      // font-size: 1rem;
      // line-height: 2.2em;
      // margin: 1.5em .5em 0;
      // letter-spacing: 0.00em;
      // background: red;
      columns: 2 200px;
    }

    @media (max-width: $breakTwo) {
      font-size: 1.2rem;
      line-height: 2.3em;
      // margin: 1em 1em 0;
      letter-spacing: 0.01em;
      // background: red;
    }

    @media (max-width: $breakTwo)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      font-size: 1.15rem;
      // line-height: 2.4em;
      // margin: 1em 1em 0;
      // padding: 0 1em;
      // background: red;
    }

    @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      margin: 0.5em 0em 0em;
      // padding-bottom: 1em;
      font-size: 1.18em;
      padding: 0em 0em 0em;
      // background: purple;
    }

    @media only screen
    and (min-device-width : 375px)
    and (max-device-width : 667px) {
      // background: red;
    }

  }

</style>
