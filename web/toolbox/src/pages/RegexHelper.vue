<script setup lang="ts">
import { Input as AInput, Button as AButton, Space, message, CheckboxGroup as ACheckboxGroup } from 'ant-design-vue';
import { CopyOutlined } from '@ant-design/icons-vue';
import Navigation from '../components/Navigation.vue';
import { copyText } from '../utils/utils.js';

import { ref } from 'vue'

const { TextArea } = AInput;

const regexStr = ref('');
const prefix = ref('/');
const suffix = ref('/');
const modifiers = ref<string[]>([]);
const source = ref('');
const result = ref('');
const modifiersOptions = [
  {
    label: '全局搜索 g',
    value: 'g'
  },
  {
    label: '忽略大小写 i',
    value: 'i'
  },
  {
    label: '多行模式 m',
    value: 'm'
  }
];

// 编码
const regexTest = () => {
  
}

// 重置
const reset = () => {
  regexStr.value = '';
}

// 复制
const copy = () => {
  if (!regexStr.value) {
    message.error('请输入正则表达式');
    return;
  }
  copyText(regexStr.value).then(() => {
    message.success('复制成功');
  }).catch((err: Error) => {
    message.error('复制失败，可手动选择复制');
    console.log('----  copyText ----:', err);
  });
}
</script>

<template>
  <Navigation title="正则助手" />
  <div class="flex flex-col w-full p-[20px] box-border">
    <div class="relative mb-[10px]">
      <TextArea
        v-model:value="source"
        :rows="6"
        placeholder="在此输入待匹配文本"
        allow-clear
      />
    </div>
    <div class="flex flex-row items-center">
      <a-input 
        v-model:value="regexStr"
        placeholder="在此输入正则表达式"
      >
        <template #addonBefore>
          <span>{{ prefix }}</span>
        </template>
        <template #addonAfter>
          <span class="text-gray-500 ml-[5px]">{{ suffix + modifiers.join('')  }}</span>
        </template>
      </a-input>
    </div>
    <a-checkbox-group class="my-[5px]" v-model:value="modifiers" :options="modifiersOptions" />
    <div class="flex flex-row my-[10px] w-full justify-center">
      <space>
        <a-button type="default" @click="reset">
          重置
        </a-button>
        <a-button :disabled="!regexStr" type="primary" @click="copy">
          复制正则
        </a-button>
        <a-button :disabled="!regexStr || !source" type="primary" @click="regexTest">
          测试
        </a-button>
      </space>
    </div>
    <div class="relative">
      <TextArea
        v-model:value="result"
        :rows="6"
        readonly
        placeholder="匹配结果展示在这里"
      />
    </div>
    <div class="flex flex-col w-full " id="graphicalElement"></div>
  </div>
</template>

<style scoped>

</style>
