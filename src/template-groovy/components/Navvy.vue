<template>
  <nav>
    <h1><a href="/">DREW HARPER</a></h1>
    <section class="jobDesc">
      <h2>{{ this.$root.uiuxDesigner }}</h2>
      <h2>FRONT&nbsp;END&nbsp;DEV</h2>
    </section>
    <section class="contact">
      <p class='email'><a href="mailto:druharper@gmail.com">DRUHARPER@GMAIL.COM</a></p>
      <p class='resume'>Resume: Word
        <a href="img/resume/drew_harper_resume_portfolio_short.docx">Small</a>/
        <a href="img/resume/drew_harper_resume_portfolio.docx">Big</a> or
        <a href="img/resume/drew_harper_resume_portfolio.pdf">PDF</a>
      </p>
    </section>
  </nav>
</template>

<style lang="scss" scoped>
  // @import '@/assets/css/_colors.scss';
  @import '@/assets/css/main.scss';
  @import '@/template-bourbon/assets/css/bourbon-main.scss';

  $outRed: rgba(221, 9, 22, .3);
  $outBlue: rgba(92, 201, 245, .3);

  // $breakOne: 840px;
  // $breakTwo: 630px;

  nav {
    // display: grid;
    // grid-template-columns: 88px auto;
    // grid-template-rows: auto;
    // grid-column-gap: 6px;
    // justify-items: start;
    // align-items: center;
    // @include clearfix;

    a.drewhead {
      background-image: url(../assets/img/drew_head.png);
      background-repeat: no-repeat;
      width: 72px;
      height: 88px;
      display: block;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    h1 {
      font-family: $font-subhead;
      color: $accent-red;
      font-size: calc(1.4rem + 0.5vw);
      // font-size: 1.8rem;
      margin: .25em 0 0;
      padding: 0;
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      transition: .25s ease-in;
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

  h1,h2,h3,h4,h5,p {
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
    justify-content: center;
    align-items: center;
    padding: .5em 1.25em;

  }

  h1 {
    font-size: 4em;
    font-weight: normal;
    letter-spacing: .06em;
    font-family: $font-subhead;
    // text-shadow: 4px 0px 3px $black;
    transition: .25s ease-in;
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

  }

  section.jobDesc {
    flex-grow: 1;
    margin-left: 1em;
    transition: .25s ease-in;

    @media (max-width: $breakTwo) {
      // justify-content: center;
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
      font-size: 1.7em;
      letter-spacing: .03em;
      text-shadow: 3px 0px 3px $black;

      &:nth-child(1) {
        //
      }

      &:nth-child(2) {
        font-size: 1.75em;
      }

      @media (max-width: $breakTwo) {
        display: inline-block;
        font-size: 1.85em !important;
        margin-top: -3px;

        &:nth-child(1) {
          //
        }

        &:nth-child(2) {
          margin-left: .25em !important;
        }
      }

    }
  }

  section.contact {
    text-transform: uppercase;
    margin-top: 0.2em;
    margin-left: 1em;
    margin-bottom: 4px;
    z-index: 10;
    // border: 1px solid $outBlue;
    text-shadow: 3px 0px 1px $black;
    transition: .25s ease-in;

    @media (max-width: $breakOne) {
      margin-left: 0;
    }

    @media (max-width: $breakTwo) {
      margin-top: 0.4em;
    }

    p {
      font-family: $font-subhead;
      letter-spacing: .09em;

      &:nth-child(1) {
        font-size: 1.44em;
      }

      &:nth-child(2) {
        font-size: 1.05em;
        letter-spacing: .0725em;
      }

      @media (max-width: $breakOne) {
        justify-content: center;
        font-size: 1.27em !important;
        letter-spacing: .1em !important;
        margin-top: -.3em;

        &:nth-child(1) {
          float: left;
          clear: left;
          margin-right: .5em;
        }

        &:nth-child(2) {
          float: left;
        }
      }

      @media (max-width: $breakTwo) {
        font-size: .87em !important;
        letter-spacing: 0.09em !important;

        &:nth-child(1) {
          // color: lightgrey;
        }

        &:nth-child(2) {
          // color: lightgrey;
        }
      }

    }
  }


</style>
