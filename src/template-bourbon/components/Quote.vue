<template>
  <transition name='bounce7' appear>
    <div class='quoteBlock'>
      <transition-group name='zoomQuote' tag='quotePad'>
        <div class='quotePad'>
          <p class='fadeTexter'>&ldquo;{{ quotes.copy[slideNum].quote }}&rdquo;</p>
          <cite class='fadeTexter'>&ndash; {{ quotes.copy[slideNum].author }}</cite>
      </div>
      </transition-group>
    </div>
  </transition>
</template>

<script lang="ts" setup>
  import { inject, ref, onMounted } from 'vue'
  const quotes: any = inject('quotes')

  // let quotesLength: any = ref(quotes.length.value)
  // const quoteViz = ref(false)
  let slideNum: any = ref(1)
  let rolls: any = ref([])

  function roll() {
    setInterval(() => {
      slideNum.value = Math.floor(Math.random() * Math.floor(24)) + 1
      rolls.value.unshift(slideNum)
      // quoteViz.value = true
    }, 7500)
    // quoteViz.value = false
  }

  onMounted(() => {
    console.log(`She's a-runnin'!`)
    roll()
  })

</script>

<style lang='scss' scoped>
  @import '@/template-bourbon/assets/css/bourbon-main.scss';

  /* Zoom animation */
  .zoomQuote-enter-active,
  .zoomQuote-leave-active {
    transition: transform 300ms ease;
  }
  .zoomQuote-enter-from,
  .zoomQuote-leave-to {
    transform: scale(0.9);
  }

  .fadeTexter-enter-active {
    transition: all 0.3s ease-out;
    opacity: 1;
  }

  .fadeTexter-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    opacity: 1;
  }

  .fadeTexter-enter-from,
  .fadeTexter-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }

  .quoteBlock {
    background: darken($accent-red, 10);
    min-height: 5.5rem;
    max-height: 5.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75em 2em .5em;
    text-align: center;
    border-radius: 2px;
    @include box-shadow(0px, 1px, 2px, 0px, hsla(0, 0%, 0%, 0.5));

    @media only screen and (min-device-width: 375px) and (max-device-width: 660px) and (-webkit-min-device-pixel-ratio: 2) {
      clear: both;
      margin-top: 0.5em;
      margin-bottom: 0.5em;
      grid-row-gap: 0em;
    }

    // &:hover {
    //   cursor: pointer;
    // }

    // @keyframes fadeTexter {
    //   from { opacity: 0;}
    //   to   { opacity: 1;}
    // }

    .quotePad {
      text-align: center !important;
      // color: white;
    }

    .quotePad a {
      color: white !important;
      cursor: pointer;

      &:hover {
        color: yellow !important;
      }
    }

    // @keyframes moveToRight {
    //   0% {
    //     transform: translateX(0px);
    //   }
    //   100% {
    //     transform: translateX(300px);
    //   }
    // }

    p {
      font-size: 0.9em;
      color: $ivory !important;
      letter-spacing: 0.05em;
      line-height: 1.5em;
      text-align: center;
      //
      animation: fadeTexter 2s forwards;
      //
      // transition: 1ms ease-in-out all;
      // animation: moveToRight 10s ease-in-out;
      // animation-delay: 1000ms;
      // transition-property: width;
      // transition-duration: 1s;
      // transition-timing-function: linear;
      // transition-delay: 1s;
      // transform: scale(1.1);

      @media only screen and (min-device-width: 700px) and (max-device-width: $breakThou) {
        font-size: 0.9em;
      }

      @media only screen and (min-device-width: 0px) and (max-device-width: 700px) {
        font-size: 0.9em;
      }
    }

    cite {
      font-family: $font-copy;
      font-size: 0.85em;
      color: $ivory;
      font-style: italic;
      // margin: 0 4em 0 0;
      display: block;
      text-align: right;
      letter-spacing: 0.0em;

      @media only screen and (min-device-width: 700px) and (max-device-width: $breakThou) {
        // font-size: 1.5vw;
        font-size: 0.9em;
      }

      @media only screen and (min-device-width: 0px) and (max-device-width: 700px) {
        // font-size: 3vw;
        font-size: 0.8em;
      }
    }
  }
</style>
