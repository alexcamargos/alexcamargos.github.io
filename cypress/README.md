# Cypress E2E Tests 🧪

Testes End-to-End automatizados para o Portfolio usando [Cypress](https://cypress.io).

## 📁 Estrutura

```
cypress/
├── e2e/
│   └── spec.cy.ts       # Suite principal de testes E2E
├── support/
│   └── e2e.ts           # Configurações globais e comandos customizados
├── fixtures/            # Dados de teste (se necessário)
└── tsconfig.json        # Configuração TypeScript para Cypress
```

## 🚀 Comandos

### Pré-requisito

A aplicação deve estar rodando localmente:

```bash
npm start
# Aguarde até http://localhost:4200 estar disponível
```

### Executar Testes

| Comando | Descrição |
|---------|-----------|
| `npm run e2e` | Roda os testes em modo headless (CI/CD) |
| `npm run e2e:open` | Abre a interface gráfica do Cypress |
| `npm run e2e:headless` | Roda em Chrome headless |

### Exemplos

```bash
# Modo interativo (recomendado para desenvolvimento)
npm run e2e:open

# Modo headless (para CI/CD)
npm run e2e

# Chrome específico
npm run e2e:headless
```

## 🧩 Cobertura de Testes

A suite atual cobre:

### Smoke Tests

- [x] Carregamento do site sem erros de console
- [x] Título da página correto
- [x] Favicon disponível
- [x] Header e Footer renderizam

### Navegação (One Page Scroll)

- [x] Links de navegação funcionam (Projects, About, Skills, Education)
- [x] URL atualiza com fragments (#projects, #about, etc.)
- [x] Scroll ocorre para a seção correta

### Dark Mode

- [x] Toggle dark/light mode
- [x] Classe `dark` adicionada/removida do `<html>`
- [x] Cor de fundo do body muda
- [x] Ícones de sol/lua alternam corretamente

### i18n (Tradução)

- [x] Troca para português funciona (PT button)
- [x] Troca para inglês funciona (EN button)
- [x] Textos chave traduzidos (Hero, About, Navigation)

### Elementos Críticos

- [x] Foto de perfil visível e não quebrada
- [x] Cards de projeto renderizados (count > 0)
- [x] Cards de educação presentes
- [x] Seção de skills com categorias

### Mobile Menu (iPhone X)

- [x] Botão hamburger aparece em mobile
- [x] Menu abre ao clicar
- [x] Menu fecha ao clicar em link
- [x] Navegação funciona em mobile
- [x] Theme toggle funciona em mobile
- [x] Language switch funciona em mobile

### Links Externos

- [x] GitHub com href correto e target="_blank"
- [x] LinkedIn com href correto e target="_blank"
- [x] Email com mailto correto

### Acessibilidade (Básica)

- [x] aria-labels nos elementos interativos
- [x] Estrutura semântica (header, footer, section)
- [x] Heading h1 presente

### Performance

- [x] Seções carregam em tempo razoável
- [x] Nenhuma imagem quebrada

## ➕ Adicionando Novos Testes

1. Edite `cypress/e2e/spec.cy.ts`
2. Adicione testes dentro de um `describe()` existente ou crie um novo
3. Use `cy.get()`, `cy.contains()`, `cy.click()` para interações
4. Use `.should()` para asserções

### Exemplo de Novo Teste

```typescript
it('should navigate to new section', () => {
  // Arrange - setup inicial (beforeEach já visita '/')
  
  // Act - ação do usuário
  cy.get('a[href*="new-section"]').click();
  
  // Assert - verificação
  cy.url().should('include', '#new-section');
  cy.get('#new-section').should('be.visible');
});
```

## 🔧 Troubleshooting

### Testes falhando com timeout

Se testes estão falhando por timeout, verifique:

1. A aplicação está rodando em `http://localhost:4200`?
2. O elemento existe no DOM?
3. O elemento está visível (não hidden)?

### Videos não salvando

Videos são salvos apenas quando os testes rodam em modo headless:

```bash
npm run e2e  # Gera videos em cypress/videos/
```

### Seletores não encontrando elementos

Use selectores mais específicos:

```typescript
// ❌ Muito genérico
cy.get('button').click();

// ✅ Específico
cy.get('button[aria-label="Toggle Theme"]').click();
cy.contains('button', 'PT').click();
```

## 📸 Screenshots & Videos

- **Screenshots de falha:** `cypress/screenshots/` (auto-gerados)
- **Videos de execução:** `cypress/videos/` (modo headless)

Ambos são ignorados pelo git (ver `.gitignore`).

## 📚 Recursos

- [Cypress Documentation](https://docs.cypress.io)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [TypeScript Support](https://docs.cypress.io/guides/tooling/typescript-support)
