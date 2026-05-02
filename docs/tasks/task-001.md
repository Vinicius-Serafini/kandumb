# Task 001: Setup Inicial do Projeto

> **Referência:** [constitution.md](../constitution.md)

## 📌 Descrição da Task
O objetivo principal desta task é realizar toda a criação base e configuração ('scaffolding') do projeto Kandummy, inicializando o ambiente com `Vite`, `Vue 3`, `TypeScript` e parametrizando o estilo inicial com `Tailwind CSS`. 

## 🛠️ Check-list de Implementação
- [x] Utilizar o Vite para fazer o setup inicial (template: `vue-ts`) dentro da própria pasta raiz do projeto.
- [x] Instalar as dependências de roteamento e interações como `vuedraggable` (e suas dependências de tipos, caso necessário, se bem que Vue 3 Composition API com DRAGGABLE tem implementações específicas).
- [x] Instalar o Tailwind CSS (`tailwindcss`, `postcss`, `autoprefixer`) e configurar os arquivos básicos (`tailwind.config.js`, `postcss.config.js`). *Nota: Adotado Tailwind v4 (@tailwindcss/vite).*
- [x] Injetar as diretivas globais do Tailwind no arquivo `/src/assets/index.css`.
- [x] Criar as pastas fundamentais apontadas no roadmap: `/src/components`, `/src/composables` e `/src/types`.
- [x] Definir os primeiros domínios de Typings (as interfaces `Group` e `Card`) em `/src/types/index.ts`.
- [x] Esvaziar e limpar o `App.vue` para certificar que o template default do Vite foi removido e trocado por uma tela em branco com Tailwind funcionando.

## ✅ Critérios de Aceite
- [x] É possível inicializar a aplicação executando `npm run dev` com sucesso?
- [x] Componentes que usem classes do Tailwind renderizam o design esperado na tela?
- [x] O app base opera unicamente pelo navegador, sem dependências pendentes no `package.json`?

## 📝 Changelogs
*Registre abaixo o que foi sendo feito conforme a task é executada no padrão (Data - Resumo - Arquivos afetados).*

- **2026-05-01** - Scaffold do Vite, instalação e configuração do Tailwind CSS v4, Vuedraggable e deleção de arquivos não utilizados.
  - *Arquivos criados/modificados:* `package.json`, `vite.config.ts`, `src/assets/index.css`, `src/types/index.ts`, `src/App.vue`, `src/main.ts`
