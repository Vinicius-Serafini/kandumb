import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import BaseDialog from '../BaseDialog.vue';

describe('BaseDialog.vue', () => {
    it('does not render dialog content when isOpen is false', () => {
        const { queryByRole } = render(BaseDialog, {
            props: { isOpen: false, title: 'Hidden' }
        });
        expect(queryByRole('heading')).toBeNull();
    });

    it('renders title and slot content when correctly open', () => {
        render(BaseDialog, {
            props: { isOpen: true, title: 'My Modal' },
            slots: { default: 'Modal Body Content' }
        });
        expect(screen.getByText('My Modal')).toBeInTheDocument();
        expect(screen.getByText('Modal Body Content')).toBeInTheDocument();
    });

    it('emits close event when action dismisses dialog', async () => {
        const user = userEvent.setup();
        const { emitted } = render(BaseDialog, {
            props: { isOpen: true, title: 'Close Me' }
        });
        await user.click(screen.getByRole('button'));
        expect(emitted().close).toBeTruthy();
    });
});
