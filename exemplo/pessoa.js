"use strict";
var empresa;
(function (empresa) {
    class Pessoa {
        constructor(nome, cpf) {
            this.cpf = cpf;
            this.nome = nome;
        }
        getCpf() {
            return this.cpf;
        }
        //mostra o valor
        getNome() {
            return this.nome;
        }
        //altera o valor
        setNome(nome) {
            this.nome = nome;
        }
        getIdade() {
            return this.idade;
        }
        //altera o valor
        setIdade(idade) {
            this.idade = idade;
        }
    }
    empresa.Pessoa = Pessoa;
})(empresa || (empresa = {}));
