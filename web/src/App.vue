<template>
  <n-config-provider :theme="darkTheme">
    <router-view></router-view>
  </n-config-provider>
</template>
<script setup lang="ts">

import { darkTheme } from 'naive-ui'
console.log('[ darkTheme ]-9', darkTheme)

</script>

<style></style>
