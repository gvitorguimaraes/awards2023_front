


function votar(categoria, candidato) {
    // Enviar dados para o servidor (back-end) para salvar na planilha
    // Por exemplo, você pode usar fetch() ou XMLHttpRequest() para enviar os dados para o seu back-end
    // Exemplo com fetch():
    fetch('http://localhost:5000/votar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ categoria, candidato })
    })
    .then(response => {
      if (response.ok) {
        alert(`Você votou em ${candidato} na categoria ${categoria}!`);
      } else {
        alert('Ocorreu um erro ao votar. Por favor, tente novamente.');
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao votar. Por favor, tente novamente.');
    });
  }