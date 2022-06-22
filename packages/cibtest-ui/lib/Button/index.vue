<script setup>
import { ref, useAttrs } from 'vue'
const props = defineProps({
  msg: String,
})
const attrs = useAttrs();
const emit = defineEmits(['click'])
const changeTitle = () => {
  emit('click')
}
</script>
<script>
export default {
  name: "CibButton"
}
</script>

<template>
  <el-button v-bind="{...props, ...attrs}" @click="changeTitle">{{ msg }}</el-button>
</template>

<style scoped>

</style>
