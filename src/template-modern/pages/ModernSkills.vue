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
        ssss: 42,
        textSpot: '',
        baseText: `UX Design: My first love. It's not enough to be merely a Designer anymore, coding requirements have exploded in the last few years. Over the years my skillset has expanded; I'm doing this site in Vue 💚`,
        uiux: `UX Design: it's not enough to be merely a Designer anymore, coding requirements have exploded in the last few years. Over the years my skillset has expanded — I'm doing this site in Vue 💚`,
        html5: `HTML5: the bones of the Internet. As few divs and spans as possible if you please.`,
        css3: `CSS3: Engineers just love CSS haha! Let me do that for you 🙂 I enjoy its declarative cascading infuriating novelty.`,
        js: `JavaScript: I design, do all my HTML and CSS, JavaScript I'm still mastering. I've come a long way, Love me some Vue.`,
        sass: `SASS: Syntactically Awesome Style Sheets have made CSS so much more fun to use. CSS's new --vars make CSS more robust, but there's along way to go.`,
        vue: `Vue.js is my favorite framework, a great balance of Angular's ease and React's abilities. Although new kid on the block  Svelte has caught my eye.`,
        nuxt: `The Next framework for Vue: SSR, routes by directory, SEO. It's jam-packed with crunchy goodness.`,
        vsCode: `VS Code: I used to be a Sublime Text guy, but I'm fully on the VS Code bandwagon now. MS should have done this years ago.`,
        sketch: `Sketch used to be the king of UX prototyping, now there are many alternatives, I still enjoy it.`,
        figma: `Figma is the new king of UX prototyping. It sure isn't Illustrator in the vector dept, but UX rarely requires that sophistication, And it's multi-platform and collaborative, unlike Sketch.`,
        svg: `SVG: Vector is best because it scales and rasters don't, and it's editable, but it cannot replace a photograph.`,
        chelsea: `Chelsea I 💙! The only team in London with a European Cup 🎤`,
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
    // background: transparent;
    background: hsla(340, 100%, 50%, 0.2);
    margin: auto;
    padding: .75rem 1.25rem;
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
      font-size: .85em;
      line-height: 1.75em;
      letter-spacing: 0.025em;
      color: white;
      font-weight: 500;
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
