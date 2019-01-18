<template>
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
  @import '@/assets/css/main.scss';
  @import '@/template-groovy/assets/css/groovy-main.scss';

  .skillsGrid {
    transform: rotate(-0.5deg);
    display: grid;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    justify-items: center;
    //
    margin: .5em auto 0em;
    align-items: center;
    grid-template-columns: repeat(12, minmax(auto, auto));
    grid-row-gap: 0em;
    grid-column-gap: 0em;
    transition: .25s ease-in;
    background: transparentize(green, 0.50);

    @media (min-width: $breakThou)
    {
      width: 100%;
      grid-template-columns: repeat(12, minmax(auto, auto));
      grid-row-gap: 1em;
    }

    @media (max-width: $breakThou) 
    and (min-width: $breakOne)
    {
      width: 100%;
      grid-template-columns: repeat(6, minmax(auto, auto));
      grid-row-gap: 1em;
    }

    @media (max-width: $breakOne)
    {
      width: 100%;
      grid-template-columns: repeat(6, minmax(auto, auto));
      grid-row-gap: .75em;
      // justify-content: space-between;
      justify-items: center;
    }

    @media (max-width: $breakTwo)
    {
      width: 100%;
      grid-template-columns: repeat(4, minmax(auto, auto));
      grid-row-gap: .75em;
      // justify-content: space-between;
      justify-items: center;
    }

    @media (max-width: $breakThree)
    {
      width: 100%;
      grid-template-columns: repeat(3, minmax(auto, auto));
      grid-row-gap: .75em;
      // justify-content: space-between;
      justify-items: center;
    }

    // @media only screen 
    // and (min-device-width: 375px) 
    // and (max-device-width: 660px)
    // and (-webkit-min-device-pixel-ratio: 2)
    // {
    //   padding: 0;
    //   margin-top: .5em;
    //   margin-bottom: .5em;

    //   svg {
    //     //
    //   }
    // }

    // @media only screen 
    // and (min-device-width: 375px) 
    // and (max-device-width: 660px)
    // and (-webkit-min-device-pixel-ratio: 2)
    // and (orientation: landscape)
    // {
    //   margin: 0.5em 0em 0em;
    //   // background: orange;

    //   svg {
    //     //
    //   }        
    // }

    svg {
      width: 80px;
    }
  }

</style>
