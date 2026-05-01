import { render, screen } from '@testing-library/vue';
import { describe, it, expect } from 'vitest';
import AppHeader from '../AppHeader.vue';

describe('AppHeader.vue', () => {
    it('renders heading text properly', () => {
        render(AppHeader);
        expect(screen.getByText(/kandumb/i)).toBeInTheDocument();
    });
});
