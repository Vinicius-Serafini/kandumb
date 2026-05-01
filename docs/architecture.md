# Arquitetura do Sistema

O projeto adota uma arquitetura clássica baseada em componentes Vue.js.

## Estrutura de Diretórios
- `/src/components`: Componentes visuais isolados e modulares (ex: `Card`, `Group`, `Board`).
- `/src/composables`: Lógicas reaproveitáveis usando a Composition API (ex: `useKanban.ts`, etc).
- `/src/types`: Interfaces do TypeScript correspondentes às entidades.
- `/src/assets`: Arquivos estáticos e globais (ex: CSS injetado pelo Tailwind).

## Entidades de Domínio

### Group
Entidade para agrupar Cards, sendo as colunas do Kanban.
```typescript
interface Group {
  id: number;
  title: string;
  cards: Card[];
}
```

### Card
Cartão que descreve uma tarefa ou item no quadro kanban.
```typescript
interface Card {
  id: number;
  title: string;
  description: string;
}
```

## O que o sistema deve fazer
- **Grupos**: Criar, editar prop "title", remover e reordenar por drag-and-drop no container principal.
- **Cards**: Criar, editar ("title" e "description"), remover e mover entre grupos por drag-and-drop.
