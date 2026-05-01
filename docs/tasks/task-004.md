# Task 004: Implementação de Cultura de Testes Unitários

## 📝 Referência Constitucional
Conforme estabelecido pela task-004, a arquitetura agora demanda que todo o desenvolvimento de código gerado seja coberto por testes unitários para maior estabilidade a longo prazo.

## 📄 Descrição
Configuração do runner **Vitest** e o framework **Testing Library (Vue)** com ambiente **JSDOM**. Essa infraestrutura atuará como proteção antes de avançarmos para as interações mais densas de Drag and Drop. O Testing Library garante que os testes foquem em fluxos reais da interface.

## 🛠️ Check-list de Implementação
- [x] Instalar as bibliotecas (`vitest`, `jsdom`, `@testing-library/vue`, `@testing-library/user-event`).
- [x] Ajustar `vite.config.ts` (ou criar vitest config) definindo o ambiente e exportação padronizada compatível com Vue.
- [x] Configurar os scripts `.test` padrão no `package.json`.
- [x] Atualizar `docs/rules.md` para documentar a obrigatoriedade de cobertura usando comportamento.
- [x] Atualizar `docs/architecture.md` padronizando que arquivos de teste habitarão sub-pastas `__tests__` anexas as origens.
- [x] Escrever o primeiro teste unitário básico para comprovação da mecânica em um componente puramente UI.
- [x] Escrever teste para os novos `Services` isolados.

## ✅ Critérios de Aceite
- [x] O comando `npm run test` é capaz de observar e resolver os arquivos de extensão `.spec.ts`/`.test.ts`?
- [x] Os pacotes nativos da Testing library não acusam perda ou bug de renderização no JSDom?
- [x] O test suite passa limpo na interface de prompt CLI?

## 📝 Changelogs
- **2026-05-01** - Infraestrutura de testes unitários consolidada.
  - *Setup*: Instalação de ecossistema Vitest + Testing Library Vue.
  - *Documentação*: Atualizada `RULES` e `ARCHITECTURE` formalizando TDD visual.
  - *Pilotos*: Configurados os `.spec.ts` para o service de Groups e o component `BaseButton` (8 testes validados localmente com sucesso).
