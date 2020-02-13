namespace empresa{
   class Cliente extends Pessoa{
       private saldo: number|undefined;
       private limite: number|undefined;
       private codCliente: number|undefined;

       getSaldo():number|undefined{
           return this.saldo;
       }

       setSaldo(saldo:number):void{
           this.saldo = saldo;
       }

       getLimite():number|undefined{
           return this.limite;
       }

       setLimite(limite:number):void{
           this.limite = limite;
       }

       getCodCliente():number|undefined{
           return this.codCliente;
       }

       setCodCliente(codCliente:number):void{
           this.codCliente = codCliente;
       }
   }
}