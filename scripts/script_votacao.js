
function votar(categoria, candidato) {
    fetch('http://127.0.0.1:5000/votar', {
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