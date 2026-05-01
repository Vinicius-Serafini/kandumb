import { render, screen } from '@testing-library/vue';
import { describe, it, expect, beforeEach } from 'vitest';
import GroupList from '../GroupList.vue';

describe('GroupList.vue', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('renders structured group title and visually maps card counts', () => {
        const mockGroup = { id: 1, title: 'Testing List', cards: [{ id: 11, title: 'Card A', description: '' }] };
        render(GroupList, {
            props: { group: mockGroup }
        });
        
        // Assert group presence
        expect(screen.getByText('Testing List')).toBeInTheDocument();
        // Assert items counter pill (it's 1 length)
        expect(screen.getByText('1')).toBeInTheDocument(); 
        // Assert deepest card iteration display
        expect(screen.getByText('Card A')).toBeInTheDocument(); 
    });
});
