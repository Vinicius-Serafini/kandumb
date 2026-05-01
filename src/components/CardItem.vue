<script setup lang="ts">
import { ref } from 'vue';
import type { Card } from '../types';
import CreateEditCard from './CreateEditCard.vue';
import { useKanban } from '../composables/useKanban';

const props = defineProps<{
  card: Card;
  groupId: number;
}>();

defineEmits<{
    (e: 'remove'): void
}>()

const { editCard } = useKanban();

const isEditDialogOpen = ref(false);

const openEditDialog = () => {
    isEditDialogOpen.value = true;
};

const handleSaveCard = (payload: { groupId: number, id?: number, title: string, description: string }) => {
    if (payload.id) {
        editCard(payload.groupId, payload.id, payload.title, payload.description);
        isEditDialogOpen.value = false;
    }
};
</script>

<template>
  <div class="bg-white p-3.5 rounded-lg shadow-sm border border-gray-200 cursor-grab hover:shadow-md hover:border-violet-300 transition-all select-none group/card relative">
    <div class="absolute top-2 right-2 opacity-0 group-hover/card:opacity-100 transition-opacity z-10 flex items-center bg-white/90 backdrop-blur rounded p-0.5 shadow-sm border border-gray-100">
      <button @click.stop="openEditDialog" class="text-gray-400 hover:text-primary transition-colors cursor-pointer px-1.5" title="Editar tarefa">✎</button>
      <div class="w-[1px] h-3 bg-gray-200"></div>
      <button @click.stop="$emit('remove')" class="text-gray-400 hover:text-danger transition-colors cursor-pointer px-1.5" title="Remover tarefa">✕</button>
    </div>
    
    <div @click="openEditDialog" class="cursor-pointer">
      <h4 class="font-semibold text-sm mb-1.5 text-[#0a0a0a] leading-tight pr-12">{{ card.title }}</h4>
      <p class="text-xs text-gray-500 line-clamp-3" v-if="card.description">{{ card.description }}</p>
    </div>

    <!-- Dialog de Edição -->
    <CreateEditCard 
        :isOpen="isEditDialogOpen"
        :card="card"
        :groupId="groupId"
        @close="isEditDialogOpen = false"
        @save="handleSaveCard"
    />
  </div>
</template>
