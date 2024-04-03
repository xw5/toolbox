<template>
  <div class="flex flex-row flex-wrap">
    <a-input-group class="w-[50%]" compact>
      <a-button>图片宽度</a-button>
      <a-input v-model:value="imgw" placeholder="输入要生成图片宽度，默认为300" style="width: 400px" />
    </a-input-group>
    <a-input-group class="w-[50%]" compact>
      <a-button>图片高度</a-button>
      <a-input v-model:value="imgh" placeholder="输入要生成图片高度，默认为300" style="width: 400px" />
    </a-input-group>
    <a-input-group class="w-[50%]" compact>
      <a-button>图片文字</a-button>
      <a-input v-model:value="imgText" placeholder="输入要生成图片高度，默认为300" style="width: 400px" />
    </a-input-group>
    <a-input-group class="w-[50%]" compact>
      <a-button>图片格式</a-button>
      <a-select
        v-model:value="mimeType"
        style="width: 120px"
      >
        <a-select-option value="png">png</a-select-option>
        <a-select-option value="jpg">jpg</a-select-option>
        <a-select-option value="webp">webp</a-select-option>
        <a-select-option value="gif">gif</a-select-option>
      </a-select>
    </a-input-group>
    <a-input-group class="w-[50%]" compact>
      <a-button>文字颜色</a-button>
      <pick-colors v-model:value="textcolor"/>
    </a-input-group>
    <a-input-group class="w-[50%]" compact>
      <a-button>图片背景色</a-button>
      <pick-colors v-model:value="bgcolor"/>
    </a-input-group>
  </div>
  <a-divider />
  <div class="flex flex-row flex-wrap justify-around px-[20px]">
    <div class="flex flex-row mb-[10px] mt-[20px]" v-for="item in imgList">
      <span class="w-[220px]">{{ item.type }}：</span>
      <img class="w-[100px] h-[100px]" :src="item.url" alt="">
      <div class="flex flex-col ml-[10px]">
        <a-button @click="copy(item.url)">复制url</a-button>
        <a-button @click="copy(item.img)">复制img标签</a-button>
      </div>
    </div>
  </div>
  <ul class="text-[14px] mt-[10px] list-none text-[#666]">
    <li>注：部分占位图片不支持显示中文，请按需选择</li>
    <li>占位图片使用的是第三方图片服务，可能会有个别会失效，请按需选择</li>
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { Input as AInput, InputGroup as AInputGroup, Button as AButton, Select as ASelect, SelectOption as ASelectOption, Divider as ADivider } from 'ant-design-vue';
import PickColors from 'vue-pick-colors';

const imgw = ref(300);
const imgh = ref(300);
const imgText = ref('example');
const mimeType = ref('png')
const bgcolor = ref('#000000');
const textcolor = ref('#ffffff');
type imgplaceholderType = {
  url: string
  type: string,
  img: string
}
const imgList = ref<imgplaceholderType[]>([]);

const initImglist = () => {
  // if (mimeType === 'jpg' || mimeType === 'webp') {
  //   imgList.value.push(
  //     {
  //       url: `https://picsum.photos/${imgw.value}/${imgh.value}.${mimeType.value}?random=${Date.now()}`,
  //       type: 'Picsum'
  //     }
  //   )
  // }
  imgList.value = [];
  if (mimeType.value !== 'webp') {
    imgList.value.push(
      {
        url: `https://dummyimage.com/${imgw.value}x${imgh.value}/${bgcolor.value.replace('#', '')}/${textcolor.value.replace('#', '')}.${mimeType.value}&text=${imgText.value}`,
        img: `<img src="https://dummyimage.com/${imgw.value}x${imgh.value}/${bgcolor.value.replace('#', '')}/${textcolor.value.replace('#', '')}.${mimeType.value}&text=${imgText.value}" />`,
        type: 'DummyImage'
      }
    )
  }
  imgList.value.push(
    {
      url: `https://via.placeholder.com/${imgw.value}x${imgh.value}/${bgcolor.value.replace('#', '')}/${textcolor.value.replace('#', '')}.${mimeType.value}?text=${imgText.value}`,
      img: `<img src="https://via.placeholder.com/${imgw.value}x${imgh.value}/${bgcolor.value.replace('#', '')}/${textcolor.value.replace('#', '')}.${mimeType.value}?text=${imgText.value}" />`,
      type: 'ViaPlaceholder'
    }
  )
  imgList.value.push(
    {
      url: `https://placehold.jp/${bgcolor.value.replace('#', '')}/${textcolor.value.replace('#', '')}/${imgw.value}x${imgh.value}.${mimeType.value}?text=${imgText.value}`,
      img: `<img src="https://placehold.jp/${bgcolor.value.replace('#', '')}/${textcolor.value.replace('#', '')}/${imgw.value}x${imgh.value}.${mimeType.value}?text=${imgText.value}" />`,
      type: 'PlaceholdJp'
    }
  )
  imgList.value.push(
    {
      url: `https://devtool.tech/api/placeholder/${imgw.value}/${imgh.value}?text=${imgText.value}&color=${textcolor.value.replace('#', '%23')}&bgColor=${bgcolor.value.replace('#', '%23')}`,
      img: `<img src="https://devtool.tech/api/placeholder/${imgw.value}/${imgh.value}?text=${imgText.value}&color=${textcolor.value.replace('#', '%23')}&bgColor=${bgcolor.value.replace('#', '%23')}" />`,
      type: 'DevtoolTech(不支持定义图片格式)'
    }
  )
  imgList.value.push(
    {
      url: `https://fpoimg.com/${imgw.value}x${imgh.value}?text=${imgText.value}&bg_color=${bgcolor.value.replace('#', '')}&text_color=${textcolor.value.replace('#', '')}`,
      img: `<img src="https://fpoimg.com/${imgw.value}x${imgh.value}?text=${imgText.value}&bg_color=${bgcolor.value.replace('#', '')}&text_color=${textcolor.value.replace('#', '')}" />`,
      type: 'FPOImg(不支持定义图片格式)'
    }
  )
  imgList.value.push(
    {
      url: `https://picsum.photos/${imgw.value}/${imgh.value}.jpg?random=${Date.now()}`,
      img: `<img src="https://picsum.photos/${imgw.value}/${imgh.value}.jpg?random=${Date.now()}" />`,
      type: 'Picsum(只支持jpg)'
    }
  )
}

const emit = defineEmits(['copy'])

const copy = (content: string) => {
  emit('copy', content);
}

watch([imgw, imgh,imgText,bgcolor,textcolor, mimeType], () => {
  initImglist();
});

onMounted(() => {
  initImglist();
})
</script>

<style lang="scss" scoped>

</style>