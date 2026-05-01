<script setup lang="ts">
import type { Group } from '../types';
import CardItem from './CardItem.vue';

defineProps<{
  group: Group;
}>();
</script>

<template>
  <div class="bg-[#f0f0f0] rounded-xl p-3 w-80 flex-shrink-0 flex flex-col border border-gray-200 shadow-sm max-h-full">
    <!-- Header da coluna -->
    <div class="flex justify-between items-center mb-3 px-1">
      <h3 class="font-bold text-[#0a0a0a] text-sm uppercase tracking-wide">{{ group.title }}</h3>
      <div class="text-xs font-bold bg-white border border-gray-200 text-gray-600 px-2.5 py-0.5 rounded-full shadow-sm">
        {{ group.cards.length }}
      </div>
    </div>

    <!-- Container dos Cards -->
    <div class="flex flex-col gap-2.5 flex-grow overflow-y-auto px-1 py-1">
      <CardItem v-for="card in group.cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>
