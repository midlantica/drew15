<template>
  <nav>
    <!-- <p class='email'><a href="mailto:druharper@gmail.com">druharper@gmail.com</a></p> -->
    <mastDrew class="svgArt mastDrew" />
    <mastHarper class="svgArt mastHarper" />
    <a class="DrewHead" href="/Extras">&nbsp;</a>
   <!--  <p class='resume'>Resume: 
      <a href="img/resume/drew_harper_resume_portfolio.pdf">Large</a>/
      <a href="img/resume/drew_harper_resume_portfolio_short.docx">Small</a>
    </p> -->
  </nav>
</template>

<script>
  import mastDrew from './masthead/mastDrew'
  import mastHarper from './masthead/mastHarper'
  export default {
    components: {
      mastDrew,
      mastHarper
    }
  }
</script>

<style lang="scss" scoped>
  // @import '../assets/css/_colors.scss';
  // @import '@/assets/css/main.scss';
  @import '@/template-bourbon/assets/css/bourbon-main.scss';

  $outRed: rgba(221, 9, 22, .3);
  $outBlue: rgba(92, 201, 245, .3);

  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 430px;

  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: .5em 1em;
    flex-grow: 0;
    width: 100%;
    // align-items: center;
    // align-items: stretch;
    
    p.email {
      font-size: 1.5em;
      letter-spacing: 0.03em;
      text-shadow: 1px 1px 2px black;
      font-family: BodoniXT, "Times New Roman", Times, serif;
      text-transform: lowercase;
      flex-grow: 1;
      align-self: flex-end;
      align-content: flex-end;
      text-align: right;
      transform: rotate(-1deg);
      padding-top: .5em;
      // display: block;
      // float: right;
    }

    // ###############################
    // ###############################

    svg {
      height: 19vh;
      .svgArt {
        // width: 50%;
        // height: 150px;

        .mastDrew {
          // display: block;
          // width: 30%;
          flex-basis: 33vw;
          // height: 19vh;
          // background: url(../assets/img/MastDrew.svg) no-repeat top left;
          // background-size: contain;
          // flex-grow: 0;
          align-items: flex-start;
          align-content: flex-start;
          align-self: flex-start;
          transform: rotate(1deg);
          // position: relative;
          // top: -1.4em;
          // float: left;
          // order: 1;
        }

        .mastHarper {
          // display: block;
          // width: 50%;
          flex-basis: 50vw;
          // height: 19vh;
          // background: url(../assets/img/MastHarper.svg) no-repeat top left;
          // background-size: contain;
          // flex-grow: 0;
          align-items: flex-start;
          align-content: flex-start;
          align-self: flex-start;
          transform: rotate(1deg);
          // position: relative;
          // top: -1.4em;
          // float: left;
          // margin-left: 1em;
          // order: 2;
        }
      }

    }

    a.DrewHead {
      // display: block;
      // width: 220px;
      flex-basis: 133px;
      height: 150px;
      background: url(../assets/img/drew_head_punk.png) no-repeat center;
      background-size: contain;
      // float: right;
      align-items: flex-end;
      align-content: flex-end;
      flex-grow: 0;
      align-self: flex-end;
      position: relative;
      top: -0.7em;
      margin-left: 1em;
      // order: 3;
    }

    // ###############################
    // ###############################

    p.resume {
      font-size: 1.5em;
      letter-spacing: 0.03em;
      text-shadow: 1px 1px 2px black;
      font-family: BodoniXT, "Times New Roman", Times, serif;
      flex-grow: 1;
      align-self: flex-end;
      align-content: flex-end;
      text-align: right;
      transform: rotate(1deg);
      position: relative;
      top: -0.8em;
      //
      a {
        // text-align: right;
        margin: 0 .25em;
      }
    }
  }


</style>
