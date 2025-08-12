# Data Analysis & Business Intelligence Portfolio | Alexsander Lopes Camargos

*Um portfólio interativo e responsivo construído para demonstrar visualmente minhas competências em transformar dados em insights e soluções de negócio.*

![License](https://img.shields.io/badge/license-MIT-green)
![Maintained](https://img.shields.io/badge/status-maintained-brightgreen)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)


## 📖 Sobre o Projeto

Este projeto é a minha vitrine profissional como desenvolvedor focado em Data Analysis e Business
Intelligence. O principal objetivo é centralizar e apresentar meus projetos mais relevantes de uma
forma clara, visualmente atraente e interativa.

A motivação foi criar uma plataforma que não apenas listasse meus trabalhos, mas que também
demonstrasse minhas habilidades em desenvolvimento front-end, atenção ao design e capacidade de
construir uma experiência de usuário agradável, transformando um simples portfólio em um projeto de
software por si só.


## 🚀 Demonstração ao Vivo

O projeto está online e totalmente funcional. Clique no botão abaixo para navegar pela aplicação.

[![Acessar Projeto](https://img.shields.io/badge/Acessar-Portfólio_Online-brightgreen?style=for-the-badge&logo=rocket)](https://alexcamargos.github.io)

<br>

![Demonstração do Portfólio](demo.gif)


## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando um conjunto de tecnologias modernas de front-end, com foco em performance e manutenibilidade.

- **HTML5:** Estruturação semântica do conteúdo.
- **Tailwind CSS:** Framework utility-first para estilização rápida e responsiva.
- **JavaScript (ES6+):** Manipulação do DOM e interatividade.
- **Sass:** Utilizado na fase de desenvolvimento para modularizar e organizar os estilos customizados (compilado para CSS).


## ✨ Funcionalidades

- [x] **Design Totalmente Responsivo:** Experiência de usuário consistente em desktops, tablets e smartphones.
- [x] **Animações de Scroll (On-scroll):** Elementos que surgem de forma suave conforme o usuário navega pela página.
- [x] **Tema de Cores Profissional:** Paleta de cores (inspirada na seção Color Reference) aplicada consistentemente.
- [x] **Links Sociais e de Contato:** Acesso rápido ao meu GitHub, LinkedIn e e-mail.
- [x] **Código Fonte Aberto:** Disponível para a comunidade com licença MIT.


## 🚀 Rodando o Projeto Localmente

Para clonar e rodar esta aplicação em sua máquina local, você precisará ter o Git e o Node.js instalados. Siga os passos abaixo.

### Pré-requisitos

* **Git:** Você pode baixar e instalar a partir do [site oficial do Git](https://git-scm.com/).
* **Node.js:** É necessário para gerenciar as dependências do projeto. Recomendamos a versão LTS. Baixe e instale a partir do [site oficial do Node.js](https://nodejs.org/). O `npm` (Node Package Manager) já vem incluído na instalação.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/alexcamargos/alexcamargos.github.io.git](https://github.com/alexcamargos/alexcamargos.github.io.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd alexcamargos.github.io
    ```

3.  **Instale as dependências:**
    Este comando lerá o `package.json` e instalará todas as dependências de desenvolvimento necessárias, como o próprio Tailwind CSS.
    ```bash
    npm install
    ```

4.  **Inicie o ambiente de desenvolvimento:**
    Este projeto utiliza um script para compilar o Tailwind CSS em tempo real, permitindo que você veja suas alterações de estilo refletidas imediatamente.

    ```bash
    npm run dev
    ```

5.  **Visualize o projeto:**
    Após o comando anterior ser executado com sucesso, simplesmente abra o arquivo `index.html` em seu navegador de preferência. As alterações nos seus arquivos de estilo serão compiladas automaticamente.

### Para Gerar os Arquivos de Produção

Se você desejar apenas gerar os arquivos finais e otimizados (por exemplo, o CSS minificado), utilize o script de build:
```bash
npm run build
```

## 🧠 Desafios e Aprendizados

A construção deste portfólio foi uma jornada de aprendizado prático. Abaixo, detalho os principais desafios técnicos que enfrentei e as competências que desenvolvi ao superá-los.

### 1. Automação do Deploy com GitHub Actions
* **Problema:** O processo inicial de deploy era manual. A cada alteração, eu precisava gerar os arquivos de produção e enviá-los para o repositório do GitHub Pages. Este método era lento, repetitivo e suscetível a erros humanos.
* **Solução:** Implementei um workflow de Integração Contínua e Deploy Contínuo (CI/CD) utilizando GitHub Actions. Criei um arquivo de configuração (`.yml`) que automatiza todo o processo: a cada `push` para a branch principal (`main`), a Action é acionada, o ambiente é configurado e o código do projeto é automaticamente publicado no GitHub Pages.
* **Aprendizado:** Este desafio me proporcionou uma imersão prática em automação e DevOps. Aprendi a sintaxe YAML, a estruturar pipelines de CI/CD e a importância de automatizar tarefas para garantir consistência, agilidade e confiabilidade no ciclo de vida de um software.

### 2. Otimização de Performance com Tailwind CSS
* **Problema:** O framework Tailwind CSS é extremamente poderoso, mas seu arquivo CSS em ambiente de desenvolvimento é muito grande, contendo milhares de classes utilitárias. Publicar o site com este arquivo resultaria em um tempo de carregamento lento e uma má pontuação em ferramentas de performance como o Lighthouse.
* **Solução:** Configurei de forma precisa o arquivo `tailwind.config.js`. Utilizando a funcionalidade `content` (anteriormente `purge`), instruí o compilador Just-In-Time (JIT) do Tailwind a analisar todos os arquivos `HTML` e `JS` do projeto, removendo todas as classes não utilizadas no build final de produção.
* **Aprendizado:** Aprofundei meu conhecimento em otimização de "assets" para front-end. Compreendi na prática o conceito de "tree-shaking" de estilos e a diferença crucial entre um build de desenvolvimento e um de produção, uma habilidade essencial para criar aplicações web rápidas e eficientes.

### 3. Design Responsivo com Foco em Storytelling

* **Problema:** Garantir que o site fosse funcional em diferentes tamanhos de tela (responsividade) era o básico. O verdadeiro desafio era manter a "narrativa" do portfólio — a história que ele conta sobre minha jornada e projetos — consistente e impactante, seja em um monitor wide-screen ou na tela de um celular.
* **Solução:** Adotei uma abordagem **Mobile-First**, projetando primeiro para a menor viewport para garantir que a hierarquia de informações e o conteúdo essencial fossem sólidos. Em seguida, utilizei as classes responsivas do Tailwind (como `md:` e `lg:`) para aprimorar progressivamente o layout em telas maiores, ajustando grades, a direção de elementos flex e o espaçamento para otimizar a experiência de leitura e a fluidez da navegação.
* **Aprendizado:** Fui além da implementação técnica da responsividade e entrei no campo do Design de Experiência do Usuário (UX). Aprendi a tomar decisões de design conscientes para garantir que a jornada do usuário e o storytelling do projeto permaneçam coesos e eficazes, independentemente do dispositivo utilizado para acessá-lo.


## 🔮 Próximos Passos

Este projeto está em constante evolução. Alguns dos próximos recursos planejados são:

- [ ] Implementar um modo "dark/light".
- [ ] Realizar testes de acessibilidade (a11y) para garantir conformidade com os padrões WCAG.
- [ ] Integrar um CMS Headless (ex: Strapi, Sanity) para gerenciar o conteúdo dos projetos.


## 📬 Contato

Sempre em busca de evolução, atualmente dedico meus estudos à estatística aplicada e modelagem de séries temporais. Meu propósito é claro: crescer profissionalmente, compartilhar o que aprendo e ser um agente de transformação nos projetos em que me envolvo.

Adoraria me conectar e discutir como minha paixão por dados e as habilidades demonstradas neste projeto podem agregar valor à sua organização.


[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:alexcamargos@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alexcamargos/)


## 🎨 Color Reference

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Navy           | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) `#0a192f` |
| Light Navy     | ![#112240](https://via.placeholder.com/10/0a192f?text=+) `#112240` |
| Lightest Navy  | ![#233554](https://via.placeholder.com/10/303C55?text=+) `#233554` |
| Slate          | ![#8892b0](https://via.placeholder.com/10/8892b0?text=+) `#8892b0` |
| Light Slate    | ![#a8b2d1](https://via.placeholder.com/10/a8b2d1?text=+) `#a8b2d1` |
| Lightest Slate | ![#ccd6f6](https://via.placeholder.com/10/ccd6f6?text=+) `#ccd6f6` |
| White          | ![#e6f1ff](https://via.placeholder.com/10/e6f1ff?text=+) `#e6f1ff` |
| Green          | ![#64ffda](https://via.placeholder.com/10/64ffda?text=+) `#64ffda` |


## License

Copyright (c) 2022 - 2025 by **Alexsander Lopes Camargos**

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
