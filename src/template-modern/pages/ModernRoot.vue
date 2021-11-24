<template>
  <transition name="fade" appear class="modBacker">
    <div>

      <transition name="topDown" appear>
        <header>
          <Navvy />
        </header>
      </transition>

      <transition name="bounce2" appear>
        <ModernTabs />
      </transition>

      <transition name="bounce3" appear>
        <main class='mainGrid'>

          <router-view v-slot="{ Component }">
            <component :is="Component" />
          </router-view>

        </main>
      </transition>

    </div>
  </transition>
</template>

<script setup lang="ts">
  import Navvy from '../components/Navvy.vue'
  import ModernTabs from '../components/ModernTabs.vue'
</script>

<style lang='scss' scoped>
  @import '@/template-modern/assets/css/modern-main.scss';

  .modBacker {
    // background: hsl(282, 10%, 10%);
    // height: 770px;
    // background-repeat: no-repeat;
    // background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    // transform: scaleX(-1);

    @media (max-width: 900px) {
      // background-size: 130vh !important;
      // height: calc(100vh - 30px);
    }

    @media (max-width: 600px) {
      // height: calc(100vh - 30px);
      // background-size: contain;
    }

    @media (max-width: 300px) {
      // height: calc(100vh - 30px);
      // background-size: contain;
    }
  }

  .mainGrid {
    display: grid;
    grid-template-columns: 1fr;
    // grid-gap: 1em;
    // margin: 0em 0 1em;
    gap: .5rem;
    width: 90%;

    @media (max-width: $breakThou) {
      }

    @media (max-width: $breakOne) {
      width: 90%;
      margin: 0rem;
    }

    @media (max-width: $breakTwo) {
      // width:   80%;
    }
  }

  .slides {
    grid-column: 1;
    grid-row: 1;
    align-content: center;
    max-width: 500px;
    width: 100%;
    justify-self: center;

    @media (max-width: $breakThou) {
      // grid-column: 1 / 3;
      // grid-row: 3;
    }

    @media (max-width: $breakOne) {
      // grid-column: 1 / 3;
      // grid-row: 3;
    }

    @media (max-width: $breakTwo) {
      // grid-column: 1 / 3;
      // grid-row: 3;
    }
  }

  .skillsGrid {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
    justify-self: center !important;
    justify-content: center;
    width: 35vw !important;
    grid-template-columns: repeat(6, minmax(88px, 1fr)) !important;
    width: initial !important;

    @media (max-width: 300000000rem) {
      grid-row: 2;
      width: 70vw !important;
      // grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
      grid-template-columns: repeat(4, minmax(88px, 1fr)) !important;
    }

    @media (max-width: $breakOne) {
      grid-row: 2;
    }

    @media (max-width: $breakTwo) {
      grid-row: 2;
    }
  }



</style>
