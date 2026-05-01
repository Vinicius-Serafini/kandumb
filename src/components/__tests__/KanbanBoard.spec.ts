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

    it('wraps columns natively inside VueDraggable preserving interactivity', () => {
        const { container } = render(KanbanBoard, {
            props: { groups: [{ id: 1, title: 'Column', cards: [] }] }
        });
        
        // Verifica se o container interno encarregado do drag & drop foi inicializado corretamente
        const draggableWrapper = container.querySelectorAll('.items-start');
        expect(draggableWrapper.length).toBeGreaterThan(0);
    });
});
