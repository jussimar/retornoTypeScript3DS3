namespace empresa{
    let p = new Pessoa("Paulo Felix","000.000.000-90");
    p.setIdade(30);
    
    document.getElementById("nome").textContent = p.getNome();
    document.getElementById("cpf").textContent = p.getCpf();
    document.getElementById("idade").textContent = p.getIdade().toString();

    let c = new Cliente("Welington Orelha","120.120.120.00",120);
    c.setIdade(50);
    c.setLimite(3000);
    c.setSaldo(2000);
    
    document.getElementById("nomeC").textContent = c.getNome();
    document.getElementById("cpfC").textContent = c.getCpf();
    document.getElementById("codC").textContent = c.getCodCliente().toString();
    document.getElementById("idadeC").textContent = c.getIdade().toString();
    document.getElementById("limiteC").textContent = "R$ "+c.getLimite().toString();
    document.getElementById("saldoC").textContent = "R$ "+c.getSaldo().toString();


    
}