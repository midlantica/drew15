<template>
  <div class="marXBal3 marB2">
    <div class="headBlock">
      <router-link :to="{ name: 'ExtrasModern' }" class="drewhead jelloHorizontal" />
      <h1>When UX design is done right the design seems inevitable</h1>
    </div>
    <p>Whether it’s a prototype, a responsive website, a wireframe, an interactive <span class="smallCaps">PDF</span>, a new mobile app <span class="smallCaps">UI</span>, a quick skin job, a few more buttons, a dialog box, filling up a bucket, or getting in the trenches with  <span class="smallCaps">HTML</span> and <span class="smallCaps">CSS</span>, I can deliver. I don’t let ‘design’ get in the way. Oh and I’m a coder groupie 😃</p>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/template-modern/assets/css/modern-main.scss";

  .headBlock {
    display: grid;
    grid-template-columns: 88px auto;
    grid-template-rows: auto;
    grid-column-gap: 6px;
    justify-items: start;
    align-items: center;
    margin-bottom: 1rem;

    a.drewhead {
      margin-right: 1em;
      background-image: url(/img/drew_mug_red.png);
      background-repeat: no-repeat;
      background-size: cover;
      width: 78px;
      height: 94px;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      align-self: flex-start;
    }

    h1 {
      display: inline-block;
      font-family: $font-subhead;
      font-weight: 400;
      // color: $accent-red;
      // color: magenta;
      font-size: clamp(.85rem, 1.3rem, 1.5rem) !important;
      letter-spacing: -0.01ch;
      padding: 0;
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      align-self: center;
      // max-width: 30ch;

      @media (min-width: $breakThou) {
        // max-width: 30ch;
      }

      @media (max-width: $breakOne) {
        max-width: initial;
        // font-size: 1.65rem;
      }

      @media (max-width: $breakTwo) {
        max-width: 30ch;
        // font-size: 1.5rem;
      }

      @media (max-width: $breakThree) {
        // font-size: 1.25rem;
      }

    }
  }

  p.smallCaps {
    font-variant: small-caps !important;
    font-size: 185% !important;
    font-weight: 300;
  }

  p {
    font-family: $font-copy;
    font-size: clamp(.85rem, 1.1rem, 1.4rem) !important;
    line-height: 2.6rem;
    font-weight: 300;
    // margin: 0.5rem 0.5rem 0rem !important;
    letter-spacing: 0.03rem;

    @media (max-width: 300000rem) {
      // font-size: 1.3rem;
      line-height: 2.5rem !important;
      columns: 2 20ch;
      column-gap: 3rem;
      column-rule: 1px solid transparentize($accent-red, .75);
      text-justify: auto;
      hyphens: none;
    }

    @media (max-width: $breakOne) {
      letter-spacing: 0.05rem;
      // font-size: 1rem !important;
      // columns: 2 200px;
      text-justify: auto;
      hyphens: auto;
    }

    @media (max-width: 670px) {
      columns: initial;
      text-justify: auto;
      hyphens: auto;
    }

    @media (max-width: $breakTwo) {
      text-justify: auto;
      hyphens: auto;
    }
  }
</style>
