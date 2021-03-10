<template>
  <section>
    <h1>When UX design is done right the design seems inevitable</h1>
    <p>Whether it’s a prototype, a responsive website, a wireframe, an interactive <span class="smallCaps">PDF</span>, a new mobile app <span class="smallCaps">UI</span>, a quick skin job, a few more buttons, a dialog box, filling up a bucket, or getting in the trenches with  <span class="smallCaps">HTML</span> and <span class="smallCaps">CSS</span>, I can deliver. I don’t let ‘design’ get in the way. Oh and I’m a coder groupie 😃</p>
  </section>
</template>

<style lang='scss' scoped>
  @import '@/template-groovy/assets/css/groovy-main.scss';

  // $breakThou: 1024px;
  // $breakOne: 840px;
  // $breakTwo: 630px;
  $breakThree: 530px;

  section {
    margin: 3rem 2.5rem 0rem 1.75rem;

    @media (max-width: $breakThou) {
      // margin-top: 2.4em;
    }

    @media (max-width: $breakOne) {
      margin: 3rem 1.5rem 0rem;
    }

    @media (max-width: $breakTwo) {
      margin: 3rem 1rem 0rem;
    }

    @media (max-width: $breakThree) {
      //
    }
  }

  h1 {
    font-family: $font-head;
    text-transform: initial;
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: 500;
    letter-spacing: 0.00rem;
    margin-bottom:.5rem;

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

  p {
    font-family: $font-copy;
    color: $grey;
    font-size: 1.125rem;
    letter-spacing: 0.009rem;
    line-height: 2.4rem;

    @media (max-width: $breakThou) {
      columns: 2 200px;
      column-gap: 3rem;
      column-rule: 2px dotted transparentize($orange, 0.5);
      text-justify: auto;
      hyphens: auto;
    }

    @media (max-width: $breakOne) {
      letter-spacing: 0.05rem;
      columns: 2 200px;
    }

    @media (max-width: 670px) {
      columns: initial;
      font-size: 1.05rem;
      line-height: 2.4rem;
      padding-left: 1.3rem;
      border-left: 2px dotted transparentize($orange, 0.5);
      margin-right: 0.5rem;
    }

    @media (max-width: $breakTwo) {
      //
    }

  }

</style>
