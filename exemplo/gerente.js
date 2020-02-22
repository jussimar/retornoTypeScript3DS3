"use strict";
var empresa;
(function (empresa) {
    class Gerente extends empresa.Funcionario {
        getSetor() {
            return this.setor;
        }
        setSetor(setor) {
            this.setor = setor;
        }
        calcularSalario() {
            return (this.getValorDia() * 30) + (this.getValorDia() * 0.3);
        }
    }
    empresa.Gerente = Gerente;
})(empresa || (empresa = {}));
