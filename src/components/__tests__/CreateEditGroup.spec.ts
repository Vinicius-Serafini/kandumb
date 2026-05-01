import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import CreateEditGroup from '../CreateEditGroup.vue';

describe('CreateEditGroup.vue', () => {
    it('populates bound inputs magically when editing an existing group model', () => {
        render(CreateEditGroup, {
            props: { isOpen: true, group: { id: 1, title: 'Backlog', cards: [] } }
        });
        
        const input = screen.getByPlaceholderText('Ex: To Do') as HTMLInputElement;
        expect(input.value).toBe('Backlog');
    });

    it('emits normalized save payload back to parent handling group', async () => {
        const user = userEvent.setup();
        const { emitted } = render(CreateEditGroup, {
            props: { isOpen: true, group: null }
        });

        const input = screen.getByPlaceholderText('Ex: To Do');
        await user.type(input, 'New List Name');
        await user.click(screen.getByRole('button', { name: /criar lista/i }));
        
        const saveEvents = emitted().save as any[];
        expect(saveEvents).toBeTruthy();
        expect(saveEvents[0][0]).toMatchObject({ title: 'New List Name' });
    });
});
