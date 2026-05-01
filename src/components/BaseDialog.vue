<script setup lang="ts">
defineProps<{
  isOpen: boolean;
  title: string;
}>();

defineEmits<{
  (e: 'close'): void;
}>();
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" @click.self="$emit('close')">
      <div class="bg-white rounded-xl shadow-xl w-full max-w-md flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        <!-- Header -->
        <div class="px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h2 class="text-lg font-bold text-[#0a0a0a]">{{ title }}</h2>
          <button @click="$emit('close')" class="text-gray-400 hover:text-danger hover:bg-red-50 transition-colors cursor-pointer text-xl font-bold w-8 h-8 flex items-center justify-center rounded-md">&times;</button>
        </div>
        
        <!-- Content -->
        <div class="p-5 overflow-y-auto">
          <slot></slot>
        </div>

        <!-- Footer -->
        <div v-if="$slots.footer" class="p-4 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3 rounded-b-xl">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>
