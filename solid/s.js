class GerenciadorTarefas {
  criarTarefa() {
    console.log("Tarefa Criada");
  }

  atualizarTarefa() {
    console.log("Tarefa Atualizada");
  }

  removerTarefa() {
    console.log("Tarefa Removida");
  }
}

class ConectorAPI {
  conectarAPI() {
    console.log("Conectando na API...");
  }
}

class GeradorRelatorio {
  produzirRelatorio() {
    console.log("Produzindo o Relatorio");
  }

  enviarRelatorio() {
    console.log("Enviando o Relatorio");
  }
}

const a = new GerenciadorTarefas();
a.criarTarefa()