import * as deleteBooks from '../requests/deleteBooks.request';
import * as getBooks from '../requests/getBooks.request';
import * as postBooks from '../requests/postBooks.request';

describe('DELETE Books', () => {
    it('Deletar um livro', () => {
        //asserção apenas no deleteBooks
        getBooks.allBooks().then((resAllBooks) => {
            cy.log(resAllBooks.body[0].id);
            deleteBooks.deleteBook(resAllBooks.body[0].id).should((resDeleteBook) => {
                //espera que a resposta seja 200
                expect(resDeleteBook.status).to.eq(200);
                
            });
        });        
    });

    it('Criar e Deletar um livro', () => {
        //asserção apenas no deleteBooks
        postBooks.addBook().then((resAddBook) => {
            deleteBooks.deleteBook().should((resDeleteBook) => {
                //espera que a resposta seja 200
                expect(resDeleteBook.status).to.eq(200);
                
            });
        });        
    });
});