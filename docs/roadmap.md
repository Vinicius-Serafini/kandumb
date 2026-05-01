# Roadmap de Desenvolvimento

## Fase 1: Setup e Inicialização
- [x] Inicializar o projeto Vue 3 com Vite e template de TypeScript.
- [x] Instalar o TailwindCSS v4 e configurar estilos base, injeção de fontes e cores semânticas (`primary`, `danger`, `warning`, `info`).
- [x] Instalar dependências estruturais do `vuedraggable`.
- [x] Estabelecer a pasta `/src/types` definindo as interfaces estritas de uso (Group, Card).

## Fase 2: Componentização UI Visual
- [x] Criar Layout do Canvas do Kanban (Header, Board Container em `KanbanBoard.vue`).
- [x] Construir o componente iterativo para render da Coluna (`GroupList.vue`).
- [x] Construir o componente estático reativo do Cartão (`CardItem.vue`).
- [x] Modais limpos e isolados para criação/edição dinâmica de Grupos e Cards (`CreateEditCard`, `CreateEditGroup`).
- [x] Componentização UX: Modais Interativos e Reutilizáveis de confirmação contextual para evitar exclusões acidentais padrão navegador (`ConfirmDialog.vue` c/ `BaseDialog.vue`).

## Fase 3: Arquitetura, Estado e Muros de Teste (TDD)
- [x] Desenvolver uma autêntica camada de Lógica `Services` (`GroupService`, `CardService`, `storage`) implementando modelo puramente funcional em JSON isolado.
- [x] Desenvolver o proxy `useKanban` (Vue composable) para atuar de maestro reativo da store na renderização.
- [x] Estabelecer pipeline robusto de CI: Instalação e execução de `vitest`, `jsdom` e `@testing-library/vue`. Cobertura exigida para Componentes e lógicas subjacentes de CRUD.

## Fase 4: Drag and drop
- [x] Habilitar reordenação horizontal e tátil dos Grupos movendo pelos Títulos usando as Wrappers da lib do `vuedraggable`.
- [x] Habilitar cruzamento tátil com transparência (ghost-class) estendendo Cards a operarem perfeitamente mudando de listas matrizes.
- [x] Disparar reatividade atômica mapeando de forma imperativa o novo ordenamento das chaves da Wrapper e despachando para persistência invisível no `localStorage`.
