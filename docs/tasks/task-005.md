# Task 005: Drag and Drop com VueDraggable

> **Referência:** [constitution.md](../constitution.md)

## 📌 Descrição da Task
A tarefa visa introduzir a funcionalidade visual interativa de "Arrastar e Soltar" em todas as instâncias repetidas da aplicação, substituindo contêineres dinâmicos `v-for` tradicionais pelo Wrapper da biblioteca VueDraggable v4. Tudo isso de forma perfeitamente reativa refletindo automaticamente no State Management e Testes Unitários. As colunas (Groups) também poderão ser arrastadas umas pelas outras através dos seus próprios títulos.

## 🛠️ Check-list de Implementação
- [x] Substituir listagem de Groups em KanbanBoard pelo Componente Draggable.
- [x] Substituir listagem de Cards em GroupList pelo Componente Draggable usando o mesmo group de instâncias (cross-list dragging permitida).
- [x] Estilizar *handles* (agarradores) e adicionar os cursores "grab / dragging" corretos visualizando ghost elements.
- [x] Rodar suíte de Testes base (Vitest) para analisar se o Componente Wrapper rompeu cases de dom testing.

## ✅ Critérios de Aceite
- [x] O componente/entidade cumpre o que foi proposto na documentação?
- [x] Funciona sem erros no navegador e as posições espaciais são estocadas localmente sem loops infinitos do Proxy?

## 📝 Changelogs
- **2026-05-01** - Integração total do VueDraggable.
  - *KanbanBoard*: Substituição de Array rendering por ordenação horizontal via drag and drop (Listas).
  - *GroupList*: Substituição e integração aos Arrays profundos cross-origin permitindo drag de tarefas entre as colunas sem warnings da Engine graças a State Pattern.
  - *Pipeline*: Todos os testes unitários passando.
