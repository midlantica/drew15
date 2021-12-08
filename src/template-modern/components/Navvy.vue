<template>
  <nav>
    <h1>
      <router-link :to="'About'">&nbsp;drew harper</router-link>
    </h1>
    <section class='jobDesc'>
      <h2>{{ store.copy.uiuxDesigner }} / {{ store.copy.vizDesigner }}</h2>
    </section>
    <section class='contact'>
      <p class=''>
        <a :href='`mailto:`+`${store.copy.druEmail}`'>{{ store.copy.druEmail }}</a>
        <a href='https://drewharper.com/resume/drew_harper_resume_portfolio.pdf' target='_blank'>PDF Resume</a>
      </p>
    </section>
  </nav>
</template>

<script lang="ts" setup>
  import { inject } from 'vue'

  const store: any = inject('store')
</script>

<style lang='scss' scoped>
  @import '@/template-modern/assets/css/modern-main.scss';

  $outRed: hsla(356, 92%, 45%, 0.3);
  $outBlue: hsla(197, 88%, 66%, 0.3);

  a {
    color: $ivory;
    text-decoration: none;

    &:link {
      color: $ivory;
      text-decoration: none;
    }

    &:hover {
      color: $accent;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    line-height: 1em;
    margin: 0;
    padding: 0;
    color: $ivory !important;
    text-transform: none;
    font-weight: 200;

    a {
      color: $ivory !important;
      text-decoration: none;
    }
  }

  h1 {
    text-transform: none;
  }

  nav {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    padding: 2rem 0 0;
  }

  h1 {
    font-size: 3.75rem;
    font-weight: 200;
    letter-spacing: -0.05em;
    font-family: $font-subhead;
    text-shadow: 1px 1px 4px $black;
    transition: 0.25s ease-in;
    text-align: center;
    @include font-smoothing;
    //
    width: auto;
    flex-grow: 1;

    a {
      color: $accent !important;
      //
      &:hover {
        color: $accent !important;
      }
    }

    @media (max-width: $breakOne) {
      // flex-grow: 0;
      // text-align: right;
    }

    @media (max-width: $breakTwo) {
      // flex-grow: 0;
      // text-align: center;
    }

    @media (max-width: $breakThree) {
      // font-size: 2.75em;
      // margin-bottom: -9px;
    }
  }

  section.jobDesc {
    // flex-grow: 1;
    // margin-left: 1em;
    margin-top: 1rem;
    transition: 0.25s ease-in;
    text-decoration: lowercase;

    @media (max-width: $breakTwo) {
      // flex-grow: 0;
      text-align: center;
      align-self: center;

      &:nth-child(1) {
        // float: left;
        // clear: left;
      }

      &:nth-child(2) {
        // float: left;
        // margin-left: 0em;
      }
    }

    @media (max-width: $breakOne) {
      // flex-grow: 0;
    }

    @media (max-width: $breakThree) {
      width: 20ch;
    }

    h2 {
      font-size: 1.15rem;
      letter-spacing: -0.01em;
      text-shadow: 3px 0px 3px $black;
      line-height: 1.5em;
      font-weight: 400;
      color: hsla(0, 0%, 100%, 0.85) !important;
      text-align: center;
      text-shadow: 1px 1px 4px$black;
      text-transform: lowercase !important;
      @include font-smoothing;

      @media (max-width: $breakTwo) {
        // display: inline-block;
        // font-size: 1.85rem !important;
        // margin-top: -3px;
      }

      @media (max-width: $breakThree) {
        // font-size: 1.25rem !important;
        // line-height: 2em;
      }
    }
  }

  section.contact {
    // text-transform: uppercase;
    margin-top: 0.2em;
    // margin-left: 1em;
    margin-bottom: 0rem;
    z-index: 10;
    // border: 1px solid $outBlue;
    // text-shadow: 3px 0px 1px $black;
    transition: 0.25s ease-in;

    @media (max-width: $breakOne) {
      // margin-left: 0;
    }

    @media (max-width: $breakTwo) {
      // margin-top: 0.4em;
    }

    @media (max-width: $breakThree) {
      width: 30ch;
      // margin-top: 0em;
      // transition: 0.25s ease-in;
    }

    p {
      font-family: $font-subhead;
      letter-spacing: -0.01em;
      font-weight: 400;
      font-size: 1rem !important;
      text-align: center;
      margin-top: .5rem;
      text-shadow: 1px 1px 4px $black;
      line-height: 1.5rem;
      letter-spacing: 0.05rem;
      @include font-smoothing;

      a {
        // border-bottom: 1px solid $yellow-red;
        // color: $white;
        // font: 1rem !important;
        padding: .3rem .6rem .2rem;
        border-radius: 2rem;
        margin: 0 .5rem;
        // background: transparentize($white, .65);

        &:hover {
          color: $yellow-red !important;
          text-decoration: underline;
          text-decoration: none;
          background: darken($ruby, 15);
        }
      }

      @media (max-width: $breakOne) {
        // justify-content: center;
        // font-size: 1.5rem !important;
        // letter-spacing: 0.1785rem !important;
        // margin-top: -0.3em;

      }

      @media (max-width: $breakTwo) {
        // font-size: 1.05rem !important;
        // letter-spacing: 0.09em !important;
      }

      @media (max-width: $breakThree) {
        // justify-content: center;
        // font-size: 1.25rem !important;
        // letter-spacing: 0.09em !important;
        // line-height: 1.25em;
        // margin-bottom: -4px;
        // text-align: center;

      }
    }
  }

  h1 {
    color: $accent-red !important;
    text-transform: none;
    text-align: center;

    a {
      color: $accent-red !important;

      &:hover {
        color: $accent-red !important;
      }
    }
  }
</style>
