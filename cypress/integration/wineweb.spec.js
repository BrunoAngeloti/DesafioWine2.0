/// <reference types="cypress" />

describe('Wine', ()=>{
    it('devem poder adicionar um vinho ao carrinho', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('http://localhost:3000/')
        cy.get('.style__ContainerCart-sc-bkd84-0 > span').should("contain", 0)

        cy.get('.style__Wines-sc-mhyjcg-3 > :nth-child(1) > button').click()

        cy.get('.style__ContainerCart-sc-bkd84-0 > span').should("contain", 1)

        cy.get(':nth-child(1) > .style__ContentCard-sc-1ui9u84-1').click()

        for(let n = 0; n < 4; n ++){
            cy.get('.style__AddOnCart-sc-ei19f7-8 > div > :nth-child(3)').click()
        }

        cy.get('.style__ContainerCart-sc-bkd84-0 > span').should("contain", 1)
        cy.get('.style__AddOnCart-sc-ei19f7-8 > .style__Button-sc-ei19f7-9').click()
        cy.get('.style__ContainerCart-sc-bkd84-0 > span').should("contain", 6)

        cy.viewport(550, 750)

        cy.get('.style__FooterMobile-sc-ei19f7-10 > .style__Button-sc-ei19f7-9').click()
        cy.get('.style__ContainerCart-sc-bkd84-0 > span').should("contain", 7)

        cy.get('[src="/ic-line.svg"]').click()
        cy.get('.style__MenuMobile-sc-1i6tr25-6 > div > .hlStbA').click()
    });

    it('devem poder fazer a paginação corretamente', () =>{
        cy.get(':nth-child(2) > .style__ButtonPag-sc-r29819-2').click()

        cy.get('.style__Buttons-sc-r29819-1 > :nth-child(5)').click()
        cy.get('.style__ButtonPass-sc-r29819-3').click()
        cy.get('.style__Buttons-sc-r29819-1 > :nth-child(1)').click()
        
    });

    it('devem poder fazer a filtragem pelo preço', ()=>{
        cy.get('.style__Filter-sc-4wwmc8-0 > :nth-child(1)').click()
        cy.get('.style__Filter-sc-4wwmc8-0 > :nth-child(2)').click()
        cy.get('.style__Filter-sc-4wwmc8-0 > :nth-child(3)').click()
        cy.get('.style__Filter-sc-4wwmc8-0 > :nth-child(4)').click()
        cy.get('.style__Filter-sc-4wwmc8-0 > :nth-child(5)').click()
        cy.get('.style__Filter-sc-4wwmc8-0 > :nth-child(6)').click()

        cy.get('.style__Filter-sc-4wwmc8-0 > :nth-child(6)').click()
    })
})