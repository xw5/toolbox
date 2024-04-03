<script setup lang="ts">
import { message, Tabs as ATabs, TabPane as ATabPane } from 'ant-design-vue';
import Navigation from '../components/Navigation.vue';
import TextPlaceholder from '../components/TextPlaceholder.vue';
import ImgPlaceholder from '../components/ImgPlaceholder.vue';
import { copyText } from '../utils/utils.js';

import { ref } from 'vue'

const activeKey = ref<'encode'|'decode'>('encode')


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
  <Navigation title="占位符工具" />
  <div class="w-full p-[20px] box-border">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="encode" tab="文本占位">
        <text-placeholder @copy="copy" />
      </a-tab-pane>
      <a-tab-pane key="decode" tab="图片占位">
        <img-placeholder @copy="copy" />
      </a-tab-pane>
    </a-tabs>
  </div>
  
</template>

<style scoped>

</style>
