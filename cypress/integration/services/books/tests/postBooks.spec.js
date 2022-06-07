import * as postBooks from '../requests/postBooks.request';

describe('POST Books', () => {
    it('Adicionar um novo livro', () => {
        //should funciona igual ao then 
        postBooks.addBook().should((response) => {
            //espera que a resposta seja 200
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq("Sem Saída");
            
        });
    });
});