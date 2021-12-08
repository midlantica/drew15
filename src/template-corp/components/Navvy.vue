<template>
  <nav>
    <section class='flexRowWrap w100'>
      <div class='drewTop'>
        <router-link :to="{ name: 'Corp' }" class='w100' >
          <router-link :to="{ name: 'ExtrasCorp' }" class='drewhead jelloHorizontal' />
          <drewHarper class='drewHarper marTH' />
          <div class='flexRow just-center marTH'>
            <h3>{{ store.copy.uiuxDesigner }} + {{ store.copy.vizDesigner }}</h3>
          </div>
        </router-link>
      </div>
      <section class='contact'>
        <p class='resume'>
          <a href='resume/drew_harper_resume_portfolio.pdf' target="_blank">PDF Resume</a>
        </p>
        <p class='email'><a :href='`mailto:`+`${store.copy.druEmail}`'>{{ store.copy.druEmail }}</a></p>
      </section>
    </section>
  </nav>
</template>

<script lang="ts" setup>
  import drewHarper from '@/template-corp/components/navvyArt/drewHarper.vue'
  import { inject } from 'vue'

  const store: any = inject('store')
</script>

<style lang='scss' scoped>
  @import '@/template-corp/assets/css/corp-main.scss';

  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 1.5em 2em 1em;
    justify-content: space-between;

    @media (max-width: $breakOne) {
      justify-content: center;
    }
  }

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

  h1, h2, h3, h4, h5, p {
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

  .drewHarper {
    height: 83px;
    margin: 0em 0 0 1rem;

    @media (max-width: $breakOne) {
      // height: 60px;
      // margin-left: 0.75em;
    }

    @media (max-width: $breakTwo) {
      // height: 42px;
      height: auto;
      // margin-left: 0.75em;
    }
  }

  a.drewhead {
    display: inline-block;
    background: #c00000;
    background-image: url(/img/drew_mug_red.png);
    // background-repeat: no-repeat;
    // background-size: cover;
    width: 80px;
    height: 80px;
    background-position: -39px -59px;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.15);
    background-repeat: no-repeat;
    background-size: 151%;
    filter: hue-rotate(210deg) grayscale(50%);
    border-radius: 1px;
    margin-bottom: .75rem;
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
    font-family: $font-copy;
    font-size: 1.5rem;
    letter-spacing: -0.025em;
    transition: 0.25s ease-in;
    font-weight: medium;

    a:hover {
      color: initial !important;
      // background: orange !important;
      // border-bottom: 2px dashed transparentize(navy, .75);
    }

    @media (max-width: $breakOne) {
      // font-size: 4.5em;
      // flex-grow: 0;
      // text-align: right;
    }

    @media (max-width: $breakTwo) {
      // font-size: 3.5em;
      // flex-grow: 0;
      // text-align: center;
    }

    @media (max-width: $breakThree) {
      // font-size: 2.5em;
      // margin-bottom: -9px;
    }
  }

  h3 {
    font-family: $font-copy;
    font-size: 1.25rem;
    letter-spacing: -0.025em;
    transition: 0.25s ease-in;
    font-weight: bold;

    a:hover {
      color: initial !important;
      // background: orange !important;
      // border-bottom: 2px dashed transparentize(navy, .75);
    }

    @media (max-width: $breakOne) {
      // font-size: 4.5em;
      // flex-grow: 0;
      // text-align: right;
    }

    @media (max-width: $breakTwo) {
      // font-size: 3.5em;
      // flex-grow: 0;
      // text-align: center;
    }

    @media (max-width: $breakThree) {
      // font-size: 2.5em;
      // margin-bottom: -9px;
    }
  }

  .uiux {
    // height: 35px;
    height: 4ch;
    // margin: 0.7em 0 -0.3em 1.3em;

    @media (max-width: $breakOne) {
      // height: 3ch;
      align-self: center;
      // margin-top: 0.6em;
      // margin-left: 0.75em;
    }

    @media (max-width: $breakTwo) {
      height: 3ch;
      // margin-left: 0.75em;
    }
  }

  .drewTop {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-grow: 1 !important;
    align-content: center;
    text-align: center;

    @media (max-width: $breakThree) {
      width: 100%;
    }

  }

  .contact {
    flex-grow: 1;
    // width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 0.2em;
    align-self: center;
    // z-index: 10;
    // text-shadow: 3px 0px 1px $black;
    // transition: .25s ease-in;

    @media (max-width: $breakOne) {
      margin-left: 0;
      flex-direction: row;
      margin-top: 1em;
    }

    @media (max-width: $breakTwo) {
      margin-top: 0.4em;
      // margin-top: 1em;
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
      font-family: $font-copy;
      font-size: 1.15em;
      letter-spacing: 0.01em;
      align-items: center;
      text-align: center;
      line-height: 1.5em;
      flex-grow: 1;
      font-weight: 600;
      text-transform: lowercase;

      a {
        border-bottom: 2px dotted lighten($blue-dark, 20);

        &:hover {
          color: darken($accent-red, 20) !important;
          border-bottom: 2px dotted darken($accent-red, 20);
        }
      }

      @media (max-width: $breakOne) {
        justify-content: center;
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
        letter-spacing: 0.03em !important;
      }

      @media (max-width: $breakThree) {
        justify-content: center;
        letter-spacing: 0.09em !important;
        line-height: 1.25em;
        margin-bottom: -4px;
        text-align: center;
      }

      &.resume,
      &.email {
        color: $blue-dark !important;
        line-height: 1.5;

        a {
          color: $blue-dark !important;
          border-bottom: 1px dotted $accent;

          &:hover {
            color: maroon !important;
            border-bottom: 1px dotted hsla(0, 100%, 25%, 1);
          }
        }
      }

    }

  }
</style>
