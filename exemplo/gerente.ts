namespace empresa{
    export class Gerente extends Funcionario{
        private setor: string;

        getSetor(): string{
            return this.setor;
        }

        setSetor(setor:string):void{
            this.setor = setor;
        }

        calcularSalario(): number{
            return (this.getValorDia() * 30) + (this.getValorDia()*0.3) ;
        }

    }
}