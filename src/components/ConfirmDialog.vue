<script setup lang="ts">
import BaseDialog from './BaseDialog.vue';
import BaseButton from './BaseButton.vue';

defineProps<{
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}>();

const emit = defineEmits<{
  (e: 'confirm'): void;
  (e: 'cancel'): void;
}>();
</script>

<template>
  <BaseDialog :isOpen="isOpen" :title="title" @close="emit('cancel')">
    <div class="flex flex-col gap-6">
      <p class="text-gray-600 text-[15px] leading-relaxed whitespace-pre-line">{{ message }}</p>
      
      <div class="flex justify-end gap-3 mt-1">
        <!-- Padrão estabelecido: Cancelar usa design Danger -->
        <BaseButton variant="danger" @click="emit('cancel')">
          {{ cancelText || 'Cancelar' }}
        </BaseButton>
        <BaseButton variant="primary" @click="emit('confirm')">
          {{ confirmText || 'Confirmar' }}
        </BaseButton>
      </div>
    </div>
  </BaseDialog>
</template>
