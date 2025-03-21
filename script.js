class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        return `Nome: ${this.nome};Idade: ${this.idade};`;
    }
}

const form = document.getElementById('formPessoa');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
  
    const pessoa = new Pessoa(nome, idade);
    resultado.textContent = pessoa.descrever();
  
    form.reset();
  });

