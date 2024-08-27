class carro {
    // Construtor para inicializar o carro
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.motorLigado = false; // O motor está desligado por padrão
    }

    // Método para ligar o motor
    ligarMotor() {
        this.motorLigado = true;
    }

    // Método para desligar o motor
    desligarMotor() {
        this.motorLigado = false;
    }

    // Método para obter o status do motor
    statusMotor() {
        return this.motorLigado ? "O motor está ligado." : "O motor está desligado.";
    }
}

// Função para testar a classe Carro
function testarCarro() {
    // Criando um objeto Carro
    const meuCarro = new carro("Toyota", "Corolla", 2023);

    // Verificando o status atual do motor
    console.log(meuCarro.statusMotor()); // O motor está desligado.

    // Ligando o motor
    meuCarro.ligarMotor();
    console.log(meuCarro.statusMotor()); // O motor está ligado.

    // Desligando o motor
    meuCarro.desligarMotor();
    console.log(meuCarro.statusMotor()); // O motor está desligado.
}

// Chamar a função de teste
testarCarro();

class Pessoa {
    // Construtor para inicializar os atributos
    constructor(nome, idade, profissao, salario) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.salario = salario;
    }

    // Método para exibir o nome da empresa e o tempo de trabalho
    exibeTrabalho(nomeEmpresa, tempoDeTrabalho) {
        console.log("Nome da empresa: " + nomeEmpresa);
        console.log("Tempo de trabalho: " + tempoDeTrabalho + " anos");
    }

    // Métodos getters (opcionais, para acessar os atributos)
    getNome() {
        return this.nome;
    }

    getIdade() {
        return this.idade;
    }

    getProfissao() {
        return this.profissao;
    }

    getSalario() {
        return this.salario;
    }
}

// Função para testar
function testarPessoa() {
    // Criando um objeto Pessoa
    const pessoa = new Pessoa("João Silva", 30, "Desenvolvedor", 5000.00);

    // Exibindo informações sobre o trabalho
    pessoa.exibeTrabalho("Tech Innovations", 8);
    
    // Exibindo os atributos da pessoa (opcional)
    console.log("Nome: " + pessoa.getNome());
    console.log("Idade: " + pessoa.getIdade());
    console.log("Profissão: " + pessoa.getProfissao());
    console.log("Salário: R$ " + pessoa.getSalario().toFixed(2));
}

// Chamar a função de teste
testarPessoa();



//3
class automovel {
    constructor(cor, modelo, tipocombustivel, quantidaderodas) {
        this.cor = cor;
        this.modelo = modelo;
        this.tipocombustivel = tipocombustivel;
        this.quantidaderodas = quantidaderodas;
    }

    exibirInfo() {
        console.log(`Cor: ${this.cor}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Tipo de Combustível: ${this.tipocombustivel}`);
        console.log(`Quantidade de Rodas: ${this.quantidaderodas}`);
    }
}

class Carro extends automovel {
    constructor(cor, modelo, tipocombustivel, quantidaderodas, vidroaberto = false) {
        super(cor, modelo, tipocombustivel, quantidaderodas);
        this.vidroaberto = vidroaberto;
    }

    ligarCarro() {
        console.log(`${this.modelo} está ligado.`);
    }

    desligarCarro() {
        console.log(`${this.modelo} está desligado.`);
    }

    abrirVidro() {
        this.vidroaberto = true;
        console.log(`O vidro do ${this.modelo} está aberto.`);
    }

    descerVidro() {
        this.vidroaberto = false;
        console.log(`O vidro do ${this.modelo} está fechado.`);
    }
}

class Moto extends automovel {
    constructor(cor, modelo, tipocombustivel, quantidaderodas) {
        super(cor, modelo, tipocombustivel, quantidaderodas);
    }

}

class caminhao extends automovel {
    constructor(cor, modelo, tipocombustivel, quantidaderodas) {
        super(cor, modelo, tipocombustivel, quantidaderodas);
    }
}

