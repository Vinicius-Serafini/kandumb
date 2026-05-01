# Task 002: Componentização UI (Core Visual)

> **Referência:** [constitution.md](../constitution.md)

## 📌 Descrição da Task
Esta task representa a execução da Fase 2 do nosso Roadmap e lida com a montagem visual da aplicação. Criaremos os principais componentes que darão vida ao board do Kanban (Header, o Quadro Geral, Grupos/Colunas, Cartões e botões UI) aplicando a paleta minimalista de cores exigidas na especificação do layout.

## 🛠️ Check-list de Implementação
- [x] Criar componentes de botões reutilizáveis (Primary `btn-primary`, Danger `btn-danger`, Warning) no padrão estipulado.
- [x] Criar componente `AppHeader.vue`.
- [x] Criar componente principal do Quadro (`KanbanBoard.vue` ou `Board.vue`).
- [x] Criar componente que hospeda as Listas de cartões (`GroupList.vue`).
- [x] Criar o componente atômico do Cartão (`CardItem.vue`).
- [x] Construir layout e agrupamento no `App.vue` importando dados mocados (`Group[]` estático importado temporariamente em `App.vue`) para exibir o Design inteiro na tela.
- [x] (Opcional - mas recomendado) Já aplicar CSS ou atributos básicos de áreas de drag, para deixar preparado para a próxima Task de lógicas.

## ✅ Critérios de Aceite
- [x] Os botões reproduzem a regra "fundo primary para ações, fundo vazado e borda para danger/warning"?
- [x] O fundo de `App.vue` respeita `#FAFAFA` com cor de fonte `#0a0a0a`?
- [x] É possível ver visualmente as colunas dispostas lateralmente com seus respectivos cartões dentro de cada?
- [x] Tudo tem uma aparência minimalista, limpa e funcional?

## 📝 Changelogs
*Registre abaixo o que foi sendo feito conforme a task é executada no padrão (Data - Resumo - Arquivos afetados).*

- **2026-05-01** - Componentização base da interface do Kanban concluída de acordo com as novas regras de design minimalista.
  - *Arquivos criados:* `src/components/BaseButton.vue`, `src/components/AppHeader.vue`, `src/components/CardItem.vue`, `src/components/GroupList.vue`, `src/components/KanbanBoard.vue`.
  - *Arquivos modificados:* `src/App.vue`.
