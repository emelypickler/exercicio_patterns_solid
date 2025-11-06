class Estudante {
  constructor(nome) {
    this.nome = nome;
  }

  estudar() {
    console.log(this.nome + " está estudando.");
  }
}

class EstudanteDeGraduacao extends Estudante {
  constructor(nome){
    super();
    this.nome = nome;
  }

  estudar() {
    console.log(this.nome + " está estudando na graduação.");
  }

  entregarTCC() {
    console.log('Entregar TCC');
  }
}

const a = new Estudante('Joshua');
a.estudar();

const b = new EstudanteDeGraduacao('ABC');
b.estudar();