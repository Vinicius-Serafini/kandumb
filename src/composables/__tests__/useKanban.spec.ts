import { describe, it, expect, beforeEach } from 'vitest';
import { useKanban } from '../useKanban';

describe('useKanban.ts', () => {
    beforeEach(() => {
        localStorage.clear();
        // Since we are resetting storage, we must also re-initialize composable state if it was singleton 
        // Em um cenário real mais severo nós redefiniríamos o singleton ou trataríamos mocks. 
        // Aqui focamos em garantir que as APIs retornadas da feature interagem.
    });

    it('manages groups orchestrating over sync routines properly', () => {
        const { groups, addGroup, loadFromStorage } = useKanban();
        
        loadFromStorage();
        // O cache pode ter se mantido se a memory scope singleton for global Node JS process do Vitest
        const initialSize = groups.value.length;

        addGroup('Testing Global Vue State Architecture');
        
        expect(groups.value).toHaveLength(initialSize + 1);
        expect(groups.value[groups.value.length - 1].title).toBe('Testing Global Vue State Architecture');
    });
});
