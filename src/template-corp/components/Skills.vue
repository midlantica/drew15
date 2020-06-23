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

    <iconVSCodeBlue class="icon vs-code" />
    <iconNodeBlue class="icon node" />
    <iconWebpackBlue class="icon webpack" />
    <iconChelseaBlue class="icon chelsea" />
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
  import iconVSCodeBlue from '@/template-corp/components/Icons/icon-vs-code'
  import iconNodeBlue from '@/template-corp/components/Icons/icon-node'
  import iconWebpackBlue from '@/template-corp/components/Icons/icon-webpack'
  import iconChelseaBlue from '@/template-corp/components/Icons/icon-chelsea'
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
      iconVSCodeBlue,
      iconNodeBlue,
      iconWebpackBlue,
      iconChelseaBlue
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
    justify-content: space-between;
    justify-items: center;
    //
    align-items: center;
    grid-template-columns: repeat(6, minmax(auto, auto));
    grid-row-gap: 0.5em;

    @media (max-width: 1024px) and (min-width: 726px) {
      // margin: 0 !important;
    }

    @media (min-width: 682px) and (max-width: 1024px) {
      grid-template-columns: repeat(6, minmax(auto, auto));
      grid-row-gap: 0.5em;
    }

    @media (min-device-width: 682px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
      grid-template-columns: repeat(6, minmax(auto, auto));
    }

    @media (min-width: 414px) and (max-width: 682px) {
      grid-template-columns: repeat(4, minmax(auto, auto));
      grid-row-gap: 1em;
    }

    @media (min-width: 0px) and (max-width: 414px) {
      grid-template-columns: repeat(3, minmax(auto, auto));
      grid-row-gap: 0.75em;
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
      padding: 0;
      margin-top: 0.5em;
      margin-bottom: 0.5em;

      svg {
        // margin: 0em 0.8em ;
      }
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
      // margin: 0.5em 1em 0em;

      svg {
        // margin: 0em 0.55em;
      }
    }

    .icon {
      // margin: auto;
    }
  }
</style>
