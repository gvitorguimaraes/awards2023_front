
function votar(categoria, candidato) {
    fetch('https://ink-awards-2023-production.up.railway.app/votar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ categoria, candidato })
    })
    .then(response => {
      if (response.ok) {
        alert(`Você votou em ${candidato} na categoria ${categoria}!`);
        window.history.back();
      } else {
        alert('Ocorreu um erro ao votar. Por favor, tente novamente.');
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao votar. Por favor, tente novamente.');
    });
}