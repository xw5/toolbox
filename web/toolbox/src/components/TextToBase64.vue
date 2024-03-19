<template>
  <div class="flex flex-col w-full">
    <TextArea
      v-model:value="originData"
      :rows="10"
      placeholder="请输入源数据"
      allow-clear
      resize="auto"
    />
    <div class="flex flex-row my-[10px] w-full justify-center">
      <space>
        <a-button type="primary" size="large" @click="encodeFn">
          BASE64编码
        </a-button>
        <a-button type="primary" size="large" @click="decodeFn">
          BASE64解码
        </a-button>
        <a-button type="default" size="large" @click="reset">
          重置
        </a-button>
      </space>
    </div>
    <div class="relative">
      <TextArea
        v-model:value="resultData"
        :rows="10"
        readonly
        placeholder="结果在这展示"
        allow-clear
      />
      <a-button v-if="resultData" class="absolute right-0 top-0 z-50" size="small" @click="copy">
        <template #icon><CopyOutlined /></template>
      </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { 
  ref
} from 'vue';
import { Input, Button as AButton, Space } from 'ant-design-vue';
import { CopyOutlined } from '@ant-design/icons-vue';
import { encode, decode } from 'js-base64';

const { TextArea } = Input;

const originData = ref('');
const resultData = ref('');

const emit = defineEmits(['copy']);

// 编码
const encodeFn = () => {
  resultData.value = encode(originData.value);
}

// 解码
const decodeFn = () => {
  resultData.value = decode(originData.value);
}

// 重置
const reset = () => {
  originData.value = '';
  resultData.value = '';
}

// 复制
const copy = () => {
  emit('copy', resultData.value)
}

</script>

<style scoped>

</style>