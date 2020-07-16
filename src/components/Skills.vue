<template>
  <div class='skillsGrid'>
    <iconUiux class='icon uiux' />
    <iconHtml5 class='icon html5' />
    <iconCss3 class='icon css3' />
    <iconJs class='icon js' />

    <iconSketch class='icon sketch' />
    <iconSass class='icon sass' />
    <iconVue class='icon vue' />
    <iconSvg class='icon svg' />

    <iconVSCode class='icon vs-code' />
    <iconNode class='icon node' />
    <iconWebpack class='icon webpack' />
    <iconChelsea class='icon chelsea' />
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
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    justify-items: center;
    //
    align-items: center;
    grid-template-columns: repeat(4, minmax(auto, auto));
    grid-row-gap: 0em;
    transition: 0.25s ease-in;

    @media (min-width: 736px) and (max-width: 1024px) {
      grid-template-columns: repeat(6, minmax(auto, auto));
      grid-row-gap: 1em;
    }

    @media (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
      grid-template-columns: repeat(6, minmax(auto, auto));
      //
    }

    @media (min-width: 414px) and (max-width: 736px) {
      grid-template-columns: repeat(4, minmax(auto, auto));
      grid-row-gap: 1.5em;
      grid-row-gap: 0.75em;
      grid-row-gap: 1.25em;
    }

    @media (min-width: 0px) and (max-width: 414px) {
      grid-template-columns: repeat(3, minmax(auto, auto));
      grid-row-gap: 0.75em;
      justify-items: center;
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
      padding: 0;
      margin-top: 0.5em;
      margin-bottom: 0.5em;

      svg {
        margin: 0em 0.75em;
      }
    }

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
      margin: 0.5em 1em 0;

      svg {
        margin: 0em 2.2em;
      }
    }

    .icon {
      // margin: auto;
    }

    svg {
      width: 88px;
      height: 60px;
    }

  }

  .punk .skillsGrid {
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
    transform: rotate(-0.5deg);
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
      justify-items: center;
    }

    @media (max-width: $breakTwo)
    {
      width: 100%;
      grid-template-columns: repeat(4, minmax(auto, auto));
      grid-row-gap: .75em;
      justify-items: center;
    }

    @media (max-width: $breakThree)
    {
      width: 100%;
      grid-template-columns: repeat(3, minmax(auto, auto));
      grid-row-gap: .75em;
      justify-items: center;
    }

    svg {
      width: 80px;
    }

  }

  .techy .skillsGrid {
    display: grid;
    // width: 90%;
    flex-wrap: wrap;
    justify-content: space-between;
    justify-items: center;
    //
    align-items: center;
    grid-template-columns: repeat(12, minmax(auto, auto));
    // grid-row-gap: 2.5em;
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
      justify-items: center;
      //
      align-items: center;
      grid-template-columns: repeat(12, minmax(auto, auto));
      grid-row-gap: 2.5em;
    }

    @media (min-width: 726px)
    and (max-width: 1024px)
    {
      grid-template-columns: repeat(6, minmax(auto, auto));
      grid-column-gap: 2.5em;
      grid-row-gap: 1em;
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
    }

    @media (min-width: 0px)
    and (max-width: 377px)
    {
      grid-template-columns: repeat(3, minmax(auto, auto));
      grid-row-gap: .75em;
      justify-content: space-around;
      justify-items: center;
    }

    @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 660px)
    and (-webkit-min-device-pixel-ratio: 2)
    {
      padding: 0;
      margin-top: .5em;
      padding-bottom: .5em;

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

      svg {
        //
      }
    }

    .icon {
      //
    }

    svg {
      width: 84px;
      height: 59px;
    }
  }

  .groovy .skillsGrid {
    display: grid;
    width: 100%;
    justify-content: space-between;
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
