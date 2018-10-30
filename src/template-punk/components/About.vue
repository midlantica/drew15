<template>
  <div class="blackBg">
    <div class="about">
      <img class="flag">
      <p>I’m half-English/half-American, worked in Advertising most my life, switched to web in late ’90s. Travelled the world, enjoy reading history, love NFL, Rugby, Footy.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  // @import '@/assets/css/main.scss';
  @import '@/template-bourbon/assets/css/bourbon-main.scss';
  
  .blackBg {
    // background: black;
    transform: rotate(1.5deg);
    background: url(/img/bg/check-patt.png) repeat;
    background-size: 40px 40px;

    .about {
      transform: rotate(-1deg);
      margin-bottom: .75em;
      background: transparentize(magenta, .25);
      // background-image: url('../assets/img/bg/bg_bag_y.png');
      // background-repeat: repeat;
      // width: calc(100%);
      // width: 500px;
      // @include shadow;
      @include clearfix;
      // @include font-smoothing(off);

      .flag {
        width: 104px;
        height: 59px;
        margin: 1em ;
        float: left;
        clear: left;
        background: url(../assets/img/british_american_flag.png);
        background-repeat: none;
        background-size: cover;
      }

      p {
        color: white;
        font-size: .8em;
        font-weight: bold;
        margin: 1em 1em 0.7em 10.7em;
        padding: 0.9em 0 0 0;
        letter-spacing: .075em;
        text-shadow: 1px 1px 0px black;
        // @include font-smoothing(on);
      }
    }
  }

</style>
