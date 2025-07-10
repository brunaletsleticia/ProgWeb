# Pwebb
Atividades realizadas na disciplina de Programação Web


1) imagens não estão aparecendo na página principal nem o código Javascript está sendo carregado. Faça o ajuste apropriado para que as imagens dos produtos apareçam e o código javaScript seja carregado, sem alterar a estrutura organizacional dos arquivos do projeto

<section id="atividades"> <!-- Seção de atividades -->

            <h2>Atividades da disciplina</h2>

            <section>

                <img src="img/frontend.png" alt="frontend”>  // arq pasta diferente: <img src="../img/produto1.jpg">

                <h3>Desenvolvimento de Frontend</h3>

                <p>Criação d…</p>

            </section>


Ou no Head:     <link rel="icon" type="image/png" href="croassaint.jpg"> 


———————————

3: Mudar de flex p/grid: 

.produtos {

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  gap: 1rem;

  padding: 2rem;

}


————

4) Botão do carrinho some:.carrinho {

margin-bottom: 80px; /* espaço suficiente para o botão ficar visível */}

 Ou se o rodapé (footer)  precisar ficar fixo: 

.carrinho {

  padding-bottom: 100px; /* (ou o valor exato da altura do rodapé), para garantir que o botão não fique embaixo do rodapé */

}



5)A ideia aqui é inserir algum elemento visual (no HTML ou via CSS) no <article> dos produtos notebook e tablet para indicar que estão em promoção.

Html: 

<article class="produto promocao">

  <h2>Notebook</h2>

  <!-- conteúdo do produto -->

</article>


<article class="produto promocao">

  <h2>Tablet</h2>

  <!-- conteúdo do produto -->

</article>

Css: 

.promocao {

  border: 2px solid red;

  background-color: #ffe5e5;

  position: relative;

}


.promocao::before {

  content: "Promoção!";

  position: absolute;

  top: 5px;

  left: 5px;

  background-color: red;

  color: white;

  padding: 2px 6px;

  font-size: 0.8rem;

  border-radius: 4px;

}


6) BEM:

Antes:

<article class="produto promocao">

  <h3 class="titulo">Notebook</h3>

  <p class="preco">R$ 2000</p>

</article>


Depois:

<article class="produto produto--promocao">

  <h3 class="produto__titulo">Notebook</h3>

  <p class="produto__preco">R$ 2000</p>

</article>


Antes:

.produto {

  border: 1px solid gray;

}


.promocao {

  background-color: yellow;

}


.titulo {

  font-size: 18px;

}

Depois:

.produto {

  border: 1px solid gray;

}


.produto--promocao {

  background-color: yellow;

}


.produto__titulo {

  font-size: 18px;

}


.produto__preco {

  color: green;

}