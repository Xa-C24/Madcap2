function play(userChoice) {
  const choices = ['pierre', 'papier', 'ciseaux'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = '';

  if (userChoice === computerChoice) {
      result = "🤝 Égalité !";
  } else if (
      (userChoice === 'pierre' && computerChoice === 'ciseaux') ||
      (userChoice === 'papier' && computerChoice === 'pierre') ||
      (userChoice === 'ciseaux' && computerChoice === 'papier')
  ) {
      result = "🎉 Bravo, tu as gagné !";
  } else {
      result = "😢 Dommage, l'ordinateur a gagné !";
  }

  document.getElementById('result').innerHTML = `
      🧑 Tu as choisi : <strong>${userChoice}</strong><br>
      💻 L'ordi a choisi : <strong>${computerChoice}</strong><br>
      <h2>${result}</h2>
  `;
}