const meuCarro = new Carro('branco', 'palio', 'gasolina', 4);
meuCarro.exibirInfo();
meuCarro.ligarCarro();
meuCarro.abrirVidro();
meuCarro.descerVidro();
meuCarro.desligarCarro();

const minhaMoto = new Moto('vermelha', 'biz', 'gasolina', 2);
minhaMoto.exibirInfo();

const meuCaminhao = new caminhao('preto', 'volvo FH', 'diesel', 6);
meuCaminhao.exibirInfo();


//4
class cliente {
    constructor(nome, profissao, saldo) {
        this.nome = nome;
        this.profissao = profissao;
        this.saldo = saldo;
    }
    pix(valor) {
        if (valor <= 0) {
            console.log('Valor do Pix deve ser positivo');
            return;
        }
        if (valor > this.saldo) {
            console.log('Saldo insuficiente para realizar o Pix');
            return;
        }
        this.saldo -= valor;
        console.log(`Pix de R$${valor.tofixed(2)} realizado com sucesso.`);
    }

    emprestimo(valor) {
        if (valor <= 0) {
            console.log('Valor do empréstimo deve ser positivo');
            return;
        }
        this.saldo += valor;
        console.log(`Empréstimo de R$${valor.tofixed(2)} concedido com sucesso`);
    }

    saque(valor) {
        if (valor <= 0) {
            console.log('Valor do saque deve ser positivo');
            return;
        }
        if (valor > this.saldo) {
            console.log('Saldo insuficiente para realizar o saque');
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor.tofixed(2)} realizado com sucesso`);
    }

    extrato() {
        console.log(`Extrato Bancário`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Profissão: ${this.profissao}`);
        console.log(`Saldo: R$${this.saldo.tofixed(2)}`);
    }
}

function realizartransacoes() {
    const nome = prompt('Digite seu nome:');
    const profissao = prompt('Digite sua profissão:');
    let saldo = parsefloat(prompt('Digite seu saldo inicial:'));

    const cliente = new cliente(nome, profissao, saldo);

    while (true) {
        console.log('\nEscolha uma operação:');
        console.log('1. Pix');
        console.log('2. Empréstimo');
        console.log('3. Saque');
        console.log('4. Extrato');
        console.log('5. Sair');

        const opcao = parseint(prompt('Digite o número da opção desejada:'));

        switch (opcao) {
            case 1:
                const valorpix = parsefloat(prompt('Digite o valor do Pix:'));
                cliente.pix(valorpix);
                break;
            case 2:
                const valoremprestimo = parsefloat(prompt('Digite o valor do empréstimo:'));
                cliente.emprestimo(valoremprestimo);
                break;
            case 3:
                const valorsaque = parsefloat(prompt('Digite o valor do saque:'));
                cliente.saque(valorsaque);
                break;
            case 4:
                cliente.extrato();
                break;
            case 5:
                console.log('Saindo...');
                return; 
            default:
                console.log('Opção inválida');
        }
    }
}


//5
class maquinas {
    constructor(nomemaquina,quanteixos,rotaçoespm,consumoenergia) {
        this.nomemaquina=nomemaquina;
        this.quanteixos=quanteixos;
        this.rotaçoespm=rotaçoespm;
        this.consumoenergia=consumoenergia
        this.ligada=false;
    }
}
    class furadeira extends maquinas {
    constructor(nomemaquina, rotaçoespm, consumoenergia) {
        super(nomemaquina, rotaçoespm, consumoenergia);
       }

    ligar() {
        if (!this.ligada) {
            this.ligada = true;
            console.log(`${this.nomemaquina} está ligada.`);
        } else {
            console.log(`${this.nomemaquina} já está ligada.`);
        }
    }

    desligar() {
        if (this.ligada) {
            this.ligada = false;
            console.log(`${this.nomemaquina} está desligada.`);
        } else {
            console.log(`${this.nomemaquina} já está desligada.`);
        }
    }

    ajustarVelocidade(novaRotacao) {
        if (this.ligada) {
            this.rotaçoespm = novaRotacao;
            console.log(`A velocidade de ${this.nomemaquina} foi ajustada para ${this.rotaçoespm} RPM.`);
        } else {
            console.log(`Não é possível ajustar a velocidade. A máquina ${this.nomemaquina} está desligada.`);
        }
    }

    toString() {
        return `Máquina: ${this.nomemaquina}, Eixos: ${this.quanteixos}, RPM: ${this.rotaçoespm}, Consumo: ${this.consumoenergia} kWh`;
    }
}

