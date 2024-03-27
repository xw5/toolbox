<template>
  <ul class="flex flex-row flex-wrap justify-center list-none" v-if="tools.length > 0">
    <li 
      class="w-[268px] h-[80px] px-[10px] py-[5px] box-border flex flex-row items-center flex-none mr-[5px] mb-[5px] bg-white shadow-[0px_0px_20px_-5px_rgba(158,158,158,.2)] cursor-pointer relative" 
      v-for="(tool, index) in tools" 
      :key="index" 
      @click="gotoPage(tool)"
    >
      <img :src="tool.img" class="w-[64px] h-[64px] mr-[5px]" alt="">
      <div class="flex flex-col h-full justify-around">
        <h3 class="text-black text-[14px]">{{ tool.title }}</h3>
        <p class="text-[#6c757d] text-[12px] break-all">{{ tool.desc }}</p>
      </div>
      <div class="w-[16px] h-[16px] text-[#999] absolute top-[3px] right-[3px]" v-if="outInTag && !tool.urls">
        <svg t="1711436135992" class="w-full h-full" v-if="tool.isOut" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1060" width="32" height="32"><path d="M812.7 217.7C734.9 139.8 629.3 96.1 519.3 96.1s-215.6 43.7-293.4 121.6c-162 162-162 424.9 0 587 77.8 77.8 183.4 121.6 293.4 121.6s215.6-43.7 293.4-121.6c162.1-162.2 162.1-425 0-587zM774 765.9a359.88 359.88 0 0 1-254.7 105.6c-95.5 0-187.1-37.9-254.8-105.6-140.5-140.5-140.5-369 0-509.5 67.5-67.5 159.2-105.6 254.8-105.6 95.5 0 187.2 37.9 254.8 105.6 140.4 140.5 140.4 369.1-0.1 509.5z" fill="currentColor" p-id="1061"></path><path d="M311.1 475.1v-32.7c42.4-33.9 67.3-81.2 74.6-141.9h60c-2.4 14.5-5.5 27.9-9.1 40h100v36.4c-8.5 160.1-82.5 274-221.9 341.9v-40c60.6-43.7 102.4-91.5 125.5-143.7-30.3-13.3-59.4-23-87.3-29.1v-40c41.2 4.9 75.8 14 103.7 27.3 9.7-30.3 16.4-69.1 20-116.4h-56.4c-18.1 41.2-54.5 74-109.1 98.2z m256.5 243.7V300.5H624v418.3h-56.4z m160-167.3c-36.4-35.2-67.9-59.4-94.6-72.8v-50.9c43.7 18.2 75.2 37 94.6 56.4v67.3z" fill="currentColor" p-id="1062"></path></svg>
        <svg t="1711436214783" class="w-full h-full" v-else viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1434" width="32" height="32"><path d="M403.9 625v-35.7c57.5-31.3 83.8-94.4 78.8-189.5V396h-97.5v322.7h-60.1V354.9h157.6V293h60.1v61.9h157.6v288.9c1.2 48.8-23.8 72.5-75.1 71.3H584v-37.5h26.3c21.3 0 31.3-10.6 30-31.9V396.2h-97.6v3.8c-3.8 93.8 23.1 157 80.7 189.5v35.7c-52.5-20-89.5-50.7-110.7-92-22.4 43.7-58.7 74.3-108.8 91.8z" fill="currentColor" p-id="1435"></path><path d="M805.4 217.7C727.6 139.8 622 96.1 512 96.1s-215.6 43.7-293.4 121.6c-162 162-162 424.9 0 587C296.4 882.5 402 926.3 512 926.3s215.6-43.7 293.4-121.6c162.1-162.2 162.1-425 0-587z m-38.7 548.2A359.88 359.88 0 0 1 512 871.5c-95.5 0-187.1-37.9-254.8-105.6-140.5-140.5-140.5-369 0-509.5 67.5-67.5 159.2-105.6 254.8-105.6 95.5 0 187.2 37.9 254.8 105.6 140.4 140.5 140.4 369.1-0.1 509.5z" fill="currentColor" p-id="1436"></path></svg>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps([
  'tools',
  'outInTag'
]);

const emit = defineEmits([
  'link'
]);

/**
 * 跳转到指定工具页
 * @param {Object} item 
 */
const gotoPage = (item) => {
  emit('link', item);
}

</script>

<style scoped>
</style>