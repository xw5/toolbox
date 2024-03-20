<script setup lang="ts">
import { ref } from 'vue'
import { Input, Select as ASelect, SelectOption as ASelectOption } from 'ant-design-vue';
import { SwapOutlined, UndoOutlined } from '@ant-design/icons-vue';
import Navigation from '../components/Navigation.vue';

const { TextArea } = Input;

const prev = ref('');
const current = ref('');
const language = ref('plaintext');
// 交换
const exchange = () => {
  [prev.value, current.value] = [current.value, prev.value];
}

// 重置
const reset = () => {
  prev.value = '';
  current.value = '';
}
</script>

<template>
  <Navigation title="Diff助手" />
  <div class="flex flex-row items-center w-full p-[20px] box-border">
    <TextArea
      v-model:value="prev"
      placeholder="请输入要对比的文本0"
      allow-clear
      :rows="15"
      resize="auto"
    />
    <div class="flex flex-col px-[5px]">
      <SwapOutlined style="font-size: 36px;" @click="exchange" class="text-gray-300 flex-none mb-[10px] hover:text-gray-500" />
      <UndoOutlined style="font-size: 36px;" @click="reset" class="text-gray-300 flex-none hover:text-gray-500" />
    </div>
    <TextArea
        v-model:value="current"
        placeholder="请输入要对比的文本1"
        allow-clear
        resize="auto"
        :rows="15"
      />
  </div>
  <div class="flex flex-col w-full px-[20px] box-border" v-if="prev || current">
    <a-select
      ref="select"
      v-model:value="language"
    >
      <a-select-option value="plaintext">plaintext, txt, text</a-select-option>
      <a-select-option value="javascript">javascript, js, jsx</a-select-option>
      <a-select-option value="typescript">typescript, ts</a-select-option>
      <a-select-option value="xml">xml, html, xhtml, rss, atom, xjb, xsd, xsl, plist, svg</a-select-option>
      <a-select-option value="json">json</a-select-option>
      <a-select-option value="markdown">markdown, md, mkdown, mkd</a-select-option>
      <a-select-option value="java">java</a-select-option>
      <a-select-option value="python">python</a-select-option>
      <a-select-option value="yaml">yaml</a-select-option>
      <a-select-option value="bash">bash</a-select-option>
      <a-select-option value="sql">sql</a-select-option>
    </a-select>
    <CodeDiff
      output-format="side-by-side"
      theme="light"
      :language="language"
      :oldString="prev"
      :newString="current"
    />
  </div>
</template>

<style scoped>

</style>
