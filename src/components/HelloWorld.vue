<script setup lang="ts">
import { ref, reactive } from 'vue'

const count = ref(0)
const test = reactive({
  id: 1,
  name: 'hello',
})
</script>

<template>
  <h1>hello</h1>
  <div>{{ count }}</div>
  <div>{{ test.id }}:{{ test.name }}</div>
</template>

<style scoped></style>
