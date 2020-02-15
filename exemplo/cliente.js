"use strict";
var empresa;
(function (empresa) {
    class Cliente extends empresa.Pessoa {
        constructor(nome, cpf, cod) {
            super(nome, cpf);
            this.codCliente = cod;
        }
        getSaldo() {
            return this.saldo;
        }
        setSaldo(saldo) {
            this.saldo = saldo;
        }
        getLimite() {
            return this.limite;
        }
        setLimite(limite) {
            this.limite = limite;
        }
        getCodCliente() {
            return this.codCliente;
        }
        setCodCliente(codCliente) {
            this.codCliente = codCliente;
        }
    }
    empresa.Cliente = Cliente;
})(empresa || (empresa = {}));
