<script setup lang="ts">
import { ref } from 'vue'

import { Check, Delete, Edit, Message, Star } from '@element-plus/icons-vue'
console.log('helloword', import.meta.env)

const currentPage1 = ref(5)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<template>
  <el-button>Default</el-button>
  <el-button type="primary" :icon="Edit">Primary</el-button>
  <el-button type="success" :icon="Check">Success</el-button>
  <el-button type="info" :icon="Message">Info</el-button>
  <el-button type="warning" :icon="Star">Warning</el-button>
  <el-button type="danger" :icon="Delete">Danger</el-button>

  <div>
    <el-pagination
      v-model:current-page="currentPage1"
      :page-size="100"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, prev, pager, next"
      :total="1000"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
  <div>
    <h2>svg测试</h2>
    <svg-icon name="IMAGE" width="100" height="100" />
    <svg-icon name="bb" width="100" height="100" />
  </div>

  <div class="test_scss">
    <h2>测试sass</h2>
  </div>
</template>

<style scoped lang="scss">
.test_scss {
  h2 {
    color: $test_color;
    font-size: 50px;
    background-color: #ffe79b;
  }
}
</style>
