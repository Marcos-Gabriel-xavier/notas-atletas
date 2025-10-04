const atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

    calculaPontuaçãoDosAtletas(atletas);
    

    function calculaPontuaçãoDosAtletas(atletas){

    atletas.forEach(function (atleta) {
        let copiaNotas = atleta.notas.join(",");
        atleta.notas = atleta.notas.sort( function (a, b){
            return a - b
        });
        atleta.notas = atleta.notas.slice(1, 4);
        let total = atleta.notas.reduce(function (soma, valor){
                return soma + valor; 
        }, 0);

        let media  = total / atleta.notas.length;    

        console.log(`Atleta: ${atleta.nome}\nNotas Obtidas: ${copiaNotas} \nMédia Válida: ${media}\n`)

    });
}