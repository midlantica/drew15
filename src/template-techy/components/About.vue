<template>
  <div class="about">
    <!-- <div class="flag"></div> -->
    <img class="flag" src="../assets/img/british_american_flag.png" alt="">
    <p>I’m half-English/half-American, worked in Advertising most my life, switched to web in late ’90s. Travelled the world, enjoy reading history, love NFL, Rugby, Footy.</p>
  </div>
</template>

<style lang="scss" scoped>
  // @import '@/assets/css/main.scss';
  @import '@/template-techy/assets/css/techy-main.scss';

  $breakOne: 840px;
  $breakTwo: 630px;
  $breakThree: 530px;

  .about {
    background: lighten($mango, 30);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    padding: .5em 1em .5em .75em;
    // margin-top: -1em;
    
    @media (max-width: $breakOne) {
      margin-top: initial;
    }

    @media (max-width: $breakTwo) {
      margin-top: initial;
    }

    .flag {
      display: block;
      // margin: 1em ;
      background: url('../assets/img/british_american_flag.png');
      background-repeat: no-repeat;
      background-size: contain;
      width: 315px;
      // max-width: 315px;
      height: 60px;
      border: none;
      flex-grow: 0;
      margin: 1em 1em 1em .5em;
    }

    p {
      color: lighten($grey, 15);
      font-size: 0.95em;
      line-height: 1.4em;
      font-weight: 500;
      letter-spacing: 0.05em;
      // flex-grow: 1;
    }
  }

</style>
