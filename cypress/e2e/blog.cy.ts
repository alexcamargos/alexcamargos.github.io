/**
 * Testes End-to-End (E2E) para o Modulo de Blog
 * Valida a navegacao editorial no estilo AkitaOnRails,
 * paginacao de destaques e renderizacao de artigos em Markdown.
 */

describe('Modulo de Blog - E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/blog');
    cy.get('app-root').should('exist');
  });

  describe('Pagina Principal (/blog)', () => {
    it('deve carregar a pagina do blog com titulo e subtitulo editoriais', () => {
      cy.get('h1').should('exist');
      cy.get('header').should('contain.text', 'Blog');
    });

    it('deve exibir a secao de destaques com cards e contador acessivel', () => {
      cy.get('.aor-featured').should('exist');
      cy.get('.aor-featured-card').should('have.length.at.least', 1);

      // Verifica contador acessivel (ex: 1–3 de N)
      cy.get('.aor-featured [aria-live="polite"]')
        .should('exist')
        .invoke('text')
        .should('match', /\d+–\d+ de \d+/);
    });

    it('deve permitir navegar pelas paginas do carrossel de destaques se houver mais de 3 posts', () => {
      cy.get('.aor-featured').then(($featured) => {
        const nextButton = $featured.find('button[aria-label*="artigos"], button[aria-label*="articles"]').last();
        if (!nextButton.is(':disabled')) {
          cy.wrap(nextButton).click();
          cy.get('.aor-featured [aria-live="polite"]').should('contain.text', '4–');
          // Volta para a primeira pagina
          const prevButton = $featured.find('button[aria-label*="artigos"], button[aria-label*="articles"]').first();
          cy.wrap(prevButton).click();
          cy.get('.aor-featured [aria-live="polite"]').should('contain.text', '1–3');
        }
      });
    });

    it('deve listar artigos recentes em formato tabular minimalista (aor-index-row)', () => {
      cy.get('.aor-index-row').should('have.length.at.least', 1);
      cy.get('.aor-index-row').first().within(() => {
        cy.get('time').should('exist');
        cy.get('h3 a').should('exist');
        cy.get('p').should('exist');
      });
    });
  });

  describe('Navegacao e Leitura de Artigo (/blog/:slug)', () => {
    it('deve abrir um artigo ao clicar no titulo e exibir o conteudo em markdown', () => {
      cy.get('.aor-index-row h3 a').first().then(($link) => {
        const expectedTitle = $link.text().trim();
        cy.wrap($link).click();

        // Deve estar na rota de detalhe
        cy.url().should('include', '/blog/');
        cy.get('h1').should('contain.text', expectedTitle);

        // Deve renderizar area do artigo
        cy.get('article').should('exist');
        cy.get('.prose').should('exist');

        // Botao de retorno para o blog
        cy.contains(/Voltar aos artigos|Back to articles/i).first().click();
        cy.url().should('match', /\/blog$/);
      });
    });
  });

  describe('Integracao com o Header Global', () => {
    it('deve navegar para a home e retornar para o blog pelo header', () => {
      cy.get('header nav a[routerLink="/blog"]').first().should('exist');

      // Clica no logo para ir para a Home
      cy.get('header a[routerLink="/"]').first().click();
      cy.url().should('not.include', '/blog');

      // Clica no link do Blog no header
      cy.get('header nav a[routerLink="/blog"]').first().click();
      cy.url().should('include', '/blog');
    });
  });
});
