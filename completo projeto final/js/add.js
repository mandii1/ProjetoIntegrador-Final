
var estrelas = document.querySelectorAll('.estrela-icon');
                  
document.addEventListener('click', function(e){ 
  
  var classEstrela = e.target.classList;

  if(!classEstrela.contains('ativo')){
    estrelas.forEach(function(estrela){
      estrela.classList.remove('ativo');
    });
    classEstrela.add('ativo');
    console.log(e.target.getAttribute('data-avaliar'));
  }
});

function tipos(){
  alert("Indisponivel no momento ⚠⚠")
}

function botao(){
  alert("Ops!!🙁 não foi possivel (Tente mais tarde)")
}