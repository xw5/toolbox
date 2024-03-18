<script setup lang="ts">
import { ref, watch } from 'vue';
import { Input as AInput, Button as AButton, message, Space, Form as AForm, FormItem, InputGroup, List as AList, ListItem as AListItem } from 'ant-design-vue';
import { CopyOutlined, SwapOutlined, AimOutlined } from '@ant-design/icons-vue';
import dayjs from 'dayjs'
import Navigation from '../components/Navigation.vue';
import { copyText } from '../utils/utils.js';


const labelCol = { span: 3 };
const wrapperCol = { span: 21 };
const formState = ref<{
  millisecond: string,
  seconds: string,
  date: string
}>({
  millisecond: '',
  seconds: '',
  date: ''
});

/**
 * 复制时间值
 * @param {String|Number} text
 * @param {String} type
 * @returns
 */
 const copyAction = (text: string|number, type: string) => {
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
const timeComputed = (type: string) => {
  switch(type) {
    case 'millisecond':
      formState.value.seconds = parseInt((+formState.value.millisecond / 1000) + '') + '';
      formState.value.date = dayjs(formState.value.millisecond).format('YYYY-MM-DD HH:mm:ss');
      break;
    case 'seconds':
      formState.value.millisecond = parseInt((+formState.value.seconds * 1000) + '') + '';
      formState.value.date = dayjs(+formState.value.seconds * 1000).format('YYYY-MM-DD HH:mm:ss');
      break;
    case 'date':
      formState.value.millisecond = dayjs(formState.value.date).valueOf() + '';
      formState.value.seconds = parseInt(dayjs(formState.value.date).valueOf() / 1000 + '') + '';
      break;
    default:
      break;
  }
}

// 当前时间戳
const nowTimeStamp = () => {
  const timeStamp = dayjs().valueOf();
  formState.value.millisecond = timeStamp + '';
  formState.value.seconds = parseInt((timeStamp / 1000) + '') + '';
  formState.value.date = dayjs().format('YYYY-MM-DD HH:mm:ss');
}

// 重置表单
const reset = () => {
  formState.value.millisecond = '';
  formState.value.seconds = '';
  formState.value.date = '';
}
const tipss = ref(['支持表单输入值后失去焦点自动转换','支持一键获取当前时间戳','支持一键复制转换结果']);


const formState1 = ref<{
  date1: string,
  date2: string
}>({
  date1: '',
  date2: ''
});
/**
 * 验证表单
 * @param {Rule} _rule
 * @param {String} value
 * @returns
 */
const validatePass = async (_rule: Rule, value: string) => {
  if (value === '') {
    return Promise.reject('对比时间不能为空');
  } else {
    if (!/\d+-\d+-\d+\s\d+:\d+:\d+/.test(value)) {
      return Promise.reject('请输入有效的时间');
    }
    return Promise.resolve();
  }
};
// 验证规则
const rules: Record<string, Rule[]> = {
  date1: [{ required: true, validator: validatePass, trigger: 'blur' }],
  date2: [{ required: true, validator: validatePass, trigger: 'blur' }]
};

// 对比结果
const diffResult = ref([]);
// 时间对比
const diffDate = () => {
  const date1 = dayjs(formState1.value.date1);
  const date2 = dayjs(formState1.value.date2);
  diffResult.value = [
    `相差 ${date2.diff(date1, 'year')} 年`,
    `相差 ${date2.diff(date1, 'month')} 月`,
    `相差 ${date2.diff(date1, 'week')}周 `,
    `相差 ${date2.diff(date1, 'day')}天 `,
    `相差 ${date2.diff(date1, 'hour')}小时 `,
    `相差 ${date2.diff(date1, 'minute')}分钟 `,
    `相差 ${date2.diff(date1, 'second')}秒 `,
    `相差 ${date2.diff(date1, 'millisecond')}毫秒 `
  ]
}

const resetDiff = () => {
  formState1.value.date1 = '';
  formState1.value.date2 = '';
  diffResult.value = [];
}
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
              v-model:value="formState.seconds"
              @blur="timeComputed('seconds')" 
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
            <a-button @click="copyAction(formState.date, 'date')">
              <template #icon>
                <CopyOutlined />
              </template>
            </a-button>
          </input-group>
        </form-item>
      </a-form>
    </div>
    <div class="flex flex-row mb-[10px] w-full justify-center">
      <space>
        <a-button type="primary" size="large" @click="nowTimeStamp">
          当前时间戳
        </a-button>
        <a-button type="default" size="large" @click="reset">
          重置
        </a-button>
      </space>
    </div>
    <ul class="list-none text-[14px] text-[#989898]">
      <li v-for="(item, index) in tipss" :key="index" class="mb-[5px]">
        {{index + 1}}. {{ item }}
      </li>
    </ul>
    <div class="flex flex-col w-full">
      <h3 class="my-[15px] text-[14px] text-black text-center w-full">时间对比</h3>
      <div class="flex flex-row w-full items-center">
        <a-form 
          style="flex: 1"
          ref="diffFormRef"
          :model="formState1"
          :rules="rules"
          :label-col="{ span: 3 }"
          :wrapper-col="{ span: 21 }"
        >
          <form-item name="date1" style="width:100%" label="日期1">
            <a-input 
              size="large" 
              placeholder="日期格式,如YYYY-MM-DD HH:mm:ss" 
              v-model:value="formState1.date1"
            />
          </form-item>
          <form-item name="date2" style="width:100%" label="日期2">
            <a-input 
              size="large" 
              placeholder="日期格式,如YYYY-MM-DD HH:mm:ss"
              v-model:value="formState1.date2"
            />
          </form-item>
        </a-form>
        <div class="flex flex-col ml-[10px] h-full">
          <a-button type="primary" class="mb-[24px]" size="large" @click="diffDate">
            对比
            <template #icon>
              <SwapOutlined />
            </template>
          </a-button>
          <a-button type="default" size="large" @click="resetDiff">
            重置
          </a-button>
        </div>
      </div>
      <a-list size="small" bordered :data-source="diffResult" v-if="diffResult && diffResult.length > 0">
        <template #renderItem="{ item }">
          <a-list-item>{{ item }}</a-list-item>
        </template>
        <template #header>
          <div>{{formState1.date1}}-对比-{{formState1.date2}}</div>
        </template>
      </a-list>
    </div>

  </div>
</template>

<style scoped>

</style>
