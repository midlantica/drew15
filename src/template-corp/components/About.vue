<template>
  <div class="about">
    <img class="flag">
    <p>I’m half-English/half-American, worked in Advertising most my life, switched to web in late ’90s. Travelled the world, enjoy reading history, love NFL, Rugby, Footy.</p>
  </div>
</template>

<style lang="scss" scoped>
  // @import '@/assets/css/main.scss';
  @import '@/template-corp/assets/css/corp-main.scss';

  .about {
    margin-bottom: .75em;
    // background-image: url('../assets/img/bg/bg_bag_y.png');
    // background-repeat: repeat;
    // width: calc(100%);
    // width: 500px;
    // @include shadow;
    // border-shadow: background: #FFFFFF;
    box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.29);
    background: white;
    @include clearfix;
    // @include font-smoothing(off);
    // margin-bottom: 1em;

    .flag {
      width: 124px;
      height: 74px;
      margin: 1em ;
      float: left;
      clear: left;
      background: url('../assets/img/british_american_flag.png');
      background-repeat: none;
      background-size: cover;
    }

    p {
      font-size: 0.8em;
      font-weight: 400;
      color: lighten($grey, 15);
      margin: 1em 1em 0.7em 8.5em;
      padding: 0.9em 0 0 0;
      // @include font-smoothing(on);
    }
  }

</style>
