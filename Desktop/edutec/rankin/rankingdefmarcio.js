function calculateRanking() {

    const scores = [
      { nome: 'Miguel', nota: 8 },
      { nome: 'Moto', nota: 6 }, 
      { nome: 'Brian', nota: 9 } 
    ];

    nota.sort((a, b) => b.nota - a.nota);
  
    console.log("Ranking:");
    nota.forEach((player, index) => {
      console.log(`${index + 1}º Lugar: ${player.nome} - ${player.nota} pontos`);
    });
  }
  
  calculateRanking();
  