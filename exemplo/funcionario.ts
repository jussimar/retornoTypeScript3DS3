namespace empresa{
    export class Funcionario extends Pessoa{
        private codFuncionario: number;
        private valorDia: number;

        getCodFuncionario(): number{
            return this.codFuncionario;
        }

        setCodFuncionario(cod:number): void{
            this.codFuncionario = cod;
        }

        getValorDia(): number{
            return this.valorDia;
        }

        setValorDia(valor:number): void{
            this.valorDia = valor;
        }

                
        calcularSalario(desconto?:number): number{

            if(desconto == undefined){
                return (this.valorDia * 30)
            }else{
                return (this.valorDia * 30)-desconto;
            }
            
        }
    }
}