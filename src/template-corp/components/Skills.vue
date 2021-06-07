<template>
  <div class='skillsGrid'>
    <iconUiuxBlue class='icon uiux' />
    <iconHtml5Blue class='icon html5' />
    <iconCss3Blue class='icon css3' />
    <iconJsBlue class='icon js' />

    <iconSketchBlue class='icon sketch' />
    <iconSassBlue class='icon sass' />
    <iconVueBlue class='icon vue' />
    <iconNuxtBlue class='icon nuxt' />

    <iconVSCodeBlue class='icon vs-code' />
    <iconSvgBlue class='icon svg' />
    <iconFigmaBlue class='icon figma' />
    <iconChelseaBlue class='icon chelsea' />
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
  import iconFigmaBlue from '@/template-corp/components/Icons/icon-figma'
  import iconNuxtBlue from '@/template-corp/components/Icons/icon-nuxt'
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
      iconFigmaBlue,
      iconNuxtBlue,
      iconChelseaBlue
    }
  }
</script>

<style lang='scss' scoped>
  @import '@/template-corp/assets/css/corp-main.scss';

  .skillsGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
    width: 100%;
    justify-content: space-between;
    justify-items: center;
    align-items: stretch;
    align-content: space-between;
    gap: .5rem auto;
    transition: 0.25s ease-in;

   @media (min-width: 1026px) {
      grid-template-columns: repeat(6, minmax(88px, 1fr));
      // background: blue;
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      grid-template-columns: repeat(6, minmax(84px, 1fr));
      // background: red;
    }

    @media (min-width: 471px) and (max-width: 562px) {
      grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
      // background: greenyellow;
    }

    @media (max-width: 470px) {
      grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
      // background: rgb(47, 255, 245);
    }
  }

</style>
