
//primeira parte relacionada ao estilo
//requisição a partir da linha 80
///////////////////////////////////////////
$('.btn_nav').click(function() {
    // animate content
    $('.page__style').addClass('animate_content');
    $('.page__description').fadeOut(100).delay(2800).fadeIn();
  
    setTimeout(function() {
      $('.page__style').removeClass('animate_content');
    }, 3200);
  
    //remove fadeIn class after 1500ms
    setTimeout(function() {
      $('.page__style').removeClass('fadeIn');
    }, 1500);
  
  });
  
  // on click show page after 1500ms
  $('.home_link').click(function() {
    setTimeout(function() {
      $('.home').addClass('fadeIn');
    }, 1500);
  });

  $('.bobo_corte_link').click(function() {
    setTimeout(function() {
      $('.bobo_corte').addClass('fadeIn');
    }, 1500);
  });
  
  $('.bon_vivant_link').click(function() {
    setTimeout(function() {
      $('.bon_vivant').addClass('fadeIn');
    }, 1500);
  });

  $('.bot_link').click(function() {
    setTimeout(function() {
      $('.bot').addClass('fadeIn');
    }, 1500);
  });
  
  $('.candidato_twitter_link').click(function() {
    setTimeout(function() {
      $('.candidato_twitter').addClass('fadeIn');
    }, 1500);
  });

  $('.choquei_link').click(function() {
    setTimeout(function() {
      $('.choquei').addClass('fadeIn');
    }, 1500);
  });

  $('.competitivo_link').click(function() {
    setTimeout(function() {
      $('.competitivo').addClass('fadeIn');
    }, 1500);
  });

  $('.conselheiro_link').click(function() {
    setTimeout(function() {
      $('.conselheiro').addClass('fadeIn');
    }, 1500);
  });

  $('.conspiracao_link').click(function() {
    setTimeout(function() {
      $('.conspiracao').addClass('fadeIn');
    }, 1500);
  });

  $('.discord_link').click(function() {
    setTimeout(function() {
      $('.discord').addClass('fadeIn');
    }, 1500);
  });

  $('.dupla_dinamica_link').click(function() {
    setTimeout(function() {
      $('.dupla_dinamica').addClass('fadeIn');
    }, 1500);
  });

  $('.espalhador_amor_link').click(function() {
    setTimeout(function() {
      $('.espalhador_amor').addClass('fadeIn');
    }, 1500);
  });

  $('.evento_link').click(function() {
    setTimeout(function() {
      $('.evento').addClass('fadeIn');
    }, 1500);
  });

  $('.highlight_link').click(function() {
    setTimeout(function() {
      $('.highlight').addClass('fadeIn');
    }, 1500);
  });
  
  $('.manguaca_link').click(function() {
    setTimeout(function() {
      $('.manguaca').addClass('fadeIn');
    }, 1500);
  });

  $('.pet_link').click(function() {
    setTimeout(function() {
      $('.pet').addClass('fadeIn');
    }, 1500);
  });

  $('.ronaldinho_link').click(function() {
    setTimeout(function() {
      $('.ronaldinho').addClass('fadeIn');
    }, 1500);
  });
  
  $('.shitposter_link').click(function() {
    setTimeout(function() {
      $('.shitposter').addClass('fadeIn');
    }, 1500);
  });

///////////////////////////////////////////////////////
//TODO O BACKEND



window.onload = function() {
  fetch('https://ink-awards-2023-production.up.railway.app/resultados')
      .then(response => response.json())
      .then(data => exibirResultadoVotacao(data))
      .catch(error => console.error('Erro ao obter os dados da API:', error));
};

function exibirResultadoVotacao(data) {
  for (let categoria in data) {
      if (data.hasOwnProperty(categoria)) {
          let candidatos = data[categoria];
          let maxVotes = Math.max(...Object.values(candidatos));
          let candidatosMaisVotados = Object.keys(candidatos).filter(candidato => candidatos[candidato] === maxVotes);
          
          if (candidatosMaisVotados.length === 1) {
              exibirCard(categoria, candidatosMaisVotados[0]);
          } else {
              exibirEmpate(categoria, candidatosMaisVotados);
          }
      }
  }
}

function exibirCard(categoria, candidatoMaisVotado) {
  const div = document.getElementById(`${categoria}_escolhido`);
  if (div) {
      const cardHtml = `
          <div class="card mx-auto" style="width: 18rem;">
              <img class="card-img-top" src="img/${candidatoMaisVotado}.jpg" alt="Card image cap">
              <div class="card-body text-center">
                  <p class="card-text">Maior votado: ${candidatoMaisVotado}</p>
              </div>
          </div>`;
      div.innerHTML = cardHtml;
      div.style.display = 'block';
  }
}

function exibirEmpate(categoria, candidatosMaisVotados) {
  const div = document.getElementById(`${categoria}_escolhido`);
  if (div) {
      const candidatosHtml = candidatosMaisVotados.map(candidato => `
          <div class="d-inline-block" style="width: 18rem;">
              <img class="card-img-top"src="img/${candidato}.jpg"  alt="${candidato}">
              <div class="card-body text-center">
                  <h5 class="card-title">${candidato}</h5>
              </div>
          </div>`).join('');

      div.innerHTML = `<div class="card-deck">${candidatosHtml}</div>`;
      div.style.display = 'block';
  }
}