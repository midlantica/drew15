<template>
  <div class='skillsGrid'>
    <Popper trigger="hover">
      <iconUiuxBlue class="icon uiux"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ uiux }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconHtml5Blue class="icon html5"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ html5 }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconCss3Blue class="icon css3"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ css3 }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconJsBlue class="icon js"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ js }}
      </template>
    </Popper>
    <!--  -->
    <Popper trigger="hover">
      <iconSketchBlue class="icon sketch"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ sketch }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconSassBlue class="icon sass"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ sass }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconVueBlue class="icon vue"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ vue }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconSvgBlue class="icon svg"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ svg }}
      </template>
    </Popper>
    <!--  -->
    <Popper trigger="hover">
      <iconVSCodeBlue class="icon vsCode"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ vsCode }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconFigmaBlue class="icon figma"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ figma }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconNuxtBlue class="icon nuxt"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ nuxt }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconChelseaBlue class="icon chelsea"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ chelsea }}
      </template>
    </Popper>
    </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Popper from 'vue3-popper'

  import iconUiuxBlue from '@/template-corp/components/Icons/iconUiux.vue'
  import iconHtml5Blue from '@/template-corp/components/Icons/iconHtml5.vue'
  import iconCss3Blue from '@/template-corp/components/Icons/iconCss3.vue'
  import iconJsBlue from '@/template-corp/components/Icons/iconJs.vue'
  import iconSketchBlue from '@/template-corp/components/Icons/iconSketch.vue'
  import iconSassBlue from '@/template-corp/components/Icons/iconSass.vue'
  import iconVueBlue from '@/template-corp/components/Icons/iconVue.vue'
  import iconSvgBlue from '@/template-corp/components/Icons/iconSvg.vue'
  import iconVSCodeBlue from '@/template-corp/components/Icons/iconVscode.vue'
  import iconFigmaBlue from '@/template-corp/components/Icons/iconFigma.vue'
  import iconNuxtBlue from '@/template-corp/components/Icons/iconNuxt.vue'
  import iconChelseaBlue from '@/template-corp/components/Icons/iconChelsea.vue'

  const hover = ref(false)
  // const placement = ref('top')
  // const offsetY = ref(25)
  // const arrow = ref(true)
  // const openDelay = ref(0)
  // const interactive = ref(true)
  const uiux = ref(`UX Design is my first love. Humility before the User. Crack the flow!`)
  const html5 = ref(`HTML5: the bones of the Internet. As few divs and spans as possible if you please.`)
  const css3 = ref(`CSS3: Engineers just love CSS haha! Let me do that for you 🙂 I enjoy its declarative cascading infuriating novelty.`)
  const js = ref(`JavaScript: I design, do all my HTML & CSS, I'm still mastering JS. Continuous learning, Love me some Vue 💚, like this site`)
  const sass = ref(`SASS has made CSS so much more fun to use. CSS's new --vars make CSS more robust, but there's a long way to go.`)
  const vue = ref(`Vue.js is my favorite JS framework, a great balance of Angular's ease and React's abilities.`)
  const nuxt = ref(`The Next framework for Vue: SSR, routes by dir, SEO; it's jam-packed with crunchy goodness. Digging Gridsome.js too.`)
  const vsCode = ref(`VS Code: Used to be into Sublime Text but I'm all VS Code these days. MS better late than never.`)
  const sketch = ref(`Sketch used to be the king of UX prototyping, now there are many alternatives.`)
  const figma = ref(`Figma is the new king of UX prototyping. It ain't Illustrator but UX rarely requires such sophistication.`)
  const svg = ref(`SVG: Vector is best because it scales and rasters don't, and it's editable, but it still cannot replace a photograph.`)
  const chelsea = ref(`Blue is the color! Chelsea is the name! We're all together... and We're the only team in London with the European Cup! x2! 💙 `)
</script>

<style lang='scss' scoped>
  @import '@/template-corp/assets/css/corp-main.scss';

  // .active:hover {
  //   // background: red;
  //   box-shadow: 0px 0px 10px red;
  // }

  :deep(.popper) {
    color: white !important;
    // width: 30ch;
    font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 500;
    margin: auto !important;
    padding: .5rem 1rem !important;
    font-size: 0.7rem;
    line-height: 1.8;
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
    max-height: fit-content !important;
    min-height: fit-content !important;
  }

  :deep(.popper #arrow::before) {
    // background: red !important;
  }

  .popper {
    width: auto;
    text-align: center;
    display: inline-block;
    position: absolute;
    z-index: 200000;
    max-height: fit-content !important;
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

    svg {
      width: 88px;

      &:hover {
        // background: red !important;
        animation: shimmy .25s !important;
        // animation-duration: .25s;
      }
    }

    :deep(.popper) {
      // background: #932213 !important;
      background: linear-gradient(180deg,
        darken( #01487f, 0),
        darken( #01345c, 7)
      ) !important;
    }
  }

</style>
