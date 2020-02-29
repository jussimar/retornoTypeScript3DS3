"use strict";
var empresa;
(function (empresa_1) {
    class Filial {
        constructor(empresa) {
            this.empresa = empresa;
        }
        getEmpresa() {
            return this.empresa;
        }
        getCidade() {
            return this.cidade;
        }
        setCidade(cidade) {
            this.cidade = cidade;
        }
        getCodFilial() {
            return this.codFilial;
        }
        setCodFilial(cod) {
            this.codFilial = cod;
        }
    }
    empresa_1.Filial = Filial;
})(empresa || (empresa = {}));
