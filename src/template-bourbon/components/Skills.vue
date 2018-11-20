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
  // @import '@/template-bourbon/assets/css/_fonts.scss';
  // @import '@/template-bourbon/assets/css/bourbon-main.scss';
  
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
    // margin: .5em auto 0;
    align-items: center;
    grid-template-columns: repeat(4, minmax(auto, auto));
    grid-row-gap: 2em;
    grid-column-gap: 0em;
    // grid-column-gap: 1.5em;
    // background: beige;
    // margin-bottom: .5em;
    transition: .25s ease-in;
    // margin-bottom: 1em;

    @media (min-width: 736px) and
      (max-width: 1024px)
    {
      grid-template-columns: repeat(6, minmax(auto, auto));
      grid-column-gap: 2.5em;
      grid-row-gap: 1em;
      // justify-content: stretch;
      // grid-column-gap: 0em;
      // background: lightblue;
    }

    @media (min-device-width: 768px)
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

    @media (min-width: 414px) and (max-width: 736px)
    {
      grid-template-columns: repeat(4, minmax(auto, auto));
      grid-row-gap: 1.5em;
      // grid-column-gap: 0em;
      grid-row-gap: .75em;
      grid-row-gap: 1.25em;
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

      //
    }

    svg {
      width: 88px;
      height: 60px;
    }
  }

</style>
