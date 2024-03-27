<script setup lang="ts">
import { ref } from 'vue'
import { Codemirror } from 'vue-codemirror';
// import { basicSetup } from 'codemirror';
// @ts-ignore
import { xml } from '@codemirror/lang-xml';
import { json } from '@codemirror/lang-json';
// @ts-ignore
import { yaml } from '@codemirror/lang-yaml';
import { 
  Button as AButton, 
  Select as ASelect, 
  SelectOption as ASelectOption,
  message
} from 'ant-design-vue';
import Navigation from '../components/Navigation.vue';
// @ts-ignore
import { toXML } from 'jstoxml';
import { xmlToJson } from "xml-to-json-parser";
import YAML from 'yaml'
const formatType = ref<'jty'|'jtx'|'xtj'|'ytj'|'xty'|'ytx'>('jtx');
const code0 = ref('');
const code1 = ref();

const reset = () => {
  code0.value = '';
  code1.value = '';
}

const format = () => {
  if (!code0.value) {
    message.info('请输入需要转化的内容');
    return;
  }
  switch(formatType.value) {
    case 'jty':
      try {
        code1.value = YAML.stringify(JSON.parse(code0.value));
      }
      catch(err){
        message.error('json转yaml失败，请确定待转json是否是标准的json格式');
      }
      break;
    case 'jtx':
      try {
        code1.value = toXML(JSON.parse(code0.value), {indent: '\t'});
      }
      catch(err){
        message.error('json转yaml失败，请确定待转json是否是标准的json格式');
      }
      break;
    case 'xtj':
      try {
        // const resultxtj = xmlToJsonUtil(code0.value.replace(/\s/g, ''));
        const resultxtj = xmlToJson(code0.value);
        code1.value = JSON.stringify(resultxtj, null, '\t');
      }
      catch(err){
        message.error('xml转json失败，请确定待转xml格式是否正确');
      }
      break;
    case 'ytj':
      try {
        const resultytj = YAML.parse(code0.value);
        code1.value = JSON.stringify(resultytj, null, '\t');
      }
      catch(err){
        message.error('yaml转json失败，请确定待转yaml格式是否正确');
      }
      break;
    case 'ytx':
      try {
        const resultytj = YAML.parse(code0.value);
        console.log('---- xty ----:', resultytj);
        code1.value = toXML(resultytj, {indent: '\t'});
      }
      catch(err){
        message.error('yaml转xml失败，请确定待转yaml格式是否正确');
      }
      break;
    case 'xty':
      try {
        const resultxty = xmlToJson(code0.value);
        code1.value = YAML.stringify(resultxty);
      }
      catch(err){
        message.error('xml转yaml失败，请确定待转xml格式是否正确');
      }
      break;
    default:
      break;
  }
}
</script>

<template>
  <Navigation title="JSON-XML-YAML格式互转" :back="true" />
  <div class="w-full flex-none flex flex-row mt-[10px] items-center justify-center">
    <a-select
      class="w-[200px] mr-[10px]"
      ref="select"
      v-model:value="formatType"
    >
    <a-select-option value="jtx">JSON To XML</a-select-option>
    <a-select-option value="xtj">XML To JSON</a-select-option>
    <a-select-option value="jty">JSON To YAML</a-select-option>
      <a-select-option value="ytj">YAML To JSON</a-select-option>
      <a-select-option value="xty">XML To YAML</a-select-option>
      <a-select-option value="ytx">YAML To XML</a-select-option>
    </a-select>
    <a-button @click="reset" class="mr-[10px]">重置</a-button>
    <a-button type="primary" @click="format">转换</a-button>
  </div>
  <div class="flex flex-row flex-1 w-full p-[10px] box-border">
    <div class="flex-1 bg-white">
      <Codemirror
        v-model="code0"
        placeholder="Code goes here..."
        :style="{ height: '100%' }"
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="[json(), xml(), yaml()]"
      />
    </div>
    <div class="flex-1 bg-white">
      <Codemirror
        v-model="code1"
        placeholder="Code goes here..."
        :style="{ height: '100%' }"
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="[json(), xml(), yaml()]"
        read-only
      />
    </div>
  </div>
</template>

<style>
</style>
