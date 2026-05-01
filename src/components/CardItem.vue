<script setup lang="ts">
import type { Card } from '../types';

defineProps<{
  card: Card;
}>();
</script>

<template>
  <div class="bg-white p-3.5 rounded-lg shadow-sm border border-gray-200 cursor-grab hover:shadow-md hover:border-violet-300 transition-all select-none">
    <h4 class="font-semibold text-sm mb-1.5 text-[#0a0a0a] leading-tight">{{ card.title }}</h4>
    <p class="text-xs text-gray-500 line-clamp-3" v-if="card.description">{{ card.description }}</p>
  </div>
</template>
