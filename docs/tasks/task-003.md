# Task 003: Estado Local e Persistência (useKanban)

> **Referência:** [constitution.md](../constitution.md)

## 📌 Descrição da Task
Esta task inicia a integração funcional do sistema tornando o quadro Kanban manipulável. Adotaremos as Stores Reativas via Composition API (composables) para gerenciar o ciclo de vida dos Grupos e Cards. Toda a fonte de verdade ("Source of Truth") da aplicação será vinculada ao `localStorage` do navegador, providenciando durabilidade para as tarefas mesmo sem uso de banco de dados.

## 🛠️ Check-list de Implementação
- [ ] Criar a base do script no arquivo `src/composables/useKanban.ts`.
- [ ] Desenvolver a função estabilizadora de cache (recuperar JSON do `localStorage` no carregamento ou prover array vazio).
- [ ] Montar as funções lógicas expostas (CRUD): `addGroup`, `removeGroup`, `updateGroupTitle`, `addCardToGroup`, `removeCard`, `updateCard`.
- [ ] Vincular uma reatividade passiva ou ativa (ex: usando a funcionalidade `watch` no `target array`) para sobrescrever a string JSON do `localStorage` continuamente ao reagir às mudanças do Model.
- [ ] Plugar o `useKanban` no nosso `App.vue`, substituindo as variáveis mocadas da versão 2.
- [ ] Criar as interações nos botões e UI para disparar a criação (pode ser com inputs modais ou funções simples por enquanto).

## ✅ Critérios de Aceite
- [ ] Atualizar a aba da página Web não causa mais a perda do conteúdo graças à gravação assíncrona no LocalStorage?
- [ ] É perfeitamente operável criar novas colunas clicando no botão base "Nova Lista"?
- [ ] A arquitetura foi estruturada garantindo o forte uso das definições tipificadas em `Card` e `Group`?

## 📝 Changelogs
*(Aguardando início da execução)*
