/// <reference types="cypress" />

function allBooks(){

    return cy.request({
        method: 'GET', 
        url: 'Books',
        //quebra quando não dá a requisição 200 -> failOnStatusCode
        failOnStatusCode: false,
    })
}

export { allBooks };