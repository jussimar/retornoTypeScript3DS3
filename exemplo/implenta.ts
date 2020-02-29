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


    let f = new Funcionario("Claudio Dollynho","111.111.111-11");
    f.setIdade(32);
    f.setCodFuncionario(456);
    f.setValorDia(100);

    document.getElementById("nomeF").textContent = f.getNome();
    document.getElementById("cpfF").textContent = f.getCpf();
    document.getElementById("codF").textContent = f.getCodFuncionario().toString();
    document.getElementById("idadeF").textContent = f.getIdade().toString();
    document.getElementById("valorDiaF").textContent = "R$ "+f.getValorDia();
    document.getElementById("salarioF").textContent = "R$ "+f.calcularSalario(300);


    let g = new Gerente("Oswaldo","555.555.555-55");
    g.setIdade(32);
    g.setCodFuncionario(963);
    g.setValorDia(100);
    g.setSetor("T.I.");

    document.getElementById("nomeG").textContent = g.getNome();
    document.getElementById("cpfG").textContent = g.getCpf();
    document.getElementById("codG").textContent = g.getCodFuncionario().toString();
    document.getElementById("idadeG").textContent = g.getIdade().toString();
    document.getElementById("valorDiaG").textContent = "R$ "+g.getValorDia();
    document.getElementById("salarioG").textContent = "R$ "+g.calcularSalario();
    document.getElementById("setorG").textContent = g.getSetor();

    let e = new Empresa();
    e.setNomeEmpresa("Fundação X");
    e.setCidade("Itanhaém");
    e.setAtividade("T.I");
    e.addCliente(c);
    e.addFuncionario(f);
    e.addFuncionario(g);

    document.getElementById("nomeE").textContent = e.getNomeEmpresa();
    document.getElementById("atividadeE").textContent = e.getAtividade();
    document.getElementById("cidadeE").textContent = e.getCidade();

    let tbFuncionario = document.getElementById("tbFuncionario");

    e.getFuncionario().forEach(e => {
        let nome = e.getNome();
        if(e instanceof Gerente){
            nome += " - Gerente";
        }
        let html = "<tr><td>"+nome+"</td><td>"+e.getCodFuncionario()+"</td></tr>";
        tbFuncionario.innerHTML += html;
    });







}