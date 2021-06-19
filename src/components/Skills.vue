<template>
  <div class="skillsGrid">
    <iconUiux class="icon uiux" @mouseover="onHover(uiux)" @mouseout="onLeave()">
      <Tooltip :tooltip="tooltip" />
    </iconUiux>
    <iconHtml5 class="icon html5" @mouseover="onHover(html5)" @mouseout="onLeave()" />
    <iconCss3 class="icon css3" @mouseover="onHover(css3)" @mouseout="onLeave()" />
    <iconJs class="icon js" @mouseover="onHover(js)" @mouseout="onLeave()" />

    <iconSass class="icon sass" @mouseover="onHover(sass)" @mouseout="onLeave()" />
    <iconVue class="icon vue" @mouseover="onHover(vue)" @mouseout="onLeave()" />
    <iconNuxt class="icon nuxt" @mouseover="onHover(nuxt)" @mouseout="onLeave()" />
    <iconVSCode class="icon vs-code" @mouseover="onHover(vsCode)" @mouseout="onLeave()" />

    <iconSketch class="icon sketch" @mouseover="onHover(sketch)" @mouseout="onLeave()" />
    <iconFigma class="icon figma" @mouseover="onHover(figma)" @mouseout="onLeave()" />
    <iconSvg class="icon svg" @mouseover="onHover(svg)" @mouseout="onLeave()" />
    <iconChelsea class="icon chelsea" @mouseover="onHover(chelsea)" @mouseout="onLeave()" />
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
  import Tooltip from '@/components/Tooltip'

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
      iconChelsea,
      Tooltip
    },
    props: ['tooltipText'],
    data: () => {
      return {
        tooltip: false,
        baseText: `UX Design: My first love. Grocking the industry. Humility before the User. Cracking the flow. Coding requirements have exploded in recent years, coding is a part of design in many companies, my skillset has expanded; I'm doing this site in Vue 💚`,
        uiux: `UX Design: My first love. It's often not enough to be just a Designer anymore, coding requirements have exploded in recent years. Over the years my skillset has expanded, I produced this site with Vue 💚`,
        html5: `HTML5: the bones of the Internet. As few divs and spans as possible if you please.`,
        css3: `CSS3: Engineers just love CSS haha! Let me do that for you 🙂 I enjoy its declarative cascading infuriating novelty.`,
        js: `JavaScript: I design, do all my HTML and CSS as is needed, JavaScript I'm still mastering. I've come a long way, continuous learning is my daily bread, Love me some Vue.`,
        sass: `SASS has made CSS so much more fun to use. CSS's new --vars make CSS more robust, but there's along way to go.`,
        vue: `Vue.js is my favorite JS framework, a great balance of Angular's ease and React's abilities. Although new kid on the block  Svelte has caught my eye.`,
        nuxt: `The Next framework for Vue: SSR, routes by directory, SEO. It's jam-packed with crunchy goodness. Also digging Gridsome.js.`,
        vsCode: `VS Code: I used to be a Sublime Text guy, but I'm all VS Code these days. Microsoft should have done this years ago – better late than never.`,
        sketch: `Sketch used to be the king of UX prototyping, now there are many alternatives, I still enjoy it. Oh and Axure too.`,
        figma: `Figma is the new king of UX prototyping. It sure isn't Illustrator in the vector drawing dept, but UX rarely requires such sophistication, And it's multi-platform and collaborative, unlike Sketch.`,
        svg: `SVG: Vector is best because it scales and rasters don't, and it's editable, but it still cannot replace a photograph.`,
        chelsea: `Chelsea I 💙! The only team in London with a European Cup 🎤`,
      }
    },
    methods: {
      onHover(e) {
        e.tooltip = true
        e.tooltipText = e
        console.log('innnnn', e)
      },
      onLeave() {
        this.tooltip = false
        console.log('out', e)
      },
    },
    computed: {

    },
    mounted: function() {
      console.log(`Yooooooo!!!`)
    }
  }

</script>

<style lang="scss" scoped>

  .skillsGrid {
    display: grid;
    grid-column: 1 / 2;
    grid-row: 2 / 4;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    width: 100%;
    justify-content: space-between;
    justify-items: center;
    align-items: stretch;
    align-content: space-between;
    gap: .5rem auto;
    position: relative;

    @media (max-width: $breakThou) {
      grid-row: 2;
    }

    @media (max-width: $breakOne) {
      grid-row: 2;
    }

    @media (max-width: $breakTwo) {
      grid-row: 2;
    }

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

    svg g { cursor: progress; }
  }

  body.modern .skillsGrid {
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

      &:hover {
        background: hsla(0, 100%, 25%, 0.25);
        // fill: red;
      }

      g {
        box-shadow: 0 0 12px black;
        // stroke: $accent !important;
      }
    }
  }

  body.bourbon .skillsGrid {
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

  body.techy .skillsGrid {
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

  body.groovy .skillsGrid {
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

  body.corp .skillsGrid {
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

  body.punk .skillsGrid {
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
