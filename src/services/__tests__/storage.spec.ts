import { describe, it, expect, beforeEach } from 'vitest';
import { getStorageData, saveStorageData, STORAGE_KEY } from '../storage';

describe('storage.ts base adapter', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('gracefully returns an empty fallback array when no data exists', () => {
        expect(getStorageData()).toEqual([]);
    });

    it('saves raw complex payloads and retrieves them fully hydrated', () => {
        const payload = [{ id: 1, title: 'Database Core', cards: [] }];
        saveStorageData(payload);
        
        expect(localStorage.getItem(STORAGE_KEY)).toContain('Database Core');
        expect(getStorageData()).toEqual(payload);
    });
});
