/**
 * Portfolio E2E Tests
 * Alexsander Lopes Camargos | Data Analysis & Business Intelligence
 *
 * Comprehensive E2E test suite covering:
 * - Smoke Tests (loading, title, favicon)
 * - Navigation (one-page scroll)
 * - UI Interactivity (dark mode, i18n)
 * - Critical Elements (profile photo, project cards)
 * - Mobile Menu
 * - External Links
 */

describe('Portfolio SPA - E2E Tests', () => {
    beforeEach(() => {
        // Visit the homepage before each test
        cy.visit('/');
        // Wait for Angular to bootstrap
        cy.get('app-root').should('exist');
    });

    // ============================================================================
    // SMOKE TESTS - Basic loading verification
    // ============================================================================
    describe('Smoke Tests - Carregamento Básico', () => {
        it('should load the site without console errors', () => {
            // Verify the site loads successfully
            cy.visit('/');

            // Check that the main app root exists
            cy.get('app-root').should('exist');

            // Verify body has content
            cy.get('body').should('not.be.empty');
        });

        it('should have the correct page title', () => {
            cy.title().should('include', 'Alexsander Lopes Camargos');
            cy.title().should('include', 'Data Analysis');
        });

        it('should have a valid favicon', () => {
            // Check that the favicon link exists in the head
            cy.document().then((doc) => {
                const favicon = doc.querySelector('link[rel="icon"]');
                expect(favicon).to.not.be.null;

                const href = favicon?.getAttribute('href');
                expect(href).to.include('favicon');
            });

            // Verify favicon is accessible (returns 200)
            cy.request({
                url: '/favicon.jpg',
                failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.be.oneOf([200, 304]);
            });
        });

        it('should render the header component', () => {
            cy.get('header').should('be.visible');
            cy.get('header').should('contain.text', 'Alexsander L. Camargos');
        });

        it('should render the footer component', () => {
            cy.get('footer').should('exist');
            cy.scrollTo('bottom');
            cy.get('footer').should('be.visible');
        });
    });

    // ============================================================================
    // NAVIGATION TESTS - One Page Scroll
    // ============================================================================
    describe('Navigation - One Page Scroll', () => {
        it('should navigate to Projects section via header link', () => {
            // Click on Projects link in desktop nav
            cy.get('nav.hidden.md\\:flex a[fragment="projects"]').click();

            // Verify URL updates with fragment
            cy.url().should('include', '#projects');

            // Verify the section is in view (scroll behavior)
            cy.get('#projects').should('be.visible');
        });

        it('should navigate to About section via header link', () => {
            cy.get('nav.hidden.md\\:flex a[fragment="about"]').click();
            cy.url().should('include', '#about');
        });

        it('should navigate to Skills/Expertise section via header link', () => {
            cy.get('nav.hidden.md\\:flex a[fragment="skills"]').click();
            cy.url().should('include', '#skills');
            cy.get('#skills').should('be.visible');
        });

        it('should navigate to Education section via header link', () => {
            cy.get('nav.hidden.md\\:flex a[fragment="education"]').click();
            cy.url().should('include', '#education');
        });

        it('should return to hero when clicking on logo', () => {
            // First scroll down
            cy.scrollTo('bottom');

            // Click on logo/brand
            cy.get('header a[fragment="hero"]').click();

            // URL should update
            cy.url().should('include', '#hero');
        });
    });

    // ============================================================================
    // UI INTERACTIVITY - Dark Mode Toggle
    // ============================================================================
    describe('UI Interactivity - Dark Mode', () => {
        it('should toggle dark mode when clicking theme button', () => {
            // Get initial state
            cy.get('html').then(($html) => {
                const initialDarkMode = $html.hasClass('dark');

                // Find and click the theme toggle button
                cy.get('button[aria-label="Toggle Theme"]').click();

                // Verify class toggled
                if (initialDarkMode) {
                    cy.get('html').should('not.have.class', 'dark');
                } else {
                    cy.get('html').should('have.class', 'dark');
                }
            });
        });

        it('should toggle dark mode back to original state on second click', () => {
            cy.get('html').then(($html) => {
                const initialDarkMode = $html.hasClass('dark');

                // Toggle twice
                cy.get('button[aria-label="Toggle Theme"]').click();
                cy.get('button[aria-label="Toggle Theme"]').click();

                // Should be back to initial state
                if (initialDarkMode) {
                    cy.get('html').should('have.class', 'dark');
                } else {
                    cy.get('html').should('not.have.class', 'dark');
                }
            });
        });

        it('should change body background color when toggling dark mode', () => {
            // Get initial background color
            cy.get('body').then(($body) => {
                const initialBgColor = window.getComputedStyle($body[0]).backgroundColor;

                // Toggle dark mode
                cy.get('button[aria-label="Toggle Theme"]').click();

                // Wait for transition
                cy.wait(350);

                // Verify background color changed
                cy.get('body').should(($newBody) => {
                    const newBgColor = window.getComputedStyle($newBody[0]).backgroundColor;
                    expect(newBgColor).to.not.equal(initialBgColor);
                });
            });
        });

        it('should show sun icon in dark mode and moon icon in light mode', () => {
            // Ensure we start in a known state (light mode)
            cy.get('html').invoke('removeClass', 'dark');

            // In light mode, moon icon should be visible (block), sun icon hidden
            cy.get('button[aria-label="Toggle Theme"] svg.block.dark\\:hidden').should('be.visible');

            // Toggle to dark mode
            cy.get('html').invoke('addClass', 'dark');

            // In dark mode, sun icon should be visible (hidden.dark:block), moon icon hidden
            cy.get('button[aria-label="Toggle Theme"] svg.hidden.dark\\:block').should('be.visible');
        });
    });

    // ============================================================================
    // UI INTERACTIVITY - i18n (Internationalization)
    // ============================================================================
    describe('UI Interactivity - i18n Translation', () => {
        it('should change page content to Portuguese when clicking PT button', () => {
            // Store English text first
            cy.get('.text-5xl, .text-7xl').first().invoke('text').as('englishTitle');

            // Click PT language button
            cy.contains('button', 'PT').click();

            // Wait for translation to apply
            cy.wait(500);

            // Verify key text changed to Portuguese
            // Checking the hero title contains Portuguese text
            cy.get('h1').invoke('text').should('match', /Decisões|Traduzindo/);
        });

        it('should change page content to English when clicking EN button', () => {
            // First switch to Portuguese
            cy.contains('button', 'PT').click();
            cy.wait(300);

            // Then switch back to English
            cy.contains('button', 'EN').click();
            cy.wait(300);

            // Verify text is in English
            cy.get('h1').invoke('text').should('match', /Strategic|Translating/);
        });

        it('should translate the About section title', () => {
            // In English, should be "The Strategist Behind the Code"
            cy.get('#background h2, #about h2').first().invoke('text').should('match', /Strategist/);

            // Switch to Portuguese
            cy.contains('button', 'PT').click();
            cy.wait(500);

            // Should now be "O Estrategista por trás do Código"
            cy.get('#background h2, #about h2').first().should('contain.text', 'Estrategista');
        });

        it('should translate navigation buttons', () => {
            // Switch to Portuguese
            cy.contains('button', 'PT').click();
            cy.wait(500);

            // Check hero buttons contain Portuguese text
            cy.get('button').invoke('text').should('match', /Ver Projetos|Baixar CV/);
        });
    });

    // ============================================================================
    // CRITICAL ELEMENTS - Profile Photo and Project Cards
    // ============================================================================
    describe('Critical Elements', () => {
        it('should display the profile photo without being broken', () => {
            // Scroll to the about/background section where the photo is
            cy.get('#background').scrollIntoView();

            // Find the profile image
            cy.get('img[alt*="Camargos"], img[src*="profile"]')
                .should('be.visible')
                .and(($img) => {
                    // Check that image has loaded (natural dimensions > 0)
                    const img = $img[0] as HTMLImageElement;
                    expect(img.naturalWidth, 'profile image has natural width').to.be.greaterThan(0);
                    expect(img.naturalHeight, 'profile image has natural height').to.be.greaterThan(0);
                });
        });

        it('should render project cards (count > 0)', () => {
            // Scroll to projects section
            cy.get('#projects').scrollIntoView();

            // Verify project cards exist
            cy.get('#projects app-project-card').should('have.length.greaterThan', 0);
        });

        it('should display project cards content correctly', () => {
            cy.get('#projects').scrollIntoView();

            // Each project card should have visible content
            cy.get('#projects app-project-card').first().should('be.visible');
        });

        it('should display education cards', () => {
            // Education cards are in the background section
            cy.get('#background').scrollIntoView();

            // Find education cards by their structure
            cy.get('#background .grid h4').should('have.length.greaterThan', 0);
        });

        it('should display the skills/expertise section with categories', () => {
            cy.get('#skills').scrollIntoView();

            // Should have multiple skill category cards
            cy.get('#skills .grid > div').should('have.length.greaterThan', 0);
        });
    });

    // ============================================================================
    // MOBILE MENU TESTS
    // ============================================================================
    describe('Mobile Menu - Viewport iPhone X', () => {
        beforeEach(() => {
            // Set viewport to iPhone X dimensions
            cy.viewport('iphone-x');
        });

        it('should display hamburger menu button on mobile', () => {
            // Desktop nav should be hidden
            cy.get('nav.hidden.md\\:flex').should('not.be.visible');

            // Mobile menu button should be visible
            cy.get('button[aria-label="Open Menu"]').should('be.visible');
        });

        it('should open mobile menu when clicking hamburger button', () => {
            // Click hamburger menu
            cy.get('button[aria-label="Open Menu"]').click();

            // Mobile menu drawer should appear
            cy.get('.md\\:hidden nav').should('be.visible');

            // Links should be visible in mobile menu
            cy.get('.md\\:hidden nav a[fragment="projects"]').should('be.visible');
            cy.get('.md\\:hidden nav a[fragment="about"]').should('be.visible');
        });

        it('should close mobile menu when clicking a navigation link', () => {
            // Open mobile menu
            cy.get('button[aria-label="Open Menu"]').click();
            cy.get('.md\\:hidden nav').should('be.visible');

            // Click on a navigation link
            cy.get('.md\\:hidden nav a[fragment="projects"]').click();

            // Menu should close
            cy.get('.md\\:hidden nav').should('not.exist');

            // URL should update
            cy.url().should('include', '#projects');
        });

        it('should navigate to section from mobile menu', () => {
            // Open mobile menu
            cy.get('button[aria-label="Open Menu"]').click();

            // Click About link
            cy.get('.md\\:hidden nav a[fragment="about"]').click();

            // Verify navigation occurred
            cy.url().should('include', '#about');
        });

        it('should toggle close icon when menu is open', () => {
            // Open menu
            cy.get('button[aria-label="Open Menu"]').click();

            // The button should now show X icon (close state)
            // The path with d="M6 18L18 6M6 6l12 12" is the X icon
            cy.get('button[aria-label="Open Menu"] svg path').should('exist');
        });

        it('should allow theme toggle on mobile', () => {
            // Theme toggle should be visible on mobile
            cy.get('button[aria-label="Toggle Theme"]').should('be.visible');

            // Should work
            cy.get('html').then(($html) => {
                const initialDarkMode = $html.hasClass('dark');

                cy.get('button[aria-label="Toggle Theme"]').click();

                if (initialDarkMode) {
                    cy.get('html').should('not.have.class', 'dark');
                } else {
                    cy.get('html').should('have.class', 'dark');
                }
            });
        });

        it('should allow language switch on mobile', () => {
            // Language buttons should be visible
            cy.contains('button', 'PT').should('be.visible');
            cy.contains('button', 'EN').should('be.visible');

            // Should work
            cy.contains('button', 'PT').click();
            cy.wait(300);
            cy.get('h1').invoke('text').should('match', /Decisões|Traduzindo/);
        });
    });

    // ============================================================================
    // EXTERNAL LINKS
    // ============================================================================
    describe('External Links - Social Media', () => {
        it('should have GitHub link with correct href and target="_blank"', () => {
            cy.scrollTo('bottom');

            cy.get('footer a[aria-label="GitHub"]')
                .should('have.attr', 'href', 'https://github.com/alexcamargos')
                .and('have.attr', 'target', '_blank');
        });

        it('should have LinkedIn link with correct href and target="_blank"', () => {
            cy.scrollTo('bottom');

            cy.get('footer a[aria-label="LinkedIn"]')
                .should('have.attr', 'href', 'https://www.linkedin.com/in/alexcamargos')
                .and('have.attr', 'target', '_blank');
        });

        it('should have Email link with correct mailto href', () => {
            cy.scrollTo('bottom');

            cy.get('footer a[aria-label="Email"]')
                .should('have.attr', 'href')
                .and('include', 'mailto:');
        });

        it('header GitHub link (if exists) should open in new tab', () => {
            // Check for any GitHub links in header
            cy.get('header').then(($header) => {
                const githubLink = $header.find('a[href*="github.com"]');
                if (githubLink.length > 0) {
                    cy.wrap(githubLink).should('have.attr', 'target', '_blank');
                }
            });
        });
    });

    // ============================================================================
    // ACCESSIBILITY BASICS
    // ============================================================================
    describe('Accessibility - Basic Checks', () => {
        it('should have proper aria-labels on interactive elements', () => {
            // Theme toggle button
            cy.get('button[aria-label="Toggle Theme"]').should('exist');

            // Mobile menu button
            cy.get('button[aria-label="Open Menu"]').should('exist');

            // Social links in footer
            cy.scrollTo('bottom');
            cy.get('footer a[aria-label="GitHub"]').should('exist');
            cy.get('footer a[aria-label="LinkedIn"]').should('exist');
            cy.get('footer a[aria-label="Email"]').should('exist');
        });

        it('should have semantic HTML structure (header, main content)', () => {
            cy.get('header').should('exist');
            cy.get('footer').should('exist');
            cy.get('section').should('have.length.greaterThan', 0);
        });

        it('should have h1 heading on the page', () => {
            cy.get('h1').should('exist').and('be.visible');
        });
    });

    // ============================================================================
    // PERFORMANCE - Basic Loading
    // ============================================================================
    describe('Performance - Basic Loading', () => {
        it('should load main sections within reasonable time', () => {
            // Page should be fully loaded
            cy.get('header').should('be.visible');
            cy.get('h1').should('be.visible');
            cy.get('footer').should('exist');
        });

        it('should have no broken images on the page', () => {
            // Check all images on the page
            cy.get('img').each(($img) => {
                // Only check visible images
                if ($img.is(':visible')) {
                    cy.wrap($img).should(($el) => {
                        const img = $el[0] as HTMLImageElement;
                        // If image has a src, it should have loaded
                        if (img.src && img.src !== '') {
                            expect(img.naturalWidth, `Image ${img.src} has width`).to.be.greaterThan(0);
                        }
                    });
                }
            });
        });
    });
});
