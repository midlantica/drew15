<template>
  <div class="skillsGrid">
    <iconUiuxBlue class="icon uiux" />
    <iconHtml5Blue class="icon html5" />
    <iconCss3Blue class="icon css3" />
    <iconJsBlue class="icon js" />

    <iconSketchBlue class="icon sketch" />
    <iconSassBlue class="icon sass" />
    <iconVueBlue class="icon vue" />
    <iconSvgBlue class="icon svg" />

    <iconTerminalBlue class="icon terminal" />
    <iconNodeBlue class="icon node" />
    <iconWebpackBlue class="icon webpack" />
    <iconAxureBlue class="icon axure" />
  </div>
</template>

<script>
  import iconUiuxBlue from '@/template-corp/components/Icons/icon-uiux'
  import iconHtml5Blue from '@/template-corp/components/Icons/icon-html5'
  import iconCss3Blue from '@/template-corp/components/Icons/icon-css3'
  import iconJsBlue from '@/template-corp/components/Icons/icon-js'
  import iconSketchBlue from '@/template-corp/components/Icons/icon-sketch'
  import iconSassBlue from '@/template-corp/components/Icons/icon-sass'
  import iconVueBlue from '@/template-corp/components/Icons/icon-vue'
  import iconSvgBlue from '@/template-corp/components/Icons/icon-svg'
  import iconTerminalBlue from '@/template-corp/components/Icons/icon-terminal'
  import iconNodeBlue from '@/template-corp/components/Icons/icon-node'
  import iconWebpackBlue from '@/template-corp/components/Icons/icon-webpack'
  import iconAxureBlue from '@/template-corp/components/Icons/icon-axure'
  export default {
    components: {
      iconUiuxBlue,
      iconHtml5Blue,
      iconCss3Blue,
      iconJsBlue,
      iconSketchBlue,
      iconSassBlue,
      iconVueBlue,
      iconSvgBlue,
      iconTerminalBlue,
      iconNodeBlue,
      iconWebpackBlue,
      iconAxureBlue
    }
  }
</script>

<style lang="scss" scoped>
  // @import '@/assets/css/main.scss';
  @import '@/template-corp/assets/css/corp-main.scss';

  .skillsGrid {
    display: grid;
    width: 100%;
    flex-wrap: wrap;
    // justify-content: stretch;
    // justify-content: space-around;
    // justify-content: space-between;
    justify-content: space-between;
    justify-items: center;
    //
    margin: 0em auto 0;
    align-items: center;
    grid-template-columns: repeat(6, minmax(auto, auto));
    grid-row-gap: 0.15em;
    grid-column-gap: 0em;
    // grid-column-gap: 1.5em;
    // background: beige;
    margin-bottom: .75em;
    transition: .25s ease-in;


    @media (min-width: 682px) and (max-width: 1024px)
    {
      grid-template-columns: repeat(6, minmax(auto, auto));
      // grid-column-gap: 2.5em;
      grid-row-gap: .5em;
      // justify-content: stretch;
      // grid-column-gap: 0em;
      // background: lightblue;
    }

    @media (min-device-width: 682px)
    and (max-device-width: 1024px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      grid-template-columns: repeat(6, minmax(auto, auto));
      // justify-content: center;
      // grid-row-gap: 1.5em;
      // grid-column-gap: 0em;
      // grid-column-gap: 0em;
      // background: rgba(246, 128, 97, .5); // pale orange

    }

    @media (min-width: 414px) and (max-width: 682px)
    {
      grid-template-columns: repeat(4, minmax(auto, auto));
      grid-row-gap: 1.5em;
      // grid-column-gap: 0em;
      // grid-row-gap: .75em;
      grid-row-gap: 1em;
      // background: aqua;
    }

    @media (min-width: 0px) and (max-width: 414px)
    {
      grid-template-columns: repeat(3, minmax(auto, auto));
      // grid-row-gap: 1.5em;
      // grid-column-gap: 5em;
      // background: yellow;
      grid-row-gap: .75em;
      justify-content: space-between;
      justify-items: center;
    }

    // @media (max-width: 310px)
    // {
    //   grid-template-columns: repeat(2, minmax(auto, auto));
    //   // grid-row-gap: 0.75em;
    //   // grid-column-gap: 0em;
    //   // background: orange;
    //   grid-row-gap: .75em;
    // }

    // @media (max-width: 210px)
    // {
    //   grid-template-columns: repeat(1, minmax(auto, auto));
    //   // grid-row-gap: 0.5em;
    //   // grid-column-gap: 0em;
    //   // background: red;
    // }

    .icon {
      // margin: auto;
    }
  }

</style>
