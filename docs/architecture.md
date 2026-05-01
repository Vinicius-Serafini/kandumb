# Arquitetura do Sistema

O projeto adota uma arquitetura clássica baseada em componentes Vue.js.

## Estrutura de Diretórios
- `/src/components`: Componentes visuais isolados e modulares (ex: `Card`, `Group`, `Board`).
- `/src/composables`: Lógicas reaproveitáveis usando a Composition API (ex: `useKanban.ts`, etc).
- `/src/services`: Camada de serviços exportando funções únicas e separadas p/ operações granulares e persistência.
- `/src/types`: Interfaces do TypeScript correspondentes às entidades.
- `/src/assets`: Arquivos estáticos e globais (ex: CSS injetado pelo Tailwind).
- `**/__tests__/`: Sub-pastas declarativas espalhadas ao lado dos seus arquivos base (components, modules, services) mantendo o ecossistema de testes perto de suas contrapartes.

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
