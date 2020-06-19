<template>
  <nav>
    <router-link to="/Corp/Extras" class="drewhead" />

    <!-- <h1><router-link to='/Corp'>Drew Harper</router-link></h1> -->

    <router-link to="/Corp">
      <drewHarper class="drewHarper" />
    </router-link>

    <section class="contact">
      <p class="resume">
        Resume:
        <a href="resume/drew_harper_resume_portfolio.docx">Word</a> or
        <a href="resume/drew_harper_resume_portfolio.pdf">PDF</a>
      </p>
      <p class="email">
        <a href="mailto:druharper@gmail.com">druharper@gmail.com</a>
      </p>
    </section>
  </nav>
</template>

<script>
  import drewHarper from '@/template-corp/components/navvyArt/drewHarper'
  import uiux from '@/template-corp/components/navvyArt/uiux'
  export default {
    components: {
      drewHarper,
      uiux
    }
  }
</script>

<style lang='scss' scoped>
  @import '@/assets/css/main.scss';
  @import '@/template-corp/assets/css/corp-main.scss';

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
    color: $blue-dark !important;
    text-transform: none;

    a {
      color: $blue-dark !important;
      text-decoration: none;
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 1.5em 2em 1em;
    // justify-content: space-between;
    justify-content: center;

    @media (max-width: $breakOne) {
      justify-content: center;
    }
  }

  .drewHarper {
    height: 83px;
    margin: 1.3em 0 0 1em;

    @media (max-width: $breakOne) {
      height: 60px;
      margin-left: 0.75em;
    }

    @media (max-width: $breakTwo) {
      height: 42px;
      margin-left: 0.75em;
    }
  }

  // #drewheadBox {
  //   background: white;
  //   width: 100px;
  //   height: 100px;
  //   box-shadow: 3px 3px 6px 0 rgba(0,0,0,0.29);
  // }

  a.drewhead {
    background: #c00000;
    background-image: url(/img/drew_mug_red.png);
    // background-repeat: no-repeat;
    // background-size: cover;
    width: 100px;
    height: 100px;
    background-position: -55px -67px;
    box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.25);
    background-repeat: no-repeat;
    background-size: 151%;
    filter: hue-rotate(210deg);
    // width: 72px;
    // height: 88px;
    // display: block;

    @media (max-width: $breakTwo) {
      width: 80px;
      height: 80px;
      background-position: -40px -50px !important;
      background-size: 145% !important;
    }
  }

  h1 {
    font-family: $font-copy !important;
    font-size: 5.5em;
    // font-weight: normal;
    letter-spacing: -0.025em;
    // text-shadow: 4px 0px 3px $black;
    transition: 0.25s ease-in;
    //
    width: auto;
    padding-left: 1.2rem;
    flex-grow: 1;

    a:hover {
      color: initial !important;
      // background: orange !important;
      // border-bottom: 2px dashed transparentize(navy, .75);
    }

    @media (max-width: $breakOne) {
      font-size: 4.5em;
      flex-grow: 0;
      text-align: right;
    }

    @media (max-width: $breakTwo) {
      font-size: 3.5em;
      flex-grow: 0;
      text-align: center;
    }

    @media (max-width: $breakThree) {
      font-size: 2.5em;
      margin-bottom: -9px;
    }
  }

  section.contact {
    flex-grow: 1;
    // width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 0.2em;
    // z-index: 10;
    // text-shadow: 3px 0px 1px $black;
    // transition: .25s ease-in;

    @media (max-width: $breakOne) {
      margin-left: 0;
      flex-direction: row;
      margin-top: 1.5em;
    }

    @media (max-width: $breakTwo) {
      margin-top: 0.4em;
      margin-top: 1.5em;
      flex-direction: row;
      // color: red !important;
    }

    @media (max-width: $breakThree) {
      margin-top: 1em;
      transition: 0.25s ease-in;
      flex-direction: row;
      // color: red !important;
    }

    @media (max-width: 520px) {
      margin-top: 1em;
      transition: 0.25s ease-in;
      flex-direction: column;
    }

    p {
      font-family: $font-copy !important;
      font-weight: 100;
      font-size: 1.3em;
      letter-spacing: 0.01em;
      align-items: center;
      text-align: center;
      line-height: 1.25em;
      flex-grow: 1;
      // color: red !important;

      a {
        // color: lighten($blue-dark, 10) !important;
        border-bottom: 1px dotted lighten($blue-dark, 20);

        &:hover {
          color: darken($accent-red, 20) !important;
          border-bottom: 1px dotted darken($accent-red, 20);
        }
      }
      // text-transform: uppercase;
      // text-transform: capitalize;

      @media (max-width: $breakOne) {
        justify-content: center;
        font-size: 1.27em !important;
        letter-spacing: 0.01em !important;

        &:nth-child(1) {
          text-align: right;
          margin: 0 0.25em;
        }

        &:nth-child(2) {
          text-align: left;
          margin: 0 0.25em;
        }
      }

      @media (max-width: $breakTwo) {
        font-size: 1.25em !important;
        letter-spacing: 0.03em !important;
      }

      @media (max-width: $breakThree) {
        justify-content: center;
        // font-size: 1.34em !important;
        letter-spacing: 0.09em !important;
        line-height: 1.25em;
        margin-bottom: -4px;
        text-align: center;
      }
    }
  }
</style>
