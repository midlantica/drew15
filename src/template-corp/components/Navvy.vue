<template>
  <nav>

    <router-link to="/Corp/Extras" id="drewheadBox" class='drewhead' />

    <h1><router-link to="/Corp">Drew Harper</router-link></h1>

    <section class="contact">
      <p class='resume'>Resume:
        <a href="img/resume/drew_harper_resume_portfolio.docx">Word</a> or
        <a href="img/resume/drew_harper_resume_portfolio.pdf">PDF</a>
      </p>
      <p class='email'><a href="mailto:druharper@gmail.com">druharper@gmail.com</a></p>
    </section>

  </nav>
</template>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  @import '@/template-corp/assets/css/corp-main.scss';

  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 430px;

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
    justify-content: space-between;
    align-items: center;
    padding: 2em 2em 0;

    @media (max-width: $breakOne) {
      justify-content: center;
    }
  }

  #drewheadBox {
    background: white;
    width: 100px;
    height: 100px;
    box-shadow: 3px 3px 6px 0 rgba(0,0,0,0.29);

  }

  a.drewhead {
    background-image: url(../assets/img/drew_head.png) !important;
    background-repeat: no-repeat !important;
    background-position: -7px -23px !important;
    background-size: 97% !important;
    // width: 72px;
    // height: 88px;
    // display: block;
  }

  h1 {
    font-family: $font-head;
    font-size: 5.5em;
    // font-weight: normal;
    letter-spacing: -.025em;
    // text-shadow: 4px 0px 3px $black;
    transition: .25s ease-in;
    //
    width: auto;
    padding-left: 1.2rem; 
    flex-grow: 1;

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

  section.contact {
    flex-grow: 1;
    // width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    //
    margin-top: 0.2em;
    // z-index: 10;
    // text-shadow: 3px 0px 1px $black;
    // transition: .25s ease-in;

    @media (max-width: $breakOne) {
      margin-left: 0;
    }

    @media (max-width: $breakTwo) {
      margin-top: 0.4em;
    }

    @media (max-width: $breakThree) {
      margin-top: 0em;
      transition: .25s ease-in;
    }

    p {
      font-family: $font-head;
      font-size: 1.3em;
      letter-spacing: .01em;
      align-items: center;
      text-align: center;
      line-height: 1.25em;
      flex-grow: 1;
      // text-transform: uppercase;
      // text-transform: capitalize;

      @media (max-width: $breakOne) {
        justify-content: center;
        font-size: 1.27em !important;
        letter-spacing: .1em !important;
        margin-top: -.3em;
      }

      @media (max-width: $breakTwo) {
        font-size: .87em !important;
        letter-spacing: 0.09em !important;
      }

      @media (max-width: $breakThree) {
        justify-content: center;
        font-size: 1.04em !important;
        letter-spacing: 0.09em !important;
        line-height: 1.25em;
        margin-bottom: -4px;
        text-align: center;
      }

    }
  }

</style>
