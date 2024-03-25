<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { Input as AInput, message, Button as AButton, Modal as AModal, List as AList, ListItem as AListItem } from 'ant-design-vue';
  import { useRouter } from 'vue-router';
  import { ArrowRightOutlined } from '@ant-design/icons-vue';
  import url from '../assets/url.png';
  import color from '../assets/color.png';
  import time from '../assets/time.png';
  import base64 from '../assets/base64.png';
  import others from '../assets/others.png';
  import symbols from '../assets/symbols.png';
  import qrcode from '../assets/qrcode.png';
  import jsonHelper from '../assets/json-helper.png';
  import diffHelper from '../assets/diff-helper.png';
  import imgHelper from '../assets/img-helper.png';
  import regexHelper from '../assets/regex-helper.png';
  import vuePlayground from '../assets/vue-playground.png';
  import reactPlayground from '../assets/react-playground.png';
  import codeimage from '../assets/codeimage.png';
  import compressImage from '../assets/compress-image.png';
  import icoConvert from '../assets/ico-convert.png';

  const router = useRouter();
  // defineProps<{ msg: string }>()
  const searchKey = ref<string>('');

  // const onSearch = () => {
    
  // }

  type toolUrls = {
    url: string;
    title: string;
    isOut: boolean;
  }

  type Tool = {
    title: string;
    desc: string;
    img: string;
    urls?: toolUrls[];
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
      desc: '轻量文本对比工具',
      img: diffHelper,
      pathName: 'diff-helper'
    },{
      title: '图片格式助手',
      desc: 'webp,png,jpg,bmp格式互转',
      img: imgHelper,
      pathName: 'img-helper'
    },{
      title: '正则助手',
      desc: '正则可视化展示、测试工具',
      img: regexHelper,
      pathName: 'regex-helper'
    },{
      title: '持续更新',
      desc: '其它实用工具开发中...',
      img: others
    }
  ]);

  const toolsOnline = ref<Tool[]>([
    {
      title: 'Vue Playground',
      desc: 'Vue的在线演练场',
      img: vuePlayground,
      pathName: 'https://play.vuejs.org'
    },{
      title: 'React Playground',
      desc: 'React的在线演练场',
      img: reactPlayground,
      pathName: 'https://fewismuch.github.io/react-playground'
    },{
      title: '图片转ico',
      desc: '图片转ico格式工具',
      img: icoConvert,
      pathName: 'https://ico.nyaasu.top/'
    },{
      title: '图片压缩',
      desc: '好用的JPG/PNG/GIF/SVG图片压缩工具',
      img: compressImage,
      urls: [
      {
          title: 'tinypng图片压缩（Webp/JPG/PNG, PNG压缩首选,一次最多20张，单张大小不能超5M）',
          url: 'https://tinypng.com/',
          isOut: true
        },{
          title: 'iloveimg图片压缩（JPG/PNG/GIF/SVG）',
          url: 'https://www.iloveimg.com/zh-cn/compress-image',
          isOut: true
        }
      ]
    },{
      title: '在线编辑器',
      desc: '在线运行前端代码，分享代码，实时预览效果',
      img: compressImage,
      urls: [
      {
          title: 'JsBin（不错，我最用，分享代码无需登录）',
          url: 'https://jsbin.com/?html,css,output',
          isOut: true
        },{
          title: 'PlayCode（颜值高，分享需要登录）',
          url: 'https://playcode.io/javascript',
          isOut: true
        },{
          title: 'Techbrood',
          url: 'https://wow.techbrood.com/fiddle/new',
          isOut: false
        },{
          title: 'CodePen(访问较慢，有可能需要科学上网)',
          url: 'https://codepen.io/pen',
          isOut: true
        }
      ]
    },{
      title: '代码段截图',
      desc: '漂亮代码段截图生成器',
      img: codeimage,
      pathName: 'https://www.codepng.app/'
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

  // 通过计算属性实现搜索功能
  const toolsOnlineFilter = computed(() => {
    if (!searchKey.value) {
      return toolsOnline.value;
    }
    return toolsOnline.value.filter((item) => {
      return item.title.toLowerCase().includes(searchKey.value.toLowerCase());
    })
  });

  // 展示工具推荐
  const showPicker = (tool: Tool) => {
    console.log('---- showPicker ----:', tool);
    urls.value = tool.urls;
    openUrlsPicker.value = true;
  }

  /**
   * 取消url选择
   */
  const urlsPickerCancel = () => {
    openUrlsPicker.value = false;
  }

  /**
   * webview打开
   * @param {Object} tool 
   */
  const openWebview = (tool) => {
    router.push({
      name: 'webview',
      query: {
        url: tool.pathName || tool.url,
        title: tool.title
      }
    })
  }

  /**
   * 路由跳转
   * @param { Object } tool 
   */
  const gotoPage = (tool: Tool) => {
    if (!tool.pathName && !tool.urls) {
      message.success(tool.desc);
      return;
    };
    if (tool.pathName && tool.pathName.startsWith('http')) {
      // router.push({
      //   name: 'webview',
      //   query: {
      //     url: tool.pathName,
      //     title: tool.title
      //   }
      // })
      openWebview(tool);
      return;
    }
    if (tool.urls) {
      if (tool.urls.length === 1) {
        if (!tool.urls[0].isOut) {
          // router.push({
          //   name: 'webview',
          //   query: {
          //     url: tool.urls[0].url,
          //     title: tool.title
          //   }
          // })
          openWebview(tool);
          return;
        }
        window.open(tool.urls[0].url);
      } else {
        showPicker(tool);
      }
      return;
    }
    router.push({
      name: tool.pathName
    })
  };

  const openUrlsPicker = ref(false);
  const urls = ref<toolUrls[]>()
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
    <h3 class="text-[#333] text-[16px] mb-[10px]" v-if="toolsFilter.length > 0">本地工具</h3>
    <ul class="flex flex-row flex-wrap justify-center list-none">
      <li class="w-[268px] h-[80px] px-[10px] py-[5px] box-border flex flex-row items-center flex-none mr-[5px] mb-[5px] bg-white shadow-[0px_0px_20px_-5px_rgba(158,158,158,.2)] cursor-pointer" v-for="(tool, index) in toolsFilter" :key="index" @click="gotoPage(tool)">
        <img :src="tool.img" class="w-[64px] h-[64px] mr-[5px]" alt="">
        <div class="flex flex-col h-full justify-around">
          <h3 class="text-black text-[14px]">{{ tool.title }}</h3>
          <p class="text-[#6c757d] text-[12px]">{{ tool.desc }}</p>
        </div>
      </li>
    </ul>
    <h3 class="text-[#333] text-[16px] my-[10px]" v-if="toolsOnlineFilter.length > 0">在线工具推荐</h3>
    <ul class="flex flex-row flex-wrap justify-center list-none">
      <li class="w-[268px] h-[80px] px-[10px] py-[5px] box-border flex flex-row items-center flex-none mr-[5px] mb-[5px] bg-white shadow-[0px_0px_20px_-5px_rgba(158,158,158,.2)] cursor-pointer" v-for="(tool, index) in toolsOnlineFilter" :key="index" @click="gotoPage(tool)">
        <img :src="tool.img" class="w-[64px] h-[64px] mr-[5px]" alt="">
        <div class="flex flex-col h-full justify-around">
          <h3 class="text-black text-[14px]">{{ tool.title }}</h3>
          <p class="text-[#6c757d] text-[12px]">{{ tool.desc }}</p>
        </div>
      </li>
    </ul>
    <a-modal 
      centered 
      v-model:open="openUrlsPicker" 
      width="800px" 
      :wrap-style="{ overflow: 'hidden'}"
    >
      <a-list size="small" bordered :data-source="urls" class="mx-[15px]">
        <template #renderItem="{ item }">
          <a-list-item class="group">
            <a :href="item.isOut ? item.url : 'javascript:void(0);'" @click="item.isOut ? null : openWebview(item)" title="点击使用体验" class="flex flex-col w-full" :target="item.isOut ? '_blank' : '_self'">
              <p class="text-[#6c757d] text-[14px] group-hover:text-[#1afa29]">{{ item.title }}</p>
              <p class="text-[#6c757d] text-[14px] group-hover:text-[#1afa29]">{{ item.url }}</p>
            </a>
            <ArrowRightOutlined class="text-[16px] text-gray-500 group-hover:text-[#1afa29]" />
          </a-list-item>
        </template>
      </a-list>
      <template #footer>
        <a-button @click="urlsPickerCancel">知道了</a-button>
      </template>
    </a-modal>
  </div>
</template>

<style scoped>

</style>
