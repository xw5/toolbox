<script setup lang="ts">
import { Input, Button as AButton, Space, message } from 'ant-design-vue';
import { CopyOutlined } from '@ant-design/icons-vue';
import Navigation from '../components/Navigation.vue';
import { copyText } from '../utils/utils.js';

import { ref } from 'vue'

const { TextArea } = Input;

const originUrl = ref('');
const resultUrl = ref('');

// 编码
const encode = () => {
  resultUrl.value = encodeURIComponent(originUrl.value);
}

// 解码
const decode = () => {
  resultUrl.value = decodeURIComponent(originUrl.value);
}

// 重置
const reset = () => {
  originUrl.value = '';
  resultUrl.value = '';
}

// 复制
const copy = () => {
  copyText(resultUrl.value).then(() => {
    message.success('复制成功');
  }).catch(err => {
    message.error('复制失败，可手动选择复制');
  });
}
</script>

<template>
  <Navigation title="URL编码" />
  <div class="flex flex-col w-full p-[20px] box-border">
    <TextArea
      v-model:value="originUrl"
      :auto-size="{ minRows: 4, maxRows: 10 }"
      placeholder="请输入url"
      allow-clear
    />
    <div class="flex flex-row my-[10px] w-full justify-center">
      <space>
        <a-button type="primary" size="large" @click="encode">
          URL编码
        </a-button>
        <a-button type="primary" size="large" @click="decode">
          URL解码
        </a-button>
        <a-button type="default" size="large" @click="reset">
          重置
        </a-button>
      </space>
    </div>
    <div class="relative">
      <TextArea
        v-model:value="resultUrl"
        :auto-size="{ minRows: 4, maxRows: 10 }"
        readonly
        placeholder="结果"
        allow-clear
      />
      <a-button class="absolute right-0 bottom-0 z-50" size="small" @click="copy">
        <template #icon><CopyOutlined /></template>
      </a-button>
    </div>
  </div>
</template>

<style scoped>

</style>
