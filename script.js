/* a função contador vai selecionar todas as clases ".selecionado" no documento*/
function contador() {
  const selecionados = document.querySelectorAll(".selecionado").length;
  /* se  a classe selecionados for igual 3 o a div com a classe ".pedido" vai receber a classe ".pedido-selecionado" 
  para auterar as propriedades da class, e o texto presente na classe ".tpedido" vai mudar para "Fechar pedido" */
  if (selecionados === 3) {
    let fecharPedido = document.querySelector(".pedido");
    fecharPedido.classList.add("pedido-selecionado");
    let mudartexto = document.querySelector(".tpedido");
    mudartexto.innerHTML = "Fechar Pedido";
    document.querySelector('.rodape').removeAttribute('disabled')

  }
}

/* função responsavel por selecionar o prato e colocar o icone */
function selecionarP(clicks) {
  /* seleciona a tag com as classes .cardapiop e .selecionado */  
  let jaselecionado = document.querySelector(".cardapiop .selecionado");
  /* se existe a tag com as classe remover o classe .selecionado */  
  if (jaselecionado !== null) {
    jaselecionado.classList.remove("selecionado");
  }
  /* Adiciona a classe selecionado onde no elemento que foi clicado. */
  clicks.classList.add("selecionado");
  contador();
}

/* função responsavel por selecionar a bebida e colocar o icone */
function selecionarB(clicks) {
    /* seleciona a tag com as classes .cardapiob e .selecionado */
  let jaselecionado = document.querySelector(".cardapiob .selecionado");
  /* se existe a tag com as classe remover o classe .selecionado */
  if (jaselecionado !== null) {
    jaselecionado.classList.remove("selecionado");
  }
  /* Adiciona a classe selecionado onde no elemento que foi clicado. */
  clicks.classList.add("selecionado");
  contador();
}

/* função responsavel por selecionar a sobremesa e colocar o icone */
function selecionarS(clicks) {
/* seleciona a tag com as classes .cardapios e .selecionado */
  let jaselecionado = document.querySelector(".cardapios .selecionado");
  /* se existe a tag com as classe remover o classe .selecionado */
  if (jaselecionado !== null) {
    jaselecionado.classList.remove("selecionado");
  }
  /* Adiciona a classe selecionado onde no elemento que foi clicado. */
  clicks.classList.add("selecionado");
  contador();
}


/* Função para finalizar o pedido */
function finalizar(){

    /* percorrer o documento e pegar todas as classes .selecionado */
    let Selecionados = document.querySelectorAll('.selecionado');
    let precofinal = 0; 
    let mensagem = "Olá! Boa Noite! Gostaria de fazer o pedido:\n\n";  

    /* parte responsavel pro encotrar o primeiro .preço e .nome abaixo da tag .selecionado*/
    Selecionados.forEach(function(finalizar){

        /* encontra e converte em numero a tag .preco, depois soma na variavel precofinal*/
        let precostr = finalizar.querySelector('.preco');
        let preco = Number(precostr.innerHTML.replace('R$', '').replace(",","."));
        precofinal += preco;

        /* soma o nome da produto selecionado na mensagem e pula uma linha */
        mensagem +=  finalizar.querySelector('.nome').innerHTML+'\n';

    });

    /* coloca o valor final e enfia a mensagem */
    mensagem += '\nTotal a pagar: R$ '+ precofinal.toFixed(2);
    window.open( 'https://wa.me/5533984077445?text='+encodeURIComponent(mensagem) );
}

