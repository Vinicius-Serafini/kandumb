# Constituição do Kandummy (Kanban Web)

Este é o arquivo raiz e norteador principal do projeto **Kandummy** (quadro Kanban focado em frontend). Ele atua como guia primário, apontando para todas as especificações essenciais do portal.

## Documentos de Referência

1. **[Regras do Projeto (Rules)](./rules.md)**
   Aqui definimos as pilhas técnicas envolvidas (Vue 3, Vite, TypeScript, Tailwind, Vuedraggable) e nossas limitações tecnológicas (armazenamento estrito por `localStorage`, sem backend configurado).

2. **[Arquitetura do App](./architecture.md)**
   Especificamente determina como o código-fonte deve ser alojado em subpastas dentro de `/src` (components, types e composables) e delimita graficamente as entidades `Group` e `Card`.

3. **[Roadmap de Implementação](./roadmap.md)**
   Um check-list fase por fase do andamento das entregas, começando pelo scaffolding do projeto via Vite e escalando até as finalizações com Tailwind de interações animadas.

> A equipe e os agentes devem primeiro interagir com esta documentação, assegurando estar cumprindo perfeitamente as diretrizes em `rules`, a base modular descrita em `architecture` e seguindo rigorosamente os passos indicados em `roadmap`.
