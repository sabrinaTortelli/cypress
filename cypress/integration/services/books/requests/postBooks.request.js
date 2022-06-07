/// <reference types="cypress" />

const payloadAddBook = require('../payloads/add-book.json');

function addBook(){

    return cy.request({
        method: 'POST', 
        url: 'Books',
        //quebra quando não dá a requisição 200 -> failOnStatusCode
        failOnStatusCode: false,
        body: payloadAddBook
    })
}

export { addBook };