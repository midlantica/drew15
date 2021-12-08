<template>
  <div>
    <div class="flexbox">

      <div class="jobTitles">
        <p>{{ store.copy.uiuxDesigner }}</p>
        <p>{{ store.copy.vizDesigner }}</p>
      </div>

      <div class="resumeLinks">
        <a class='resume rOne' href="resume/drew_harper_resume_portfolio.pdf" target="_BLANK">PDF Resume</a>
      </div>

    </div>

    <div class="copyGrid">
      <div class="mainBody">
        <h1>{{ store.copy.druHead }}</h1>
        <p v-html="store.copy.druCopy"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // import { defineComponent } from 'vue'
  import { inject } from 'vue'

  const store: any = inject('store')
</script>

<style lang="scss" scoped>
  @import "@/template-punk/assets/css/punk-main.scss";

  .flexbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .jobTitles {
      flex-direction: row;
      flex: 0 1 auto;
      align-self: flex-start;

      p {
        color: $black;
        background: white;
        font-size: .9em;
        font-family: Poppins !important;
        font-weight: 500;
        font-style: normal;
        letter-spacing: .02em;
        transform: rotate(-1.25deg);
        text-transform: lowercase;
        padding: 0.3em 0.5em;

        @media (max-width: $breakTwo) {
          //
        }

        @media (max-width: $breakThree) {
          //
        }

        &:nth-of-type(1) {
          transform: rotate(-.5deg);
          display: inline-block;
        }

        &:nth-of-type(2) {
          transform: rotate(2deg);
          display: inline-block;
          margin-left: .5rem;
        }

      }
    }

    .resumeLinks {
      align-self: flex-end;
      flex-direction: row;

      .resume {
        color: $black;
        background: white;
        font-size: .9em;
        font-family: Poppins !important;
        font-weight: 500;
        font-style: normal;
        letter-spacing: .02em;
        text-transform: lowercase;
        padding: 0.3em 0.5em;
        display: inline-block;
        margin-left: .25rem;

        &.rOne {
          transform: rotate(-2deg) !important;
          background: transparentize(#ff4bf5, .5);
          color: white;
        }

        &.rTwo {
          transform: rotate(6deg) !important;
          text-decoration: none;

          &:hover {
            color: #ff4bf5 !important;
            text-decoration: underline;
          }
        }

        &.rThree {
          transform: rotate(3deg) !important;
          text-decoration: none;

          &:hover {
            color: #ff4bf5 !important;
            text-decoration: underline;
          }
        }

        a:hover {
          color: #ff4bf5 !important;
          background: red;
        }

      }

    }
  }

  .copyGrid {
    display: flex;
    flex-direction: column;
    flex: 0 1 auto;
    // margin-top: 1em;
    position: relative;
    left: 0;
    top: 0;

    @media (max-width: $breakOne) {
      margin-bottom: 0em;
    }
  }

  .mainBody {
    transform: rotate(-1deg);

    h1 {
      font-size: 1.25rem;
      background: hsla(0, 100%, 50%, 0.85);
      color: white;
      font-weight: 500;
      padding: 0 0em 0.1em 0.2rem;
      transform: rotate(1deg);
      z-index: 10;
      display: inline-block;
      line-height: 1.7rem;
      // transform: rotate(0deg);

      &:nth-of-type(1) {
        transform: rotate(0deg);
      }
    }

    p.smallCaps {
      font-size: 90% !important;
      font-variant: small-caps !important;
      color: red !important;
    }

    p {
      font-family: Poppins !important;
      font-weight: 400;
      font-style: italic;
      font-size: 1em;
      color: $grey;
      line-height: 2.25rem;
      letter-spacing: 0.045em;
      position: relative;
      top: 0em;
      background: #FBC83F;
      margin: 1em 1em 0em;
      display: inline;
      padding: 0.4em 0.1em;
      /////////
      // HIGHLIGHTING EFFECT
      background: linear-gradient(180deg, #fbc83f 100%, #fbc83f 100%);
      // line-height: 3em;

      @media (min-width: $breakOne) {
        //
      }

      @media (min-width: 1010px) {
        //
      }

    }

  }

</style>
