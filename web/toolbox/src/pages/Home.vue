<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { Input as AInput, message} from 'ant-design-vue';
  import { useRouter } from 'vue-router';
  import url from '../assets/url.png';
  import color from '../assets/color.png';
  import time from '../assets/time.png';
  import base64 from '../assets/base64.png';
  import others from '../assets/others.png';
  import symbols from '../assets/symbols.png';
  import qrcode from '../assets/qrcode.png';
  import jsonHelper from '../assets/json-helper.png';
  import diffHelper from '../assets/diff-helper.png';

  const router = useRouter();
  // defineProps<{ msg: string }>()
  const searchKey = ref<string>('');

  // const onSearch = () => {
    
  // }

  type Tool = {
    title: string;
    desc: string;
    img: string;
    pathName?: string;
  }

  const tools = ref<Tool[]>([
    {
      title: 'URL编码',
      desc: 'URL解码、编码工具',
      img: url,
      pathName: 'url-encode'
    },{
      title: '颜色转换',
      desc: 'RGB、HSL 和 HSV 格式颜色互转',
      img: color,
      pathName: 'color-conversion'
    },{
      title: '时间转换',
      desc: '时间戳和日期格式互转工具',
      img: time,
      pathName: 'time-conversion'
    },{
      title: 'Base64',
      desc: 'Base64编码和解码工具',
      img: base64,
      pathName: 'base64-encode'
    },{
      title: '特殊符号',
      desc: '解决一些特殊符号输入',
      img: symbols,
      pathName: 'special-symbols'
    },{
      title: '二维码',
      desc: '二维码生成与解码',
      img: qrcode,
      pathName: 'qrcode'
    },{
      title: 'JSON助手',
      desc: 'JSON编辑、压缩、格式化、验证等',
      img: jsonHelper,
      pathName: 'json-helper'
    },{
      title: 'diff助手',
      desc: '文本diff对比',
      img: diffHelper,
      pathName: 'diff-helper'
    },{
      title: '持续更新',
      desc: '其它实用工具开发中...',
      img: others
    }
  ]);

  // 通过计算属性实现搜索功能
  const toolsFilter = computed(() => {
    if (!searchKey.value) {
      return tools.value;
    }
    return tools.value.filter((item) => {
      return item.title.toLowerCase().includes(searchKey.value.toLowerCase());
    })
  });

  const gotoPage = (tool: Tool) => {
    if (!tool.pathName) {
      message.success(tool.desc);
      return;
    };
    router.push({
      name: tool.pathName
    })
  };
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <a-input
      class="max-w-[680px] w-full my-[16px]"
      v-model:value="searchKey"
      placeholder="输入关键字搜索工具"
      enter-button
      size="large"
    />
    <ul class="flex flex-row flex-wrap justify-center list-none">
      <li class="w-[268px] h-[80px] px-[10px] py-[5px] box-border flex flex-row items-center flex-none mr-[5px] mb-[5px] bg-white shadow-[0px_0px_20px_-5px_rgba(158,158,158,.2)] cursor-pointer" v-for="(tool, index) in toolsFilter" :key="index" @click="gotoPage(tool)">
        <img :src="tool.img" class="w-[64px] h-[64px] mr-[5px]" alt="">
        <div class="flex flex-col h-full justify-around">
          <h3 class="text-black text-[14px]">{{ tool.title }}</h3>
          <p class="text-[#6c757d] text-[12px]">{{ tool.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
