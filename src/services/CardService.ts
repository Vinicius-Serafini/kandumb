import type { Card } from '../types';
import { getStorageData, saveStorageData } from './storage';

export const createCard = (groupId: number, title: string, description: string): Card | null => {
  const groups = getStorageData();
  const group = groups.find(g => g.id === groupId);
  if (!group) return null;

  const newCard: Card = {
    id: Date.now() + Math.floor(Math.random() * 10000),
    title: title.trim(),
    description: description.trim()
  };
  group.cards.push(newCard);
  saveStorageData(groups);
  return newCard;
};

export const updateCard = (groupId: number, cardId: number, title: string, description: string): Card | null => {
  const groups = getStorageData();
  const group = groups.find(g => g.id === groupId);
  if (!group) return null;

  const card = group.cards.find(c => c.id === cardId);
  if (card) {
      card.title = title.trim();
      card.description = description.trim();
      saveStorageData(groups);
      return card;
  }
  return null;
};

export const deleteCard = (groupId: number, cardId: number): void => {
  const groups = getStorageData();
  const group = groups.find(g => g.id === groupId);
  if (group) {
      group.cards = group.cards.filter(c => c.id !== cardId);
      saveStorageData(groups);
  }
};
