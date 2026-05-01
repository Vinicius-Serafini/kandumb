# Task 003: Estado Local e Persistência (useKanban)

> **Referência:** [constitution.md](../constitution.md)

## 📌 Descrição da Task
Esta task inicia a integração funcional do sistema tornando o quadro Kanban manipulável. Adotaremos as Stores Reativas via Composition API (composables) para gerenciar o ciclo de vida dos Grupos e Cards. Toda a fonte de verdade ("Source of Truth") da aplicação será vinculada ao `localStorage` do navegador, providenciando durabilidade para as tarefas mesmo sem uso de banco de dados.

## 🛠️ Check-list de Implementação
- [x] Criar a base do script no arquivo `src/composables/useKanban.ts`.
- [x] Desenvolver a função estabilizadora de cache (recuperar JSON do `localStorage` no carregamento ou prover array vazio).
- [x] Montar as funções lógicas expostas (CRUD): `addGroup`, `removeGroup`, `addCardToGroup`, `removeCard`.
- [x] Vincular uma reatividade ativa (usando a funcionalidade `watch` no array com `deep: true`) para sobrescrever a string JSON do `localStorage` continuamente.
- [x] Plugar o `useKanban` no nosso `App.vue`, substituindo as variáveis mocadas da versão 2.
- [x] Criar as interações nos botões e UI para disparar a criação usando a API `window.prompt/confirm`.

## ✅ Critérios de Aceite
- [x] Atualizar a aba da página Web não causa mais a perda do conteúdo graças à gravação assíncrona no LocalStorage?
- [x] É perfeitamente operável criar novas colunas clicando no botão base "Nova Lista"?
- [x] A arquitetura foi estruturada garantindo o forte uso das definições tipificadas em `Card` e `Group`?

## 📝 Changelogs
- **2026-05-01** - Estado global implementado com Vue Composable.
  - *Arquivos:* Criação do `useKanban.ts`. Alterações profundas em `GroupList.vue`, `KanbanBoard.vue`, `CardItem.vue` e `App.vue` para conectarem-se aos gatilhos reativos de remoção e inclusão.
