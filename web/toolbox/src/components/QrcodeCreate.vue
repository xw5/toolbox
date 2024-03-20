<template>
  <div class="w-full flex flex-col">
    <a-textarea
      v-model:value="originData"
      :rows="5"
      placeholder="请输入要生成二维码的数据"
      allow-clear
      resize="auto"
    />
    <div class="w-full flex flex-row mt-[10px]">
      <a-list size="large" class="flex-1 mr-[16px]">
        <a-list-item>
          <div class="flex flex-row items-center">
            <span>前景颜色：</span>
            <pick-colors v-model:value="color" class="cursor-pointer" :size="40" />
          </div> 
        </a-list-item>
        <a-list-item>
          <div class="flex flex-row items-center">
            <span>前景颜色：</span>
            <pick-colors v-model:value="bgColor" class="cursor-pointer" :size="40" />
          </div> 
        </a-list-item>
        <a-list-item>
          <div class="flex flex-row items-center">
            <span>纠错比例：</span>
            <a-segmented v-model:value="level" :options="segmentedData" />
          </div> 
        </a-list-item>
        <template #header>
          <h3>二维码配置信息</h3>
        </template>
      </a-list>
      <div class="flex flex-col items-center">
        <div class="w-[240px] h-[240px] border-[1px] border-gray-300 border-dashed">
          <a-q-rcode
            v-if="originData"
            ref="qrcodeCanvasRef"
            :value="originData" 
            :color="color" 
            :bg-color="bgColor" 
            :error-level="level" 
            :size="240"
          />
        </div>
        <a-button v-if="originData" type="primary" size="large" class="mt-[10px]" @click="dowloadQrcode">下载</a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { 
  ref
} from 'vue';
import PickColors from 'vue-pick-colors';
import { 
  QRCode as AQRcode, 
  Textarea as ATextarea, 
  List as AList, 
  ListItem as AListItem, 
  Segmented as ASegmented, 
  Button as AButton 
} from 'ant-design-vue';

const originData = ref('');
const color = ref('#000000');
const bgColor = ref('#FFFFFF');
// 容错等级
const segmentedData = ['L', 'M', 'Q', 'H'];
const level = ref<'L'|'M'|'Q'|'H'>(segmentedData[0] as 'L'|'M'|'Q'|'H');

// 二维码下载
const qrcodeCanvasRef = ref(null);
const dowloadQrcode = async () => {
  const url = await qrcodeCanvasRef.value.toDataURL();
  const a = document.createElement('a');
  a.download = Date.now() + '_QRCode.png';
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
</script>

<style scoped>

</style>