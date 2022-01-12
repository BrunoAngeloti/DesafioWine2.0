/// <reference types="cypress" />

describe('Wine', ()=>{
    it('devem poder adicionar um vinho ao carrinho', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('http://localhost:3000/')
        cy.wait(2000)
        cy.get('#qtdItemsCart').should("contain", 0)
        
        cy.get('#AdicionarVinho0').click()
        cy.get('#AdicionarVinho3').click()

        cy.get('#qtdItemsCart').should("contain", 2)

        cy.get('#Vinho1').click()

        for(let n = 0; n < 4; n ++){
            cy.get('#ButtonAddWine').click()
        }

        cy.get('#qtdItemsCart').should("contain", 2)
        cy.get('#ButtonAddWineOnCart').click()
        cy.get('#qtdItemsCart').should("contain", 7)

        cy.viewport(550, 750)

        cy.get('#ButtonMobileAddWineOnCart').click()
        cy.get('#qtdItemsCart').should("contain", 8)

        cy.get('#LogoMenuMobile').click()
        cy.get('#BackToMenu').click()
    });

    it('devem poder fazer a paginação corretamente', () =>{
        cy.get('#ButtonPage1').click()
        cy.get('#ButtonPage2').click()
        cy.get('#ButtonPassPage').click()
        cy.get('#ButtonPage7').click()

        cy.get('#ButtonBackPage').click()
        cy.get('#ButtonPage5').click()
        cy.get('#ButtonPage4').click()
        cy.get('#ButtonPage1').click()     
    });

    it('devem poder fazer a filtragem pelo preço', ()=>{
        cy.get('#filter40').click()
        cy.get('#filter60').click()
        cy.get('#filter100').click()
        cy.get('#filter200').click()
        cy.get('#filter500').click()
        cy.get('#filter999999').click()

        cy.get('#filter999999').click()
    })


    it('devem adicionar itens ao carrinho e estar la corretamente', ()=>{
        cy.clearLocalStorage()

        cy.get('#AdicionarVinho0').click()
        cy.get('#AdicionarVinho3').click()

        cy.get('#shoppingCart').click()

        cy.get('#qtdItemsShoppingCart').should("contain", 2)

        cy.get('#addOneItemId0').click()
        cy.get('#addOneItemId0').click()
        cy.get('#addOneItemId3').click()
        cy.get('#addOneItemId3').click()
        

        cy.get('#qtdItemsShoppingCart').should("contain", 6)

        cy.get('#removeOneItemId3').click()
        cy.get('#removeOneItemId3').click()

        cy.get('#qtdItemsShoppingCart').should("contain", 4)

        cy.get('#removeItemId3').click()
        cy.get('#removeItemId0').click()

        cy.get('#qtdItemsShoppingCart').should("contain", 0)

        cy.get('#closeShoppingCart').click()
    })
})