<template>
  <n-config-provider :theme="darkTheme">
    <n-message-provider>
      <router-view></router-view>
    </n-message-provider>
  </n-config-provider>
</template>
<script setup lang="ts">

import { darkTheme } from 'naive-ui'
console.log('[ darkTheme ]-9', darkTheme)
</script>

<style></style>
