<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { Input as AInput, message, Button as AButton, Popover as APopover, Image as AImage, Modal as AModal, List as AList, ListItem as AListItem } from 'ant-design-vue';
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
  import mywx from '../assets/mywxok.jpg';
  import wxzs from '../assets/wxzs.jpg';

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
  <div class="w-full h-full flex flex-col items-center justify-center max-[1108px]:justify-start">
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
    <div class="absolute bottom-[10px] text-[#6c757d] text-[12px] text-center flex flex-col items-center max-[825px]:relative max-[825px]:bottom-0 max-[825px]:mt-[10px]">
      <p class="mb-[8px]">工欲善其事，必先利其器</p>
      <p class="flex flex-row">
        <a-popover>
          <template #content>
            <p>
              <a-image
                :width="269"
                :height="367"
                :src="mywx"
              />
            </p>
            <p class="text-[#666] text-[14px]">如有问题或者有好的建议，欢迎扫码加我</p>
          </template>
          <template #title>
            <span>联么我</span>
          </template>
          <span class="text-[#bfbfbf] hover:text-[#1afa29] leading-[24px] cursor-pointer mr-[10px]"><svg t="1711357181129" class="w-[24px] h-[24px]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17590" width="64" height="64"><path d="M207.872 971.776l12.288-60.416c0-1.024 12.288-58.368 20.48-105.472h-38.912c-88.064 0-159.744-71.68-159.744-159.744v-434.176c0-88.064 71.68-159.744 159.744-159.744h618.496c88.064 0 159.744 71.68 159.744 159.744v434.176c0 88.064-71.68 159.744-159.744 159.744h-295.936l-316.416 165.888z m-7.168-861.184c-56.32 0-101.376 45.056-101.376 101.376v434.176c0 56.32 45.056 101.376 101.376 101.376h107.52l-5.12 33.792c-3.072 21.504-9.216 53.248-14.336 81.92l220.16-114.688h310.272c56.32 0 101.376-45.056 101.376-101.376v-434.176c0-56.32-45.056-101.376-101.376-101.376h-618.496z" p-id="17591" fill="currentColor"></path><path d="M247.808 506.88c-52.224 0-95.232-43.008-95.232-95.232 0-52.224 43.008-95.232 95.232-95.232 52.224 0 95.232 43.008 95.232 95.232 0 53.248-43.008 95.232-95.232 95.232z m0-132.096c-20.48 0-36.864 16.384-36.864 36.864s16.384 36.864 36.864 36.864 36.864-16.384 36.864-36.864c0-19.456-16.384-36.864-36.864-36.864zM509.952 506.88c-52.224 0-95.232-43.008-95.232-95.232 0-52.224 43.008-95.232 95.232-95.232 52.224 0 95.232 43.008 95.232 95.232 0 53.248-43.008 95.232-95.232 95.232z m0-132.096c-20.48 0-36.864 16.384-36.864 36.864s16.384 36.864 36.864 36.864 36.864-16.384 36.864-36.864c0-19.456-16.384-36.864-36.864-36.864zM772.096 506.88c-52.224 0-95.232-43.008-95.232-95.232 0-52.224 43.008-95.232 95.232-95.232 52.224 0 95.232 43.008 95.232 95.232 0 53.248-41.984 95.232-95.232 95.232z m0-132.096c-20.48 0-36.864 16.384-36.864 36.864s16.384 36.864 36.864 36.864 36.864-16.384 36.864-36.864c0-19.456-16.384-36.864-36.864-36.864z" p-id="17592" fill="currentColor"></path></svg></span>
        </a-popover>
        <a-popover>
          <template #content>
            <p>
              <a-image
                :width="293"
                :height="293"
                :src="wxzs"
              />
            </p>
            <p class="text-[#666] text-[14px]">只要人人都献出一点爱，世间将变成美好的人间</p>
          </template>
          <template #title>
            <span>赞赏我</span>
          </template>
          <span class="text-[#bfbfbf] hover:text-[#1afa29] leading-[24px] cursor-pointer w-[24px]"><svg t="1711357253395" class="w-[24px] h-[24px]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18912" width="64" height="64"><path d="M916.153079 479.99098l4.579589-70.310164a17.702614 17.702614 0 0 1 13.084541-15.990078l40.061785-10.73702V333.078528H428.46531v49.87519l40.042543 10.73702a17.702614 17.702614 0 0 1 13.123024 16.567337l4.541106 69.732905h429.981096zM33.081279 708.316215a17.741098 17.741098 0 0 1 0-35.462954h409.488396a17.721856 17.721856 0 0 1 0 35.462954H33.081279z m447.183418 225.092583a16.721273 16.721273 0 0 1-3.694458 0.404081c-18.760922 0-39.561494 0.923615-62.478682 1.943439-58.668771 2.597666-130.672229 5.772591-195.825544-3.136441-109.005769-14.93177-197.788226-62.343988-179.546837-195.671609a17.683372 17.683372 0 0 1 17.510194-15.316609V721.573933h409.507639l0.711953 0.019242-5.830318-89.513652a17.741098 17.741098 0 0 1-16.509611 11.295038H34.620636v-0.057726a17.66413 17.66413 0 0 1-17.510194-15.31661c-18.318357-133.693218 68.539903-179.68153 173.216228-194.016799 57.187139-7.831482 119.35795-5.753349 171.022643-4.021572 18.222147 0.615743 35.058872 1.17376 52.088017 1.173761a17.721856 17.721856 0 0 1 0 35.443711c-13.950429 0-32.78832-0.634985-53.204051-1.308454-50.298514-1.674052-110.833756-3.694459-165.211568 3.732943-81.643685 11.179585-150.183588 44.910762-144.430238 138.907792h393.51756a17.702614 17.702614 0 0 1 15.547513 9.216905l-7.639063-117.029671a19.626811 19.626811 0 0 1-0.153936-2.386005v-0.019242l-4.772009-73.081008-39.946333-10.698536a17.741098 17.741098 0 0 1-14.142849-17.356258V315.375914c0-9.794164 7.946934-17.721856 17.721856-17.721856h285.339196V169.252382c0-4.541105 1.731777-9.082211 5.195333-12.526524L852.789267 5.195332a17.741098 17.741098 0 0 1 25.072289 25.053047l-146.335194 146.335194v121.070485h260.112971c9.774922 0 17.702614 7.946934 17.702614 17.721856v81.181878a17.721856 17.721856 0 0 1-13.161508 17.106112l-40.927674 10.967924-37.925926 581.6848a17.702614 17.702614 0 0 1-17.702614 17.702614H502.73932v-0.038484a17.702614 17.702614 0 0 1-17.644888-16.586579l-4.829735-73.985381z m-3.694458-35.058872a17.125355 17.125355 0 0 1 1.404664 0.057726l-9.236147-141.640153a17.029145 17.029145 0 0 1-2.982505 0.269388H72.277175c-5.522446 93.958547 65.134074 128.825 150.722363 140.562602 62.055358 8.485709 132.307796 5.387752 189.571903 2.847812 24.59124-1.096792 46.931169-2.097375 63.998798-2.097375z m224.611534 90.206362h181.855873l30.825638-473.083112H488.481019l30.844881 473.083112h181.855873z" p-id="18913" fill="currentColor"></path></svg></span>
        </a-popover>
      </p>
    </div>
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
