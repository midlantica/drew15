<template>
  <div>
    <div class="flexContainer">
      <h1>Portfolio Extras</h1>

      <div class="flex">
        <a href="/img/portfolio/extras/serviceRequestV1.png" target="_BLANK">
          <img class="portThumbs" src="/img/portfolio/extras/service-request@2x.png" />
          <div class="text-center">
            <p>A Service Request page</p>
          </div>
        </a>

        <a href="/img/portfolio/extras/jpay_com_ui_email_v64.pdf" target="_BLANK">
          <img class="portThumbs" src="/img/portfolio/extras/jpay-email@2x.png" />
          <div class="text-center">
            <p>JPay.com multipage PDF</p>
          </div>
        </a>

        <a href="/img/portfolio/extras/JP4_ui_v4.pdf" target="_BLANK">
          <img class="portThumbs" src="/img/portfolio/extras/jp4-device-music@2x.png" />
          <div class="text-center">
            <p>Multi-page JPay Mobile interface pdf</p>
          </div>
        </a>

        <a href="/img/portfolio/extras/Bridge_Program.png" target="_BLANK">
          <img class="portThumbs" src="/img/portfolio/extras/bridge-analysis@2x.png" />
          <div class="text-center">
            <p>Bridge Admin Business Analysis</p>
          </div>
        </a>

        <a href="/img/portfolio/extras/Axure-Bridge-Info-TDOT.png" target="_BLANK">
          <img class="portThumbs" src="/img/portfolio/extras/axure-bridge@2x.png" />
          <div class="text-center">
            <p>Civic Inc - Axure Wireframe</p>
          </div>
        </a>

        <a href="/img/portfolio/extras/jpay_kiosk_emessages_v18.pdf" target="_BLANK">
          <img class="portThumbs" src="/img/portfolio/extras/jpay-kiosk-email@2x.png" />
          <div class="text-center">
            <p>JPay Kiosk Email screens</p>
          </div>
        </a>

        <a href="/img/portfolio/extras/Jpay_kiosk_music_v18b.pdf" target="_BLANK">
          <img class="portThumbs" src="/img/portfolio/extras/jpay-kiosk-music@2x.png" />
          <div class="text-center">
            <p>JPay Kiosk Music screens</p>
          </div>
        </a>

        <a href="/img/portfolio/extras/mlotto_app.pdf" target="_BLANK">
          <img class="portThumbs" src="/img/portfolio/extras/m-lotto-ui@2x.png" />
          <div class="text-center">
            <p>Mobile Lottery interface, interactive pdf</p>
          </div>
        </a>

        <a href="/img/portfolio/extras/JPay_Extras.pdf" target="_BLANK">
          <img class="portThumbs" src="/img/portfolio/extras/JPay_Extras@2x.png" />
          <div class="text-center">
            <p>
              JPay Extras: Web, Mobile, Corp ID, Print Ads, Newslatters,
              <br />Brochures, Package Design, PDF forms, Kiosk Design, Murals
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .text-center {
    text-align: center;
  }

  .flexContainer {
    width: 100%;
    margin: 0 auto 0em;
  }

  h1 {
    font-size: 2.2em;
    text-align: center;
    // width: 100%;
    margin: 0;
    padding: 0.5em 0;
    // grid-area: center-block;
    a {
      text-decoration: none;
    }
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    // align-content: center;
    justify-content: center;
    align-content: flex-start;
    // transition: flex-basis 1s ease-in-out;
    // margin-left: -1em;
    // margin-top: -1em;
    padding: 0 4em;
    // @media only screen and (max-width: 800px) {
    //   // width: 100%;
    // }

    a {
      flex-basis: auto;
      flex-grow: 1;
      box-sizing: border-box;
      text-align: center;
      align-items: center;
      text-decoration: none;
      margin: 0em 1em;
      // margin-top: 1em;
      // transition: flex-basis 1s ease-in-out;

      // &:last-child {
      // margin: 0 0 2em;
      // padding: 0;
      // border:2px solid red;
      // }

      // &:nth-child(even) {
      //   margin-right: 4em;
      //   // background: blue;
      //   // border: 10px red solid;
      // }

      // &:nth-child(odd) {
      //   margin-left: 4em;
      //   // background: green
      //   // border: 10px red solid;
      // }

      img.portThumbs {
        // width: calc(100% * (1/2));
        width: 400px;
        // width: 270px;
        height: auto;
        // height: 170px;
        margin: 1em auto 0;
        border: 2px solid $ivory;
        transition: opacity 1s ease-in-out;
        @include shadow;
        // @include clearfix;
        &:hover {
          border: 2px solid lighten($accent-red, 0);
          @include no-shadow;
        }
      }

      p {
        display: inline-block;
        text-align: center;
        margin: 0;
        margin-bottom: 1em;
        margin-top: 0.5em;
        padding-bottom: 0;
        font-size: 0.85em;
        border-bottom: 1px solid transparent;
        @include clearfix;
        &:hover {
          border-bottom: 1px solid lighten($accent-red, 30);
        }
      }
      &:hover p {
        color: purple;
        border-bottom: 1px solid lighten($accent-red, 30);
      }
      &:hover img {
        border: 2px solid lighten($accent-red, 0);
        @include no-shadow;
        cursor: pointer;
      }
    }
  }
</style>
