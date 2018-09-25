<template>
  <div class="tabs">
    <!-- <a href="bourbon" class="bourbon">Bourbon</a> -->
    <router-link to="Bourbon" class="bourbon">Bourbon</router-link>
    <router-link to="Groovy" class="groovy">Groovy</router-link>
    <router-link to="Techy" class="techy">Techy</router-link>
    <router-link to="Corp" class="corp">Corp</router-link>
    <router-link to="Punk" class="punk">Punk</router-link>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/css/main.scss';

  .tabs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    font-size: .7em;
    background: #333;

    a {
      flex-grow: 1;
      color: transparentize($ivory, .25);
      padding: .65em 0;
      border-right: 1px solid transparentize($ivory, .75);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.2em;

      &:last-child {
        border-right: none;
      }

      &:hover {
        color: orange;
      }

    }
  }

  body.bourbon > .wrapper > div > a.bourbon {
    color: transparentize($ivory, .1);
    background: darken($orange, 30);
  }

  body.groovy > .wrapper > div > a.groovy {
    color: transparentize($ivory, .1);
    background: darken(#ff3940, 30);
    // background: -webkit-linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
    // background: -o-linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
    // background: -moz-linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
    // background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
  }

  body.techy > .wrapper > div > a.techy {
    color: transparentize($ivory, .1);
    background: darken(#02528a, 10);
  }

  body.corp > .wrapper > div > a.corp {
    color: transparentize($ivory, .1);
    background: darken(#02528a, 0);
  }

  body.punk > .wrapper > div > a.punk {
    color: transparentize($ivory, .1);
    background: darken(#ff4bf5, 30);
  }

  body.samurai > .wrapper > div > a.samurai {
    color: transparentize($ivory, .1);
    background: darken(#922212, 30);
  }

  body > .wrapper > div {
    //
    > a.bourbon {
      //
      &:hover {
        background: darken($orange, 30);
      }
    }
    > a.groovy {
      //
      &:hover {
        background: darken(#ff3940, 30);
      }
    }
    > a.techy {
      //
      &:hover {
        background: darken(#02528a, 10);
      }
    }
    > a.corp {
      //
      &:hover {
        background: darken(#02528a, 0);
      }
    }
    > a.punk {
      //
      &:hover {
        background: darken(#ff4bf5, 30);
      }
    }
    > a.samurai {
      //
      &:hover {
        background: darken(#922212, 30);
      }
    }
  }


</style>
