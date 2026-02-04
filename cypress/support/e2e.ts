// ***********************************************************
// This file is processed and loaded automatically before your test files.
// It's a great place to put global configuration and behavior that modifies Cypress.
// You can read more here: https://on.cypress.io/configuration
// ***********************************************************

// Import commands (if needed)
// import './commands'

// Prevent uncaught exception failures (common in SPAs)
Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test on uncaught exceptions
    // This is useful for SPAs that may throw non-critical errors
    console.warn('Uncaught exception:', err.message);
    return false;
});

// Log console errors to Cypress runner
Cypress.on('window:before:load', (win) => {
    // Spy on console.error
    const originalConsoleError = win.console.error;
    win.console.error = (...args) => {
        // Log to Cypress
        Cypress.log({
            name: 'console.error',
            message: args.map((arg) => (typeof arg === 'object' ? JSON.stringify(arg) : arg)).join(' '),
        });
        originalConsoleError.apply(win.console, args);
    };
});

// Custom command to check if an image is loaded
Cypress.Commands.add('imageLoaded', { prevSubject: 'element' }, (subject) => {
    cy.wrap(subject).should('be.visible');
    cy.wrap(subject).should(($img) => {
        const img = $img[0] as HTMLImageElement;
        expect(img.naturalWidth, 'image has natural width').to.be.greaterThan(0);
        expect(img.naturalHeight, 'image has natural height').to.be.greaterThan(0);
    });
});

// Extend Cypress chainable interface for TypeScript
declare global {
    namespace Cypress {
        interface Chainable {
            imageLoaded(): Chainable<JQuery<HTMLElement>>;
        }
    }
}
