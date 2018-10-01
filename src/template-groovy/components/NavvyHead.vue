<template>
  <nav>
    <div class="groovyCircle">
      <router-link to="/Groovy/Extras" class="drewhead"/>
    </div>
    <div class="headyStuff">
      <a href="/" class="DHHead">
        <DHGroovyHead />
      </a>
      <h2>UI/UX DESIGNER & FRONT END DEV</h2>
      <section class="contact">
        <p>
          <a href="mailto:druharper@gmail.com">druharper@gmails.com</a>
          – Resume:
          <a href="img/resume/drew_harper_resume_portfolio.docx">Word</a> /
          <!-- <a href="img/resume/drew_harper_resume_portfolio_short.docx">Sm</a>/ -->
          <a href="img/resume/drew_harper_resume_portfolio.pdf">PDF</a>
        </p>
      </section>
    </div>
  </nav>
</template>

<script>
  import DHGroovyHead from '@/template-groovy/components/DrewHarperGroovyHead'
  export default {
    components: {
      DHGroovyHead
    }
  }
</script>

<style lang="scss" scoped>
  // @import '@/assets/css/_colors.scss';
  @import '@/assets/css/main.scss';
  @import '@/template-groovy/assets/css/groovy-main.scss';

  $breakOne: 840px;
  $breakTwo: 630px;

  nav {
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
    // justify-content: center;
    // align-items: center;
    padding: .5em 1.25em;

    .groovyCircle {
      width: 210px;
      height: 210px;
      box-shadow: 8px 6px 0px rgba(37, 37, 37, .25);
      border-radius: 10em;
      position: relative;
      top: -2em;
      left: -4em;
      float: left;
      z-index: 5;
      //
      background-image: radial-gradient(
        // 0 - 25%
        $groovy-aqua 0%,
        $groovy-aqua 35%,
        // 25% - 50%
        $groovy-yellow 35%,
        $groovy-yellow 47%,
        // 50% - 75%
        $groovy-orange 47%,
        $groovy-orange 59%,
        // 75% - 100%
        $groovy-red 59%,
        $groovy-red 100%
      );
      clip-path: polygon(
        21% 0%, 100% 0%, 110% 50%,
        100% 100%, 21% 110%
      );

      a.drewhead {
        background-image: url(../assets/img/drew_head.png);
        background-repeat: no-repeat;
        width: 73px;
        height: 89px;
        display: block;
        position: relative;
        top: 3.8em;
        left: 4em;
        scale: 1.2;
      }
    }

    .headyStuff {
      // display: block;
      width: 360px;
      position: relative;
      left: -3em;
      float: left;
      margin: 1em 0em 0em 0em;
      // width: auto;
      // border: 2px dashed blue;

      .DHHead {
        width: 100%;
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
        color: $ivory !important;

        a {
          color: $ivory !important;
          text-decoration: none;
        }
      }
    }
  }

  h1 {
    font-size: 5.1em;
    font-weight: normal;
    letter-spacing: -.001em;
    font-family: $font-subhead;
    // text-shadow: 4px 0px 3px $black;
    // transition: .25s ease-in;
    //
    // width: auto;
    // flex-grow: 0;

    // @media (max-width: $breakOne) {
    //   flex-grow: 0;
    //   text-align: right;
    // }

    // @media (max-width: $breakTwo) {
    //   flex-grow: 0;
    //   text-align: center;
    // }

  }


  h2 {
    font-family: $font-copy;
    font-size: 1.2em;
    letter-spacing: .03em;
    margin: 0.1em 0 .25em;
    // text-shadow: 3px 0px 3px $black;

    // @media (max-width: $breakTwo) {
    //   display: inline-block;
    //   font-size: 1.85em !important;
    //   margin-top: -3px;

    //   &:nth-child(1) {
    //     //
    //   }

    //   &:nth-child(2) {
    //     margin-left: .25em !important;
    //   }
    // }

  }


  section.contact {
    // text-transform: uppercase;
    // margin-top: 0.3em;
    // margin-left: 1em;
    // margin-bottom: 4px;
    // z-index: 10;
    // border: 1px solid $outBlue;
    // text-shadow: 3px 0px 1px $black;
    // transition: .25s ease-in;

    // @media (max-width: $breakOne) {
    //   margin-left: 0;
    // }

    // @media (max-width: $breakTwo) {
    //   margin-top: 0.4em;
    // }

    p {
      font-family: $font-copy;
      letter-spacing: 0.05em;
      font-size: .95em;
      text-transform: none;

      a {
        //
      }

      // @media (max-width: $breakOne) {
      //   justify-content: center;
      //   font-size: 1.27em !important;
      //   letter-spacing: .1em !important;
      //   margin-top: -.3em;

      //   &:nth-child(1) {
      //     float: left;
      //     clear: left;
      //     margin-right: .5em;
      //   }

      //   &:nth-child(2) {
      //     float: left;
      //   }
      // }

      // @media (max-width: $breakTwo) {
      //   font-size: .87em !important;
      //   letter-spacing: 0.09em !important;

      //   &:nth-child(1) {
      //     // color: lightgrey;
      //   }

      //   &:nth-child(2) {
      //     // color: lightgrey;
      //   }
      // }

    }
  }

</style>
