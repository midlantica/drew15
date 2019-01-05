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
    display: grid;
    width: 100%;
    justify-content: space-around;
    justify-items: center;
    //
    align-items: center;
    grid-template-columns: repeat(12, minmax(auto, auto));
    grid-row-gap: 0em;
    grid-column-gap: 0em;
    transition: .25s ease-in;
    margin: 0 -1em 0 0em;

    @media (min-width: $breakThou)
    {
      grid-template-columns: repeat(12, minmax(auto, auto));
      margin: 0em 0em 0em;
    }

    @media (max-width: $breakThou) {
      grid-template-columns: repeat(6, minmax(auto, auto));
      grid-row-gap: 1.25em;
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      grid-template-columns: repeat(4, minmax(auto, auto));
      grid-row-gap: 1.25em;
    }

    @media (max-width: $breakThree) {
      grid-template-columns: repeat(3, minmax(auto, auto));
      grid-row-gap: 1.25em;
    }

    .icon {
      // margin: auto;
    }

    svg {
      width: 84px;
      height: 56px;
      // scale

      @media (max-width: $breakThou) {
        //
      }

      @media (max-width: $breakOne) {
        //
      }

      @media (max-width: $breakTwo) {
        width: 84px;
        height: 56px;
      }

      @media (max-width: $breakThree) {
        //
      }
    }
  }

</style>
