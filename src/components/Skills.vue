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

    <iconVSCode class="icon vs-code" />
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
  import iconVSCode from '@/components/Icons/icon-vs-code'
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
      iconVSCode,
      iconNode,
      iconWebpack,
      iconChelsea
    }
  }
</script>

<style lang="scss" scoped>
  .skillsGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    width: 100%;
    justify-content: space-between;
    justify-items: center;
    align-items: stretch;
    align-content: space-between;
    gap: .5rem auto;

    @media (min-width: 1026px) {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      // background: blue;
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      grid-template-columns: repeat(6, minmax(88px, 1fr));
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

    svg {
      width: 88px;
      // height: 60px;
    }

    .icon {
      //
    }

  }

  .bourbon .skillsGrid {
    //

    @media (min-width: 1026px) {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      // background: blue;
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      grid-template-columns: repeat(6, minmax(88px, 1fr));
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

  .techy .skillsGrid {
    //
    @media (min-width: 1026px) {
      grid-template-columns: repeat(12, minmax(84px, 1fr));
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

    svg {
      width: 88px;
      // height: 59px;
    }
  }

  .groovy .skillsGrid {
    transition: .25s ease-in;
    margin: 0 -1em 0 0em;

    @media (min-width: 1026px) {
      grid-template-columns: repeat(12, minmax(84px, 1fr));
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

    svg {
      width: 88px;
      // height: 56px;
    }
  }

  .corp .skillsGrid {
    //

    @media (min-width: 1026px) {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      // background: blue;
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      grid-template-columns: repeat(6, minmax(88px, 1fr));
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

  .punk .skillsGrid {
    margin: .5em auto 0em;
    transition: .25s ease-in;
    transform: rotate(-0.5deg);
    background: transparentize(rgba(0, 140, 0, 0.829), 0.50) !important;

    @media (min-width: 1026px) {
      grid-template-columns: repeat(12, minmax(84px, 1fr));
      // background: blue;
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      grid-template-columns: repeat(6, minmax(88px, 1fr));
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

    svg {
      width: 88px;

    }

  }



</style>
