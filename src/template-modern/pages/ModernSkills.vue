<template>
  <div name="bounce" appear>
    <transition name="bounce2" appear>
      <div class="skillsGrid">
        <iconUiux class="icon uiux" @mouseover="onHover(uiux)" />
        <iconHtml5 class="icon html5" @mouseover="onHover(html5)" />
        <iconCss3 class="icon css3" @mouseover="onHover(css3)" />
        <iconJs class="icon js" @mouseover="onHover(js)" />

        <iconSass class="icon sass" @mouseover="onHover(sass)" />
        <iconVue class="icon vue" @mouseover="onHover(vue)" />
        <iconNuxt class="icon nuxt" @mouseover="onHover(nuxt)" />
        <iconVSCode class="icon vs-code" @mouseover="onHover(vsCode)" />

        <iconSketch class="icon sketch" @mouseover="onHover(sketch)" />
        <iconFigma class="icon figma" @mouseover="onHover(figma)" />
        <iconSvg class="icon svg" @mouseover="onHover(svg)" />
        <iconChelsea class="icon chelsea" @mouseover="onHover(chelsea)" />
      </div>
    </transition>
    <transition name="bounce4" appear>
      <div class="skillsBubble">
        <p>{{ baseText }}</p>
      </div>
      <!-- <p>{{ this.e }}</p> -->
      <!-- <p>{{ $data.this.e }}</p> -->
    </transition>
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
    name: 'ModernSkills',
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
      iconChelsea,
    },
    data: () => {
      return {
        showContent: true,
        baseText: 'base Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
        uiux: 'uiux Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
        html5: 'html5 Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        css3: 'css3 Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.',
        js: 'js Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
        sass: 'sass Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        vue: 'vue Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.',
        nuxt: 'nuxt Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
        vsCode: 'vsCode Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        sketch: 'sketch Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.',
        figma: 'figma Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
        svg: 'svg Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.',
        chelsea: 'chelsea Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      }
    },
    methods: {
      onHover(e) {
        this.baseText = e
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '@/template-modern/assets/css/modern-main.scss';

  .modern .skillsGrid {
    width: 50%;
    display: grid;
    // grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
    // grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    justify-content: center;
    margin: 1rem auto;
    justify-items: center;
    align-items: stretch;
    align-content: space-between;
    text-align: center;
    gap: .5rem auto;

    @media (max-width: 900px) {
      width: 60%;
    }

    @media (max-width: 600px) {
      width: 70%;
    }

    @media (max-width: 300px) {
      width: 100%;
    }

    // @media (min-width: 563px) and (max-width: 1025px) {
    //   grid-template-columns: repeat(auto-fit, minmax(calc(33.3%), 1fr));
    //   width: 70%;
    // }

    // @media (min-width: 701px) and (max-width: 1025px) {
    //   grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
    //   width: 60%;
    // }

    // @media (max-width: 700px) {
    //   grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    //   width: 80%;
    //   // background: rgba(255, 0, 0, 0.144);
    // }

    .icon {
      cursor: pointer;
    }

    svg {
      width: 100px;
      // stroke: $accent;
      // margin-bottom: 1rem;
      margin: 0rem auto .75rem;

      g {
        // stroke: red !important;
      }

      path,
      polygon,
      rect,
      polyline {
        stroke: $ruby;
        stroke-width: 10px;
      }
    }


  }

  .bounce {
    position: relative;
  }

  .skillsBubble {
    background: transparent;
    // background: hsla(60, 100%, 50%, .25);
    // position: fixed;
    // left: calc(100% - 70%);
    // top: 0;
    padding: 1.25rem 1.75rem;
    // display: block;
    border: 1px solid $ruby;
    border-radius: .5rem;
    @include box-shadow(0px, 1px, 20px, 0px, hsl(0, 0%, 0%));

    @media (max-width: $breakThou) {
      margin: 0rem 0 .5rem;
    }

    @media (max-width: $breakOne) {
      margin: 0 0 .5rem;
    }

    @media (max-width: $breakFour) {
      flex-direction: column;
    }
  }

  p {
    // display: block;
    font-size: .9em;
    line-height: 1.4em;
    letter-spacing: 0.05em;
    color: white;
    font-weight: 500;
    //
    align-content: center;
    align-items: center;
    justify-content: center;
    align-self: center;
    text-align: left;
  }

  .modern .skillsBubble {
    width: 45%;
    margin: auto;
    padding: 1rem 1.5rem;

    p {
      font-family: Spartan, "Times New Roman", Times, serif !important;
      font-size: .85rem;
      letter-spacing: .000rem;
      line-height: 1.4rem;
      margin: 0;
      font-weight: 300;

      // @media (max-width: $breakThou) {
      //   font-size: 1.15rem;
      //   line-height: 1.75rem;
      // }

      // @media (max-width: $breakTwo) {
      //   font-size: 1rem;
      //   line-height: 1.5rem;
      // }

    }
  }
</style>
