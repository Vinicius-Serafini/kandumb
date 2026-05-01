<script setup lang="ts">
import { ref } from 'vue';
import draggable from 'vuedraggable';
import type { Group } from '../types';
import CardItem from './CardItem.vue';
import CreateEditCard from './CreateEditCard.vue';
import CreateEditGroup from './CreateEditGroup.vue';
import ConfirmDialog from './ConfirmDialog.vue';
import { useKanban } from '../composables/useKanban';

const props = defineProps<{
  group: Group;
}>();

const { removeGroup, editGroup, addCardToGroup, removeCard } = useKanban();

const isCardDialogOpen = ref(false);
const isEditGroupDialogOpen = ref(false);

const isConfirmDeleteGroupOpen = ref(false);
const isConfirmDeleteCardOpen = ref(false);
const cardIdToDelete = ref<number | null>(null);

const openAddCardDialog = () => {
    isCardDialogOpen.value = true;
};

const handleSaveCard = (payload: { groupId: number, id?: number, title: string, description: string }) => {
    if (!payload.id) {
        addCardToGroup(payload.groupId, payload.title, payload.description);
    }
    isCardDialogOpen.value = false;
};

const openEditGroupDialog = () => {
    isEditGroupDialogOpen.value = true;
};

const handleSaveGroup = (payload: { id?: number, title: string }) => {
    if (payload.id) {
        editGroup(payload.id, payload.title);
    }
    isEditGroupDialogOpen.value = false;
};

const handleDeleteGroupClick = () => {
    isConfirmDeleteGroupOpen.value = true;
};

const execDeleteGroup = () => {
    removeGroup(props.group.id);
    isConfirmDeleteGroupOpen.value = false;
};

const handleCardRemoveRequest = (cardId: number) => {
    cardIdToDelete.value = cardId;
    isConfirmDeleteCardOpen.value = true;
};

const execDeleteCard = () => {
    if (cardIdToDelete.value !== null) {
        removeCard(props.group.id, cardIdToDelete.value);
    }
    cardIdToDelete.value = null;
    isConfirmDeleteCardOpen.value = false;
};
</script>

<template>
  <div class="bg-[#f0f0f0] rounded-xl p-3 w-80 shrink-0 flex flex-col border border-gray-200 shadow-sm max-h-full">
    <!-- Header da coluna -->
    <div class="flex justify-between items-center mb-3 px-1 group/header group-header cursor-grab active:cursor-grabbing">
      <h3 @click.stop="openEditGroupDialog" class="font-bold text-[#0a0a0a] text-sm uppercase tracking-wide cursor-pointer hover:text-primary transition-colors pr-2 flex-1">{{ group.title }}</h3>
      <div class="flex items-center gap-2">
        <div class="text-xs font-bold bg-white border border-gray-200 text-gray-600 px-2.5 py-0.5 rounded-full shadow-sm">
          {{ group.cards.length }}
        </div>
        <button @click.stop="handleDeleteGroupClick" class="opacity-0 group-hover/header:opacity-100 text-danger hover:bg-red-100 transition-all cursor-pointer font-bold px-2 py-0.5 rounded-md" title="Deletar lista">✕</button>
      </div>
    </div>

    <!-- Container dos Cards -->
    <draggable 
      :list="group.cards"
      group="kanban-cards"
      item-key="id"
      class="flex flex-col gap-2.5 grow overflow-y-auto px-1 py-1 min-h-[50px]"
      ghost-class="opacity-40"
    >
      <template #item="{ element }">
        <CardItem 
          :card="element" 
          :groupId="group.id"
          class="cursor-grab active:cursor-grabbing hover:ring-2 ring-primary ring-opacity-30 transition-shadow"
          @remove="handleCardRemoveRequest(element.id)"
        />
      </template>
    </draggable>

    <button @click="openAddCardDialog" class="mt-2 text-sm text-gray-500 hover:text-[#0a0a0a] font-semibold text-left px-2 py-2 cursor-pointer transition-colors hover:bg-gray-200 rounded-md">
        + Adicionar Tarefa
    </button>

    <!-- Dialogs -->
    <CreateEditCard 
        :isOpen="isCardDialogOpen"
        :card="null"
        :groupId="group.id"
        @close="isCardDialogOpen = false"
        @save="handleSaveCard"
    />

    <CreateEditGroup 
        :isOpen="isEditGroupDialogOpen"
        :group="group"
        @close="isEditGroupDialogOpen = false"
        @save="handleSaveGroup"
    />

    <ConfirmDialog 
        :isOpen="isConfirmDeleteGroupOpen"
        title="Excluir Lista"
        :message="`Deseja deletar permanentemente a lista '${group.title}' e todas as suas tarefas?`"
        confirmText="Excluir"
        @cancel="isConfirmDeleteGroupOpen = false"
        @confirm="execDeleteGroup"
    />

    <ConfirmDialog 
        :isOpen="isConfirmDeleteCardOpen"
        title="Excluir Tarefa"
        message="Tem certeza que deseja deletar permanentemente esta tarefa?"
        confirmText="Excluir"
        @cancel="isConfirmDeleteCardOpen = false"
        @confirm="execDeleteCard"
    />
  </div>
</template>
