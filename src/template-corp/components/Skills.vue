<template>
  <div class='skillsGrid'>
    <Popper trigger="hover">
      <iconUiuxBlue class="icon uiux" />
      <template #content class="popper">
        {{ uiux }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconHtml5Blue class="icon html5" />
      <template #content class="popper">
        {{ html5 }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconCss3Blue class="icon css3" />
      <template #content class="popper">
        {{ css3 }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconJsBlue class="icon js" />
      <template #content class="popper">
        {{ js }}
      </template>
    </Popper>
    <!--  -->
    <Popper trigger="hover">
      <iconSketchBlue class="icon sketch" />
      <template #content class="popper">
        {{ sketch }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconSassBlue class="icon sass" />
      <template #content class="popper">
        {{ sass }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconVueBlue class="icon vue" />
      <template #content class="popper">
        {{ vue }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconSvgBlue class="icon svg" />
      <template #content class="popper">
        {{ svg }}
      </template>
    </Popper>
    <!--  -->
    <Popper trigger="hover">
      <iconVSCodeBlue class="icon vsCode" />
      <template #content class="popper">
        {{ vsCode }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconFigmaBlue class="icon figma" />
      <template #content class="popper">
        {{ figma }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconNuxtBlue class="icon nuxt" />
      <template #content class="popper">
        {{ nuxt }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconChelseaBlue class="icon chelsea" />
      <template #content class="popper">
        {{ chelsea }}
      </template>
    </Popper>
    </div>
</template>

<script>
  import Popper from 'vue3-popper'

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
      iconChelseaBlue,
      Popper
    },
    data: () => {
      return {
        hover: true,
        placement: top,
        offsetY: 25,
        arrow: true,
        uiux: `UX Design is my first love. Humility before the User. Crack the flow!`,
        html5: `HTML5: the bones of the Internet. As few divs and spans as possible if you please.`,
        css3: `CSS3: Engineers just love CSS haha! Let me do that for you 🙂 I enjoy its declarative cascading infuriating novelty.`,
        js: `JavaScript: I design, do all my HTML & CSS, JS I'm still mastering. Continuous learning, Love me some Vue 💚.`,
        sass: `SASS has made CSS so much more fun to use. CSS's new --vars make CSS more robust, but there's along way to go.`,
        vue: `Vue.js is my favorite JS framework, a great balance of Angular's ease and React's abilities.`,
        nuxt: `The Next framework for Vue: SSR, routes by dir, SEO; it's jam-packed with crunchy goodness. Digging Gridsome.js too.`,
        vsCode: `VS Code: Used to be into Sublime Text but I'm all VS Code these days. MS better late than never.`,
        sketch: `Sketch used to be the king of UX prototyping, now there are many alternatives.`,
        figma: `Figma is the new king of UX prototyping. It ain't Illustrator but UX rarely requires such sophistication.`,
        svg: `SVG: Vector is best because it scales and rasters don't, and it's editable, but it still cannot replace a photograph.`,
        chelsea: `Blue is the color! Chelsea is the name! We're all together... and We're the only team in London with the European Cup! x2! 💙`,
      }
    },
  }
</script>

<style lang='scss' scoped>
  @import '@/template-corp/assets/css/corp-main.scss';

  :deep(.popper) {
    color: white !important;
    // width: 30ch;
    font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 500;
    font-size: .75rem;
    margin: auto !important;
    padding: .5rem 1rem !important;
    line-height: 1.5rem;
    border-radius: .5em;
    // text-transform: uppercase;
    max-width: 26ch;
    background: linear-gradient(180deg,
        darken($blue-dark, 0),
        darken($blue-dark, 7)
      ) !important;
    z-index: 200000;
    top: -1.25rem !important;
    margin: 0 2rem !important;
    box-shadow: 0px 1px 8px -2px hsla(0, 0%, 0%, 1);
    left: -30px !important;
  }

  :deep(.popper #arrow::before) {
    background: red !important;
  }

  .popper {
    width: auto;
    text-align: center;
    display: inline-block;
    position: absolute;
    z-index: 200000;
  }
  .popper .inline-block {
    background: linear-gradient(180deg,
        darken($blue-dark, 0),
        darken($blue-dark, 7)
      ) !important;
  }
  .popper .popper__arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
  }
  .popper[x-placement^="top"] {
    margin-bottom: 5px;
  }
  .popper[x-placement^="top"] .popper__arrow {
    border-width: 5px 5px 0 5px;
    border-color: #fafafa transparent transparent transparent;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }
  .popper[x-placement^="bottom"] {
    margin-top: 5px;
  }
  .popper[x-placement^="bottom"] .popper__arrow {
    border-width: 0 5px 5px 5px;
    border-color: transparent transparent #fafafa transparent;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }
  .popper[x-placement^="right"] {
    margin-left: 5px;
  }
  .popper[x-placement^="right"] .popper__arrow {
    border-width: 5px 5px 5px 0;
    border-color: transparent #fafafa transparent transparent;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }
  .popper[x-placement^="left"] {
    margin-right: 5px;
  }
  .popper[x-placement^="left"] .popper__arrow {
    border-width: 5px 0 5px 5px;
    border-color: transparent transparent transparent #fafafa;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }

  .popper p {
    font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
    font-size: .7em;
    line-height: 1.75em;
    font-weight: 600;
    // color: white;
    // background: #d71d5b;
    // background: linear-gradient(180deg,
    //     darken($blue-dark, 0),
    //     darken($blue-dark, 7)
    //   );
    padding: .5rem 1.15rem;
    border-radius: .5rem;
    border: none;
    letter-spacing: 0.05em;
    // box-shadow: 0 2px 6px 0px hsla(0, 0%, 0%, 0.5);
    box-shadow: hsla(0, 0%, 23%, 1) 0 0 6px 0;
    // text-shadow: 0px 0px 2px 4px black !important;
  }

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

    svg g { cursor: pointer; }
  }

</style>
