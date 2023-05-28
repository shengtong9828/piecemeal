<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="test">test-http</button>
    <button @click="test1">test-https</button>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const $axios = inject('$axios')

function test() {
  $axios
    .post('http://cross.vercel.qingqian.fun/', { a: 1 })
    .then((res) => {
      console.log('res', res)
    })
    .catch((err) => {
      console.log('err', err)
    })
}

function test1() {
  $axios
    .post('https://cross.vercel.qingqian.fun/', { a: 1 })
    .then((res) => {
      console.log('res', res)
    })
    .catch((err) => {
      console.log('err', err)
    })
}
</script>

<style></style>
