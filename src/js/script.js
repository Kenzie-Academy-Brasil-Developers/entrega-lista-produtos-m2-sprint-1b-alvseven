function createAllProducts(produtos){

    const ulProdutos = document.querySelector(".products-list")

    for(let i = 0; i < produtos.length; i++){
        const li   = document.createElement("li")
        const img  = document.createElement("img")
        const h3   = document.createElement("h3")
        const p    = document.createElement("p")
        const span = document.createElement("span")

        img.src        = produtos[i].img
        h3.innerText   = produtos[i].nome
        p.innerText    = produtos[i].secao
        span.innerText = `R$ ${produtos[i].preco}.00`

        img.setAttribute("class", "imagem")
        h3.setAttribute("class", "titulo")
        p.setAttribute("class", "secao")
        span.setAttribute("class", "preco")
    
        ulProdutos.append(li)
        li.append(img, h3, p, span)
    }
}

function createProductsHortifruti(produtos) {

    const ulProdutos = document.querySelector(".products-list")

    for(let i = 0; i < produtos.length; i++){

    if(produtos[i].secao === "Hortifruti"){

        const li   = document.createElement("li")
        const img  = document.createElement("img")
        const h3   = document.createElement("h3")
        const p    = document.createElement("p")
        const span = document.createElement("span")
    
        img.src        = produtos[i].img
        h3.innerText   = produtos[i].nome
        p.innerText    = produtos[i].secao
        span.innerText = `R$ ${produtos[i].preco}.00`
    
        img.setAttribute("class", "imagem")
        h3.setAttribute("class", "titulo")
        p.setAttribute("class", "secao")
        span.setAttribute("class", "preco")
            
        ulProdutos.append(li)
        li.append(img, h3, p, span)
  }
 }
}

function createProductsPanificadora(produtos) {

    const ulProdutos = document.querySelector(".products-list")

    for(let i = 0; i < produtos.length; i++){

    if(produtos[i].secao === "Panificadora"){

        const li   = document.createElement("li")
        const img  = document.createElement("img")
        const h3   = document.createElement("h3")
        const p    = document.createElement("p")
        const span = document.createElement("span")
    
        img.src        = produtos[i].img
        h3.innerText   = produtos[i].nome
        p.innerText    = produtos[i].secao
        span.innerText = `R$ ${produtos[i].preco}.00`
    
        img.setAttribute("class", "imagem")
        h3.setAttribute("class", "titulo")
        p.setAttribute("class", "secao")
        span.setAttribute("class", "preco")
            
        ulProdutos.append(li)
        li.append(img, h3, p, span)
  }
 }
}

function createProductsLaticinios(produtos) {

    const ulProdutos = document.querySelector(".products-list")

    for(let i = 0; i < produtos.length; i++){

    if(produtos[i].secao === "Laticinios"){

        const li   = document.createElement("li")
        const img  = document.createElement("img")
        const h3   = document.createElement("h3")
        const p    = document.createElement("p")
        const span = document.createElement("span")
    
        img.src        = produtos[i].img
        h3.innerText   = produtos[i].nome
        p.innerText    = produtos[i].secao
        span.innerText = `R$ ${produtos[i].preco}.00`
    
        img.setAttribute("class", "imagem")
        h3.setAttribute("class", "titulo")
        p.setAttribute("class", "secao")
        span.setAttribute("class", "preco")
            
        ulProdutos.append(li)
        li.append(img, h3, p, span)
  }
 }
}

function totalPrice(){

    let precos = document.querySelectorAll(".preco")
    let soma   = 0

    for(let i = 0; i < precos.length; i++){
        soma += parseInt(precos[i].innerText.split("$")[1])
    }
    return document.querySelector(".price").innerHTML = `R$ ${soma}.00`
}

const buttonsDiv = document.getElementById("buttons")

buttonsDiv.addEventListener("click", event => {

    let click = event.target
 
    if(click.id === "all"){
        clearUl()
        createAllProducts(produtos)
        document.getElementById("all").classList = "btn-all"
        document.getElementById("hortifruti").classList.remove("clickedButton")
        document.getElementById("panificadora").classList.remove("clickedButton")
        document.getElementById("laticinios").classList.remove("clickedButton")
        document.querySelector(".price").innerHTML = ""
        totalPrice()
    }

    else if(click.id === "hortifruti"){
        clearUl()
        createProductsHortifruti(produtos)
        document.getElementById("all").classList = "clickedButtonAll"
        document.getElementById("panificadora").classList.remove("clickedButton")
        document.getElementById("laticinios").classList.remove("clickedButton")
        document.getElementById("hortifruti").classList.add("clickedButton")
        document.querySelector(".price").innerHTML = ""
        totalPrice()
    }

    else if(click.id === "panificadora"){
        clearUl()
        createProductsPanificadora(produtos)
        document.getElementById("all").classList = "clickedButtonAll"
        document.getElementById("hortifruti").classList.remove("clickedButton")
        document.getElementById("laticinios").classList.remove("clickedButton")
        document.getElementById("panificadora").classList.add("clickedButton")
        document.querySelector(".price").innerHTML = ""
        totalPrice()
    }

    else if(click.id === "laticinios"){
        clearUl()
        createProductsLaticinios(produtos)
        document.getElementById("all").classList = "clickedButtonAll"
        document.getElementById("hortifruti").classList.remove("clickedButton")
        document.getElementById("panificadora").classList.remove("clickedButton")
        document.getElementById("laticinios").classList.add("clickedButton")
        document.querySelector(".price").innerHTML = ""
        totalPrice()
    }

})

function filteredItens(){
    const input        = document.getElementById("search")
    const inputValue   = input.value
    const filteredList = produtos.filter((produto) => {
        return (produto.nome.toLowerCase().includes(inputValue.toLowerCase()) 
        ||      produto.secao.toLowerCase().includes(inputValue.toLowerCase()) 
        ||      `${produto.preco}`.includes(inputValue))
    })
    if(filteredList.length == 0){
        document.querySelector(".products-list").innerHTML = "Nenhum produto foi encontrado :("
        document.querySelector(".price").innerHTML = "R$ 00.00"
    }
    if(filteredList.length > 0){
        clearUl()
        createAllProducts(filteredList)
        document.querySelector(".price").innertHTML = ""
        totalPrice()
    }
}

function searchFilter(){

    const input       = document.getElementById("search")
    const inputButton = document.getElementById("search-button")

    inputButton.addEventListener("click", () => {
    filteredItens()
    })

    input.addEventListener("keydown", event => {
     if(event.key === "Enter"){
      filteredItens()
     }
    })
}

function clearUl(){
    return document.querySelector(".products-list").innerHTML = ""
}

searchFilter()
createAllProducts(produtos)
totalPrice()

console.log("Olá")