<script setup>
  import { ref } from 'vue'

  const count = ref(0)
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>

<style lang='scss' scoped>
  button {
    background: red;
    border: 1px solid white;
    outline: none;
    padding: 1rem;
    color: white;
    border-radius: 1rem;
    font-family: sans-serif;
    font-size: 2rem;
    cursor: pointer;

    &:hover {
      background: maroon;
    }
  }
</style>
