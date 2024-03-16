<template>
  <layout has-sider>
    <layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }"
    >
      <div class="logo" />
      <menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <menu-item key="1">
          <user-outlined />
          <span class="nav-text">nav 1</span>
        </menu-item>
        <menu-item key="2">
          <video-camera-outlined />
          <span class="nav-text">nav 2</span>
        </menu-item>
        <menu-item key="3">
          <upload-outlined />
          <span class="nav-text">nav 3</span>
        </menu-item>
        <menu-item key="4">
          <bar-chart-outlined />
          <span class="nav-text">nav 4</span>
        </menu-item>
        <menu-item key="5">
          <cloud-outlined />
          <span class="nav-text">nav 5</span>
        </menu-item>
        <menu-item key="6">
          <appstore-outlined />
          <span class="nav-text">nav 6</span>
        </menu-item>
        <menu-item key="7">
          <team-outlined />
          <span class="nav-text">nav 7</span>
        </menu-item>
        <menu-item key="8">
          <shop-outlined />
          <span class="nav-text">nav 8</span>
        </menu-item>
      </menu>
    </layout-sider>
    <layout :style="{ marginLeft: '200px' }">
      <layout-header :style="{ background: '#fff', padding: 0 }" />
      <layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
          ...
          <br />
          Really
        </div>
      </layout-content>
      <layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </layout-footer>
    </layout>
  </layout>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined
  } from '@ant-design/icons-vue';
  import {Layout, LayoutSider, Menu, MenuItem, LayoutHeader, LayoutContent, LayoutFooter } from 'ant-design-vue'

  const selectedKeys = ref<string[]>(['4']);
</script>
<style scoped>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>