var btn = document.getElementById('btn');
var board = document.getElementById('board');
listaNoticias = []


btn.addEventListener('click', ()=>{
  fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=cafc03dbb02e4ac09b19393cf01624b9').then((response)=>{
    return response.json();
  }).then(json=>{
    console.log(json.articles);
    naTela(json.articles);
  });

  });

var naTela = listaNoticias => {
  listaNoticias.forEach(function(element){
    var card = `<div class="card col-lg-3 d-flex justify-content-around m-2">
    <img src="${element.urlToImage}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.description}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  board.innerHTML += card;
});

};
