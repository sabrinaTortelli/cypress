import * as putBooks from '../requests/putBooks.request';
import * as getBooks from '../requests/getBooks.request';
import * as postBooks from '../requests/postBooks.request';

describe('PUT Books', () => {
    it('Alterar um novo livro', () => {
        getBooks.allBooks().then((resAllBooks) => {
            cy.log(resAllBooks.body[0].id);
            putBooks.changeBook(resAllBooks.body[0].id).should((resChangeBook) => {
                //espera que a resposta seja 200
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.eq("Outro Livro");
                
            });
        });
    });

    it('Criar e Alterar um novo livro', () => {
        //should funciona igual ao then 
        postBooks.addBook().then((resAddBook) => {
            putBooks.changeBook(resAddBook.body.id).should((resChangeBook) => {
                //espera que a resposta seja 200
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.eq("Outro Livro");
                
            });
        }); 
    });
});