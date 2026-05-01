import { ref, watch } from 'vue';
import type { Group } from '../types';
import { getAllGroups, createGroup, updateGroup, deleteGroup, saveAllGroups } from '../services/GroupService';
import { createCard, updateCard, deleteCard } from '../services/CardService';

// Singleton state
const groups = ref<Group[]>([]);
let isInitialized = false;

export function useKanban() {
  const syncState = () => {
    groups.value = getAllGroups();
  };

  const loadFromStorage = () => {
    if (!isInitialized) {
      syncState();
      isInitialized = true;
      
      // Salva qualquer mutação que sofra by-pass (como os drags e reorderings futuros)
      watch(groups, (newVal) => {
        saveAllGroups(newVal);
      }, { deep: true });
    }
  };

  const addGroup = (title: string) => {
    createGroup(title);
    syncState();
  };

  const removeGroup = (groupId: number) => {
    deleteGroup(groupId);
    syncState();
  };

  const editGroup = (groupId: number, title: string) => {
    updateGroup(groupId, title);
    syncState();
  };

  const addCardToGroup = (groupId: number, title: string, description: string = '') => {
    createCard(groupId, title, description);
    syncState();
  };

  const removeCard = (groupId: number, cardId: number) => {
    deleteCard(groupId, cardId);
    syncState();
  };

  const editCard = (groupId: number, cardId: number, title: string, description: string) => {
    updateCard(groupId, cardId, title, description);
    syncState();
  };

  return {
    groups,
    loadFromStorage,
    addGroup,
    removeGroup,
    editGroup,
    addCardToGroup,
    removeCard,
    editCard
  };
}
