<template>
  <div class="w-full flex flex-col">
    <Navigation title="JSON助手" />
    <!-- <JsonEditorVue class="w-full" /> -->
    <div id="jsonEditorElement" class="w-full px-[10px] box-border"></div>
  </div>
</template>

<script setup lang="ts">
// import JsonEditorVue from 'json-editor-vue';
import { onMounted } from 'vue';
import { JSONEditor } from 'vanilla-jsoneditor';
import Navigation from '../components/Navigation.vue';

onMounted(() => {
  const jsonEditorElement = document.getElementById('jsonEditorElement') as HTMLElement;
  new JSONEditor({
    target: jsonEditorElement
  });
})
</script>

<style scoped>
</style>