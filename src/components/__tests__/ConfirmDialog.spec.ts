import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import ConfirmDialog from '../ConfirmDialog.vue';

describe('ConfirmDialog.vue', () => {
    it('emits confirm event securely on primary button click', async () => {
        const user = userEvent.setup();
        const { emitted } = render(ConfirmDialog, {
            props: { isOpen: true, title: 'Alert', message: 'Do you agree?' }
        });

        // The primary affirmative button
        const confirmBtn = screen.getByRole('button', { name: /confirmar/i });
        await user.click(confirmBtn);
        
        expect(emitted().confirm).toBeTruthy();
    });

    it('emits cancel event on dismiss/cancel button click', async () => {
        const user = userEvent.setup();
        const { emitted } = render(ConfirmDialog, {
            props: { isOpen: true, title: 'Alert', message: 'Wait!' }
        });

        // The danger cancel button
        const cancelBtn = screen.getByRole('button', { name: /cancelar/i });
        await user.click(cancelBtn);
        
        expect(emitted().cancel).toBeTruthy();
    });
});
