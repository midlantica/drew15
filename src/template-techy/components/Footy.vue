<template>
  <div>
    <p>“Everything should be made as simple as possible, but not simpler.” – Albert&nbsp;Einstein</p>
  </div>
</template>

<style lang='scss' scoped>
  @import '@/template-techy/assets/css/techy-main.scss';

  div {
    // height: 3em;
    background: $mango;

    p {
      font-size: 1.2em;
      color: $blueTech;
      text-align: center;
      padding: .5em;
      letter-spacing: 0.02em;

      @media (max-width: $breakThou) {
        font-size: 1.25em;
      }

      @media (max-width: $breakOne) {
        font-size: 1.2em;
      }

      @media (max-width: $breakTwo) {
        font-size: 1em;
      }

      @media (max-width: $breakThree) {
        font-size: .85em;
        line-height: 1.25em;
      }
    }
  }

</style>
