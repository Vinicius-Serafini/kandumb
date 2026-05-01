<script setup lang="ts">
import type { Group } from '../types';
import GroupList from './GroupList.vue';

defineProps<{
  groups: Group[];
}>();
</script>

<template>
  <div class="flex flex-1 p-6 gap-5 overflow-x-auto items-start h-full pb-8">
    <GroupList v-for="group in groups" :key="group.id" :group="group" />
    
    <!-- Botão estático para adicionar coluna visualmente -->
    <button class="bg-transparent hover:bg-white border-2 border-dashed border-gray-300 rounded-xl p-3 w-80 flex-shrink-0 text-gray-500 font-semibold transition-colors flex items-center justify-center h-16 shadow-sm">
      + Nova Lista
    </button>
  </div>
</template>
