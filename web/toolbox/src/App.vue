<template>
  <div class="w-full overflow-hidden">
    <div class="min-w-[1000px] w-full mx-auto flex flex-col items-center">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { RouterView } from 'vue-router';
  import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined
  } from '@ant-design/icons-vue';
  
</script>
<style scoped>

</style>