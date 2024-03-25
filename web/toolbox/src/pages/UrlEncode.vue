<script setup lang="ts">
import { Input, Button as AButton, Space, message } from 'ant-design-vue';
import { CopyOutlined } from '@ant-design/icons-vue';
import Navigation from '../components/Navigation.vue';
import { copyText } from '../utils/utils.js';

import { ref } from 'vue'

const { TextArea } = Input;

const originUrl = ref('');
const result0 = ref({
  type: '',
  value: ''
});
const result1 = ref({
  type: '',
  value: ''
});

// 编码
const encode = () => {
  if (!originUrl.value) {
    message.warning('请输入待编码url');
    return;
  }
  try {
    result0.value.type = 'encodeURI';
    result0.value.value = encodeURI(originUrl.value);
  }
  catch(err){
    console.log('----  encodeURI ----:', err);
    result1.value.value = '编码出错了，你确认url是否符合规范';
  }

  try {
    result1.value.type = 'encodeURIComponent';
    result1.value.value = encodeURIComponent(originUrl.value);
  }
  catch(err){
    console.log('----  encodeURIComponent ----:', err);
    result1.value.value = '编码出错了，你确认url是否符合规范';
  }

}

// 解码
const decode = () => {
  let originUrlTemp = originUrl.value;
  if (!originUrlTemp) {
    message.warning('请输入待解码url');
    return;
  }
  try {
    result0.value.type = 'decodeURI';
    result0.value.value = decodeURI(originUrl.value);
  }
  catch(err){
    console.log('----  decodeURI ----:', err);
    result1.value.value = '解码出错了，你确认url是否符合规范';
  }

  try {
    result1.value.type = 'decodeURIComponent';
    result1.value.value = decodeURIComponent(originUrl.value);
  }
  catch(err){
    console.log('----  decodeURIComponent ----:', err);
    result1.value.value = '解码出错了，你确认url是否符合规范';
  }
}

// 重置
const reset = () => {
  originUrl.value = '';
  result0.value = {
    type: '',
    value: ''
  };
  result1.value = {
    type: '',
    value: ''
  };
}

// 复制
const copy = (url) => {
  copyText(url).then(() => {
    message.success('复制成功');
  }).catch((err: Error) => {
    message.error('复制失败，可手动选择复制');
    console.log('----  copyText ----:', err);
  });
}
</script>

<template>
  <Navigation title="URL编码" />
  <div class="flex flex-col w-full p-[20px] box-border">
    <TextArea
      v-model:value="originUrl"
      :auto-size="{ minRows: 6, maxRows: 10 }"
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
    <div class="relative" v-if="result0.type">
      <p class="mb-[5px] text-[14px] font-bold text-[#16a34a]">{{ result0.type }}:</p>
      <TextArea
        v-model:value="result0.value"
        :auto-size="{ minRows: 6, maxRows: 10 }"
        readonly
        placeholder="结果"
        allow-clear
      />
      <a-button class="absolute right-0 bottom-0 z-50" size="small" @click="copy(result0.value)">
        <template #icon><CopyOutlined /></template>
      </a-button>
    </div>
    <div class="relative" v-if="result1.type">
      <p class="mb-[5px] text-[14px] font-bold text-[#16a34a]">{{ result1.type }}:</p>
      <TextArea
        v-model:value="result1.value"
        :auto-size="{ minRows: 6, maxRows: 10 }"
        readonly
        placeholder="结果"
        allow-clear
      />
      <a-button class="absolute right-0 bottom-0 z-50" size="small" @click="copy(result1.value)">
        <template #icon><CopyOutlined /></template>
      </a-button>
    </div>
    <ul class="text-[14px] mt-[10px] list-none text-[#666]">
      <li>注：本工具使用encodeURI/decodeURI和encodeURIComponent/decodeURIComponent方法进行编码/解码,</li>
      <li>encodeURI 方法不会对ASCII字母、数字、~!@#$&*()=:/,;?+' 编码</li>
      <li>encodeURIComponent 方法不会对ASCII字母、数字、~!*()' 编码</li>
      <li>encodeURIComponent 比 encodeURI 编码的范围大</li>
      <li>当你需要编码整个 URL，就用 encodeURI,只需要编码 URL 中的参数时，就使用 encodeURIComponent</li>
    </ul>
  </div>
</template>

<style scoped>

</style>
