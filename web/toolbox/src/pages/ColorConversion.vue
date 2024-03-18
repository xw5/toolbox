<script setup lang="ts">
import { ref, watch } from 'vue';
import { Input as AInput, Button as AButton, message, Form as AForm, FormItem, InputGroup } from 'ant-design-vue';
import PickColors from 'vue-pick-colors'
import convert from 'color-convert';
import { CopyOutlined, SmileOutlined } from '@ant-design/icons-vue';
import Navigation from '../components/Navigation.vue';
import { copyText } from '../utils/utils.js';


const labelCol = { span: 3 };
const wrapperCol = { span: 21 };
const formState = ref({
  color16: '',
  colorrgb: '',
  colorhsl: '',
  colorhsv: ''
});

const colorPickerRef = ref('#000000');

/**
 * 颜色转换
 * @param {string} type
 */
const colorComputed = (type) => {
  try {
    switch(type) {
      case 'color16':
        formState.value.colorrgb = convert.hex.rgb(formState.value.color16).join(',');
        formState.value.colorhsl = convert.hex.hsl(formState.value.color16).join(',');
        formState.value.colorhsv = convert.hex.hsv(formState.value.color16).join(',');
        break;
      case 'colorrgb':
        formState.value.color16 = convert.rgb.hex(formState.value.colorrgb);
        formState.value.colorhsl = convert.rgb.hsl(formState.value.colorrgb).join(',');
        formState.value.colorhsv = convert.rgb.hsv(formState.value.colorrgb).join(',');
        break;
      case 'colorhsl':
        formState.value.color16 = convert.hsl.hex(formState.value.colorhsl);
        formState.value.colorrgb = convert.hsl.rgb(formState.value.colorhsl).join(',');
        formState.value.colorhsv = convert.hsl.hsv(formState.value.colorhsl).join(',');
        break;
      case 'colorhsv':
        formState.value.color16 = convert.hsv.hex(formState.value.colorhsv);
        formState.value.colorrgb = convert.hsv.rgb(formState.value.colorhsv).join(',');
        formState.value.colorhsl = convert.hsv.hsl(formState.value.colorhsv).join(',');
        break;
      default:
        break;
    }
    message.success('转换成功');
  }
  catch(err){
    message.error('转换失败');
  }
}

/**
 * 复制颜色值
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
    case 'colorrgb':
      if(copyTextTemp.indexOf('rgb') === -1) {
        copyTextTemp = `rgb(${text})`;
      }
      break;
    case 'colorhsl':
      if(copyTextTemp.indexOf('hsl') === -1) {
        copyTextTemp = `hsl(${text})`;
      }
      break;
    case 'colorhsv':
      if(copyTextTemp.indexOf('hsv') === -1) {
        copyTextTemp = `hsv(${text})`;
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

watch(colorPickerRef, (newVal, oldVal) => {
  console.log('---- watch ----:colorPickerRef', newVal, oldVal);
  formState.value.color16 = newVal;
  formState.value.colorrgb = convert.hex.rgb(newVal).join(',');
  formState.value.colorhsl = convert.hex.hsl(newVal).join(',');
  formState.value.colorhsv = convert.hex.hsv(newVal).join(',');
});

const tipss = ref(['支持表单输入值后失去焦点自动转换','支持picker选择颜色后自动转换','支持一键复制转换结果']);
</script>

<template>
  <Navigation title="颜色转换" />
  <div class="flex flex-col w-full h-screen p-[20px] box-border">
    <div class="flex flex-row w-full">
      <div class="flex flex-col items-center w-[168px] flex-none ml-[8px]">
        <h3 class="text-black text-[16px]  font-normal mb-[10px]">颜色预览</h3>
        <div class="w-[100px] h-[100px] border-2 border-gray-200 border-dashed mb-[10px]">
          <div class="w-full h-full" :style="{backgroundColor: formState.color16}"></div>
        </div>
        <h3 class="text-black text-[16px] font-normal mb-[10px]">颜色选取</h3>
        <pick-colors v-model:value="colorPickerRef"/>
      </div>
      <a-form style="flex: 1" :label-col="labelCol" :wrapper-col="wrapperCol">
        <form-item label="16进制颜色">
          <input-group compact size="large">
            <a-input 
              v-model:value="formState.color16"
              @blur="colorComputed('color16')" 
              style="width: calc(100% - 32px)"
              placeholder="请输入16进制颜色,如#ff0000,ff0000"
            />
            <a-button @click="copyAction(formState.color16, 'color16')">
              <template #icon>
                <CopyOutlined />
              </template>
            </a-button>
          </input-group>
        </form-item>
        <form-item label="RGB颜色">
          <input-group compact  size="large">
            <a-input 
              v-model:value="formState.colorrgb"
              @blur="colorComputed('colorrgb')" 
              style="width: calc(100% - 32px)"
              placeholder="请输入RGB颜色,如255,0,0"
            />
            <a-button @click="copyAction(formState.colorrgb, 'colorrgb')">
              <template #icon>
                <CopyOutlined />
              </template>
            </a-button>
          </input-group>
        </form-item>
        <form-item label="HSL颜色">
          <input-group compact size="large">
            <a-input 
              v-model:value="formState.colorhsl"
              @blur="colorComputed('colorhsl')"  
              style="width: calc(100% - 32px)"
              placeholder="请输入HSL颜色,如0,100%,50%"
            />
            <a-button @click="copyAction(formState.colorhsl, 'colorhsl')">
              <template #icon>
                <CopyOutlined />
              </template>
            </a-button>
          </input-group>
        </form-item>
        <form-item label="HSV颜色">
          <input-group compact size="large">
            <a-input 
              v-model:value="formState.colorhsv" 
              @blur="colorComputed('colorhsv')" 
              style="width: calc(100% - 32px)"
              placeholder="请输入HSV颜色,如0,100%,100%"
            />
            <a-button @click="copyAction(formState.colorhsv, 'colorhsv')">
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
