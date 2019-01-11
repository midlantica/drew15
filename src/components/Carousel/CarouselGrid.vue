<template>
  <div class="miniGallery">

    <a @click.stop="selectedView = 'Uiux'">
      <div class="box">
        <p>UI/UX Design</p>
      </div>
    </a>

    <a @click.stop="selectedView = 'Mobile'">
      <div class="box">
        <p>Mobile</p>
      </div>
    </a>

    <a @click.stop="selectedView = 'Kiosk'">
      <div class="box">
        <p>Kiosk</p>
      </div>
    </a>

    <a @click.stop="selectedView = 'Graphics'">
      <div class="box">
        <p>Graphics</p>
      </div>
    </a>

    <a @click.stop="selectedView = 'Print'">
      <div class="box">
        <p>Print</p>
      </div>
    </a>

    <a @click.stop="selectedView = 'Misc'">
      <div class="box">
        <p>Misc.</p>
      </div>
    </a>

  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  @import '@/template-bourbon/assets/css/bourbon-main.scss';

  .projectBox {
    padding: 0.2em .3em;
    background: lighten(lightgrey, 10);
    box-shadow: 0px 2px 2px -3px black;
    border-radius: .25em;
    @include clearfix;
  }

  .projectHead {
    text-align: center;
    text-transform: uppercase;

    a {
      cursor: pointer;
    }
  }

  .miniGallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    //
    // background: lighten(lightgrey, 10);

    a {
      flex-grow: 1;
      width: 125px;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: $ivory;
        text-decoration: none;

        p {
          color: $black !important;

          &:hover {
            color: $black !important;
          }
        }
      }

      .box {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        box-shadow: 1px 1px 0 -1px rgba(0,0,0,0.50);
        margin: .25em .25em;
        height: 17vh;
        box-shadow: 0px 2px 2px -3px black;
        background: lighten(lightgrey, 15);

        @media (max-width: $breakThou) {
          height: 10vh;
        }

        &:hover {
          background: lighten(grey, 25);
          transition-duration: .5s;
          box-shadow: 0px 2px 2px -1px grey;
        }

        p {
          width: 100%;
          font-size: 1em;
          text-transform: uppercase;
          color: $grey;
          text-align: center;
          letter-spacing: 0.05em;

          &:hover {
            color: $ivory;
          }
        }
      }
    }

  }

</style>

