<template>
  <div class="flex flex-col w-full">
    <!-- <a-upload
      v-model:file-list="fileList"
      list-type="picture-card"
      class="w-full"
      :show-upload-list="false"
      :before-upload="beforeUpload"
      @change="handleChange"
    >
      <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
      <div v-else>
        <loading-outlined v-if="loading"></loading-outlined>
        <plus-outlined v-else></plus-outlined>
        <div class="ant-upload-text">上图图片</div>
      </div>
    </a-upload> -->
    <div class="flex flex-row w-full">
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
        <p class="ant-upload-drag-icon">
          <inbox-outlined></inbox-outlined>
        </p>
        <p class="ant-upload-text">点击或者拖拽文件到这里上传</p>
        <p class="ant-upload-hint">支持png,jpg,gif,svg等图片格式</p>
      </a-upload-dragger>
    </div>
    <div class="flex flex-row my-[10px] w-full justify-center">
      <DownCircleOutlined style="font-size: 36px;color:#989898" />
    </div>
    <div class="relative flex flex-row">
      <div class="w-[200px] h-[230px] flex-none mr-[10px]" v-if="resultInfo && resultInfo.length > 0">
        <a-list size="small" bordered :data-source="resultInfo">
          <template #renderItem="{ item }">
            <a-list-item>{{ item }}</a-list-item>
          </template>
          <template #header>
            <div>图片信息</div>
          </template>
        </a-list>
      </div>
      <TextArea
        v-model:value="resultData"
        :rows="10"
        readonly
        placeholder="结果在这展示"
      />
      <a-button v-if="resultData" class="absolute right-0 top-0 z-50" size="small" @click="copy">
        <template #icon><CopyOutlined /></template>
      </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Input, Button as AButton, UploadDragger as AUploadDragger, Image as AImage, message, List as AList, ListItem as AListItem } from 'ant-design-vue';
import { CopyOutlined, DownCircleOutlined, InboxOutlined } from '@ant-design/icons-vue';
import { getBase64, formatFileSize, getImgSize } from '../utils/utils.js';

const { TextArea } = Input;

const fileList = ref([]);
const imageUrl = ref<string>('');
const resultData = ref<string>('');
const resultInfo = ref<string[]>([]);

const emit = defineEmits(['copy']);

const beforeUpload = async (file) => {
  console.log('---- beforeUpload ----:', file);
  if (file.name) {
    resultInfo.value.push('文件名：' + file.name);
  }
  if (file.type) {
    resultInfo.value.push('文件类型：' + file.type);
  }
  if (file.size) {
    resultInfo.value.push('文件大小：' + formatFileSize(file.size));
  }
  const hide = message.loading('数据转换中...', 0);
  const base64Str = await getBase64(file);
  imageUrl.value = base64Str;
  resultData.value = base64Str;
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

</style>