namespace empresa{
    export class Filial{
        private cidade:String;
        private codFilial: number;
        private empresa: Empresa;

        constructor(empresa:Empresa){
            this.empresa = empresa;
        }

        getEmpresa(): Empresa{
            return this.empresa;
        }

        getCidade():String{
            return this.cidade;
        }

        setCidade(cidade:String):void{
            this.cidade = cidade;
        }

        getCodFilial():number{
            return this.codFilial;
        }

        setCodFilial(cod:number):void{
            this.codFilial = cod;
        }
        
    }
}