import type { Group } from '../types';
import { getStorageData, saveStorageData } from './storage';

export const getAllGroups = (): Group[] => {
  return getStorageData();
};

export const getGroupById = (id: number): Group | undefined => {
  return getStorageData().find(g => g.id === id);
};

export const createGroup = (title: string): Group => {
  const groups = getStorageData();
  const newGroup: Group = {
    id: Date.now() + Math.floor(Math.random() * 10000),
    title: title.trim(),
    cards: []
  };
  groups.push(newGroup);
  saveStorageData(groups);
  return newGroup;
};

export const updateGroup = (id: number, title: string): Group | null => {
  const groups = getStorageData();
  const group = groups.find(g => g.id === id);
  if (group) {
      group.title = title.trim();
      saveStorageData(groups);
      return group;
  }
  return null;
};

export const deleteGroup = (id: number): void => {
  let groups = getStorageData();
  groups = groups.filter(g => g.id !== id);
  saveStorageData(groups);
};

export const saveAllGroups = (groups: Group[]): void => {
  saveStorageData(groups);
};
