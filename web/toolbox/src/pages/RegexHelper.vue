<script setup lang="ts">
import { Input as AInput, Button as AButton, Space, message, CheckboxGroup as ACheckboxGroup, List as AList, ListItem as AListItem, ListItemMeta as AListItemMeta } from 'ant-design-vue';
import { CopyOutlined } from '@ant-design/icons-vue';
import Navigation from '../components/Navigation.vue';
import { copyText } from '../utils/utils.js';
import { parse, Raphael, visualize } from 'regulex_common';

import { ref, onMounted, watch } from 'vue'

const { TextArea } = AInput;

const regexStr = ref('');
const prefix = ref('/');
const suffix = ref('/');
const modifiers = ref<string[]>([]);
const source = ref('');
const result = ref('');

const regexpExamples = ref([
  {
    label: '由数字和26个英文字母组成的字符串',
    value: '^[A-Za-z0-9]+$'
  },
  {
    label: '汉字',
    value: '^[\\u4e00-\\u9fa5]{0,}$'
  },
  {
    label: '邮箱',
    value: '^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$'
  },
  {
    label: '手机',
    value: '^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$'
  },
  {
    label: '座机',
    value: '^\d{3}-\d{8}|\d{4}-\d{7}$'
  },
  {
    label: '身份证',
    value: '^\d{18}|\d{17}[\d|X|x]|\d{15}$'
  },
  {
    label: 'URL',
    value: '^https?://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$'
  },
  {
    label: 'IP地址',
    value: '^\d+\.\d+\.\d+\.\d+$'
  },
  {
    label: '帐号(字母开头，长度5-16，允许字母数字下划线)$',
    value: '^[a-zA-Z][a-zA-Z0-9_]{4,15}$'
  },
  {
    label: '日期格式(2024-03-22 15:36:16)',
    value: '^\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{1,2}:\d{1,2}$'
  },
  {
    label: '强密码(大小写字母+数字，不含特殊字符，长度8-16)',
    value: '^(?=.\*\d)(?=.\*[a-z])(?=.\*[A-Z])[a-zA-Z0-9]{8,16}$'
  },
  {
    label: '强密码(大小写字母+数字+特殊字符，长度8-16)',
    value: '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%^&*])[\da-zA-Z!#$%^&*]{8,16}$'
  },
  {
    label: '强密码(数字、大小写字母组成，至少包含2种,长度8-16)',
    value: '^(?![\d]+$)(?![a-z]+$)(?![A-Z]+$)[\da-zA-z]{8,16}$'
  },
  {
    label: '强密码(数字、大小写字母、特殊字符组成，至少包含2种,长度8-16)',
    value: '^(?![\d]+$)(?![a-z]+$)(?![A-Z]+$)(?![!#$%^&*]+$)[\da-zA-z!#$%^&*]{8,16}$'
  },
])
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

// 正则测试
const regexTest = () => {
  if (!regexStr.value) {
    return;
  }
  let regExp = null;
  try {
    regExp = new RegExp(regexStr.value, modifiers.value.join(''))
  } catch(err){}
  if (!regExp) {
    return;
  };
  const test = regExp.test(source.value);
  // const matchs = regExp.exec(source.value);
  console.log('---- test ----:', test);
  if (!test) {
    message.error('正则表达式测试失败');
    return;
  }
  message.success('正则表达式测试通过');
}

// 正则匹配
const regexMatch = () => {
  if (!regexStr.value) {
    return;
  }
  let regExp = null;
  try {
    regExp = new RegExp(regexStr.value, modifiers.value.join(''))
  } catch(err){}
  if (!regExp) {
    return;
  };
  const matchs = source.value.match(regExp);
  // const matchs = regExp.exec(source.value);
  console.log('---- matchs ----:', matchs);
  if (!matchs) {
    result.value = '没有匹配结果';
    return;
  }
  result.value = JSON.stringify(matchs)
}

// 重置
const reset = () => {
  regexStr.value = '';
  result.value = '';
  source.value = '';
}

// 复制
const copy = () => {
  if (!regexStr.value) {
    message.error('请输入正则表达式');
    return;
  }
  copyText('/'+regexStr.value+'/'+modifiers.value.join('')).then(() => {
    message.success('复制成功');
  }).catch((err: Error) => {
    message.error('复制失败，可手动选择复制');
    console.log('----  copyText ----:', err);
  });
}

/**
 * 复制正则常用表达式
 * @param {string} regstr 
 */
const copyReg = (regstr) => {
  copyText(regstr).then(() => {
    message.success('复制成功');
  }).catch((err: Error) => {
    message.error('复制失败，可手动选择复制');
    console.log('----  copyText ----:', err);
  });
}

