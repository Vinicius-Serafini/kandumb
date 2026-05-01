<script setup lang="ts">
import { onMounted } from 'vue';
import AppHeader from './components/AppHeader.vue';
import KanbanBoard from './components/KanbanBoard.vue';
import { useKanban } from './composables/useKanban';

const { groups, loadFromStorage } = useKanban();

onMounted(() => {
    loadFromStorage();
});
</script>

<template>
  <div class="h-screen w-full flex flex-col overflow-hidden bg-[var(--color-base-bg)]">
    <AppHeader />
    
    <main class="flex-1 flex flex-col overflow-hidden">
      <!-- Container Kanban (Data Source = LocalStorage/Vue State) -->
      <div class="flex-1 overflow-hidden relative">
        <KanbanBoard :groups="groups" />
      </div>
    </main>
  </div>
</template>
