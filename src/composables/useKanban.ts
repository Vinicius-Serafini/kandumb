import { ref, watch } from 'vue';
import type { Group, Card } from '../types';

const STORAGE_KEY = 'kandumb_data';

// Singleton state
const groups = ref<Group[]>([]);
let isInitialized = false;

export function useKanban() {
  const loadFromStorage = () => {
    if (isInitialized) return;
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      try {
        groups.value = JSON.parse(data);
      } catch (e) {
        console.error("Erro ao processar localstorage", e);
        groups.value = [];
      }
    }
    isInitialized = true;
  };

  const saveToStorage = () => {
    if (!isInitialized) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(groups.value));
  };

  // Watcher ativo que persiste o model inteiro ao mínimo input no model
  if (!isInitialized) {
    watch(groups, () => {
      saveToStorage();
    }, { deep: true });
  }

  const addGroup = (title: string) => {
    if (!title.trim()) return;
    groups.value.push({
        id: Date.now(),
        title: title.trim(),
        cards: []
    });
  };

  const removeGroup = (groupId: number) => {
    groups.value = groups.value.filter(g => g.id !== groupId);
  };

  const addCardToGroup = (groupId: number, title: string, description: string = '') => {
    if (!title.trim()) return;
    const group = groups.value.find(g => g.id === groupId);
    if (group) {
        group.cards.push({
            id: Date.now(),
            title: title.trim(),
            description: description.trim()
        });
    }
  };

  const removeCard = (groupId: number, cardId: number) => {
    const group = groups.value.find(g => g.id === groupId);
    if (group) {
        group.cards = group.cards.filter(c => c.id !== cardId);
    }
  };

  const editCard = (groupId: number, cardId: number, title: string, description: string) => {
    if (!title.trim()) return;
    const group = groups.value.find(g => g.id === groupId);
    if (!group) return;
    const card = group.cards.find(c => c.id === cardId);
    if (card) {
      card.title = title.trim();
      card.description = description.trim();
    }
  };

  const editGroup = (groupId: number, title: string) => {
    if (!title.trim()) return;
    const group = groups.value.find(g => g.id === groupId);
    if (group) {
      group.title = title.trim();
    }
  };

  return {
    groups,
    loadFromStorage,
    addGroup,
    removeGroup,
    addCardToGroup,
    removeCard,
    editCard,
    editGroup
  };
}
