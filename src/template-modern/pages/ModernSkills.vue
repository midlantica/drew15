<template>
  <div name="bounce" appear>
    <transition name="bounce2" appear>
      <div class="skillsGrid">
        <iconUiux class="icon uiux" @mouseover="onHover(uiux)" @mouseleave="onLeave()" />
        <iconHtml5 class="icon html5" @mouseover="onHover(html5)" @mouseleave="onLeave()" />
        <iconCss3 class="icon css3" @mouseover="onHover(css3)" @mouseleave="onLeave()" />
        <iconJs class="icon js" @mouseover="onHover(js)" @mouseleave="onLeave()" />

        <iconSass class="icon sass" @mouseover="onHover(sass)" @mouseleave="onLeave()" />
        <iconVue class="icon vue" @mouseover="onHover(vue)" @mouseleave="onLeave()" />
        <iconNuxt class="icon nuxt" @mouseover="onHover(nuxt)" @mouseleave="onLeave()" />
        <iconVSCode class="icon vs-code" @mouseover="onHover(vsCode)" @mouseleave="onLeave()" />

        <iconSketch class="icon sketch" @mouseover="onHover(sketch)" @mouseleave="onLeave()" />
        <iconFigma class="icon figma" @mouseover="onHover(figma)" @mouseleave="onLeave()" />
        <iconSvg class="icon svg" @mouseover="onHover(svg)" @mouseleave="onLeave()" />
        <iconChelsea class="icon chelsea" @mouseover="onHover(chelsea)" @mouseleave="onLeave()" />
      </div>
    </transition>
    <transition name="bounce4" appear>
      <div class="skillsBubble">
        <transition name="fade">
          <p>{{ textSpot }}</p>
        </transition>
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
        showText: true,
        textSpot: '',
        baseText: `Not enough just to be a Designer anymore, coding requirements have exploded in the last few years. Over the years my skillset has expanded — I'm doing this site in Vue 💚`,
        uiux: `uiux Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        html5: `html5 Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        css3: `css3 Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.`,
        js: `js Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        sass: `sass Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        vue: `vue Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.`,
        nuxt: `nuxt Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        vsCode: `vsCode Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        sketch: `sketch Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.`,
        figma: `figma Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        svg: `svg Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.`,
        chelsea: `chelsea Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      }
    },
    mounted() {
      this.textSpot = this.baseText
      // console.log('mounted')
    },
    methods: {
      onHover(e) {
        this.textSpot = e
        // console.log(e, 'inside')
      },
      onLeave() {
        this.textSpot = this.baseText
        // console.log('outside')
      },

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
    width: 45%;
    background: transparent;
    margin: auto;
    padding: 1rem 1.5rem;
    border: 1px solid $ruby;
    border-radius: .5rem;
    // transition: all .25s ease-out .25s;
    @include box-shadow(0px, 1px, 20px, 0px, hsl(0, 0%, 0%));

    @media (max-width: $breakFour) {
      flex-direction: column;
    }

    @media (max-width: 900px) {
      width: 55%;
    }

    @media (max-width: 600px) {
      width: 65%;
    }

    @media (max-width: 300px) {
      width: 100%;
    }

    p {
      // display: block;
      // width: 50%;
      font-family: Spartan, "Times New Roman", Times, serif !important;
      font-size: .9em;
      line-height: 1.4em;
      letter-spacing: 0.05em;
      color: white;
      font-weight: 300;
      //
      align-content: center;
      align-items: center;
      justify-content: center;
      align-self: center;
      text-align: left;
      transition: all .25s ease-out .25s;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .25s ease-out .25s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
