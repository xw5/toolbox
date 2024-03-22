<script setup lang="ts">
import { onMounted } from 'vue'
import Navigation from '../components/Navigation.vue';
import {MergeView} from "@codemirror/merge"
import { basicSetup } from "codemirror"

onMounted(() => {
  new MergeView({
    a: {
      doc: '',
      extensions: [
        basicSetup
      ],
    },
    b: {
      doc: '',
      extensions: [
        basicSetup
      ]
    },
    // revertControls: 'a-to-b',
    parent: document.querySelector("#diffEditor")
  });
})
</script>

<template>
  <Navigation title="Diff助手" />
  <div class="flex-1 items-center w-full p-[20px] box-border" id="diffEditor"></div>
</template>

<style>
.cm-mergeView,.cm-mergeViewEditors{
  width: 100%;
  height: 100%;
}
.cm-mergeViewEditor{
  background: #fff;
  color: #333;
}
</style>
