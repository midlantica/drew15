<template>
  <div class="wrap">
    <uiux class="uiux" />
    <!-- <h2><span class="cappy">ui/ux</span> designer + <span class="cappy">front&#8209end</span>&nbsp;dev</h2> -->
    <p>Whether it’s a prototype, a responsive website, a wireframe, an interactive PDF, a new mobile app UI, a quick skin job, a few more buttons, a dialog box, filling up a bucket, or getting in the trenches with  HTML 5 and CSS 3, I can deliver. I don’t let ‘design’ get in the way. Oh and I’m a coder groupie&nbsp;<big>😃</big>
    </p>

  </div>
</template>

<script>
  import uiux from '@/template-corp/components/navvyArt/uiux'
  export default {
    components: {
      uiux
    }
  }
</script>

<style lang="scss" scoped>
  // @import '@/assets/css/main.scss';
  @import '@/template-corp/assets/css/corp-main.scss';

  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 430px;

  .wrap {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .uiux {
    height: 35px;
    margin: 0.7em 0 -0.3em 1.3em;
    
    @media (max-width: $breakOne) {
      height: 28px;
      align-self: center;
      margin-top: 0.6em;
      margin-left: .75em;
    }

    @media (max-width: $breakTwo) {
      height: 22px;
      margin-left: .75em;
    }
  }

  h2 {
    font-family: $font;
    font-weight: 300;
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

    @media (max-width: $breakTwo) {
      // font-size: 1em;
      // line-height: 2.935em;
      margin: 0em;
    }

    @media (max-width: $breakThree) {
      // font-size: 1em;
      line-height: 1em;
      margin: 0em;
    }

    .cappy {
      color: darken($accent-red, 5);
      font-size: 0.85em;
      font-family: cormorantGaramond-Bold;
      text-transform: uppercase;
    }

  }

  p {
    // color: transparentize($blue-dark, .0);
    color: transparentize($blue-dark, .0);
    font-family: $font-copy;
    font-weight: 100;
    font-size: 1.1em;
    // font-size: calc(1rem + .2vw);
    line-height: 2.635em;
    margin: 1.1em 2.5em 1em 1.5em;
    // line-height: 2.6em;
    letter-spacing: 0.06em;
    // word-spacing: .1em;

    @media (max-width: $breakOne) {
      font-size: 1em;
      line-height: 2.935em;
      margin: 1em 1em;
    }
  }

</style>
