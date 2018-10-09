<template>
  <nav>
    <div class="groovyCircle">
      <router-link to="/Groovy/Extras" class="drewhead"/>
    </div>
    <div class="headyStuff">
      <a href="/" class="DHHead"><DHGroovyHead /></a>
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
      // width: 36%;
      position: relative;
      left: -3em;
      float: left;
      margin: 1.5em -3em 0em 0em;
      // width: auto;
      // border: 2px dashed blue;

      @media (min-width: $breakOne) {
        width: 37%;
        margin-top: 1.5em;
        // background: aqua;
      }

      @media (max-width: 1000px) {
        width: 50vw;
        margin-top: 1em;
        // background: lightgreen;
      }

      @media (max-width: 850px) {
        // width: 50vw;
        margin-top: 1.5em;
        // background: orange;
      }

      @media (max-width: 700px) {
        // width: 50vw;
        margin-top: 2em;
        // background: orange;
      }

      @media (max-width: 650px) {
        margin-top: 2.5em;
        // background: orange;
      }

      @media (max-width: 600px) {
        width: 50vw;
        margin-top: 3em;
        // background: orange;
      }

      .DHHead {
        // width: auto;
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

      h1 {
        font-size: 5.1em;
        font-weight: normal;
        letter-spacing: -.001em;
        font-family: $font-subhead;
      }

      h2 {
        font-size: 1.075em;
        font-family: $font-copy;
        margin: 0.1em 0 .25em;
        line-height: 1.8em;
        letter-spacing: 0.041em;

        @media (max-width: 1000px) {
          font-size: 2.47vw;
          // background: lightgreen;
        }

        @media (max-width: 600px) {
          font-size: 2.25vw;
          // background: orange;
        }
      }

      section.contact {
        //
        p {
          font-family: $font-copy;
          font-size: .925em;
          letter-spacing: 0.0em;
          text-transform: none;
          line-height: 0.7em;

          @media (max-width: 1000px) {
            font-size: 2.125vw;
            line-height: 0.5em;
            // background: lightgreen;
          }

          @media (max-width: 600px) {
            font-size: 2.125vw;
            // background: orange;
          }
        }
      }
    }

  }

</style>
