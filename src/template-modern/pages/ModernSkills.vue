<template>
  <div name="bounce" appear>
    <transition name="bounce2" appear>
      <Skills />
    </transition>
  </div>
</template>

<script setup lang="ts">
  import Skills from '../../components/Skills.vue'
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

    .icon {
      cursor: pointer !important;
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
    background: hsla(340, 100%, 50%, 0.25);
    // background: transparentize($ruby, .2);
    margin: auto;
    padding: .75rem 1.25rem;
    border: 1px solid $ruby;
    border-radius: .5rem;
    transition: all .15s ease-out;
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
      font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
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
      // transition: all .25s ease-out .25s;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .25s ease-out .25s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
