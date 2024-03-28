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
    <div class="w-full flex flex-col mt-[10px]">
      <p class="text-[16px] text-[#333] mb-[5px]">以下是常见符号的 URL 编码表格，包括符号、URL编码和描述：</p>
      <table class="urlcode-table" cellspacing="0">
        <thead class="table-secondary">
          <tr>
            <th>符号</th>
            <th>URL编码</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>空格</td>
            <td>%20</td>
            <td>空格</td>
          </tr>
          <tr>
            <td>"</td>
            <td>%22</td>
            <td>双引号</td>
          </tr>
          <tr>
            <td>#</td>
            <td>%23</td>
            <td>井号</td>
          </tr>
          <tr>
            <td>$</td>
            <td>%24</td>
            <td>美元符号</td>
          </tr>
          <tr>
            <td>%</td>
            <td>%25</td>
            <td>百分号</td>
          </tr>
          <tr>
            <td>&amp;</td>
            <td>%26</td>
            <td>和号</td>
          </tr>
          <tr>
            <td>'</td>
            <td>%27</td>
            <td>单引号</td>
          </tr>
          <tr>
            <td>(</td>
            <td>%28</td>
            <td>左圆括号</td>
          </tr>
          <tr>
            <td>)</td>
            <td>%29</td>
            <td>右圆括号</td>
          </tr>
          <tr>
            <td>*</td>
            <td>%2A</td>
            <td>星号</td>
          </tr>
          <tr>
            <td>+</td>
            <td>%2B</td>
            <td>加号</td>
          </tr>
          <tr>
            <td>,</td>
            <td>%2C</td>
            <td>逗号</td>
          </tr>
          <tr>
            <td>/</td>
            <td>%2F</td>
            <td>斜杠</td>
          </tr>
          <tr>
            <td>:</td>
            <td>%3A</td>
            <td>冒号</td>
          </tr>
          <tr>
            <td>;</td>
            <td>%3B</td>
            <td>分号</td>
          </tr>
          <tr>
            <td>&lt;</td>
            <td>%3C</td>
            <td>小于号</td>
          </tr>
          <tr>
            <td>=</td>
            <td>%3D</td>
            <td>等号</td>
          </tr>
          <tr>
            <td>&gt;</td>
            <td>%3E</td>
            <td>大于号</td>
          </tr>
          <tr>
            <td>?</td>
            <td>%3F</td>
            <td>问号</td>
          </tr>
          <tr>
            <td>@</td>
            <td>%40</td>
            <td>亚瑟斯</td>
          </tr>
          <tr>
            <td>[</td>
            <td>%5B</td>
            <td>左方括号</td>
          </tr>
          <tr>
            <td>\</td>
            <td>%5C</td>
            <td>反斜杠</td>
          </tr>
          <tr>
            <td>]</td>
            <td>%5D</td>
            <td>右方括号</td>
          </tr>
          <tr>
            <td>^</td>
            <td>%5E</td>
            <td>尖角号</td>
          </tr>
          <tr>
            <td>_</td>
            <td>%5F</td>
            <td>下划线</td>
          </tr>
          <tr>
            <td>`</td>
            <td>%60</td>
            <td>反引号</td>
          </tr>
          <tr>
            <td>{</td>
            <td>%7B</td>
            <td>左花括号</td>
          </tr>
          <tr>
            <td>|</td>
            <td>%7C</td>
            <td>垂直线</td>
          </tr>
          <tr>
            <td>}</td>
            <td>%7D</td>
            <td>右花括号</td>
          </tr>
          <tr>
            <td>~</td>
            <td>%7E</td>
            <td>波浪号</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss">
.urlcode-table{
  width: 100%;
  text-align: center;
  thead{
    tr{
      border: 1px solid red;
      background-color: #dfdfdd;
      th{
        height: 32px;
      }
    }
  }
  tbody{
    tr{
      td{
        height: 32px;
      }
    }
    tr:nth-child(2n){
      background-color: #f2f2f2;
    }
    tr:nth-child(2n+1){
      background-color: #ffffff;
    }
  }
}
</style>
