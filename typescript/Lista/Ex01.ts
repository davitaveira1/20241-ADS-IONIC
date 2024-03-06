class Livro{
    titulo : string;
    autor : string;
    anoPublicacao : number

    constructor(titulo,autor,anoPublicacao){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    public getTitulo() : string{
        return this.titulo;
    }

    public getAutor() : string{
        return this.autor;
    }

    public getAnoPublicacao() : number {
        return this.anoPublicacao;
    }


}

class Usuario{
    private nome : string;
    private idade : number
    
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }

    public getNome() : string {
        return this.nome;
    }

    public getIdade() : number {
        return this.idade;
    }
}

class biblioteca{
    acervo : Livro[];
    usuarios : Usuario[];

    constructor(){
        this.acervo = [];
        this.usuarios = [];
    }

    public adicionarLivro(l : Livro){
        this.acervo.push(l);
    }

    public adicionarUsuario(u : Usuario){
        this.usuarios.push(u);
    }

    public emprestarLivro(l : Livro, u : Usuario){
        if( (this.acervo.some(liv => liv === l)) && (this.usuarios.some(user => user === u)))
            console.log("Empréstimo realizado com sucesso!")
        else
            console.log("Livro e/ou user não existem na biblioteca!")
    }
}

let livro1 = new Livro("titulo a", "autor a", 1998);
let user1 = new Usuario("davi",40);
let user2 = new Usuario("daniel",40);
let bib1 = new biblioteca();

bib1.adicionarLivro(livro1);
bib1.adicionarUsuario(user1);
bib1.emprestarLivro(livro1,user2);