<template>
  <div class="skillsGrid">
    <iconUiux class="icon uiux" />
    <iconHtml5 class="icon html5" />
    <iconCss3 class="icon css3" />
    <iconJs class="icon js" />

    <iconSass class="icon sass" />
    <iconVue class="icon vue" />
    <iconNuxt class="icon nuxt" />
    <iconVSCode class="icon vs-code" />

    <iconSketch class="icon sketch" />
    <iconFigma class="icon figma" />
    <iconSvg class="icon svg" />
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
  import iconFigma from '@/components/Icons/icon-figma'
  import iconNuxt from '@/components/Icons/icon-nuxt'
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
      iconFigma,
      iconNuxt,
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
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      grid-template-columns: repeat(6, minmax(88px, 1fr));
    }

    @media (min-width: 471px) and (max-width: 562px) {
      grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    }

    @media (max-width: 470px) {
      grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
    }

    svg {
      width: 88px;
    }

  }

  .modern .skillsGrid {
    width: 60%;
    grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
    justify-content: center;
    margin: 1rem auto;

    @media (min-width: 701px) {
      width: 50%;
      grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
    }

    // @media (min-width: 563px) and (max-width: 1025px) {
    //   grid-template-columns: repeat(auto-fit, minmax(calc(33.3%), 1fr));
    //   width: 70%;
    // }

    // @media (min-width: 701px) and (max-width: 1025px) {
    //   grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
    //   width: 60%;
    // }

    @media (max-width: 700px) {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      width: 80%;
      // background: rgba(255, 0, 0, 0.144);
    }

    svg {
      width: 100px;
      // stroke: $accent;
      // margin-bottom: 1rem;
      margin: 0rem auto .75rem;

      g {
        // stroke: $accent !important;
      }
    }
  }

  .bourbon .skillsGrid {
    //

    @media (min-width: 1026px) {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      grid-template-columns: repeat(6, minmax(88px, 1fr));
    }

    @media (min-width: 471px) and (max-width: 562px) {
      grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    }

    @media (max-width: 470px) {
      grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
    }

    svg {
      width: 88px;
    }
  }

  .techy .skillsGrid {
    //
    @media (min-width: 1026px) {
      grid-template-columns: repeat(12, minmax(84px, 1fr));
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      grid-template-columns: repeat(6, minmax(84px, 1fr));
    }

    @media (min-width: 471px) and (max-width: 562px) {
      grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    }

    @media (max-width: 470px) {
      grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
    }

    svg {
      width: 88px;
    }
  }

  .groovy .skillsGrid {
    transition: .25s ease-in;
    margin: 0 -1em 0 0em;

    @media (min-width: 1026px) {
      grid-template-columns: repeat(12, minmax(84px, 1fr));
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      grid-template-columns: repeat(6, minmax(84px, 1fr));
    }

    @media (min-width: 471px) and (max-width: 562px) {
      grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    }

    @media (max-width: 470px) {
      grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
    }

    svg {
      width: 88px;
    }
  }

  .corp .skillsGrid {
    //

    @media (min-width: 1026px) {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      grid-template-columns: repeat(6, minmax(88px, 1fr));
    }

    @media (min-width: 471px) and (max-width: 562px) {
      grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    }

    @media (max-width: 470px) {
      grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
    }
  }

  .punk .skillsGrid {
    margin: .5em auto 0em;
    transition: .25s ease-in;
    transform: rotate(-0.5deg);
    background: transparentize(rgba(0, 140, 0, 0.829), 0.50) !important;

    @media (min-width: 1026px) {
      grid-template-columns: repeat(12, minmax(84px, 1fr));
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      grid-template-columns: repeat(6, minmax(88px, 1fr));
    }

    @media (min-width: 471px) and (max-width: 562px) {
      grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    }

    @media (max-width: 470px) {
      grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
    }

    svg {
      width: 88px;
    }

  }



</style>
