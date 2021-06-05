function filtrar(){

   fetch("http://localhost:8080/artista/" + document.getElementById("cmbartistas").value)
   .then(res => res.json())
   .then(res =>{
      var tabela = 
      "<table class='table' border='1' align='center' width='80%'>" + 
      "<tr>" + 
      "<th>Musica</th> <th>Cadastro</th> <th>Lançamento</th>" + 
      "</tr>";

      for (contador = 0; contador < res.musicas.length; contador++){
         var status = "NÃO";
         if(res.musicas[contador].lancamento==1){
            status="SIM";
         }
         tabela +=
         "<tr>" +
         "<td>" + res.musicas[contador].titulo + "</td>" +
         "<td>" + res.musicas[contador].cadastro + "</td>" +
         "<td>" + res.musicas[contador].lancamento + "</td>"+
         "</tr>";
      }


      tabela += "</table>";
      document.getElementById("tabela").innerHTML = tabela;

   })
   .catch(err => {
      window.alert("Não existem músicas cadastradas")
   })


}

function preencherartistas(){
   fetch("http://localhost:8080/artistas")
   .then(res => res.json())
   .then(res =>{
       for(contador =0; contador<res.length; contador++){
          document.getElementById("cmbartistas").innerHTML += "<option value ='" + res[contador].id + "'>" +  res[contador].nomeArtistico + "</option>"

       }

   })
   .catch(err => {
    window.alert("Não existe artistas!");
    window.alert = "gravarartista.html";
   });


}