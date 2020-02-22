"use strict";
var empresa;
(function (empresa) {
    class Funcionario extends empresa.Pessoa {
        getCodFuncionario() {
            return this.codFuncionario;
        }
        setCodFuncionario(cod) {
            this.codFuncionario = cod;
        }
        getValorDia() {
            return this.valorDia;
        }
        setValorDia(valor) {
            this.valorDia = valor;
        }
        calcularSalario(desconto) {
            if (desconto == undefined) {
                return (this.valorDia * 30);
            }
            else {
                return (this.valorDia * 30) - desconto;
            }
        }
    }
    empresa.Funcionario = Funcionario;
})(empresa || (empresa = {}));
