<template>
  <nav>
    <h1>
      <router-link :to="{ name: 'Bourbon' }">DREW HARPER</router-link>
    </h1>
    <section class='jobDesc'>
      <h2>{{ store.copy.uiuxDesigner }}</h2>
      <h2>{{ store.copy.vizDesigner }}</h2>
    </section>
    <section class='contact'>
      <p class='email'>
        <a :href='`mailto:`+`${store.copy.druEmail}`'>{{ store.copy.druEmail }}</a>
      </p>
      <p class='resume'>
        <a href='resume/drew_harper_resume_portfolio.pdf' target="_blank">PDF Resume</a>
      </p>
    </section>
  </nav>
</template>

<script lang="ts" setup>
  import { inject } from 'vue'

  const store: any = inject('store')
</script>

<style lang='scss' scoped>
  @import '@/template-bourbon/assets/css/bourbon-main.scss';

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
      color: $accent !important;
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

    a {
      color: $ivory !important;
      text-decoration: none;
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 1.25em;

    @media (max-width: $breakOne) {
      justify-content: center;
    }
  }

  h1 {
    font-size: 4em;
    font-weight: normal;
    letter-spacing: 0.06em;
    font-family: $font-subhead;
    text-shadow: 4px 0px 3px $black;
    transition: 0.25s ease-in;
    @include font-smoothing;
    //
    width: auto;
    flex-grow: 0;

    @media (max-width: $breakOne) {
      flex-grow: 0;
      text-align: right;
    }

    @media (max-width: $breakTwo) {
      flex-grow: 0;
      text-align: center;
    }

    @media (max-width: $breakThree) {
      font-size: 2.75em;
      margin-bottom: -9px;
    }
  }

  section.jobDesc {
    flex-grow: 1;
    margin-left: 1em;
    margin-top: 0.1rem;
    transition: 0.25s ease-in;

    @media (max-width: $breakTwo) {
      flex-grow: 0;
      text-align: center;
      align-self: center;

      &:nth-child(1) {
        float: left;
        clear: left;
      }

      &:nth-child(2) {
        float: left;
        margin-left: 0em;
      }
    }

    @media (max-width: $breakOne) {
      flex-grow: 0;
    }

    h2 {
      font-size: 1.6em;
      letter-spacing: 0.03em;
      text-shadow: 3px 0px 3px $black;
      @include font-smoothing;

      &:nth-child(2) {
        font-size: 1.45em;
        margin-bottom: 0.1em;
      }

      @media (max-width: $breakTwo) {
        display: inline-block;
        font-size: 1.85em !important;
        margin-top: -3px;

        &:nth-child(2) {
          margin-left: 0.25em !important;
        }
      }

      @media (max-width: $breakThree) {
        font-size: 1.25em !important;
        line-height: 2em;
      }
    }
  }

  section.contact {
    text-transform: uppercase;
    margin-top: 0.75em;
    margin-left: 1em;
    margin-bottom: 4px;
    z-index: 10;
    // border: 1px solid $outBlue;
    text-shadow: 3px 0px 1px $black;
    transition: 0.25s ease-in;

    @media (max-width: $breakOne) {
      margin-left: 0;
    }

    @media (max-width: $breakTwo) {
      margin-top: 0.4em;
    }

    @media (max-width: $breakThree) {
      margin-top: 0em;
      transition: 0.25s ease-in;
    }

    p {
      font-family: $font-copy;
      letter-spacing: 0.05rem;
      font-size: 1.2rem;
      line-height: 1.25;
      text-transform: lowercase;
      @include font-smoothing;

      &:nth-child(1) {
        font-size: 1.25em;
        // letter-spacing: 0.05rem;
        // margin-top: .5rem;
      }

      &:nth-child(2) {
        font-size: 1.25em;
        // letter-spacing: 0.05rem;
      }

      @media (max-width: $breakOne) {
        justify-content: center;
        font-size: 1.5rem !important;
        letter-spacing: 0.1785rem !important;
        margin-top: -0.3em;

        &:nth-child(1) {
          float: left;
          clear: left;
          margin-right: 0.5em;
        }

        &:nth-child(2) {
          float: left;
        }
      }

      @media (max-width: $breakTwo) {
        font-size: 1.05rem !important;
        letter-spacing: 0.09em !important;
      }

      @media (max-width: $breakThree) {
        justify-content: center;
        font-size: 1.25rem !important;
        letter-spacing: 0.09em !important;
        line-height: 1.25em;
        margin-bottom: -4px;
        text-align: center;

        &:nth-child(1) {
          float: initial;
          clear: initial;
          margin-right: 0em;
        }

        &:nth-child(2) {
          float: initial;
          font-size: 1.04em !important;
          line-height: 1.6em;
          margin-left: 0 !important;
        }
      }
    }
  }
</style>
