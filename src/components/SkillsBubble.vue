<template>
  <div class="skillsBubble">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet est ut, rerum doloribus libero hic sint voluptatibus. </p>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/template-modern/assets/css/modern-main.scss";

  .skillsBubble {
    background: transparent;
    padding: 1.25rem 1.75rem;
    // display: block;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    //
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: center;
    border: 1px solid $ruby;
    border-radius: .5rem;
    @include box-shadow(0px, 1px, 20px, 0px, hsl(0, 0%, 0%));

    @media (max-width: $breakThou) {
      margin: 0rem 0 .5rem;
    }

    @media (max-width: $breakOne) {
      margin: 0 0 .5rem;
    }

    @media (max-width: $breakFour) {
      flex-direction: column;
    }
  }

  p {
    // display: block;
    font-size: .9em;
    line-height: 1.4em;
    letter-spacing: 0.05em;
    color: white;
    font-weight: 500;
    //
    align-content: center;
    align-items: center;
    justify-content: center;
    align-self: center;
    text-align: left;
  }

  .corp .skillsBubble {
    @include box-shadow(0px, 0px, 3px, -1px, hsla(0, 14%, 22%, 0.5));
    border-radius: 2px;
    font-family: Alegreya;
  }

  .punk .skillsBubble {
    //
    p {
      margin: .25rem auto;
    }
  }

  .corp .skillsBubble {
    //
    p {
      font-family: Alegreya, "Times New Roman", Times, serif !important;
      font-size: 1rem;
      letter-spacing: .001rem;
      line-height: 1.4rem;
      margin: 0;
      font-weight: 500;

      @media (max-width: $breakThou) {
        font-size: 1.15rem;
        line-height: 1.75rem;
      }

      @media (max-width: $breakTwo) {
        font-size: 1rem;
        line-height: 1.5rem;
      }

    }
  }

  .modern .skillsBubble {
    width: 45%;
    margin: auto;
    padding: 1rem 1.5rem;

    p {
      font-family: Spartan, "Times New Roman", Times, serif !important;
      font-size: .85rem;
      letter-spacing: .000rem;
      line-height: 1.4rem;
      margin: 0;
      font-weight: 300;

      // @media (max-width: $breakThou) {
      //   font-size: 1.15rem;
      //   line-height: 1.75rem;
      // }

      // @media (max-width: $breakTwo) {
      //   font-size: 1rem;
      //   line-height: 1.5rem;
      // }

    }
  }

</style>
