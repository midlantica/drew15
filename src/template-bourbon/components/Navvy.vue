<template>
  <nav>
    <h1>
      <router-link to='/'>DREW HARPER</router-link>
    </h1>
    <section class='jobDesc'>
      <h2>{{ this.$root.uiuxDesigner }}</h2>
      <h2>FRONT&nbsp;END&nbsp;DEV</h2>
    </section>
    <section class='contact'>
      <p class='email'>
        <a href='mailto:druharper@gmail.com'>DRUHARPER@GMAIL.COM</a>
      </p>
      <p class='resume'>
        Resume: Word
        <a href='resume/drew_harper_resume_portfolio_short.docx'>Small&#8195;</a>/&#8195;
        <a href='resume/drew_harper_resume_portfolio.docx'>Big</a> or
        <a href='resume/drew_harper_resume_portfolio.pdf'>PDF</a>
      </p>
    </section>
  </nav>
</template>

<style lang="scss" scoped>
  @import "@/template-bourbon/assets/css/bourbon-main.scss";

  $outRed: rgba(221, 9, 22, 0.3);
  $outBlue: rgba(92, 201, 245, 0.3);

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
    transition: 0.25s ease-in;

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
      font-size: 1.6em;
      letter-spacing: 0.03em;
      text-shadow: 3px 0px 3px $black;
      @include font-smoothing;

      &:nth-child(1) {
        //
      }

      &:nth-child(2) {
        font-size: 1.65em;
        margin-bottom: 0.1em;
      }

      @media (max-width: $breakTwo) {
        display: inline-block;
        font-size: 1.85em !important;
        margin-top: -3px;

        &:nth-child(1) {
          //
        }

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
    margin-top: 0.2em;
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
      font-family: $font-subhead;
      letter-spacing: 0.09em;
      font-size: 1rem;
      @include font-smoothing;

      &:nth-child(1) {
        font-size: 1.375em;
        // line-height: 1.5rem;
        letter-spacing: 0.13rem;
      }

      &:nth-child(2) {
        // font-size: 1.05em;
        // line-height: 1.5rem;
        letter-spacing: 0.075rem;
      }

      @media (max-width: $breakOne) {
        justify-content: center;
        font-size: 1.27em !important;
        letter-spacing: 0.09em !important;
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
        font-size: 0.87em !important;
        letter-spacing: 0.09em !important;

        &:nth-child(1) {
          // color: lightgrey;
        }

        &:nth-child(2) {
          // color: lightgrey;
        }
      }

      @media (max-width: $breakThree) {
        justify-content: center;
        font-size: 1.04em !important;
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
