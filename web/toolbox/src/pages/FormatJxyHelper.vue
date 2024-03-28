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
  Modal as AModal,
  message
} from 'ant-design-vue';
import { QuestionCircleOutlined } from '@ant-design/icons-vue';
import Navigation from '../components/Navigation.vue';
// @ts-ignore
import { toXML } from 'jstoxml';
import { xmlToJson } from "xml-to-json-parser";
import YAML from 'yaml'
import Papa from 'papaparse';
const formatType = ref<'jty'|'jtx'|'xtj'|'ytj'|'xty'|'ytx'|'ctj'|'jtc'>('jtx');
const code0 = ref('');
const code1 = ref();
const showTips = ref(false)

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
    case 'jtc':
      try {
        const resultjtc = Papa.unparse(code0.value);
        code1.value = resultjtc;
      }
      catch(err){
        message.error('json转csv失败，请确定待转json格式是否正确');
      }
      break;
    case 'ctj':
      try {
        const resultctj = Papa.parse(code0.value, {header: true});
        if (resultctj.errors && resultctj.errors.length > 0) {
          message.error('csv转json失败，请确定待转csv格式是否正确');
          return;
        }
        code1.value = JSON.stringify(resultctj.data, null, '\t');
      }
      catch(err){
        message.error('csv转json失败，请确定待转csv格式是否正确');
      }
      break;
    default:
      break;
  }
}

const showTipsModal = () => {
  showTips.value = true;
}
const tipsHide = () => {
  showTips.value = false;
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
      <a-select-option value="jtc">JSON To CSV</a-select-option>
      <a-select-option value="ctj">CSV To JSON</a-select-option>
    </a-select>
    <a-button @click="reset" class="mr-[10px]">重置</a-button>
    <a-button type="primary" class="mr-[10px]" @click="format">转换</a-button>
    <QuestionCircleOutlined v-if="formatType === 'jtc'" title="帮助提示" class="text-[24px] text-[#999]" @click="showTipsModal" />
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
  <a-modal 
    centered 
    v-model:open="showTips" 
    width="800px" 
    :wrap-style="{ overflow: 'hidden'}"
  >
    <div v-if="formatType === 'jtc'" class="flex flex-col">
      <p>JSON转CSV，json得是一个数组，或者带有fields,data字段的json数据，示例如下：</p>
      <div class="flex flex-row">
        <pre class="mr-[10px] bg-[#f5f5f5] p-[5px]">
          <code>
[
  ["1-1", "1-2", "1-3"],
  ["2-1", "2-2", "2-3"]
]
          </code>
        </pre>
        <pre class="mr-[10px] bg-[#f5f5f5] p-[5px]">
          <code>
[
  {
    "Column 1": "foo",
    "Column 2": "bar"
  },
  {
    "Column 1": "abc",
    "Column 2": "def"
  }
]
          </code>
        </pre>
        <pre class="bg-[#f5f5f5] p-[5px]">
          <code>
{
  "fields": ["Column 1", "Column 2"],
  "data": [
    ["foo", "bar"],
    ["abc", "def"]
  ]
}
          </code>
        </pre>
      </div>
    </div>
    <template #footer>
      <a-button @click="tipsHide">知道了</a-button>
    </template>
  </a-modal>
</template>

<style>
</style>
