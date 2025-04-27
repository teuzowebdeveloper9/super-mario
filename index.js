const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

 let pontuacaoPlayer1 = 0;
 let pontuacaoPlayer2 = 0;

const donkeyKong = {
    nome: 'Donkey Kong',
    velocidade: 2,
    manobrabilidade: 2,
    poder: 5
}

const mario = {
    nome: 'Mario',
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
}
const luigi = {
    nome: 'Luigi',
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
}
const bowser = {
    nome: 'Bowser',
    velocidade: 5,
    manobrabilidade: 2,
    poder: 5,
}
const peach = {
    nome: 'Peach',
    velocidade: 3,
    manobrabilidade: 5, 
    poder: 2,
}
const yoshi = {
    nome: 'Yoshi',
    velocidade: 2,
    manobrabilidade: 4,
    poder: 3
}

const personagens = [mario, luigi, bowser, peach, yoshi, donkeyKong];

function mostrarPersonagens() {
  console.log('\nEscolha seu personagem:');
  personagens.forEach((p, i) => {
    let emoji = '';
    switch (p.nome) {
      case 'Mario': emoji = '🍄'; break;
      case 'Luigi': emoji = '👨‍🔧'; break;
      case 'Bowser': emoji = '🐲'; break;
      case 'Peach': emoji = '👸'; break;
      case 'Yoshi': emoji = '🦖'; break;
      case 'Donkey Kong': emoji = '🐵'; break;
    }
    console.log(`${i + 1} - ${emoji}  ${p.nome}`);
  });
}

function escolherPersonagem(numero, jaEscolhido) {
  return new Promise((resolve) => {
    mostrarPersonagens();
    readline.question(`\nJogador ${numero}, digite o número do seu personagem: `, (res) => {
      const idx = parseInt(res) - 1;
      if (isNaN(idx) || idx < 0 || idx >= personagens.length || personagens[idx] === jaEscolhido) {
        console.log('❌ Escolha inválida! Tente novamente.');
        resolve(escolherPersonagem(numero, jaEscolhido));
      } else {
        resolve(personagens[idx]);
      }
    });
  });
}

function dado() {
  return Math.floor(Math.random() * 6) + 1;
}

function escolherFase() {
  const fases = ['reta', 'curva', 'confronto'];
  const emojis = { reta: '🛣️', curva: '🌀', confronto: '⚡' };
  const aleatoriedade = Math.floor(Math.random() * fases.length);
  const faseEscolhida = fases[aleatoriedade];
  return { faseEscolhida, emoji: emojis[faseEscolhida] };
}

function logicasFase(faseEscolhida, jogador1, jogador2){
    if (faseEscolhida == 'reta'){

    let resultadoDado = dado()

    let player1Atual = jogador1.velocidade + resultadoDado;

    let player2Atual = jogador2.velocidade + resultadoDado;
            if(player1Atual > player2Atual){
                pontuacaoPlayer1 += 1;
                console.log(`O jogador ${jogador1.nome} venceu a corrida!`);
            } else if(player1Atual < player2Atual){
                pontuacaoPlayer2 += 1;
                console.log(`O jogador ${jogador2.nome} venceu a corrida!`);
            }else{
                pontuacaoPlayer1 += 0
                pontuacaoPlayer2 += 0;
                console.log('Empate!');
            }

    }else if (faseEscolhida == 'curva'){
        let resultadoDado = dado()

        let player1Atual = jogador1.manobrabilidade + resultadoDado;

        let player2Atual = jogador2.manobrabilidade + resultadoDado;
                if(player1Atual > player2Atual){
                    pontuacaoPlayer1 += 1;
                    console.log(`O jogador ${jogador1.nome} venceu a corrida!`);
                } else if(player1Atual < player2Atual){
                    pontuacaoPlayer2 += 1;
                    console.log(`O jogador ${jogador2.nome} venceu a corrida!`);
                }else{
                    pontuacaoPlayer1 += 0
                    pontuacaoPlayer2 += 0;
                    console.log('Empate!');
                }
}else{
    let resultadoDado = dado()

    let player1Atual = jogador1.poder + resultadoDado;

    let player2Atual = jogador2.poder + resultadoDado;
            if(player1Atual > player2Atual){
                pontuacaoPlayer1 += 1;
                console.log(`O jogador ${jogador1.nome} venceu a corrida!`);
            } else if(player1Atual < player2Atual){
                pontuacaoPlayer2 += 1;
                console.log(`O jogador ${jogador2.nome} venceu a corrida!`);
            }else{
                pontuacaoPlayer1 += 0
                pontuacaoPlayer2 += 0;
                console.log('Empate!');
            }
    }
}


async function main() {
  console.log('🏁 Bem-vindo ao Super Mario Corrida! 🏁');
  console.log('Primeiro a chegar a 3 pontos vence!\n');

  pontuacaoPlayer1 = 0;
  pontuacaoPlayer2 = 0;

  const jogador1 = await escolherPersonagem(1);
  let jogador2;
  do {
    jogador2 = await escolherPersonagem(2, jogador1);
    if (jogador2 === jogador1) {
      console.log('❌ Jogador 2 não pode escolher o mesmo personagem do Jogador 1!');
    }
  } while (jogador2 === jogador1);

  console.log(`\nJogador 1: ${jogador1.nome}  |  Jogador 2: ${jogador2.nome}`);
  console.log('Que comecem as corridas! 🚦\n');

  while (pontuacaoPlayer1 < 3 && pontuacaoPlayer2 < 3) {
    const { faseEscolhida, emoji } = escolherFase();
    console.log(`\nFase sorteada: ${emoji}  ${faseEscolhida.toUpperCase()}!`);
    logicasFase(faseEscolhida, jogador1, jogador2);
    console.log(`\nPlacar: ${jogador1.nome} ${pontuacaoPlayer1} x ${pontuacaoPlayer2} ${jogador2.nome}`);
    await new Promise((res) => setTimeout(res, 1500));
  }

  if (pontuacaoPlayer1 === 3) {
    console.log(`\n🏆 ${jogador1.nome} venceu o campeonato! Parabéns! 🎉`);
  } else {
    console.log(`\n🏆 ${jogador2.nome} venceu o campeonato! Parabéns! 🎉`);
  }
  readline.close();
}

main();

