# Task 006: Componentização de Dialogs de Confirmação

> **Referência:** [constitution.md](../constitution.md)

## 📌 Descrição da Task
Substituir alertas e confirmações nativas do navegador (`window.confirm`) por um Modal/Dialog estilizado dentro da aplicação. Este dialog deve prover um contexto para o usuário (tanto exclusão de cartão quanto de listas), possuindo botões padronizados que respeitam as predefinições de design (Cancelar = vazado vermelho danger | Confirmar = primário preenchido).

## 🛠️ Check-list de Implementação
- [x] Criar Componente Universal Reutilizável de Confirmações (`ConfirmDialog.vue`).
- [x] Integrar no `GroupList.vue` um state reativo para invocar a confirmação ao deletar listas (Grupos).
- [x] Interceptar o `emits('remove')` dos cartões para passar antes pelo Dialog via callback reativo no GroupList.
- [x] Adicionar bateria de autotestes para a nova lógica.

## ✅ Critérios de Aceite
- [x] O componente/entidade cumpre o que foi proposto na documentação?
- [x] O visual cumpre 100% as diretrizes estritas do System Design (Bordas e cores transparentes Danger)?

## 📝 Changelogs
- **2026-05-01** - Exclusão de Listas e Cartões refatorados p/ usar UI Contextual.
  - Desenvolvido `ConfirmDialog.vue` base utilizando `BaseDialog` por baixo dos panos.
  - O loop do EventBus de deleção no Kanban foi re-escrito para invocar e respeitar a thread visual do modal de confirmação.
