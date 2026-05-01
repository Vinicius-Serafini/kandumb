import { describe, it, expect, beforeEach } from 'vitest';
import { createCard, updateCard, deleteCard } from '../CardService';
import { createGroup } from '../GroupService';

describe('CardService', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('creates a dynamically referenced new card inside an existing group tree', () => {
        const group = createGroup('Todo Column');
        const card = createCard(group.id, 'Task 1', 'Desc 1');
        
        expect(card).toBeDefined();
        expect(card?.title).toBe('Task 1');
        expect(card?.description).toBe('Desc 1');
    });

    it('discovers and updates native card properties inside arrays', () => {
        const group = createGroup('Doing Column');
        const card = createCard(group.id, 'Task Old', '');
        
        const updated = updateCard(group.id, card!.id, 'Task Updated', 'New Desc');
        
        expect(updated?.title).toBe('Task Updated');
        expect(updated?.description).toBe('New Desc');
    });

    it('deletes card gracefully returning undefined to queries', () => {
        const group = createGroup('Done Column');
        const card = createCard(group.id, 'Del Task', '');
        
        deleteCard(group.id, card!.id);
        
        // Ensure its isolated and physically removed
        const check = updateCard(group.id, card!.id, 'A', 'B');
        expect(check).toBeNull();
    });
});
