# Regras Técnicas do Projeto

O projeto Kandumb (Kanban web) deve seguir as seguintes diretrizes técnicas:

## Tecnologias e Frameworks
- **Vue 3**: Utilizar a versão mais recente com a Composition API (`<script setup>`).
- **Vite**: Bundler e ferramenta de scaffolding do projeto.
- **Tailwind CSS**: Estilização dos componentes da interface para design dinâmico e agradável.
- **TypeScript**: Tipagem estática padrão de todas as entidades e lógicas.
- **Vuedraggable**: Responsável pela lógica de "drag-and-drop" das listas e cartões.

## Armazenamento e Funcionalidades
- Funcionamento exclusivo no navegador, sem uso de backend.
- Todos os dados deverão ser mantidos no navegador, utilizando o `localStorage` do browser.

## Padrões de Código
- Uso de tipagem através de Interfaces/Tipos exportados.
- Aproveitamento das capacidades reativas (reactive, ref) do Vue e separação de lógica via composables.

## Padrões de Layout e Estilização
- **Minimalismo Base**: O fundo da aplicação deve ser branco (`#FAFAFA`) com tipografia preta (`#0a0a0a`).
- **Cores Semânticas**: 
  - `primary`: violet-400
  - `danger`: red-500
  - `warning`: amber-300
  - `info`: cyan-300
- **Estilo de Botões**:
  - *Ações Comuns*: Background `primary` sem borda, preenchido.
  - *Perigo / Warning*: Background transparente, text/border de suas cores respectivas (vazado).
