let listaDePessoasAprovadas = [
    "wesley_damazio@hotmail.com",
    "wesley.dsjr1988@gmail.com",
    "patati@hotmail.com",
    "patata@gmail.com"
];

const enviarEmail = (email) => {
console.log (`Email para ${email} foi enviado com sucesso`);
};

listaDePessoasAprovadas.forEach((emailDaPessoa,posicao, arrey) => {
    enviarEmail(emailDaPessoa);
    console.log(`Você está posicionado em:${posicao+1}° lugar dentre ${arrey.length} candidatos na fila de espera.`);
}); 

