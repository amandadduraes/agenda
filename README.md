# Sigae Lite

Este é um projeto Angular chamado **Sigae Lite**. A aplicação é projetada para auxiliar na criação e gestão de planos de ação, incluindo funcionalidades para adicionar objetivos, etapas e ações, com uma interface baseada em múltiplas etapas (steps).

### Descrição do Projeto
Sigae Lite é uma aplicação web desenvolvida para facilitar a criação, acompanhamento e gestão de planos de ação em uma organização. Com o Sigae Lite, é possível criar objetivos, associar problemas e definir ações específicas para alcançar cada objetivo. 
Este projeto foi desenvolvido utilizando Angular e PrimeNG, aproveitando a modularidade do Angular para organizar as etapas do plano de ação em componentes distintos. A navegação entre as etapas é feita de maneira intuitiva, com persistência dos dados durante a navegação.

## Visão Geral

A aplicação utiliza Angular com PrimeNG para criar uma interface amigável, facilitando a navegação entre as etapas e o gerenciamento de objetivos e ações.

### Estrutura das Etapas (Steps)

1. **Etapa 1**: Definição dos Objetivos
   - Adicione uma lista de objetivos e descreva cada um. Objetivos selecionados avançam para as próximas etapas.

2. **Etapa 2**: Configuração dos Problemas Relacionados a cada Objetivo
   - Adicione problemas para cada objetivo selecionado, especificando detalhes como descrição, etapa, causa, prioridade, categoria e resultado esperado.

3. **Etapa 3**: Criação das Ações
   - Adicione ações para cada problema identificado. A visualização em árvore mostra cada objetivo, problema e suas respectivas ações. A paginação permite navegar pelos objetivos e problemas listados.

## Pré-requisitos

- **Node.js** (versão 12 ou superior)
- **Angular CLI** (versão 14 ou superior)
- **PrimeNG** para componentes de UI

## Instalação

1. Clone o repositório:
2. Instale as dependências
3. Execute a aplicação
4. Aplicação deverá estar rodando em: 

   ```bash
   git clone https://github.com/seu-usuario/sigae-lite.git
   cd sigae-lite 
   npm install
   ng serve
   http://localhost:4200


### Como Configurar e Executar
1. **Pré-requisitos:** Node.js, npm, Angular CLI.
2. **Instalação:** `git clone <URL_DO_REPOSITORIO> && cd sigae-lite && npm install`
3. **Execução:** `ng serve`

### Estrutura de Navegação
* `/inicio`: Página inicial.
* `/login`: Página de login.
* `/plano-acao`: Plano de ação com múltiplas etapas.

### Próximos Passos
* **Autenticação:** Implementação de um sistema de autenticação robusto.
* **Banco de Dados:** Integração com um banco de dados para persistência de dados.
* **Relatórios:** Geração de relatórios personalizados.

    ```bash
    sigae-lite/
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   │   ├── inicial/
    │   │   │   ├── login/
    │   │   │   ├── home/
    │   │   │   ├── step1-plano/
    │   │   │   ├── step2-plano/
    │   │   │   └── step3-plano/
    │   │   └── app.component.ts
    │   └── ...
    ├── angular.json
    └── ...
