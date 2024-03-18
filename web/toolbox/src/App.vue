<template>
  <div class="w-full h-full">
    <div class="min-w-[768px] w-full h-full mx-auto flex flex-col items-center">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { RouterView } from 'vue-router';
  
</script>
<style scoped>

</style>