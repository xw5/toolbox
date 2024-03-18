<script setup lang="ts">
  import { ref } from 'vue';
  import { InputSearch as AInputSearch} from 'ant-design-vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  // defineProps<{ msg: string }>()
  const searchKey = ref<string>('');

  const onSearch = () => {
    
  }

  type Tool = {
    title: string;
    desc: string;
    img: string;
    pathName: string;
  }

  const tools = ref<Tool[]>([
    {
      title: 'URL编码',
      desc: 'URL解码、编码工具',
      img: 'https://dummyimage.com/80x80/000/fff.jpg&text=testimg',
      pathName: 'url-encode'
    },{
      title: '颜色转换',
      desc: 'RGB、HSL 和 HSV 格式颜色互转',
      img: 'https://dummyimage.com/80x80/000/fff.jpg&text=testimg',
      pathName: 'color-conversion'
    },{
      title: '时间转换',
      desc: '时间戳和日期格式互转工具',
      img: 'https://dummyimage.com/80x80/000/fff.jpg&text=testimg',
      pathName: 'time-conversion'
    }
  ]);
  const gotoPage = (tool: Tool) => {
    router.push({
      name: tool.pathName
    })
  }
</script>

<template>
  <a-input-search
    class="max-w-[680px] w-full my-[16px]"
    v-model:value="searchKey"
    placeholder="输入关键字搜索工具"
    enter-button
    @search="onSearch"
  />
  <ul class="flex flex-row flex-wrap justify-center list-none">
    <li class="w-[268px] h-[80px] px-[10px] py-[5px] box-border flex flex-row items-center flex-none mr-[5px] mb-[5px] bg-white shadow-[0px_0px_20px_-5px_rgba(158,158,158,.2)] cursor-pointer" v-for="(tool, index) in tools" :key="index" @click="gotoPage(tool)">
      <img :src="tool.img" class="w-[70px] h-[70px] mr-[5px]" alt="">
      <div class="flex flex-col h-full justify-around">
        <h3 class="text-black text-[14px]">{{ tool.title }}</h3>
        <p class="text-[#6c757d] text-[12px]">{{ tool.desc }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped>

</style>