// 正则可视化
const regExpVisualization = () => {
  document.querySelector('#graphicalElement').innerHTML = '';
  if (!regexStr.value) {
    return;
  }
  let regExp = null;
  try {
    regExp = new RegExp(regexStr.value, modifiers.value.join(''))
  }
  catch(err){}
  if (!regExp) {
    return;
  };
  const paper = Raphael("graphicalElement", 0, 0);
  try {
    visualize(parse(regExp.source), modifiers.value.join(''), paper)
  } catch (e) {
    if (e instanceof parse.RegexSyntaxError) {
      message.error(e.message);
    }
  }
}

watch([regexStr, modifiers], (newVal, oldVal) => {
  console.log('---- watch ----:regexStr, modifiers', newVal, oldVal);
  regExpVisualization();
});

onMounted(() => {
  regExpVisualization();
})
</script>

<template>
  <Navigation title="正则助手" />
  <div class="flex flex-col w-full p-[20px] box-border">
    <div class="relative mb-[10px]">
      <p class="mb-[5px] text-[14px]">待测试/匹配文本：</p>
      <TextArea
        v-model:value="source"
        :rows="6"
        placeholder="在此输入待测试/匹配文本"
        allow-clear
        show-count
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
    <div class="flex flex-col w-full items-center" id="graphicalElement"></div>
    <div class="flex flex-row my-[10px] w-full justify-center">
      <space>
        <a-button type="default" @click="reset">
          重置
        </a-button>
        <a-button :disabled="!regexStr" type="primary" @click="copy">
          复制正则
        </a-button>
        <a-button :disabled="!regexStr || !source" type="primary" @click="regexTest">
          测试test
        </a-button>
        <a-button :disabled="!regexStr || !source" type="primary" @click="regexMatch">
          匹配match
        </a-button>
      </space>
    </div>
    <div class="relative" v-if="result">
      <p class="mb-[5px] text-[14px]">匹配结果：</p>
      <TextArea
        v-model:value="result"
        :rows="6"
        readonly
        placeholder="匹配结果展示在这里"
      />
    </div>
    <div class="flex flex-row my-[10px] w-full">
      <a-list size="small" bordered class="w-[400px] mr-[5px] bg-[#f9f9f9]">
        <a-list-item><pre>.         除换行符以外的所有字符</pre></a-list-item>
        <a-list-item><pre>^         字符串开头,[]中是取反的意思</pre></a-list-item>
        <a-list-item><pre>$         字符串结尾</pre></a-list-item>
        <a-list-item><pre>\d        匹配数字</pre></a-list-item>
        <a-list-item><pre>\w        匹配字符</pre></a-list-item>
        <a-list-item><pre>\s        匹配空格</pre></a-list-item>
        <a-list-item><pre>[abc]     匹配 a、b 或 c 中的一个字母</pre></a-list-item>
        <a-list-item><pre>[a-z]     匹配 a 到 z 中的一个字母</pre></a-list-item>
        <a-list-item><pre>[^abc]    匹配除了 a、b 或 c 中的其他字母</pre></a-list-item>
        <a-list-item><pre>aa|bb     匹配 aa 或 bb</pre></a-list-item>
        <a-list-item><pre>?         0 次或 1 次匹配</pre></a-list-item>
        <a-list-item><pre>*         匹配 0 次或多次</pre></a-list-item>
        <a-list-item><pre>+         匹配 1 次或多次</pre></a-list-item>
        <a-list-item><pre>{n,}      匹配 n次以上</pre></a-list-item>
        <a-list-item><pre>{m,n}     最少 m 次，最多 n 次匹配</pre></a-list-item>
        <a-list-item><pre>(expr)    捕获 expr 子模式,以 $1 使用它</pre></a-list-item>
        <a-list-item><pre>(?:expr)  忽略捕获的子模式</pre></a-list-item>
        <a-list-item><pre>(?=expr)  前瞻，如exp1(?=exp2) 找exp2前面的exp1</pre></a-list-item>
        <a-list-item><pre>(?!expr)  负前瞻，如exp1(?!exp2) 找后面不是exp2的exp1</pre></a-list-item>
        <template #header>
          <div>语法参考</div>
        </template>
      </a-list>
      <a-list class="flex-1 bg-[#f9f9f9]" size="small" bordered item-layout="horizontal" :data-source="regexpExamples">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta
              :description="item.value"
            >
              <template #title>
                {{ item.label }}
              </template>
            </a-list-item-meta>
            <CopyOutlined title="点击复制" @click="copyReg(item.value)" />
          </a-list-item>
        </template>
        <template #header>
          <div>常用正则示例</div>
        </template>
      </a-list>
    </div>
  </div>
</template>

<style scoped>

</style>
