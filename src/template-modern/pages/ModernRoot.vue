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

          <router-view></router-view>

        </main>
      </transition>

      <!-- <footer>
        <NavvyEmpty />
      </footer> -->

    </div>
  </transition>
</template>

<script>
  import Navvy from '../components/Navvy'
  import ModernTabs from '../components/ModernTabs'
  // import NavvyEmpty from '../components/NavvyEmpty'

  export default {
    // layout: 'default',
    name: 'ModernRoot',
    components: {
      Navvy,
      // NavvyEmpty,
      ModernTabs
    },
    data() {
      return {
        show: true
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;600;900&display=swap');
  @import '@/template-modern/assets/css/modern-main.scss';

  .modBacker {
    background: hsl(282, 10%, 10%);
    height: 770px;
    background-image: url(../assets/img/bg/bg_bak_dk4.jpeg);
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    // transform: scaleX(-1);
  }

  .mainGrid {
    display: grid;
    grid-template-columns: 1fr;
    // grid-gap: 1em;
    margin: 0em 0 1em;
    width: 90%;

    @media (max-width: $breakThou) {
      // grid-template-columns: 1fr;
      // grid-gap: 0em;
      // grid-row-gap: 1em;
    }

    @media (max-width: $breakOne) {
      //
    }

    @media (max-width: $breakTwo) {
      //
    }
  }

  .slides {
    grid-column: 1;
    grid-row: 1;
    align-content: center;
    max-width: 500px;
    width: 85%;
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
