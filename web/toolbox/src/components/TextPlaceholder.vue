<template>
  <div class="flex flex-col w-full">
    <div class="relative mb-[10px]">
      <div class="flex flex-row items-center mb-[5px]">
        <p class="text-[14px] whitespace-nowrap mr-[15px]">中文占位符：</p>
        <a-input-group compact>
          <a-button>字符个数</a-button>
          <a-input v-model:value="cnlen" placeholder="输入要生成中文汉字个数，默认为50-100之间随机" style="width: 400px" />
        </a-input-group>
      </div>
      <div class="flex flex-row">
        <TextArea
          v-model:value="cnPlaceholderText"
          :rows="6"
          showCount
          readonly
          class="flex-1"
        />
        <div class="flex flex-col justify-center">
          <a-button class="mb-[10px]" @click="copy(cnPlaceholderText)">复制</a-button>
          <a-button @click="recreateCn">重生成</a-button>
        </div>
      </div>
    </div>
    <div class="relative mb-[20px]">
      <div class="flex flex-row items-center mb-[5px]">
        <p class="text-[14px] whitespace-nowrap mr-[15px]">英文占位符：</p>
        <a-input-group compact>
          <a-button>字符个数</a-button>
          <a-input v-model:value="enlen" placeholder="输入要生成英文单词个数，默认为50-100之间随机" style="width: 400px" />
        </a-input-group>
      </div>
      <div class="flex flex-row">
        <TextArea
          v-model:value="enPlaceholderText"
          :rows="6"
          showCount
          readonly
          class="flex-1"
        />
        <div class="flex flex-col justify-center">
          <a-button class="mb-[10px]" @click="copy(cnPlaceholderText)">复制</a-button>
          <a-button @click="recreateEn">重生成</a-button>
        </div>
      </div>
    </div>
    <div class="flex flex-row">
      <a-list size="small" bordered class="w-full bg-[#f9f9f9]">
        <a-list-item v-for="(item, index) in txPlaceholder" :key="index" class="flex flex-row justify-between">
          <p>
            <span>{{ item.item }}：</span>
            <span>{{ item.value }}</span>
          </p>
          <a-button @click="copy(item.value)">复制</a-button>
        </a-list-item>
        <template #header>
          <div>特殊占位符</div>
        </template>
      </a-list>
      <div class="flex flex-col justify-center">
          <a-button @click="recreateTy">重生成</a-button>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Input as AInput, InputGroup as AInputGroup, Button as AButton, List as AList, ListItem as AListItem } from 'ant-design-vue';
import { Mockjs } from 'mockjs-extend';

const { TextArea } = AInput;
const cnPlaceholderText = ref('');
const enPlaceholderText = ref('');

const cnlen = ref('');
const enlen = ref('');

type typlaceholderType = {
  item: string
  value: string
}
const txPlaceholder = ref<typlaceholderType[]>([])

// 重生成中文段
const recreateCn = () => {
  const cnlenTemp = Number(cnlen.value || Mockjs.Random.integer(50, 100));
  cnPlaceholderText.value = Mockjs.Random.csentence(cnlenTemp);
}

// 重生成英文段
const recreateEn = () => {
  const enlenTemp = Number(enlen.value || Mockjs.Random.integer(50, 100));
  enPlaceholderText.value = Mockjs.Random.sentence(enlenTemp);
}

// 生成殊殊占位符
const recreateTy = () => {
  txPlaceholder.value = [];
  txPlaceholder.value.push({
    item: '中文姓名',
    value: Mockjs.Random.cname()
  });
  txPlaceholder.value.push({
    item: '英文姓名',
    value: Mockjs.Random.name()
  });
  txPlaceholder.value.push({
    item: '手机号',
    value: Mockjs.Random.phone()
  });
  txPlaceholder.value.push({
    item: '银行卡号',
    value: Mockjs.Random.bankCardNo(false, true)
  });
  txPlaceholder.value.push({
    item: '银行卡号脱敏',
    value: Mockjs.Random.bankCardNo(true, true)
  });
  txPlaceholder.value.push({
    item: '日期时间',
    value: Mockjs.Random.datetime('yyyy-MM-dd HH:mm:ss')
  });
  txPlaceholder.value.push({
    item: '邮箱',
    value: Mockjs.Random.email()
  });
  txPlaceholder.value.push({
    item: 'ip',
    value: Mockjs.Random.ip()
  });
  txPlaceholder.value.push({
    item: 'url',
    value: Mockjs.Random.url('http')
  });
  txPlaceholder.value.push({
    item: '地址',
    value: Mockjs.Random.county(true)
  });
}

const emit = defineEmits(['copy'])
const copy = (content: string) => {
  emit('copy', content);
}

onMounted(() => {
  recreateCn();
  recreateEn();
  recreateTy();
})

</script>

<style lang="scss" scoped>

</style>