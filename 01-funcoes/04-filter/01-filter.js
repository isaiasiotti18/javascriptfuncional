const notas = [
  { aluno: "Jessica", nota: 4.5 },
  { aluno: "Isaias", nota: 6.7 },
  { aluno: "Janaina", nota: 8.9 },
  { aluno: "Pedro", nota: 3 },
];

const alunos = (notas) => {
  const { aluno, nota } = notas;

  if (nota >= 5) return `Aluno ${aluno} com nota ${nota} Aprovado!`;

  return `Aluno(a) ${aluno} com nota ${nota} Reprovado!`;
};

notas.filter((nota) => console.log(alunos(nota)));
