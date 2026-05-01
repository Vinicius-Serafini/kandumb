import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import CreateEditCard from '../CreateEditCard.vue';

describe('CreateEditCard.vue', () => {
    it('emits save event encapsulating the correct entity when creating', async () => {
        const user = userEvent.setup();
        const { emitted } = render(CreateEditCard, {
            props: { isOpen: true, groupId: 1, card: null }
        });

        // Simulating data entry
        const titleInput = screen.getByPlaceholderText('Ex: Construir layout');
        await user.type(titleInput, 'New Card Title');

        await user.click(screen.getByRole('button', { name: /adicionar tarefa/i }));
        
        const saveEvents = emitted().save as any[];
        expect(saveEvents).toBeTruthy();
        expect(saveEvents[0][0]).toMatchObject({
            groupId: 1,
            title: 'New Card Title'
        });
    });
});
