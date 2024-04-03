<script setup lang="ts">
  import { ref, computed, watch, onMounted } from 'vue';
  import { Input as AInput, message, Button as AButton, Popover as APopover, Image as AImage, Modal as AModal, List as AList, ListItem as AListItem, Switch as ASwitch } from 'ant-design-vue';
  import { useRouter } from 'vue-router';
  import { ArrowRightOutlined, QuestionCircleOutlined } from '@ant-design/icons-vue';
  import EnterItems from '../components/EnterItems.vue';
  import { getVsCode } from '../utils/vscode.js';
  import { timestampToTime,alink } from '../utils/utils.js';

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
  import prettierPlayground from '../assets/prettier-playground.png';
  import codeimage from '../assets/codeimage.png';
  import compressImage from '../assets/compress-image.png';
  import onlineIde from '../assets/online-ide.png';
  import icoConvert from '../assets/ico-convert.png';
  import mywx from '../assets/mywxok.jpg';
  import wxzs from '../assets/wxzs.jpg';
  import codeSnippet from '../assets/code-snippet.png';
  import caniuse from '../assets/caniuse.png';
  import dataStatistics from '../assets/data-statistics.png';
  import svgHelper from '../assets/svg-helper.png';
  import iconfont from '../assets/iconfont.png';
  import drawIo from '../assets/draw-io.png';
  import thinking from '../assets/thinking.png';
  import excalidraw from '../assets/excalidraw.png';
  // import svgeditor from '../assets/svgeditor.png';
  import codeFormat from '../assets/code-format.png';
  import formatJxyHelper from '../assets/format-jxy-helper.png';
  import typescriptPlayground from '../assets/typescript-playground.png';
  import variableNaming from '../assets/variable-naming.png';
  import tailwindcss from '../assets/tailwindcss.png';
  import placeholderHelper from '../assets/placeholder-helper.png';

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
    isOut?: boolean;
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
      title: 'JSON-XML-YAML-csv格式互转',
      desc: 'JSON、XML、YAML、CSV格式互相转换工具',
      img: formatJxyHelper,
      pathName: 'format-jxy-helper'
    },{
      title: '占位符工具',
      desc: '文本，图片临时占位内容生成工具',
      img: placeholderHelper,
      pathName: 'placeholder-helper'
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
      title: 'Typescript Playground',
      desc: 'Typescript在线演练场',
      img: typescriptPlayground,
      pathName: 'https://www.typescriptlang.org/play'
    },{
      title: 'Prettier Playground',
      desc: 'Prettier在线演练场',
      img: prettierPlayground,
      pathName: 'https://prettier.io/playground/'
    },{
      title: '代码格式化',
      desc: 'HTML/CSS/JS/XML/YAML/SQL代码格式化',
      img: codeFormat,
      // pathName: 'http://www.codeformat.cn/xml.html'
      urls: [
        {
          title: 'HTML格式化',
          url: 'https://www.jyshare.com/front-end/47/',
          isOut: false
        },{
          title: 'css格式化',
          url: 'https://tool.lu/css/',
          isOut: false
        },{
          title: 'js格式化',
          url: 'https://tool.lu/js/',
          isOut: false
        },{
          title: 'XML格式化',
          url: 'https://www.jyshare.com/front-end/710/',
          isOut: false
        },{
          title: 'YAML格式化',
          url: 'https://verytoolz.com/yaml-formatter.html',
          isOut: false
        },{
          title: 'SQl格式化',
          url: 'https://tool.lu/sql/',
          isOut: false
        }
      ]
    },{
      title: '变量命令',
      desc: '变量命名神器',
      img: variableNaming,
      pathName: 'http://tool.h234.cn/rcode/index.html',
      isOut: false
    },{
      title: 'iconfont',
      desc: '矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
      img: iconfont,
      // pathName: 'https://www.iconfont.cn/',
      // isOut: true,
      urls: [
        {
          title: 'iconfont(阿里旗下免费图标库)',
          url: 'https://www.iconfont.cn/',
          isOut: true
        },{
          title: 'IconPark免费图标库',
          url: 'https://iconpark.oceanengine.com/home',
          isOut: false
        }
      ]
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
      img: onlineIde,
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
      // pathName: 'https://www.codepng.app/',
      urls: [
        {
          title: 'codepng(简单，便捷)',
          url: 'https://www.codepng.app/',
          isOut: false
        },{
          title: 'carbon(主题丰富，样式定义更自由)',
          url: 'https://carbon.now.sh/',
          isOut: true
        }
      ]
    },{
      title: '代码片段生成器',
      desc: '代码片段生成工具，辅助生成代码段',
      img: codeSnippet,
      pathName: 'https://snippet-generator.app/'
    },{
      title: 'Can I use',
      desc: '一款前端兼容性自查工具，查css、js等前端技术在各浏览器下的兼容情况',
      img: caniuse,
      pathName: 'https://caniuse.com/'
    },{
      title: 'statcounter',
      desc: '数据统计分析工具,查浏览器、屏幕分辨率等市场占比',
      img: dataStatistics,
      pathName: 'https://gs.statcounter.com/'
    },{
      title: 'SVG助手',
      desc: 'SVG压缩、合并、转base64、生成css行间svg,svg编辑器',
      img: svgHelper,
      // pathName: 'https://www.zhangxinxu.com/sp/svgo/',
      urls: [
        {
          title: 'SVG压缩、合并、转base64、生成css行间svg',
          url: 'https://www.zhangxinxu.com/sp/svgo/',
          isOut: false
        },{
          title: 'SVG编辑器',
          url: 'https://www.jyshare.com/more/svgeditor/',
          isOut: false
        }
      ]
    },{
      title: 'JSON助手',
      desc: 'JSON格式化、转XML,CSV,YAML、可视化、编辑器',
      img: jsonHelper,
      // pathName: 'https://www.jyshare.com/front-end/53/'
      urls:[
        {
          title: 'JSON格式化、转XML,CSV,YAML',
          url: 'https://www.jyshare.com/front-end/53/',
          isOut: false
        },{
          title: 'JSON可视化',
          url: 'https://jsoncrack.com/editor',
          isOut: false
        },{
          title: 'JSON编辑器',
          url: 'https://www.hellokit.com.cn/json',
          isOut: false
        }
      ]
    },{
      title: 'draw.io在线绘图',
      desc: '支持流程图、UML类图、组织结构图、泳道图、E-R图、文氏图等的绘制',
      img: drawIo,
      pathName: 'https://app.diagrams.net/?src=about',
      isOut: true
    },{
      title: '思维导图',
      desc: '在线思维导图绘制工具',
      img: thinking,
      pathName: 'https://www.jyshare.com/more/kitymind/index.html'
    },{
      title: 'Excelidraw白板',
      desc: '手绘风格电子白板在线应用，能快速画出美观漂亮的流程图、示意图和开发架构图等',
      img: excalidraw,
      pathName: 'https://excalidraw.com/'
    },{
      title: 'tailwindcss',
      desc: 'tailwindcss官网，查询样式',
      img: tailwindcss,
      // pathName: 'https://tailwindcss.com/'
      urls:[
        {
          title: '国内中文站',
          url: 'https://tailwindcss.cn/',
          isOut: false
        },{
          title: '国外英文站',
          url: 'https://tailwindcss.com/',
          isOut: false
        }
      ]
    },{
      title: '持续更新',
      desc: '其它实用工具努力接入中...',
      img: others
    }
  ]);

  const isOut = ref(false); // 在线工具是否全部外部浏览器打开
  watch(isOut, (newVal, oldVal) => {
    console.log('---- watch ----:count', newVal, oldVal);
    if (getVsCode()) {
      getVsCode().postMessage({
        command: 'updateConfig',
        key: 'isOutOpen',
        value: newVal
      });
    }
  })

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
      // 要求全部外部打开，或者它本身就要求外部打开的就全部外部唤起浏览器打开
      if (isOut.value || tool.isOut) {
        // window.open(tool.pathName);
        alink(tool.pathName, '_blank');
        return;
      }
      openWebview(tool);
      return;
    }
    if (tool.urls) {
      if (tool.urls.length === 1) {
        if (!tool.urls[0].isOut && !isOut.value) {
          openWebview(tool);
          return;
        }
        // window.open(tool.urls[0].url);
        alink(tool.pathName, '_blank');
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
  const urls = ref<toolUrls[]>();

  if (getVsCode()) {
    window.addEventListener('message', event => {
      const message = event.data; // The JSON data our extension sent
      console.log('---- webview message ----:', message);
      switch (message.command) {
        case 'sendConfig':
          if (message.key === 'isOutOpen') {
            isOut.value = message.value;
          }
          break;
        default:
          break;
        }
    });
    // getVsCode().postMessage({
    //   command: 'getConfig',
    //   key: 'isOutOpen'
    // });
  }

  const nowTime = ref<string>('0000-00-00 00:00:00');
  onMounted(() => {
    setInterval(() => {
      nowTime.value = timestampToTime(Date.now(), 'YYYY-MM-DD hh:mm:ss');
    }, 1000);
  })
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-start">
    <a-input
      class="max-w-[680px] w-full my-[16px]"
      v-model:value="searchKey"
      placeholder="输入关键字搜索工具"
      enter-button
      size="large"
    />
    <!-- 本地工具 -->
    <h3 class="text-[#333] text-[16px] mb-[10px]" v-if="toolsFilter.length > 0">本地工具</h3>
    <EnterItems :tools="toolsFilter" @link="gotoPage" />

    <!-- 在线工具 -->
    <div class="my-[10px] flex flex-row justify-center items-center">
      <h3 class="text-[#333] text-[16px] mr-[10px]" v-if="toolsOnlineFilter.length > 0">在线工具推荐</h3>
      <a-popover placement="top">
        <template #content>
          <p class="text-[#6c757d] text-[14px]">1. 在线工具我本是希望全部在vs code里打开的，但部分工具被禁止内嵌，不得不唤起外部浏览器打开</p>
          <p class="text-[#6c757d] text-[14px]">2. 如若你更喜欢统一外部打开方式，可以开启这个选项<a-switch class="ml-[5px]" v-model:checked="isOut" checked-children="开" un-checked-children="关" /></p>
          <p class="text-[#6c757d] text-[14px]">2. 个人开发工具效率太低而且能力有限，插件通过iframe或外链的形式引入了第三方优秀工具，如有侵权，请联系我删除</p>
        </template>
        <template #title>
          <span>温馨提示</span>
        </template>
        <QuestionCircleOutlined class="text-[#666] hover:text-[#1afa29]" />
      </a-popover>
    </div>
    <EnterItems :tools="toolsOnlineFilter" @link="gotoPage" :out-in-tag="true" :isOut="isOut" />

    <!-- footer 脚注 -->
    <div class="text-[#6c757d] text-[12px] text-center flex flex-col items-center mt-[10px] footer">
      <p class="mb-[8px] text-[16px]">{{ nowTime }}</p>
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
            <p class="text-[#999] text-[14px]">如有任何问题或建议，欢迎随时联系</p>
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
            <p class="text-[#999] text-[14px]">只要人人都献出一点爱，世间将变成美好的人间</p>
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
              <p class="text-[#6c757d] text-[14px] flex flex-row items-center group-hover:text-[#1afa29]">
                <span>{{ item.title }}</span>
                <svg t="1711436135992" class="w-[16px] h-[16px]" v-if="item.isOut" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1060" width="32" height="32"><path d="M812.7 217.7C734.9 139.8 629.3 96.1 519.3 96.1s-215.6 43.7-293.4 121.6c-162 162-162 424.9 0 587 77.8 77.8 183.4 121.6 293.4 121.6s215.6-43.7 293.4-121.6c162.1-162.2 162.1-425 0-587zM774 765.9a359.88 359.88 0 0 1-254.7 105.6c-95.5 0-187.1-37.9-254.8-105.6-140.5-140.5-140.5-369 0-509.5 67.5-67.5 159.2-105.6 254.8-105.6 95.5 0 187.2 37.9 254.8 105.6 140.4 140.5 140.4 369.1-0.1 509.5z" fill="currentColor" p-id="1061"></path><path d="M311.1 475.1v-32.7c42.4-33.9 67.3-81.2 74.6-141.9h60c-2.4 14.5-5.5 27.9-9.1 40h100v36.4c-8.5 160.1-82.5 274-221.9 341.9v-40c60.6-43.7 102.4-91.5 125.5-143.7-30.3-13.3-59.4-23-87.3-29.1v-40c41.2 4.9 75.8 14 103.7 27.3 9.7-30.3 16.4-69.1 20-116.4h-56.4c-18.1 41.2-54.5 74-109.1 98.2z m256.5 243.7V300.5H624v418.3h-56.4z m160-167.3c-36.4-35.2-67.9-59.4-94.6-72.8v-50.9c43.7 18.2 75.2 37 94.6 56.4v67.3z" fill="currentColor" p-id="1062"></path></svg>
                <svg t="1711436214783" class="w-[16px] h-[16px]" v-else viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1434" width="32" height="32"><path d="M403.9 625v-35.7c57.5-31.3 83.8-94.4 78.8-189.5V396h-97.5v322.7h-60.1V354.9h157.6V293h60.1v61.9h157.6v288.9c1.2 48.8-23.8 72.5-75.1 71.3H584v-37.5h26.3c21.3 0 31.3-10.6 30-31.9V396.2h-97.6v3.8c-3.8 93.8 23.1 157 80.7 189.5v35.7c-52.5-20-89.5-50.7-110.7-92-22.4 43.7-58.7 74.3-108.8 91.8z" fill="currentColor" p-id="1435"></path><path d="M805.4 217.7C727.6 139.8 622 96.1 512 96.1s-215.6 43.7-293.4 121.6c-162 162-162 424.9 0 587C296.4 882.5 402 926.3 512 926.3s215.6-43.7 293.4-121.6c162.1-162.2 162.1-425 0-587z m-38.7 548.2A359.88 359.88 0 0 1 512 871.5c-95.5 0-187.1-37.9-254.8-105.6-140.5-140.5-140.5-369 0-509.5 67.5-67.5 159.2-105.6 254.8-105.6 95.5 0 187.2 37.9 254.8 105.6 140.4 140.5 140.4 369.1-0.1 509.5z" fill="currentColor" p-id="1436"></path></svg>
              </p>
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
  .footer {
    position: fixed;
    bottom: 0;
  }
  
  
  /* Extra small devices (phones, 600px width and down, 600px height and down) */
  @media only screen and (max-width: 1130px) {
    .footer {
      position: relative;
      bottom: 0;
    }
  }
  @media only screen and (max-height: 886px) {
    .footer {
      position: relative;
      bottom: 0;
    }
  }

</style>
