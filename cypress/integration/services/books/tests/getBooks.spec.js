import * as getBooks from '../requests/getBooks.request';

describe('GET Books', () => {
    it('Listar todos os livros', () => {
        //should funciona igual ao then 
        getBooks.allBooks().should((response) => {
            cy.log(response.status);
            cy.log(response.statusText);
            cy.log(response.body);
            //espera que a resposta seja 200
            expect(response.status).to.eq(200);
            //corpo do retorno não pode ser nulo
            expect(response.body).to.be.not.null;
        });
    });
});