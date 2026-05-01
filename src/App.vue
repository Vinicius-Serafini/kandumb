<script setup lang="ts">
import { ref } from 'vue';
import type { Group } from './types';
import AppHeader from './components/AppHeader.vue';
import KanbanBoard from './components/KanbanBoard.vue';
import BaseButton from './components/BaseButton.vue';

// Dados estáticos temporários para validar o Design criado na Task 002
const mockGroups = ref<Group[]>([
  {
    id: 1,
    title: 'To Do',
    cards: [
      { id: 101, title: 'Criar AppHeader minimalista e baseLayout', description: 'Garantir que a tipografia baseada no FAFAFA exiba limpo e suave.' },
      { id: 102, title: 'Adicionar botões de interface de base global', description: 'Botão primário preenchido com borda. Botões informacionais apenas outline. Testar.' },
    ]
  },
  {
    id: 2,
    title: 'In Progress',
    cards: [
      { id: 103, title: 'Montar Board com mock estático e validar interações de listagem', description: 'Estruturação base com CSS e flex.' }
    ]
  },
  {
    id: 3,
    title: 'Done',
    cards: [
      { id: 104, title: 'Setup de arquitetura do projeto no Vite e inicialização Vue', description: '' }
    ]
  }
]);
</script>

<template>
  <div class="h-screen w-full flex flex-col overflow-hidden bg-[var(--color-base-bg)]">
    <AppHeader />
    
    <main class="flex-1 flex flex-col overflow-hidden">
      <!-- Exemplo prático de componentes de botão do sistema da Task 2 -->
      <div class="px-6 py-3 flex gap-3 border-b border-gray-200 bg-white shadow-sm flex-wrap">
        <BaseButton variant="primary">Criar Nova Tarefa</BaseButton>
        <BaseButton variant="warning">Aviso Board</BaseButton>
        <BaseButton variant="danger">Limpar Tudo</BaseButton>
        <BaseButton variant="info">Detalhes UI</BaseButton>
      </div>

      <!-- Container Kanban -->
      <div class="flex-1 overflow-hidden relative">
        <KanbanBoard :groups="mockGroups" />
      </div>
    </main>
  </div>
</template>
