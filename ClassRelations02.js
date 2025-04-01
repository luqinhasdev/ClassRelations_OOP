class Library {
    constructor() {
        this.books = []
    }
    addBook(Book){ // Função para Adcionar Livros, Usando como Parâmetro a Classe Livro
        this.books.push(Book)
    }
    removeBook(Book){ // Função para Remover Livros, Criando uma Varíavel Fechada para os Índices dos Livros e
        const index = this.books.indexOf(Book) // Fazendo uma Verificação se o Livro Realmente Existe na Biblioteca
        if (index !== -1) {
            this.books.splice(index, 1)
            console.log(`Livro ${Book.title} Removido com Sucesso! :)`)
        }
        else {
            throw new Error("Livro não Existe na Biblioteca! :(")
        }
    }
    searchBook() { // Função para Imprimir a Lista de Livros
        console.log("Lista de Livros da Biblioteca:");
        this.books.forEach(book => {
            console.log(`Título: ${book.title}, Autor: ${book.author}, Ano: ${book.year}`);
        });
    }
}
class Book {
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
    }
}