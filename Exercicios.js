/* //Exercícios referentes a primeira parte (Objetos e for/in)
    let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log("Bem vinda, " + info.personagem);

  info["Recorrente"] = "sim";
  console.log(info);

  for (let key in info) {
      console.log(key);
  }

  for (let key in info) {
    console.log(info[key]);
 }

 let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    Recorrente: 'sim'
  };
  info.personagem = "Margarida e Tio Patinhas";
  info.origem = "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178";
  info.nota = "Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas";
  info.Recorrente = "Ambos recorrentes // Atenção para essa última linha!";
  console.log(info); */


/* function verificaPalindrome (palavra) {
    for (let index in palavra) {
        if (palavra[index] !== palavra[(palavra.length - 1) - index]){
            return false;
        }
    }
    return true;
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento')); */




/* function verificaMaior (teste) {
    let index = 0;
    for (let nMaior in teste) {
        if (teste[index] < teste[(nMaior)]){
            index = nMaior;
        }
    }
    return index;
}
console.log(verificaMaior([2, 3, 11, 7, 10, 1])); */



/* function verificaMaior (teste) {
    let index = 0;
    for (let nMenor in teste) {
        if (teste[index] > teste[(nMenor)]){
            index = nMenor;
        }
    }
    return index;
}
console.log(verificaMaior([2, 4, 6, -7, 10, 0, -3])); */



function verificaMaior (palavra) {
    let maiorPalavra = palavra[0];
    for (let nMaior in palavra) {
        if (maiorPalavra.length < palavra[nMaior].length) {
            maiorPalavra = palavra[nMaior];
        }
    }
    return maiorPalavra;
}
console.log(verificaMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));