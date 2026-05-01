<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  variant?: 'primary' | 'danger' | 'warning' | 'info';
  type?: 'button' | 'submit';
}>();

const classes = computed(() => {
  const base = "px-4 py-2 rounded-md font-semibold transition-colors duration-200 cursor-pointer text-sm shadow-sm";
  switch (props.variant) {
    case 'danger':
      return `${base} bg-transparent border-2 border-danger text-danger hover:bg-danger hover:text-white`;
    case 'warning':
      return `${base} bg-transparent border-2 border-warning text-warning hover:bg-warning hover:text-[#0a0a0a]`;
    case 'info':
      return `${base} bg-transparent border-2 border-info text-info hover:bg-info hover:text-[#0a0a0a]`;
    case 'primary':
    default:
      return `${base} bg-primary text-white hover:opacity-90 border-2 border-primary`;
  }
});
</script>

<template>
  <button :type="type || 'button'" :class="classes">
    <slot></slot>
  </button>
</template>
