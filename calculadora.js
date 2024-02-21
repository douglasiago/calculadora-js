class Calculadora {
  constructor() {
    this.resultado = document.getElementById('resultado');
  }

  limparVisor() {
    this.resultado.value = '';
  }

  adicionarValor(valor) {
    this.resultado.value += valor;
  }
  calcular() {
    try {
      const expressao = this.resultado.value;
      const resultado = this.avaliarExpresao(expressao);
      this.resultado.value = resultado;
    } catch(error) {
        this.resultado.value = 'Erro';
      }
  }
  avaliarExpresao(expressao) {
    const operadoresValidos = ['+', '-', '*', '/'];
    const ultimoCaractere = expressao.slice(-1);
    if (operadoresValidos.includes(ultimoCaractere)) {
      throw new Error('Expressão invállida.');
    }
    return Function('"use atrict";return (' + expressao + ')')();
  }

}

const calculadora = new Calculadora();

function calcular(tipo, valor) {
    if (tipo === 'acao') {
      if (valor === 'c') {
        //limpar o visor (id resultado)
        document.getElementById('resultado').value = ''
      }
      if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
        document.getElementById('resultado').value += valor
      }
      if (valor === '=') {
        var valor_campo = eval(document.getElementById('resultado').value) 
        document.getElementById('resultado').value = valor_campo
      } 
    }else if(tipo === 'valor') {
      document.getElementById('resultado').value += valor

   }
}