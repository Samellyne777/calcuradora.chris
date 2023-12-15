function calcularTaxaNatalidade() {
    const numNascimentos = parseFloat(document.getElementById('births').value);
    const populacaoAtual = parseFloat(document.getElementById('population').value);
  
    if (isNaN(numNascimentos) || isNaN(populacaoAtual)) {
      alert('Por favor, insira números válidos.');
      return;
    }
  
    const taxaNatalidade = (numNascimentos * 1000) / populacaoAtual;
    const resultado = `A taxa de natalidade é de ${taxaNatalidade.toFixed(2)}%.`;
  
    document.getElementById('result').textContent = resultado;
  }

  function openCalculator() {
    window.open("popup.html", "_blank", "width=400,height=400");
}

  