<template>
  <div class="flex flex-row w-full justify-between h-[56px] items-center bg-green-600 box-border">
    <div class="p-[20px] cursor-pointer" @click="goBack">
      <RollbackOutlined style="font-size: 20px;color:white;" />
    </div>
    <p class="text-white text-[16px] font-bold">{{ title }}</p>
    <div class="p-[20px] cursor-pointer" @click="goHome">
      <HomeOutlined  style="font-size: 20px;color:white;" />
    </div>
  </div>
</template>

<script setup>
  import { 
    defineProps
  } from 'vue';
  import { RollbackOutlined, HomeOutlined } from '@ant-design/icons-vue';
  import { useRouter } from 'vue-router';

  defineProps(['title']);

  const goBack = () => {
    window.history.back();
  }
  const router = useRouter();

  const goHome = () => {
    router.replace({
      name: 'home'
    });
  }
</script>

<style scoped>

</style>