<template>
  <div class="w-full flex flex-col">
    <div class="flex flex-row w-full mb-[10px]">
      <div class="w-[200px] h-[200px] flex-none mr-[10px] border-[2] border-dashed border-[#ccc]">
        <a-image
          v-if="imageUrl"
          :width="200"
          :height="200"
          :src="imageUrl"
        />
      </div>
      <a-upload-dragger
        v-model:fileList="fileList"
        :multiple="false"
        :before-upload="beforeUpload"
        :show-upload-list="false"
        accept="image/*"
        class="flex-1"
      >
        <p class="ant-upload-drag-icon mt-[25px]">
          <inbox-outlined></inbox-outlined>
        </p>
        <p class="ant-upload-text">点击或者拖拽二维码到这里上传</p>
      </a-upload-dragger>
    </div>
    <div class="flex flex-row relative">
      <a-list size="small" bordered :data-source="resultInfo" class="w-[300px] mr-[10px]">
        <template #renderItem="{ item }">
          <a-list-item>{{ item }}</a-list-item>
        </template>
        <template #header>
          <div>二维码信息</div>
        </template>
      </a-list>
      <a-textarea
        v-model:value="resultData"
        :rows="5"
        placeholder="二维码解码结果展示"
        readonly
        resize="auto"
      />
      <a-button v-if="resultData" class="absolute right-0 top-0 z-50" size="small" @click="copy">
        <template #icon><CopyOutlined /></template>
      </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { 
  ref
} from 'vue';
import { 
  Textarea as ATextarea,
  UploadDragger as AUploadDragger,
  List as AList,
  ListItem as AListItem,
  Image as AImage,
  Button as AButton,
  message
} from 'ant-design-vue';
import { InboxOutlined, CopyOutlined } from '@ant-design/icons-vue';
import qrcodeParser from "qrcode-parser";
import { getBase64, formatFileSize, getImgSize } from '../utils/utils.js';

const resultData = ref('');
const fileList = ref([]);
const imageUrl = ref<string>('');
const resultInfo = ref<string[]>([]);

const emit = defineEmits(['copy']);

const beforeUpload = async (file: { name: string; type: string; size: any; }) => {
  if (file.name) {
    resultInfo.value.push('文件名：' + file.name);
  }
  if (file.type) {
    resultInfo.value.push('文件类型：' + file.type);
  }
  if (file.size) {
    resultInfo.value.push('文件大小：' + formatFileSize(file.size));
  }
  const hide = message.loading('数据解析中...', 0);
  const base64Str = await getBase64(file);
  imageUrl.value = base64Str;
  qrcodeParser(base64Str).then((result) => {
    resultData.value = result;
    message.success('解析成功');
  }).catch(() => {
    message.error('解析失败');
  });
  getImgSize(base64Str).then((img) => {
    resultInfo.value.push('图片实际宽：' + img.width +'px');
    resultInfo.value.push('图片实际高：' + img.height +'px');
  })
  hide();
  return false;
}

// 复制
const copy = () => {
  emit('copy', resultData.value);
}

</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>