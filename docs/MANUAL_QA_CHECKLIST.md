# Manual QA Checklist 🧪

> **Projeto:** Portfolio - Alexsander Lopes Camargos  
> **Versão:** v1.0 - Angular Rewrite  
> **Data de Verificação:** ________________  
> **Testador:** ________________

---

## 📋 Instruções

Este checklist complementa os testes E2E automatizados com verificações visuais e de experiência do usuário que requerem julgamento humano.

**Legenda:**

- ✅ **Passou** - Funciona conforme esperado
- ❌ **Falhou** - Problema encontrado (documentar abaixo)
- ⚠️ **Parcial** - Funciona com ressalvas
- ⏭️ **N/A** - Não aplicável nesta versão

---

## 1. 🎨 Visual & Design

### 1.1 Hero Section

| # | Verificação | Status | Observações |
|---|-------------|--------|-------------|
| 1.1.1 | Animação de digitação do código Python está fluida e sem travamentos | | |
| 1.1.2 | Gradiente do título "Strategic Decisions" está visualmente agradável | | |
| 1.1.3 | Botões "View Work" e "Download CV" têm hover effect suave | | |
| 1.1.4 | Simulação do IDE (window com bolinhas coloridas) está bem alinhada | | |
| 1.1.5 | Espaçamento entre elementos está equilibrado em desktop | | |

### 1.2 Typography & Readability

| # | Verificação | Status | Observações |
|---|-------------|--------|-------------|
| 1.2.1 | Fontes carregam corretamente (sem fallback para serif) | | |
| 1.2.2 | Contraste do texto está adequado para leitura prolongada | | |
| 1.2.3 | Tamanho de fonte está confortável em monitor 1080p | | |
| 1.2.4 | Line-height dos parágrafos permite leitura fluida | | |

### 1.3 Dark Mode Visual Quality

| # | Verificação | Status | Observações |
|---|-------------|--------|-------------|
| 1.3.1 | Transição entre modos é suave (sem flash branco) | | |
| 1.3.2 | Cores do dark mode não são muito saturadas/cansativas | | |
| 1.3.3 | Todos os elementos mantêm legibilidade em dark mode | | |
| 1.3.4 | Sombras e bordas se adaptam corretamente | | |
| 1.3.5 | Cards de projeto mantêm destaque visual em dark mode | | |

---

## 2. 🖼️ Images & Media

### 2.1 Profile Photo

| # | Verificação | Status | Observações |
|---|-------------|--------|-------------|
| 2.1.1 | Foto de perfil carrega completamente | | |
| 2.1.2 | Efeito grayscale → colorido no hover funciona suavemente | | |
| 2.1.3 | Qualidade da imagem é adequada (sem pixelização) | | |
| 2.1.4 | Proporção da imagem está correta (não distorcida) | | |

### 2.2 Project Cards

| # | Verificação | Status | Observações |
|---|-------------|--------|-------------|
| 2.2.1 | Thumbnails/ícones dos projetos carregam corretamente | | |
| 2.2.2 | Hover effects nos cards são intuitivos | | |
| 2.2.3 | Tags de tecnologia são legíveis | | |
| 2.2.4 | Descrições não estão cortadas ou truncadas | | |

---

## 3. 🌐 Internationalization (i18n)

### 3.1 English Version

| # | Verificação | Status | Observações |
|---|-------------|--------|-------------|
| 3.1.1 | Todas as seções estão 100% em inglês | | |
| 3.1.2 | Gramática está correta (sem erros óbvios) | | |
| 3.1.3 | Datas/números seguem formato internacional | | |

### 3.2 Portuguese Version

| # | Verificação | Status | Observações |
|---|-------------|--------|-------------|
| 3.2.1 | Todas as seções traduzidas para português | | |
| 3.2.2 | Acentuação e caracteres especiais exibem corretamente | | |
| 3.2.3 | Tradução mantém o mesmo tom profissional | | |
| 3.2.4 | Não há textos "orphan" em inglês | | |

---

## 4. 📱 Responsive Design

### 4.1 Mobile (iPhone X / 375px)

| # | Verificação | Status | Observações |
|---|-------------|--------|-------------|
| 4.1.1 | Menu hamburger é facilmente tocável (área de toque adequada) | | |
| 4.1.2 | Drawer de navegação desliza suavemente | | |
| 4.1.3 | Texto hero não transborda ou quebra feio | | |
| 4.1.4 | Botões têm tamanho mínimo de 44px | | |
| 4.1.5 | Scroll horizontal não aparece | | |
| 4.1.6 | Cards empilham corretamente em uma coluna | | |

