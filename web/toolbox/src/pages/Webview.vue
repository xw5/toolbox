<template>
  <div class="w-full h-full flex flex-col">
    <Navigation :title="title" />
    <iframe
      class="W-full flex-1 min-w-[680px]" 
      :src="url" 
      frameborder="0" 
      sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-downloads" 
      allow="cross-origin-isolated; clipboard-read; clipboard-write;"
    />
  </div>
</template>

<script setup lang="ts">
import { 
  ref, 
  onMounted, 
} from 'vue';
import { useRoute } from 'vue-router';
import Navigation from '../components/Navigation.vue';

const url = ref('')
const title = ref('')

onMounted(() => {
  const route = useRoute();
  const query = route.query;
  console.log('---- onMounted ----:query', query);
  url.value = query.url as string;
  title.value = query.title as string;
})
</script>

<style scoped>

</style>