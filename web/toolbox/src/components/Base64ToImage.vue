<template>
  <div class="flex flex-col w-full">
    <div class="relative">
      <TextArea
        v-model:value="originData"
        :rows="10"
        placeholder="base64源码，如:data:image/jpeg;base64,..."
        allow-clear
      />
    </div>
    <div class="flex flex-row my-[10px] w-full justify-center">
      <DownCircleOutlined style="font-size: 36px;color:#989898" />
    </div>
    <div class="flex flex-row w-full">
      <div class="w-[200px] h-[200px] flex-none mr-[10px] border-[2] border-dashed border-[#ccc]">
        <a-image
          v-if="originData"
          :width="200"
          :height="200"
          :src="originData"
        />
      </div>
      <a-list size="small" bordered :data-source="resultInfo" v-if="resultInfo && resultInfo.length > 0">
        <template #renderItem="{ item }">
          <a-list-item>{{ item }}</a-list-item>
        </template>
        <template #header>
          <div>图片信息</div>
        </template>
      </a-list>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { 
  ref,
  watch
} from 'vue';
import { Input, Image as AImage, List as AList, ListItem as AListItem, message } from 'ant-design-vue';
import { getImgSize } from '../utils/utils.js'

const { TextArea } = Input;

const originData = ref<string>('');
const resultInfo = ref<string[]>([]);

watch(originData, async (val) => {
  const matchs = val.match(/data\:(image\/.+?)\;base64\,(.+?)\//);
  if (!matchs) {
    message.success('base64不符合规范');
    return;
  }
  resultInfo.value = [];
  const img = await getImgSize(val);
  resultInfo.value.push(`图片实际宽：${img.width}px`);
  resultInfo.value.push(`图片实际高：${img.width}px`);
  if (matchs[1]) {
    resultInfo.value.push(`图片类型：${matchs[1]}`);
  }
  message.success('转换成功');
});

</script>

<style scoped>

</style>