<script setup lang="ts">
import { ref, watch } from 'vue';
import BaseDialog from './BaseDialog.vue';
import BaseButton from './BaseButton.vue';
import type { Group } from '../types';

const props = defineProps<{
  isOpen: boolean;
  group?: Group | null;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'save', payload: { id?: number, title: string }): void;
}>();

const title = ref('');

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    if (props.group) {
      title.value = props.group.title;
    } else {
      title.value = '';
    }
  }
});

const handleSave = () => {
    if (title.value.trim()) {
        emit('save', { id: props.group?.id, title: title.value });
    }
};
</script>

<template>
  <BaseDialog :isOpen="isOpen" :title="group ? 'Editar Lista' : 'Criar Nova Lista'" @close="$emit('close')">
    <div class="flex flex-col gap-2">
      <label class="text-sm font-semibold text-gray-700">Título da Lista</label>
      <input v-model="title" type="text" placeholder="Ex: To Do" class="border border-gray-300 rounded-md p-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 w-full transition-all" autofocus @keyup.enter="handleSave" />
    </div>
    <template #footer>
      <BaseButton variant="danger" @click="$emit('close')">Cancelar</BaseButton>
      <BaseButton variant="primary" @click="handleSave">{{ group ? 'Salvar Alterações' : 'Criar Lista' }}</BaseButton>
    </template>
  </BaseDialog>
</template>
