<template>
  <div class="tabs">
    <router-link :to="{ name: 'Bourbon' }" class="bourbon">Bourbon</router-link>
    <router-link :to="{ name: 'Groovy' }" class="groovy">Groovy</router-link>
    <router-link :to="{ name: 'Techy' }" class="techy">Techy</router-link>
    <router-link :to="{ name: 'Corp' }" class="corp">Corp</router-link>
    <router-link :to="{ name: 'Punk' }" class="punk">Punk</router-link>
  </div>
</template>

<style lang="scss" scoped>

  .tabs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    font-size: 0.7em;
    // background: purple;
    // background: #333;
    position: relative;
    top: 0px;
    left: 0px;
    z-index: 10;
    width: 100.1%;
    font-family: Helvetica,Arial,sans-serif;
    // display: relative;

    a {
      flex-grow: 1;
      color: transparentize($ivory, 0.25);
      padding: 0.65em 0;
      border-right: 1px solid transparentize($ivory, 0.75);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.1em;

      &:last-child {
        border-right: none;
      }

      &:hover {
        color: transparentize($ivory, 0);
        transition: 0.2s ease-in;
      }
    }
  }

  body.bourbon .tabs > a.bourbon {
    color: transparentize($ivory, 0.1);
    background: darken($orange, 30);
    text-shadow: 0px 0px 1px black;
    box-shadow: 0px -2px 6px black inset;
  }

  body.groovy .tabs > a.groovy {
    color: transparentize($ivory, 0);
    text-shadow: 0px 0px 1px black;
    background: darken(#ff3940, 30);
    box-shadow: 0px -2px 6px black inset;
    // background: linear-gradient(
    //   // 0 - 10%
    //   $groovy-aqua-dk 0%,
    //   $groovy-aqua-dk 20%,
    //   // 10% - 50%
    //   $groovy-yellow-dk 20%,
    //   $groovy-yellow-dk 50%,
    //   // 50% - 75%
    //   $groovy-orange-dk 50%,
    //   $groovy-orange-dk 75%,
    //   // 75% - 100%
    //   $groovy-red-dk 75%,
    //   $groovy-red-dk 100%
    // );

    &:hover {
      color: $black;
      text-shadow: 0px 0px 1px black;
      // border-bottom: 1px solid $ivory;
      background: linear-gradient(
        // 0 - 10%
          $groovy-aqua 0%,
        $groovy-aqua 20%,
        // 10% - 50%
          $groovy-yellow 20%,
        $groovy-yellow 50%,
        // 50% - 75%
          $groovy-orange 50%,
        $groovy-orange 75%,
        // 75% - 100%
          $groovy-red 75%,
        $groovy-red 100%
      );
    }
  }

  body.techy .tabs > a.techy {
    color: transparentize($ivory, 0.1);
    background: darken(#02528a, 10);
    text-shadow: 0px 0px 1px black;
    box-shadow: 0px -2px 6px black inset;
  }

  body.corp .tabs > a.corp {
    color: transparentize($ivory, 0.1);
    background: darken(#02528a, 0);
    text-shadow: 0px 0px 1px black;
    box-shadow: 0px -2px 6px black inset;
  }

  body.punk .tabs > a.punk {
    color: transparentize($ivory, 0.1);
    background: darken(#ff4bf5, 30);
    box-shadow: 0px -2px 6px black inset;
  }

  body.samurai .tabs > a.samurai {
    color: transparentize($ivory, 0.1);
    background: darken(#922212, 30);
    text-shadow: 0px 0px 1px black;
    box-shadow: 0px -2px 6px black inset;
  }

  body .tabs {
    //
    > a.bourbon {
      background: #333;
      text-shadow: 0px 0px 1px black;
      &:hover {
        background: darken($orange, 30);
      }
    }
    > a.groovy {
      background: #333;
      &:hover {
        color: $black;
        // text-shadow: 0px 0px 1px black;
        background: darken(#ff3940, 30);
        background: linear-gradient(
          // 0 - 10%
            $groovy-aqua-dk 0%,
          $groovy-aqua-dk 20%,
          // 10% - 50%
            $groovy-yellow-dk 20%,
          $groovy-yellow-dk 50%,
          // 50% - 75%
            $groovy-orange-dk 50%,
          $groovy-orange-dk 75%,
          // 75% - 100%
            $groovy-red-dk 75%,
          $groovy-red-dk 100%
        );
      }
    }
    > a.techy {
      background: #333;
      text-shadow: 0px 0px 1px black;
      &:hover {
        background: darken(#02528a, 10);
      }
    }
    > a.corp {
      background: #333;
      text-shadow: 0px 0px 1px black;
      &:hover {
        background: darken(#02528a, 0);
      }
    }
    > a.punk {
      background: #333;
      text-shadow: 0px 0px 1px black;
      &:hover {
        background: darken(#ff4bf5, 30);
      }
    }
    > a.samurai {
      background: #333;
      text-shadow: 0px 0px 1px black;
      &:hover {
        background: darken(#922212, 30);
      }
    }
  }
</style>
