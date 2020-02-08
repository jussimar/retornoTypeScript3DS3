var empresa;
(function (empresa) {
    var Pessoa = /** @class */ (function () {
        function Pessoa(nome, cpf) {
            this.cpf = cpf;
            this.nome = nome;
        }
        Pessoa.prototype.getCpf = function () {
            return this.cpf;
        };
        //mostra o valor
        Pessoa.prototype.getNome = function () {
            return this.nome;
        };
        //altera o valor
        Pessoa.prototype.setNome = function (nome) {
            this.nome = nome;
        };
        Pessoa.prototype.getIdade = function () {
            return this.idade;
        };
        //altera o valor
        Pessoa.prototype.setIdade = function (idade) {
            this.idade = idade;
        };
        return Pessoa;
    }());
})(empresa || (empresa = {}));
