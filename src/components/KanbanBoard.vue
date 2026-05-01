<script setup lang="ts">
import { ref } from 'vue';
import type { Group } from '../types';
import GroupList from './GroupList.vue';
import CreateEditGroup from './CreateEditGroup.vue';
import { useKanban } from '../composables/useKanban';

defineProps<{
  groups: Group[];
}>();

const { addGroup } = useKanban();

const isGroupDialogOpen = ref(false);

const openCreateDialog = () => {
    isGroupDialogOpen.value = true;
};

const handleSaveGroup = (payload: { id?: number, title: string }) => {
    if (!payload.id) {
        addGroup(payload.title);
    }
    isGroupDialogOpen.value = false;
};
</script>

<template>
  <div class="flex flex-1 p-6 gap-5 overflow-x-auto items-start h-full pb-8">
    <GroupList v-for="group in groups" :key="group.id" :group="group" />
    
    <!-- Botão interativo para adicionar coluna -->
    <button @click="openCreateDialog" class="bg-transparent hover:bg-white cursor-pointer border-2 border-dashed border-gray-300 rounded-xl p-3 w-80 shrink-0 text-gray-500 hover:text-primary font-semibold transition-colors flex items-center justify-center h-16 shadow-sm">
      + Nova Lista
    </button>

    <CreateEditGroup 
      :isOpen="isGroupDialogOpen" 
      :group="null" 
      @close="isGroupDialogOpen = false" 
      @save="handleSaveGroup" 
    />
  </div>
</template>
