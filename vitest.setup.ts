import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/vue';
import { afterEach } from 'vitest';

// Realiza a limpeza de renderização da árvore DOM do Vue após cada teste concluído
afterEach(() => {
  cleanup();
});
