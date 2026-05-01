import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import BaseButton from '../BaseButton.vue';

describe('BaseButton.vue', () => {
    it('renders slot content correctly', () => {
        render(BaseButton, {
            slots: { default: 'Click Me!' }
        });
        expect(screen.getByRole('button', { name: /click me!/i })).toBeInTheDocument();
    });

    it('emits click event when clicked by the user', async () => {
        const user = userEvent.setup();
        const { emitted } = render(BaseButton, {
            slots: { default: 'Submit Action' }
        });

        const button = screen.getByRole('button', { name: /submit/i });
        await user.click(button);

        expect(emitted().click).toBeTruthy();
        expect(emitted().click.length).toBe(1);
    });

    it('applies danger variant classes correctly when specified', () => {
        render(BaseButton, {
            props: { variant: 'danger' },
            slots: { default: 'Delete' }
        });
        
        const button = screen.getByRole('button', { name: /delete/i });
        expect(button.className).toContain('text-danger');
        expect(button.className).toContain('border-danger');
    });
});
