<script setup lang="ts">
import { ref } from 'vue'
import RckImage from "rck-image";
import { Image as AImage, message, Select as ASelect, SelectOption as ASelectOption, FormItem as AFormItem, Button as AButton, UploadDragger as AUploadDragger, List as AList, ListItem as AListItem } from 'ant-design-vue';
import Navigation from '../components/Navigation.vue';
import { InboxOutlined } from '@ant-design/icons-vue';
import { downloadFileByBase64 } from '../utils/utils';

const fileList = ref<File[]>([]);
const convertImgs = ref<{img: string, isOK: boolean, uid: string, name: string}[]>([]);
const miniType = ref('webp');
const isFinish = ref(false);

const beforeUpload = (file) => {
  console.log('---- beforeUpload ----:', file);
  fileList.value.push(file);
  return false;
}

// 下载
const downloadItem = (item: File) => {
  const download = convertImgs.value.find(img => img.uid === item.uid);
  if (download) {
    downloadFileByBase64(download.img, download.name + Date.now());
  }
}

// 开始转换
const convert = () => {
  const loading = message.loading('正在转换中...');
  fileList.value.forEach(async (file) => {
    try {
      const index = convertImgs.value.findIndex(img => img.uid === file.uid);
      // 只有没转换完的才走转换逻辑
      if (index === -1) {
        const res = await RckImage(file).dataURL({ type: miniType.value, quality: 1 });
        if (res) {
          convertImgs.value.push({
            // @ts-ignore
            uid: file.uid,
            img: res,
            isOK: true,
            name: file.name.split('.')[0]
          });
        }
      }
    } catch(err) {}
  })
  loading();
  isFinish.value = true;
  console.log('---- convert ----:', convertImgs.value);
}

const reset = () => {
  fileList.value = [];
  isFinish.value = false;
  convertImgs.value = [];
}

/**
 * 批量下载
 */
const batchUpload = () => {
  convertImgs.value.forEach((item) => {
    downloadFileByBase64(item.img, item.name + Date.now());
  })
}
</script>

<template>
  <Navigation title="图片格式助手" />
  <div class="w-full p-[20px] flex flex-col box-border">
      <a-upload-dragger
        :multiple="true"
        :before-upload="beforeUpload"
        :show-upload-list="false"
        accept="image/*"
        class="flex-1"
      >
        <p class="ant-upload-drag-icon">
          <inbox-outlined></inbox-outlined>
        </p>
        <p class="ant-upload-text">点击或者拖拽文件到这里上传</p>
        <p class="ant-upload-hint">支持webp、png、jpg、svg、BMP等图片格式</p>
      </a-upload-dragger>
      <div class="flex flex-row py-[10px] justify-center">
        <a-button @click="reset" class="mr-[10px]">重置</a-button>
        <a-form-item label="要转换到的格式" class="mr-[10px]">
          <a-select
            ref="select"
            v-model:value="miniType"
            style="width: 120px"
          >
            <a-select-option value="image/webp">WEBP</a-select-option>
            <a-select-option value="image/jpeg">JPG</a-select-option>
            <a-select-option value="image/png">PNG</a-select-option>
            <a-select-option value="image/svg+xml">SVG</a-select-option>
            <a-select-option value="image/bmp">BPM</a-select-option>
          </a-select>
        </a-form-item>
        <a-button type="primary" @click="convert">转换</a-button>
      </div>
      <a-list size="large" bordered :data-source="fileList">
        <template #renderItem="{ item }">
          <a-list-item class="w-full flex flex-row justify-between">
            <span>{{ item.name }}</span>
            <a-image
              v-if="convertImgs.find(v => v.uid === item.uid)?.img"
              :width="32"
              :height="32"
              :src="convertImgs.find(v => v.uid === item.uid)?.img"
            />
            <a-button v-if="convertImgs.findIndex(v => v.uid === item.uid) === -1" disabled loading>待转换...</a-button>
            <a-button type="primary" v-else @click="downloadItem(item)">下载</a-button>
          </a-list-item>
        </template>
        <template #header>
          <div>图片列表</div>
        </template>
        <template #footer v-if="convertImgs.length > 0">
          <div class="flex flex-row justify-end">
            <a-button type="primary" @click="batchUpload">批量下载</a-button>
          </div>
        </template>
      </a-list>
  </div>
  
</template>

<style scoped>

</style>
