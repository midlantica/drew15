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
    <iconChelsea class="icon chelsea" />
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
  import iconChelsea from '@/components/Icons/icon-chelsea'
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
      iconChelsea
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  @import '@/template-techy/assets/css/techy-main.scss';

  .skillsGrid {
    display: grid;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    justify-items: center;
    //
    align-items: center;
    grid-template-columns: repeat(12, minmax(auto, auto));
    grid-row-gap: 2.5em;
    grid-column-gap: 0em;

    @media (max-width: $breakThou)
    and (min-width: $breakOne)
    {
      grid-template-columns: repeat(12, minmax(auto, auto));
    }

    // IPAD PRO LANDSCAPE
    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1.5) 
    {
      display: grid;
      width: 100%;
      flex-wrap: wrap;
      // justify-content: space-between;
      justify-items: center;
      //
      align-items: center;
      grid-template-columns: repeat(12, minmax(auto, auto));
      grid-row-gap: 2.5em;
      // margin: 0em auto;
    }

    @media (min-width: 726px) 
    and (max-width: 1024px)
    {
      grid-template-columns: repeat(6, minmax(auto, auto));
      grid-column-gap: 2.5em;
      grid-row-gap: 1em;
      // margin: 0em auto;
    }

    @media (min-device-width: 768px)
    and (max-device-width: 1072px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      grid-template-columns: repeat(6, minmax(auto, auto));
      margin: 0em auto;
    }

    @media (min-width: 377px) 
    and (max-width: 726px)
    {
      grid-template-columns: repeat(4, minmax(auto, auto));
      grid-row-gap: 1.25em;
      // margin: 0em auto;
    }

    @media (min-width: 0px) 
    and (max-width: 377px)
    {
      grid-template-columns: repeat(3, minmax(auto, auto));
      grid-row-gap: .75em;
      justify-content: space-around;
      justify-items: center;
      // margin: 0em auto;
    }

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      padding: 0;
      margin-top: .5em;
      padding-bottom: .5em;
      // background: red;

      svg {
        //

      }
    }

    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape)
    {
      margin-top: -0.5em;
      padding-bottom: .5em;
      // background: orange;

      svg {
        // 
      }        
    }
    
    .icon {
      // 

      //
    }
    
    svg {
      width: 85px;
      height: 60px;
    }
  }

</style>
