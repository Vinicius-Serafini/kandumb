import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import CardItem from '../CardItem.vue';

describe('CardItem.vue', () => {
    const mockCard = { id: 1, title: 'Test Card', description: 'Desc' };

    it('renders card title and description visual layout', () => {
        render(CardItem, {
            props: { card: mockCard, groupId: 1 }
        });
        expect(screen.getByText('Test Card')).toBeInTheDocument();
        expect(screen.getByText('Desc')).toBeInTheDocument();
    });

    it('emits remove event upwards to GroupList on user deletion request', async () => {
        const user = userEvent.setup();
        const { emitted } = render(CardItem, {
            props: { card: mockCard, groupId: 1 }
        });
        
        await user.click(screen.getByTitle('Remover tarefa'));
        expect(emitted().remove).toBeTruthy();
    });
});
