<template>
  <div class="w-full min-h-screen bg-[#f9f9f9]">
    <div class="min-w-[1024px] w-full mx-auto flex flex-col items-center">
      <a-input-search
        class="max-w-[680px] w-full my-[16px]"
        v-model:value="searchKey"
        placeholder="输入关键字搜索工具"
        enter-button
        @search="onSearch"
      />
      <ul class="flex flex-row flex-wrap justify-center list-none">
        <li class="w-[268px] h-[80px] px-[10px] py-[5px] box-border flex flex-row items-center flex-none mr-[5px] mb-[5px] bg-white shadow-[0px_0px_20px_-5px_rgba(158,158,158,.2)]">
          <img src="https://dummyimage.com/80x80/000/fff.jpg&text=testimg" class="w-[70px] h-[70px] mr-[5px]" alt="">
          <div class="flex flex-col h-full justify-around">
            <h3 class="m-0 p-0 text-black text-[14px]">URL编码</h3>
            <p class="m-0 p-0 text-[#6c757d] text-[12px]">URL解码、编码工具</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
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
  import { InputSearch as AInputSearch} from 'ant-design-vue';
  const searchKey = ref('');

  const onSearch = () => {
    
  }
</script>
<style scoped>

</style>