<template>
  <transition name="bounce3" appear>
    <div class="extrasWrapper flexRowWrap w100 marAuto">
      <h1 class="marAuto">Portfolio Extras</h1>

      <div class="flexxy flexRowWrap center-flex align-content-start">

        <a href="/img/portfolio/extras/zander.png" target="_BLANK">
          <img class="portThumbs" src="/img/portfolio/extras/zander_sm@2x.png" />
          <div class="text-center">
            <p>Zander Insurance</p>
          </div>
        </a>

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
            <p>JPay Extras: Web, Mobile, Corp ID, Print Ads, Newsletters,
              <br />Brochures, Package Design, PDF forms, Kiosk Design, Murals
            </p>
          </div>
        </a>
      </div>

    </div>
  </transition>
</template>

<style lang="scss" scoped>

  h1 {
    font-size: 2em;
    text-align: center;
    padding: 0.5em 0;

    a {
      text-decoration: none;
    }
  }

  .flexxy {
    padding: 0 0em;

    a {
      flex-basis: auto;
      flex-grow: 1;
      box-sizing: border-box;
      text-align: center;
      align-items: center;
      text-decoration: none;
      margin: 0em 1em;
      color: black;

      img.portThumbs {
        width: 400px;
        height: auto;
        margin: 1em auto 0;
        border: 2px solid $ivory;
        transition: opacity 1s ease-in-out;
        @include shadow;

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
        color: black;
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
