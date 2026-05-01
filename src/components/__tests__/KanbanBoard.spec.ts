import { render, screen } from '@testing-library/vue';
import { describe, it, expect, beforeEach } from 'vitest';
import KanbanBoard from '../KanbanBoard.vue';

describe('KanbanBoard.vue', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('renders empty base board interaction button and iterates group props visually', () => {
        render(KanbanBoard, {
            props: { groups: [{ id: 1, title: 'Q&A Section', cards: [] }] }
        });
        
        expect(screen.getByText('Q&A Section')).toBeInTheDocument();
        expect(screen.getByText(/\+ Nova Lista/i)).toBeInTheDocument();
    });
});
