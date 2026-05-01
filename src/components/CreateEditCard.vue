<script setup lang="ts">
import { ref, watch } from 'vue';
import BaseDialog from './BaseDialog.vue';
import BaseButton from './BaseButton.vue';
import type { Card } from '../types';

const props = defineProps<{
  isOpen: boolean;
  card?: Card | null;
  groupId: number;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'save', payload: { groupId: number, id?: number, title: string, description: string }): void;
}>();

const title = ref('');
const description = ref('');

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    if (props.card) {
      title.value = props.card.title;
      description.value = props.card.description || '';
    } else {
      title.value = '';
      description.value = '';
    }
  }
}, { immediate: true });

const handleSave = () => {
    if (title.value.trim()) {
        emit('save', { groupId: props.groupId, id: props.card?.id, title: title.value, description: description.value });
    }
};
</script>

<template>
  <BaseDialog :isOpen="isOpen" :title="card ? 'Editar Tarefa' : 'Nova Tarefa'" @close="$emit('close')">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1.5">
        <label class="text-sm font-semibold text-gray-700">Título da Tarefa</label>
        <input v-model="title" type="text" placeholder="Ex: Construir layout" class="border border-gray-300 rounded-md p-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 w-full transition-all" autofocus @keyup.enter="handleSave" />
      </div>
      <div class="flex flex-col gap-1.5">
        <label class="text-sm font-semibold text-gray-700">Descrição</label>
        <textarea v-model="description" rows="3" placeholder="Detalhes opcionais..." class="border border-gray-300 rounded-md p-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 w-full resize-none transition-all"></textarea>
      </div>
    </div>
    <template #footer>
      <BaseButton variant="danger" @click="$emit('close')">Cancelar</BaseButton>
      <BaseButton variant="primary" @click="handleSave">{{ card ? 'Salvar Alterações' : 'Adicionar Tarefa' }}</BaseButton>
    </template>
  </BaseDialog>
</template>
