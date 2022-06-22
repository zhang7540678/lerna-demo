<script setup>
import { ref } from 'vue'
import { alertMsg } from 'cibtest-utils'
let msg = ref('按钮')
const triggerBtn = () => {
  msg.value = `按钮${Date.now()}`
  alertMsg('hello world')
}
</script>

<template>
  <CibButton type="primary" plain :msg="msg" @click="triggerBtn" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
