# Kandumb 📋

## 📌 Descrição do Projeto
Kandumb é um moderno quadro Kanban projetado para ser ultra-rápido, limpo e executado primariamente do lado do cliente (client-side). Construído com uma filosofia minimalista visual, este web app permite o completo gerenciamento de tarefas através de listas e cartões arrastáveis e editáveis, mantendo tudo sincronizado e persistido instantaneamente sem a necessidade de chamadas de rede ou Back-ends, usando o `localStorage` nativo do navegador.

## 🛠️ Stack de Tecnologias
- **Engine Frontend**: Vue 3 (Composition API completa)
- **Estruturação de Build**: Vite
- **Sintaxe e Tipagem**: TypeScript
- **Estilização e Layout**: Tailwind CSS v4
- **Mecânica Sensorial (D&D)**: VueDraggable v4 (Cross-list support)
- **Engine de Testes/TDD**: Vitest, `@testing-library/vue`, e JSDOM

## 🚀 Instruções de Execução
Siga as etapas para clonar e rodar no seu ambiente de desenvolvimento perfeitamente:

**Pré-requisito**: Ter o [Node.js](https://nodejs.org/) instalado na máquina.

1. Abra o diretório/repositório baixado no seu terminal.
2. Instale massivamente a árvore de dependências do projeto:
   ```bash
   npm install
   ```
3. Inicialize o servidor local no modo de desenvolvimento rápido:
   ```bash
   npm run dev
   ```
4. *(Opcional)* É aconselhável usar o runner nativo do Vitest para atestar que as ferramentas de simulação visual e as CRUD services de cache não se romperam no seu sistema:
   ```bash
   npm run test
   ```

## 🏗️ Arquitetura
A infraestrutura do Kandumb orbita ao redor da estabilidade reativa, priorizando o isolamento das ações:
- **Base Components**: Interfaces mínimas isoladas responsáveis apenas pela UX.
- **Proxy do State**: O hook central `useKanban` orquestra a comunicação entre visual e dado.
- **Service Layer Funcional**: Toda leitura, criação e gravação de memória são encarregadas para funções autônomas e sem lado de efeitos no repositório `services`.

> 👉 Para compreender com minúcia as entidades de domínio (`Card` / `Group`) referencie a nossa bíblia arquitetural: **[Documento Oficial de Arquitetura](./docs/architecture.md)**.

## ⚖️ A Constituição (`constitution.md`)
Todo ecossistema e escopo vivo de regras ativas deste projeto está pautado pela **[Constituição Kandumb](./docs/constitution.md)**, e seus desmembramentos e resoluções no `rules.md`.
Use o _Constitution_ para balizar futuros desenvolvimentos. Ele atua como fonte imutável sobre os padrões visuais (como o botão Action sem fundo que você encontra na aplicação), priorizando que todos sigam os rigoros de tipagem visual estipulados na concepção inicial.

## 🤖 Operado e Criado Via Code-AI
O Kandumb foi inteiramente arquitetado através de fluxos de Pair-Programming entre o Desenvolvedor Humano e eu (A **Antigravity AI** do *Google Deepmind*).
A IA foi utilizada de forma transversal no projeto ativamente nos módulos de:
1. **Composição Estrutural**: Elaboração e deploy imediato do código de templates do Vite, Tailwind, e criação de tipagens de software.
2. **Consultoria Técnica e TDD**: Transição de Arquitetura Mista reativa para padrão Service Layer com cobertura pesada de Testes usando Testing-Library focada no DOM de usuário.
3. **Organização Escalonada**: Processamento via *Tasks* MD (markdowns), permitindo um versionamento iterativo sobre entregas isoladas, resultando em um Drag-And-Drop cruzado estável entre Modais de Confirmação customizados!
