<template>
  <div class="quoteBlock">
    <p>&ldquo;{{ quotes.copy.quote }}&rdquo;</p>
    <cite>&ndash; {{ quotes.copy.author }}</cite>
  </div>
</template>

<script lang="ts" setup>
  import { inject } from 'vue'

  const quotes: any = inject('quotes')
</script>

<style lang="scss" scoped>
  @import '@/template-punk/assets/css/punk-main.scss';

  .quoteBlock {
    background: rgba(218, 0, 0, 0.79);
    // background: transparentize($purple, .35);
    // margin-bottom: .5em;
    padding: 1em 2em 1em;
    // @include shadow;
    @include clearfix;
    text-align: center;

    p {
      font-size: 0.8em;
      color: $ivory !important;
      text-align: center;
      letter-spacing: .08em;
      font-weight: bold;
    }

    cite {
      font-family: $font-copy;
      font-size: .7em;
      color: $ivory;
      font-style: italic;
      margin: 0 4em 0 0;
      display: block;
      text-align: right;
      letter-spacing: .08em;
    }
  }
</style>
