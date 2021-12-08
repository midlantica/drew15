<template>
  <nav>
    <div class='gridMast'>
      <div class='groovyCircle'>
        <router-link :to="{ name: 'ExtrasGroovy' }" class='drewhead jelloHorizontal' />
      </div>

      <router-link to='/Groovy' class='drewHarperSVG'>
        <mastDrew class='svgArt mastDrew' />
        <mastHarper class='svgArt mastHarper' />
      </router-link>

      <div class='jobDesc'>
        <h2>{{ store.copy.uiuxDesigner }} + {{ store.copy.vizDesigner }}</h2>
      </div>

      <div class='contact'>
        <p class='email'>
          <a :href='`mailto:`+`${store.copy.druEmail}`'>{{ store.copy.druEmail }}</a>
        </p>
        <p class='resume'>
          <a href='resume/drew_harper_resume_portfolio.pdf' target="_blank">PDF Resume</a>
        </p>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import mastDrew from './masthead/mastDrew.vue'
  import mastHarper from './masthead/mastHarper.vue'

  import { inject } from 'vue'

  const store: any = inject('store')
</script>

<style lang='scss' scoped>
  @import '@/template-groovy/assets/css/groovy-main.scss';

  nav {
    //
  }

  nav .gridMast {
    display: grid;
    grid-template-columns: 175px auto;
    grid-column-gap: 1em;
    margin-bottom: 1em;

    @media (max-width: $breakThou) {
      grid-template-columns: 175px auto auto;
    }

    @media (max-width: $breakOne) {
      grid-template-columns: 175px auto;
    }

    @media (max-width: $breakTwo) {
      grid-column-gap: 0.5em;
    }

    @media (max-width: $breakThree) {
      grid-template-columns: 117px auto;
    }

    @media (max-width: $breakFour) {
      //
    }

    .groovyCircle {
      width: 210px;
      height: 210px;
      box-shadow: 8px 6px 0px rgba(37, 37, 37, 0.25);
      border-radius: 10em;
      position: relative;
      top: -2em;
      left: -2.75em;
      z-index: 5;
      grid-row: 1 / 3;
      margin-right: -3em;
      margin-bottom: -5.3em;
      //
      background-image: radial-gradient(
        /* 0 - 25% */
          $groovy-aqua 0%,
        $groovy-aqua 35%,
        /* 25% - 50% */
          $groovy-yellow 35%,
        $groovy-yellow 47%,
        /* 50% - 75% */
          $groovy-orange 47%,
        $groovy-orange 59%,
        /* 75% - 100% */
          $groovy-red 59%,
        $groovy-red 100%
      );
      clip-path: polygon(21% 0%, 100% 0%, 110% 50%, 100% 100%, 21% 110%);

      @media (max-width: $breakThou) {
        margin-bottom: -4.4em;
        margin-right: -2em;
      }

      @media (max-width: $breakOne) {
        margin-bottom: -5.9em;
        margin-right: -2.8em;
      }

      @media (max-width: $breakThree) {
        width: 160px;
        height: 160px;
        top: -2.1em;
        left: -2.9em;
        box-shadow: 4px 5px 0px rgba(37, 37, 37, 0.25);
      }

      @media (max-width: $breakFour) {
        //
      }

      a.drewhead {
        background-image: url(/img/drew_mug_sepia.png);
        background-repeat: no-repeat;
        background-size: cover;
        width: 98px;
        height: 119px;
        display: block;
        position: relative;
        top: 2.8em;
        left: 3.5em;
        // background-position: 0px 0px;

        @media (max-width: $breakOne) {
          //
        }

        @media (max-width: $breakThree) {
          width: 76px;
          height: 90px;
          top: 2.7em;
          left: 3.2em;
        }

        @media (max-width: $breakFour) {
          width: 73px;
          height: 87px;
          top: 2.6em;
          left: 3.2em;
        }
      }
    }

    .drewHarperSVG {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-end;
      flex-grow: 1;

      @media (max-width: $breakThou) {
        grid-column: 2 / 3;
        grid-row: 1;
        align-self: self-end;
        margin-bottom: 0.3em;
        margin-top: 1em;
      }

      @media (max-width: $breakOne) {
        grid-row: 1;
        align-self: self-end;
      }

      @media (max-width: $breakTwo) {
        grid-row: 1;
        grid-column: 2 / 3;
      }

      @media (max-width: $breakThree) {
        grid-column: 2;
        grid-row: 1;
      }

      .svgArt {
        height: 3.1em;

        @media (max-width: $breakThou) {
          height: 6vw;
          align-self: center;
        }
        @media (max-width: $breakOne) {
          height: 7.9vw;
        }
        @media (max-width: $breakTwo) {
        }
        @media (max-width: $breakThree) {
          margin: 0.5em 0 0em;
          height: 9.5vw;
        }

        @media (max-width: $breakFour) {
          margin: 0.2em 0 0em;
        }
      }
      .mastDrew {
        margin-right: 1em;

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
          margin-right: 0.5em;
        }
      }

      .mastHarper {

        @media (max-width: $breakThou) {
          //
        }

        @media (max-width: $breakOne) {
          //
        }

        @media (max-width: $breakTwo) {
          //
        }
      }
    }
  }

  nav .gridMast .jobDesc {
    grid-column: 2 / 3;
    align-self: center;
    font-size: 1em;

    @media (max-width: $breakThou) {
      margin: 1em 0em;
      text-align: center;
      grid-column: 2;
      grid-row: 2;
      align-self: self-start;
    }

    @media (max-width: $breakOne) {
      margin: 0em 0em;
      grid-row: 2;
      grid-column: 2 / 3;
      align-self: center;
    }

    @media (max-width: $breakTwo) {
      //

      &:nth-child(1) {
        //
      }

      &:nth-child(2) {
        //
      }
    }

    h2 {
      margin: 0;
      font-family: $font-subhead;
      font-weight: 400;
      color: $ivory;
      text-transform: lowercase;
      font-size: 1.45em;
      line-height: 0.5em;
      letter-spacing: 0.025em;

      &:nth-child(1) {
        //
      }

      &:nth-child(2) {
        //
      }

      @media (max-width: $breakThou) {
        font-size: 2.85vw;
        line-height: 0;

        &:nth-child(1) {
          //
        }

        &:nth-child(2) {
          margin-left: 0.25em !important;
        }
      }

      @media (max-width: $breakOne) {
        font-size: 3.72vw;
        line-height: 1.1em;

        &:nth-child(1) {
          //
        }

        &:nth-child(2) {
          //
        }
      }

      @media (max-width: $breakTwo) {
        //
      }

      @media (max-width: $breakThree) {
        line-height: 1.5em;
        font-size: 4.4vw;
      }
    }
  }

  nav .gridMast .contact {
    grid-column: 2 / 3;
    align-self: start;
    font-size: 1em;

    @media (max-width: $breakThou) {
      text-align: start;
      grid-column: 3;
      grid-row: 1 / 3;
      -ms-flex-item-align: self-start;
      align-self: center;
    }

    @media (max-width: $breakOne) {
      grid-row: 3;
      grid-column: 2 / 3;
    }

    @media (max-width: $breakTwo) {
      align-content: flex-start;
      align-self: flex-start;
    }

    p {
      display: inline-block;
      font-family: $font-copy;
      font-size: 1.085em;
      letter-spacing: 0em;
      text-transform: none;
      line-height: 0.7em;
      text-align: center;
      letter-spacing: -0.01em;

      &:nth-child(1) {
        margin: 0;
      }

      &:nth-child(2) {
        margin: 0 0 0 0.5em;
      }

      a {
        color: $ivory;
        text-decoration: none;

        &:link {
          color: $ivory;
          text-decoration: none;
        }

        &:hover {
          color: lighten($accent, 10) !important;
        }
      }

      @media (max-width: $breakThou) {
        font-size: 1.79vw;
        line-height: 0.5em;
        text-align: center;
        font-size: 2vw;
        line-height: 1.4em;
        text-align: left;
        display: inline-block;
        float: left;
        clear: left;

        &:nth-child(1) {
          //
        }

        &:nth-child(2) {
          margin-left: 0;
        }
      }

      @media (max-width: $breakOne) {
        font-size: 2.785vw;
        text-align: center;
        margin: 0 auto;
        float: initial;
        clear: initial;

        &:nth-child(2) {
          margin-left: 0.5em !important;
        }
      }

      @media (max-width: $breakThree) {
        font-size: 3.6vw;
      }
    }
  }
</style>
