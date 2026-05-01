import type { Group } from '../types';

export const STORAGE_KEY = 'kandumb_data';

export const getStorageData = (): Group[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
        try {
            return JSON.parse(data);
        } catch (e) {
            console.error("Storage format exception:", e);
            return [];
        }
    }
    return [];
};

export const saveStorageData = (groups: Group[]): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(groups));
};
