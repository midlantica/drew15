<template>
  <div class="footer">
    <div class="car"></div>
    <div class="starWars"></div>
    
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  @import '@/template-bourbon/assets/css/bourbon-main.scss';
  
  $breakThou: 1024px;
  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 530px;

  .footer {
    //

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
      position: relative;
      top: -0.6em;
      left: 1em;
    }

    .starWars {
      background: url(/img/star-wars-transfers.png);
      background-repeat: no-repeat;
      background-size: cover;
      width: 148px;
      height: 177px;
      display: block;
      position: relative;
      top: -182px;
      right: 0em;
      float: right;
    }


  }

</style>
