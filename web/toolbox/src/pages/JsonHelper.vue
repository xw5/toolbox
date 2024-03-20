<template>
  <div class="container">
    <Navigation title="JSON助手" />
    <JsonEditorVue class="w-full" />
  </div>
</template>

<script setup>
import { 
  ref
} from 'vue';
import JsonEditorVue from 'json-editor-vue';
import Navigation from '../components/Navigation.vue';
const value = ref();
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>