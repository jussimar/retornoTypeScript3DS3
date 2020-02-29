"use strict";
var empresa;
(function (empresa) {
    class Empresa {
        constructor() {
            this.clientes = [];
            this.funcionarios = [];
        }
        getNomeEmpresa() {
            return this.nomeEmpresa;
        }
        setNomeEmpresa(nome) {
            this.nomeEmpresa = nome;
        }
        getAtividade() {
            return this.atividade;
        }
        setAtividade(atividade) {
            this.atividade = atividade;
        }
        getCidade() {
            return this.cidade;
        }
        setCidade(cidade) {
            this.cidade = cidade;
        }
        addCliente(cliente) {
            this.clientes.push(cliente);
        }
        addFuncionario(funcionario) {
            this.funcionarios.push(funcionario);
        }
        getCliente() {
            return this.clientes;
        }
        getFuncionario() {
            return this.funcionarios;
        }
    }
    empresa.Empresa = Empresa;
})(empresa || (empresa = {}));
