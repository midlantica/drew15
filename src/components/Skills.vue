<template>
  <div class="skillsGrid">
    <Popper trigger="hover">
      <iconUiux class="icon uiux"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ uiux }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconHtml5 class="icon html5"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ html5 }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconCss3 class="icon css3"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ css3 }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconJs class="icon js"
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
      <iconSketch class="icon sketch"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ sketch }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconSass class="icon sass"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ sass }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconVue class="icon vue"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ vue }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconSvg class="icon svg"
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
      <iconVSCode class="icon vsCode"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ vsCode }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconFigma class="icon figma"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ figma }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconNuxt class="icon nuxt"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }"
      />
      <template #content class="popper">
        {{ nuxt }}
      </template>
    </Popper>
    <Popper trigger="hover">
      <iconChelsea class="icon chelsea"
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

  import iconUiux from '@/components/Icons/iconUiux.vue'
  import iconHtml5 from '@/components/Icons/iconHtml5.vue'
  import iconCss3 from '@/components/Icons/iconCss3.vue'
  import iconJs from '@/components/Icons/iconJs.vue'
  import iconSketch from '@/components/Icons/iconSketch.vue'
  import iconSass from '@/components/Icons/iconSass.vue'
  import iconVue from '@/components/Icons/iconVue.vue'
  import iconSvg from '@/components/Icons/iconSvg.vue'
  import iconVSCode from '@/components/Icons/iconVscode.vue'
  import iconFigma from '@/components/Icons/iconFigma.vue'
  import iconNuxt from '@/components/Icons/iconNuxt.vue'
  import iconChelsea from '@/components/Icons/iconChelsea.vue'

  const hover = ref(false)
  // const(false)
  // const placemNt = ref('top')
  // const offsetY = ref(25)
  // const arrow = ref(true)
  // const openDelay = ref(0)
  // const interactive = ref(true)
  const uiux = ref(`UX Design is my first love. Humility before the User. Crack the flow!`),
        html5 = ref(`HTML5: the bones of the Internet. As few divs and spans as possible if you please.`),
        css3 = ref(`CSS3: Engineers just love CSS haha! Let me do that for you 🙂 I enjoy its declarative cascading infuriating novelty.`),
        js = ref(`JavaScript: I design, do all my HTML & CSS, I'm still mastering JS. Continuous learning, Love me some Vue 💚, like this site`),
        sass = ref(`SASS has made CSS so much more fun to use. CSS's new --vars make CSS more robust, but there's a long way to go.`),
        vue = ref(`Vue.js is my favorite JS framework, a great balance of Angular's ease and React's abilities.`),
        nuxt = ref(`The Next framework for Vue: SSR, routes by dir, SEO; it's jam-packed with crunchy goodness. Digging Gridsome.js too.`),
        vsCode = ref(`VS Code: Used to be into Sublime Text but I'm all VS Code these days. MS better late than never.`),
        sketch = ref(`Sketch used to be the king of UX prototyping, now there are many alternatives.`),
        figma = ref(`Figma is the new king of UX prototyping. It ain't Illustrator but UX rarely requires such sophistication.`),
        svg = ref(`SVG: Vector is best because it scales and rasters don't, and it's editable, but it still cannot replace a photograph.`),
        chelsea = ref(`Blue is the color! Chelsea is the name! We're all together... and We're the only team in London with the European Cup! x2! 💙 `)
</script>

<style lang="scss" scoped>
  @import '@/template-modern/assets/css/modern-main.scss';

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
        darken($ruby, 0),
        darken($ruby, 7)
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
        darken($ruby, 0),
        darken($ruby, 7)
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
    //     darken($ruby, 0),
    //     darken($ruby, 7)
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

      &:hover {
        // background: red !important;
        animation: shimmy .25s !important;
        // animation-duration: .25s;
      }
    }

    svg g { cursor: pointer; }
  }

  body.modern .skillsGrid {
    width: 70%;
    grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
    justify-content: center;
    margin: 1rem auto;

    @media (min-width: 770px) {
      width: 60%;
      // grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
    }

    @media (max-width: 700px) {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      width: 80%;
    }

    svg {
      width: 100px;
      margin: 0rem auto .75rem;

      &:hover {
        // background: hsla(0, 100%, 25%, 0.25);
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

    :deep(.popper) {
      // background: #932213 !important;
      background: linear-gradient(180deg,
        darken(#932213, 0),
        darken(#932213, 7)
      ) !important;
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

    :deep(.popper) {
      // background: #932213 !important;
      background: linear-gradient(180deg,
        darken(#423BA0, 0),
        darken(#423BA0, 7)
      ) !important;
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

    :deep(.popper) {
      // background: #932213 !important;
      background: linear-gradient(180deg,
        darken( #ff1a22, 0),
        darken( #ff1a22, 7)
      ) !important;
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

    :deep(.popper) {
      // background: #932213 !important;
      background: linear-gradient(180deg,
        darken(#b100a7, 0),
        darken(#b100a7, 7)
      ) !important;
      border: 2px dashed white !important;
    }

  }

</style>
