# Roadmap de Desenvolvimento

## Fase 1: Setup e Inicialização
- [ ] Inicializar o projeto Vue 3 com Vite e template de TypeScript.
- [ ] Instalar o TailwindCSS e configurar estilos básicos.
- [ ] Instalar o `vuedraggable`.
- [ ] Estabelecer a pasta `/src/types` definindo as interfaces base (Group, Card).

## Fase 2: Componentização UI
- [ ] Criar Layout do Canvas do Kanban (Header, Board Container).
- [ ] Construir o componente da Coluna/Grupo (`Group.vue`).
- [ ] Construir o componente do Cartão (`Card.vue`).
- [ ] Modal/Formulário para a criação e edição de Grupos e Cards.

## Fase 3: Estado e Persistência
- [ ] Desenvolver `useKanban` (composable) para gerenciar o estado central dos cards e listas.
- [ ] Ligar o `useKanban` ao `localStorage` para ler e salvar de forma automática (watch).
- [ ] Aplicar criação/remoção de Grupos.
- [ ] Aplicar criação/remoção de Cards dentro dos Grupos.

## Fase 4: Drag and drop
- [ ] Habilitar reordenção de Grupos no Container Principal com `vuedraggable`.
- [ ] Habilitar drag dos Cards entre as diferentes listas (Grupos).
- [ ] Sincronizar qualquer mudança visual imediatamente no LocalStorage.

## Fase 5: Estilização Embelezadora
- [ ] Aplicar tipografia elegante e moderna.
- [ ] Trabalhar com hover states dinâmicos e smooth animations (micro-interações) em drag/drop.
