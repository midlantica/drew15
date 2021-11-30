<template>
  <div class="tooltip">
    <p>{{ tooltipText }}</p>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  let tooltipText = ref('tooltipText')
</script>

<style lang="scss" scoped>
  .tooltip {
    background: #d71d5b;
    font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
    box-shadow: 0 2px 20px 0px black;
    padding: .5rem 1.5rem;
    width: 30ch;
    border-radius: 1rem;
    //
    position: fixed;
    top: -3rem;

    @media (max-width: $breakThou) {
      // margin: 0rem 0 .5rem;
    }

    @media (max-width: $breakOne) {
      // margin: 0 0 .5rem;
    }

    @media (max-width: $breakFour) {
      // flex-direction: column;
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
  }

  // Other templates
  body.corp .tooltip {
    @include box-shadow(0px, 0px, 3px, -1px, hsla(0, 14%, 22%, 0.5));
    border-radius: 2px;
    font-family: 'Bodoni Moda', Times, serif !important;
  }

  body.punk .tooltip {
    //
    p {
      margin: .25rem auto;
    }
  }

  body.corp .tooltip {
    //
    p {
      font-family: 'Bodoni Moda', Times, serif !important;
      font-size: 1rem;
      letter-spacing: .001rem;
      line-height: 1.4rem;
      margin: 0;
      font-weight: 500;

      @media (max-width: $breakThou) {
        font-size: 1.15rem;
        line-height: 1.75rem;
      }

      @media (max-width: $breakTwo) {
        font-size: 1rem;
        line-height: 1.5rem;
      }

    }
  }

  body.modern .tooltip {
    width: 45%;
    margin: auto;
    padding: 1rem 1.5rem;

    p {
      font-family: Spartan, "Helvetica Neue", Helvetica, sans-serif !important;
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
