<script setup lang="ts">
import { message, Tabs as ATabs, TabPane as ATabPane } from 'ant-design-vue';
import Navigation from '../components/Navigation.vue';
import TextToBase64 from '../components/TextToBase64.vue';
import ImageToBase64 from '../components/ImageToBase64.vue';
import Base64ToImage from '../components/Base64ToImage.vue';
import { copyText } from '../utils/utils.js';

import { ref } from 'vue'

const activeKey = ref<'text'|'imagetobase64'|'base64toimage'>('imagetobase64')


// 复制
const copy = (text) => {
  copyText(text).then(() => {
    message.success('复制成功');
  }).catch(err => {
    message.error('复制失败，可手动选择复制');
    console.log('---- copyText ----:', err);
  });
}
</script>

<template>
  <Navigation title="BASE64编码" />
  <div class="w-full p-[20px] box-border">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="imagetobase64" tab="图片转base64">
        <ImageToBase64 @copy="copy" />
      </a-tab-pane>
      <a-tab-pane key="base64toimage" tab="base64转图片">
        <Base64ToImage @copy="copy" />
      </a-tab-pane>
      <a-tab-pane key="text" tab="文本格式转换" class="w-full">
        <TextToBase64 @copy="copy" />
      </a-tab-pane>
    </a-tabs>
  </div>
  
</template>

<style scoped>

</style>
