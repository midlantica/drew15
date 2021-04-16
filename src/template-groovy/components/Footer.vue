<template>
  <div class='footer'>
    <div class='car'></div>
    <div class='starWars'></div>
  </div>
</template>

<style lang='scss' scoped>
  @import '@/template-groovy/assets/css/groovy-main.scss';

  $breakThou: 1024px;
  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 530px;

  .footer {
    position: relative;

    @media (max-width: $breakThou) {
      //
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      //
    }

    @media (max-width: $breakThree) {
      //
    }

    .car {
      background: url(/img/alfa-carabo.png);
      background-repeat: no-repeat;
      background-size: cover;
      width: 226px;
      height: 165px;
      display: block;
      position: absolute;
      top: -0.3em;
      left: 0.7em;

      @media (max-width: $breakThree) {
        width: 186px;
        height: 135px;
        top: 1em;
        left: -1em;
      }

      // IPHONE 6,7,8
      @media only screen
      and (min-device-width: 375px)
      and (max-device-width: 667px)
      {
        width: 186px;
        height: 135px;
        top: 1em;
        left: -1em;
      }
    }

    .starWars {
      background: url(/img/star-wars-transfers.png);
      background-repeat: no-repeat;
      background-size: cover;
      width: 148px;
      height: 177px;
      display: block;
      position: absolute;
      top: -17px;
      right: 0px;

      @media (max-width: $breakThree) {
        width: 120px;
        height: 177px;
      }

    }
  }

</style>
