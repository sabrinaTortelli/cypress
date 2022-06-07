/// <reference types="cypress" />

function deleteBook(idBook){

    return cy.request({
        method: 'DELETE', 
        url: `Books/${idBook}`,
        //quebra quando não dá a requisição 200 -> failOnStatusCode
        failOnStatusCode: false
    })
}

export { deleteBook };