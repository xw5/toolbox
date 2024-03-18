<script setup lang="ts">
import { ref, watch } from 'vue';
import { Input as AInput, Button as AButton, message, Form as AForm, FormItem, InputGroup } from 'ant-design-vue';
import { CopyOutlined } from '@ant-design/icons-vue';
import * as dayjs from 'dayjs'
import Navigation from '../components/Navigation.vue';
import { copyText } from '../utils/utils.js';


const labelCol = { span: 3 };
const wrapperCol = { span: 21 };
const formState = ref({
  millisecond: '',
  seconds: '',
  date: ''
});

/**
 * 复制时间值
 * @param {String} text
 * @param {String} type
 * @returns
 */
 const copyAction = (text: string, type: string) => {
  let copyTextTemp = text;
  switch(type) {
    case 'color16':
      if(copyTextTemp.indexOf('#') === -1) {
        copyTextTemp = `#${text}`;
      }
      break;
    default:
      break;
  }
  copyText(copyTextTemp).then(() => {
    message.success('复制成功');
  }).catch(err => {
    message.error('复制失败，可手动选择复制');
  });
}

/**
 * 计算时间
 * @param {String} type
 * @returns
 */
const timeComputed = (type) => {
  console.log('---- timeComputed ----:', type);
}
const tipss = ref(['支持表单输入值后失去焦点自动转换','支持picker选择颜色后自动转换','支持一键复制转换结果']);
</script>

<template>
  <Navigation title="时间转换" />
  <div class="flex flex-col w-full h-screen p-[20px] box-border">
    <div class="flex flex-row w-full">
      <a-form style="flex: 1" :label-col="labelCol" :wrapper-col="wrapperCol">
        <form-item label="毫秒时间戳">
          <input-group compact size="large">
            <a-input 
              v-model:value="formState.millisecond"
              @blur="timeComputed('millisecond')" 
              style="width: calc(100% - 32px)"
              :placeholder="'毫秒时间戳,如'+Date.now()"
            />
            <a-button @click="copyAction(formState.millisecond, 'millisecond')">
              <template #icon>
                <CopyOutlined />
              </template>
            </a-button>
          </input-group>
        </form-item>
        <form-item label="秒时间戳">
          <input-group compact size="large">
            <a-input 
              v-model:value="formState.millisecond"
              @blur="timeComputed('millisecond')" 
              style="width: calc(100% - 32px)"
              :placeholder="'秒时间戳,如'+ parseInt(Date.now() / 1000 + '')"
            />
            <a-button @click="copyAction(formState.millisecond, 'millisecond')">
              <template #icon>
                <CopyOutlined />
              </template>
            </a-button>
          </input-group>
        </form-item>
        <form-item label="日期">
          <input-group compact size="large">
            <a-input 
              v-model:value="formState.date"
              @blur="timeComputed('date')" 
              style="width: calc(100% - 32px)"
              placeholder="日期格式,如YYYY-MM-DD HH:mm:ss"
            />
            <a-button @click="copyAction(formState.millisecond, 'date')">
              <template #icon>
                <CopyOutlined />
              </template>
            </a-button>
          </input-group>
        </form-item>
      </a-form>
    </div>
    <ul class="list-none text-[14px] text-[#989898]">
      <li v-for="(item, index) in tipss" :key="index" class="mb-[5px]">
        {{index + 1}}. {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