const minhaFuradeira = new furadeira('Furadeira X', 1500, 1.5);
console.log(minhaFuradeira.toString());
minhaFuradeira.ligar();
minhaFuradeira.ajustarVelocidade(2000);
minhaFuradeira.desligar();



//6
class Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.tipoComunicacao = tipoComunicacao;
        this.consumoEnergia = consumoEnergia;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
        console.log(`${this.nome} está ligado.`);
    }

    desligar() {
        this.ligado = false;
        console.log(`${this.nome} está desligado.`);
    }
}

class Fritadeira extends Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia, temperaturaMax) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
        this.temperaturaMax = temperaturaMax;
        this.temperaturaAtual = 0;
    }

    ajustarTemperatura(setpoint) {
        if (this.ligado) {
            if (setpoint <= this.temperaturaMax) {
                this.temperaturaAtual = setpoint;
                console.log(`Temperatura ajustada para ${setpoint}°C.`);
            } else {
                console.log(`Temperatura máxima permitida é ${this.temperaturaMax}°C.`);
            }
        } else {
            console.log('A fritadeira deve estar ligada para ajustar a temperatura.');
        }
    }
}

class Televisao extends Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia, tamanhoTela) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
        this.tamanhoTela = tamanhoTela;
    }

    trocarCanal(canal) {
        if (this.ligado) {
            console.log(`Canal trocado para ${canal}.`);
        } else {
            console.log('A televisão deve estar ligada para trocar de canal.');
        }
    }
}

class ArCondicionado extends Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia, temperaturaMax) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
        this.temperaturaMax = temperaturaMax;
        this.temperaturaAtual = 0;
    }

    ajustarTemperatura(setpoint) {
        if (this.ligado) {
            if (setpoint <= this.temperaturaMax) {
                this.temperaturaAtual = setpoint;
                console.log(`Temperatura ajustada para ${setpoint}°C.`);
            } else {
                console.log(`Temperatura máxima permitida é ${this.temperaturaMax}°C.`);
            }
        } else {
            console.log('O ar condicionado deve estar ligado para ajustar a temperatura.');
        }
    }
}
const minhaFritadeira = new Fritadeira('Fritadeira Elétrica', 10, 200, 'Wi-Fi', 1500, 200);
const minhaTelevisao = new Televisao('Smart TV', 5, 1500, 'Bluetooth', 100, 55);
const meuArCondicionado = new ArCondicionado('Ar Condicionado Split', 3, 2500, 'Infrared', 2000, 16);

minhaFritadeira.ligar();
minhaFritadeira.ajustarTemperatura(180);

minhaTelevisao.ligar();
minhaTelevisao.trocarCanal(5);

meuArCondicionado.ligar();
meuArCondicionado.ajustarTemperatura(22);

//7
class Livros {
    constructor(nome, quantidade, preco, autor, edicao) {
      this.nome = nome;
      this.quantidade = quantidade;
      this.preco = preco;
      this.autor = autor;
      this.edicao = edicao;
    }
  
    emprestar() {
      if (this.quantidade > 0) {
        this.quantidade--;
        console.log(`O livro "${this.nome}" foi emprestado. Quantidade restante: ${this.quantidade}`);
      } else {
        console.log(`O livro "${this.nome}" não está disponível para emprestimo.`);
      }
    }
  
    devolver() {
      this.quantidade++;
      console.log(`O livro "${this.nome}" foi devolvido. Quantidade disponível: ${this.quantidade}`);
    }
  }
  
  const livro1 = new Livros('O Senhor dos Anéis', 3, 45.90, 'J.R.R. Tolkien', 3);
  
  livro1.emprestar();
  livro1.devolver(); 

