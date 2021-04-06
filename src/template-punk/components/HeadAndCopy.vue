<template>
  <div>
    <div class="flexbox">

      <div class="jobTitles">
        <p>UI/UX Designer</p>
        <p>Front-End Dev</p>
      </div>

      <div class="resumeLinks">
        <p class='resume rOne'>Resume:</p>
        <a class='resume rTwo' href="resume/drew_harper_resume_portfolio.pdf">PDF</a>
        <a class='resume rThree' href="resume/drew_harper_resume_portfolio_short.docx">Word</a>
      </div>

    </div>

    <div class="copyGrid">
      <div class="mainBody">
        <h1>When UX design is done right the design seems inevitable</h1>
        <p>Whether it’s a prototype, a responsive website, a wireframe, an interactive <span class="smallCaps">PDF</span>, a new mobile app <span class="smallCaps">UI</span>, a quick skin job, a few more buttons, a dialog box, filling up a bucket, or getting in the trenches with  <span class="smallCaps">HTML</span> and <span class="smallCaps">CSS</span>, I can deliver. I don’t let ‘design’ get in the way. Oh and I’m a coder groupie 😃</p>
      </div>
    </div>
  </div>
</template>

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
          // font-size: 1.3em !important;
          // margin-top: -3px;
        }

        @media (max-width: $breakThree) {
          // font-size: 1em !important;
          // line-height: 2em;
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
          // background: red;
        }

        &.rTwo {
          transform: rotate(6deg) !important;
        }

        &.rThree {
          transform: rotate(3deg) !important;
        }

        a,
        a.rTwo,
        a.rThree {
          color: $black;
          margin: 0 .25em;

          &:hover {
            color: #ff4bf5 !important;
            background: red;
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
        // font-size: 0.875rem;
        // line-height: 2.75em;
        // line-height: calc(2.1em + .6vw);
        // margin-bottom: 1em;
        // background: green;
      }

      @media (min-width: 1010px) {
        // font-size: 1rem;
        // line-height: 2.7em;
        // line-height: calc(2.4em + 0.3vw);
        // background: red;
      }

    }

  }

</style>
