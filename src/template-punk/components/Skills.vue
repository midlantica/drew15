<template>
  <div class="rotaterWrap">
    <div class="skillsGrid">
      <iconUiux class="icon uiux" />
      <iconHtml5 class="icon html5" />
      <iconCss3 class="icon css3" />
      <iconJs class="icon js" />

      <iconSketch class="icon sketch" />
      <iconSass class="icon sass" />
      <iconVue class="icon vue" />
      <iconSvg class="icon svg" />

      <iconTerminal class="icon terminal" />
      <iconNode class="icon node" />
      <iconWebpack class="icon webpack" />
      <iconAxure class="icon axure" />
    </div>
  </div>
</template>

<script>
  import iconUiux from '@/components/Icons/icon-uiux'
  import iconHtml5 from '@/components/Icons/icon-html5'
  import iconCss3 from '@/components/Icons/icon-css3'
  import iconJs from '@/components/Icons/icon-js'
  import iconSketch from '@/components/Icons/icon-sketch'
  import iconSass from '@/components/Icons/icon-sass'
  import iconVue from '@/components/Icons/icon-vue'
  import iconSvg from '@/components/Icons/icon-svg'
  import iconTerminal from '@/components/Icons/icon-terminal'
  import iconNode from '@/components/Icons/icon-node'
  import iconWebpack from '@/components/Icons/icon-webpack'
  import iconAxure from '@/components/Icons/icon-axure'
  export default {
    components: {
      iconUiux,
      iconHtml5,
      iconCss3,
      iconJs,
      iconSketch,
      iconSass,
      iconVue,
      iconSvg,
      iconTerminal,
      iconNode,
      iconWebpack,
      iconAxure
    }
  }
</script>

<style lang="scss" scoped>
  // @import '@/assets/css/main.scss';
  @import '@/template-groovy/assets/css/groovy-main.scss';

  $BreakOne: 1024px;
  $BreakTwo: 860px;

  .rotaterWrap {
    background: transparentize(black, 0.25);
  }

  .skillsGrid {
    transform: rotate(-1deg);
    display: grid;
    // width: 100%;
    flex-wrap: wrap;
    // justify-content: stretch;
    // justify-content: space-around;
    // justify-content: space-between;
    justify-content: space-between;
    justify-items: center;
    //
    margin: .5em auto 1em;
    align-items: center;
    grid-template-columns: repeat(12, minmax(auto, auto));
    grid-row-gap: 0em;
    grid-column-gap: 0em;
    // grid-column-gap: 1.5em;
    // background: beige;
    // margin-bottom: .5em;
    transition: .25s ease-in;
    // background: red;
    background: transparentize(green, 0.80);

    // @media (min-width: 736px) and
    //   (max-width: 1024px)
    // {
    //   grid-template-columns: repeat(12, minmax(auto, auto));
    //   grid-column-gap: 0em;
    //   grid-row-gap: 0em;
    //   // justify-content: stretch;
    //   // grid-column-gap: 0em;
    //   // background: lightblue;
    // }

    // @media (min-device-width: 768px)
    //    and (max-device-width: 1024px)
    //    and (-webkit-min-device-pixel-ratio: 2)
    // {
    //   grid-template-columns: repeat(6, minmax(auto, auto));
    //   // justify-content: center;
    //   // grid-row-gap: 1.5em;
    //   // grid-column-gap: 0em;
    //   // grid-column-gap: 0em;
    //   // background: rgba(246, 128, 97, .5); // pale orange

    // }

    @media (min-width: 485px) and (max-width: $BreakOne)
    {
      width: 95%;
      grid-template-columns: repeat(6, minmax(auto, auto));
      // grid-column-gap: 0em;
      // grid-row-gap: .75em;
      grid-row-gap: 1.25em;
      // background: aqua;
    }

    @media (min-width: 0px) and (max-width: 484px)
    {
      grid-template-columns: repeat(3, minmax(auto, auto));
      // grid-row-gap: 1.5em;
      // grid-column-gap: 5em;
      // background: yellow;
      grid-row-gap: .75em;
      justify-content: space-around;
      // justify-content: space-between;
      justify-items: center;
    }

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      padding: 0;
      // margin: 0 auto;
      // background: red;
      margin-top: .5em;
      margin-bottom: .5em;
      // background: red;

      svg {
        // background: orange;
        margin: 0em 1.4em ;

      }
    }

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape)
    {
      margin: 0.5em 1em 0em;
      // background: orange;

      svg {
        margin: 0em 0.8em;
        // background: red !important;
      }        
    }

    .icon {
      // margin: auto;
    }

    svg {
      width: 80px;
      // height: 26px;
      // scale
    }
  }

</style>
