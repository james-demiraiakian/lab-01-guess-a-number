
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains the guess button', ()=>{
            cy.get('#guess-but').should('be.visible');
        });
    });

    describe('user interactions', ()=>{
        it('attempt to guess a random number', ()=>{
            cy.get('#guess-but').click();
            cy.get('#guess-but').click();
            cy.get('#guess-but').click();
            cy.get('#guess-but').click();
            cy.get('#result').should('be.visible');
        });
    });
});