### 4.2 Tablet (iPad / 768px)

| # | Verificação | Status | Observações |
|---|-------------|--------|-------------|
| 4.2.1 | Grid de projetos se ajusta (2 colunas) | | |
| 4.2.2 | Navigation ainda funciona (desktop ou mobile?) | | |
| 4.2.3 | Imagens redimensionam proporcionalmente | | |

### 4.3 Desktop Wide (1440px+)

| # | Verificação | Status | Observações |
|---|-------------|--------|-------------|
| 4.3.1 | Conteúdo não fica muito espalhado | | |
| 4.3.2 | Container max-width está adequado | | |
| 4.3.3 | Espaçamento lateral está balanceado | | |

---

## 5. ⚡ Performance & UX

### 5.1 Loading Experience

| # | Verificação | Status | Observações |
|---|-------------|--------|-------------|
| 5.1.1 | First Contentful Paint < 2s em 4G | | |
| 5.1.2 | Não há flash of unstyled content (FOUC) | | |
| 5.1.3 | Layout não "pula" após carregamento de imagens | | |
| 5.1.4 | Animações não causam jank/travamento | | |

### 5.2 Scroll Behavior

| # | Verificação | Status | Observações |
|---|-------------|--------|-------------|
| 5.2.1 | Scroll smooth funciona ao clicar nos links | | |
| 5.2.2 | Header fixo não sobrepõe conteúdo após scroll | | |
| 5.2.3 | Anchor links param na posição correta | | |
| 5.2.4 | Back button do browser funciona após navegação | | |

---

## 6. 🔗 Links & CTAs

### 6.1 Social Links

| # | Verificação | Status | Observações |
|---|-------------|--------|-------------|
| 6.1.1 | GitHub abre o perfil correto em nova aba | | |
| 6.1.2 | LinkedIn abre o perfil correto em nova aba | | |
| 6.1.3 | Email abre o cliente de email com endereço preenchido | | |

### 6.2 Project Links

| # | Verificação | Status | Observações |
|---|-------------|--------|-------------|
| 6.2.1 | Links de "View Project" funcionam | | |
| 6.2.2 | Links de "Source Code" levam ao repositório correto | | |

---

## 7. ♿ Accessibility (Manual)

### 7.1 Keyboard Navigation

| # | Verificação | Status | Observações |
|---|-------------|--------|-------------|
| 7.1.1 | Tab navega logicamente pelos elementos | | |
| 7.1.2 | Focus ring é visível em todos os elementos interativos | | |
| 7.1.3 | Skip links funcionam (se implementados) | | |
| 7.1.4 | Modal/menu pode ser fechado com ESC | | |

### 7.2 Screen Reader

| # | Verificação | Status | Observações |
|---|-------------|--------|-------------|
| 7.2.1 | Imagens têm alt text descritivo | | |
| 7.2.2 | ARIA labels nos botões são claros | | |
| 7.2.3 | Hierarquia de headings faz sentido (h1→h2→h3) | | |

---

## 8. 🐛 Edge Cases

| # | Verificação | Status | Observações |
|---|-------------|--------|-------------|
| 8.1 | Página funciona com JavaScript desabilitado (fallback) | | |
| 8.2 | Comportamento com zoom 200% | | |
| 8.3 | Comportamento com ad-blocker ativo | | |
| 8.4 | Modo de leitura do browser funciona | | |

---

## 📝 Notas Gerais

### Problemas Encontrados

_Liste aqui qualquer problema identificado durante os testes:_

1.
2.
3.

### Sugestões de Melhoria

_Ideias para melhorar a experiência:_

1.
2.
3.

---

## ✅ Aprovação Final

| Aspecto | Aprovado | Comentários |
|---------|----------|-------------|
| Visual/Design | ☐ Sim / ☐ Não | |
| Funcionalidade | ☐ Sim / ☐ Não | |
| Mobile | ☐ Sim / ☐ Não | |
| Acessibilidade | ☐ Sim / ☐ Não | |
| Performance | ☐ Sim / ☐ Não | |

**Status Final:** ☐ Aprovado para Deploy / ☐ Requer Correções

**Assinatura:** ___________________________ **Data:** _______________
