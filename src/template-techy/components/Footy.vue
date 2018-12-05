<template>
  <div>
    <p>“Everything should be made as simple as possible, but not simpler.” – Albert&nbsp;Einstein</p>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  @import '@/template-techy/assets/css/techy-main.scss';

  div {
    // height: 3em;
    background: $mango;

    p {
      font-size: 1.4vw;
      color: $blueTech;
      text-align: center;
      padding: .5em;
      letter-spacing: 0.02em;

      @media (max-width: $breakThou) {
        font-size: 2vw;
      }

      @media (max-width: $breakOne) {
        font-size: 2.4vw;
      }

      @media (max-width: $breakTwo) {
        font-size: 3vw;
      }

      @media (max-width: $breakThree) {
        font-size: 4.2vw;
        line-height: 1.4em;
      }
    }
  }

</style>
