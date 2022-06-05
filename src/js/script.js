let cart = []

function createProducts (produto) {

    const ulProdutos = document.querySelector(".products-list")

        const li     = document.createElement("li")
        const div    = document.createElement("div")
        li.setAttribute("class", "cart-li")
        div.setAttribute("id", "btn-container")
        div.setAttribute("class", "buy-container")
    
        const img    = createProductImg (produto)
        const h3     = createProductName (produto)
        const p      = createProductSection (produto)
        const comp   = createProductComponent (produto)
        const span   = createProductPrice (produto)
        const button = createBuyButton (produto)

        button.addEventListener("click", () => {
            cart.push(produto)
            renderCart()
            cartDetails(cart)
            document.querySelector(".quantity-container").style.display = "flex"
            document.querySelector(".price-container").style.display = "flex"
            document.querySelector(".finish").style.display = "flex"
            hideEmptyCard()
        })

        ulProdutos.append(li)
        li.append(img, h3, p, comp, div)
        div.append(span, button)
    }

function createProductImg (produto) {
        const img = document.createElement("img")
        img.setAttribute("class", "image")
        img.setAttribute("src", produto.img)
        img.setAttribute("alt", produto.categoria)
    
        return img
    }
    
function createProductName (produto) {
        const h3 = document.createElement("h3")
        h3.setAttribute("class", "title")
        h3.innerHTML =  produto.nome
    
        return h3
    }
    
function createProductSection (produto) {
        const section = document.createElement("p")
        section.setAttribute("class", "section")
        section.innerHTML = produto.secao
    
        return section
    }
    
function createProductComponent (produto) {
    const ol = document.createElement("ol")
    ol.setAttribute("class", "components-ol")

    for(let i = 0; i < produto.componentes.length; i++){
    const li = document.createElement("li")
    li.setAttribute("class", 'components')
    li.innerText = produto.componentes[i]
    ol.append(li)
    }

    return ol
    }

function createProductPrice (produto) {
        const price = document.createElement("span")
        price.setAttribute("class", "price")
        price.innerText = `R$ ${produto.preco}`
        return price
    }

function createBuyButton(produto){
    const button = document.createElement("button")
    button.setAttribute("id", `${produto.id}`)
    button.setAttribute("class", "buy")
    button.innerText = 'Comprar'
    return button
    }

function renderAllProducts () {
    clearUl()
    for(let i = 0; i < produtos.length; i++){
        const produto = produtos[i]
        createProducts(produto)
    }
    }

function renderFilteredProducts (str){
    clearUl()
    for(let i = 0; i < produtos.length; i++){
        const product = produtos[i]
        if(product.secao === str)
        createProducts(product)
    }
    }

function buttonFilter () {
    
const buttonsDiv = document.getElementById("buttons")

buttonsDiv.addEventListener("click", event => {

    const element = event.target

    let click = event.target
 
    if(click.id === "all"){
        clearUl()
        classAdd(element)
        renderAllProducts(produtos)
    }

    else if(click.id === "hortifruti"){
        clearUl()
        classAdd(element)
        renderFilteredProducts('Hortifruti')
    }

    else if(click.id === "panificadora"){
        clearUl()
        classAdd(element)
        renderFilteredProducts('Panificadora')
    }

    else if(click.id === "laticinios"){
        clearUl()
        classAdd(element)
        renderFilteredProducts('Laticinios')
    }

})
    }

function classAdd (element) {

    const clickedButton = document.querySelectorAll('.clickedButton')
    clickedButton.forEach((button) => {
        button.classList.remove('clickedButton')
    })
   element.classList.add('clickedButton')
    }

function renderSearcheredProduct (list){
    clearUl()
    for(let i = 0; i <  list.length; i++){
        const product = list[i]
        createProducts(product)
 }

    }

function filteredItens () {
    const input        = document.getElementById("search")
    const inputValue   = input.value
    const filteredList = produtos.filter((produto) => {
        return (produto.nome.toLowerCase().trim().includes(inputValue.toLowerCase().trim()) 
        ||      produto.secao.toLowerCase().trim().includes(inputValue.toLowerCase().trim()) 
        ||      `${produto.preco}`.includes(inputValue.trim()))
    })
    if(filteredList.length == 0){
        document.querySelector(".products-list").innerHTML = "Nenhum produto foi encontrado :("
    }
    if(filteredList.length > 0){
        clearUl()
        renderSearcheredProduct(filteredList)
    }
    }

function searchFilter () {

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

function createCartUl (carrinho) {
    const cartUl = document.createElement("ul")
    for(let i = 0; i < carrinho.length; i++){
        const cartLi = document.createElement("li")

    }
    } 

function clearUl () {
    return document.querySelector(".products-list").innerHTML = ""
    }

function createCartProduct (product) {

    const ul = document.querySelector(".cart-ul")

    const li      = createCartLi()
    const cartDiv = createCartDiv()
    const img     = createCartImg(product)
    const div     = createCartDescription()
    const name    = createCartItemName(product)
    const section = createCartItemSection(product)
    const price   = createCartItemPrice(product)
    const remove  = createRemoveButton(product)
    
    ul.append(li)
    li.append(cartDiv, remove)
    cartDiv.append(img, div)
    div.append(name, section, price)
    
}

function createCartLi () {
    const li = document.createElement("li")
    li.setAttribute("class", "cart-list")
    return li
}

function createCartDiv() {
    const div = document.createElement("div")
    div.setAttribute("class", "itens-container")
    return div
}

function createCartImg (produto) {
    const div = document.createElement("div")
    const img = document.createElement("img")

    div.setAttribute("class", "img-div")
    img.setAttribute("class", "cart-product-img")
    img.src = produto.img
    div.append(img)

    return div
}

function createCartDescription() {
    const div = document.createElement("div")
    div.setAttribute("class", "product-description")
    return div
}

function createCartItemName (product) {
    const h3 = document.createElement("h3")
    h3.setAttribute("class", "cart-item-name")
    h3.innerText = product.nome
    return h3
}

function createCartItemSection (product) {
    const p = document.createElement("p")
    p.setAttribute("class", "cart-item-section")
    p.innerText = product.secao
    return p
}

function createCartItemPrice (product) {
    const span = document.createElement("span")
    span.setAttribute("class", "cart-item-price")
    span.innerText = `R$${product.preco}`
    return span
}

function createRemoveButton (product) {
    const button = document.createElement("button")
    const img    = document.createElement("img")
    button.setAttribute("class", "remove-button")
    button.setAttribute("id", `${product.id}`)
    img.setAttribute("class", "remove-img")
    img.src = "./src/img/trash.svg"
    
    button.append(img)
    return button
}

function renderCart () {
    document.querySelector(".cart-ul").innerHTML = ""
    for(let i = 0; i < cart.length; i++){
        const product = cart[i]
        createCartProduct(product)
 }
}

function cartDetails (cart) {

    document.querySelector(".sum").innerHTML = ''
    document.querySelector(".quantity").innerHTML = ''

    let sum  = 0
    let quant = 0

    for(let i = 0; i < cart.length; i++){ 
        sum += parseInt(cart[i].preco)
    }

    for(let i = 0; i < cart.length; i++){ 
        quant++
    }

    document.querySelector(".sum").innerHTML = `R$ ${sum}.00`
    document.querySelector(".quantity").innerHTML = `${quant}`

}

function hideEmptyCard () {
    if(cart.length > 0){
       return document.querySelector(".empty-cart").style.display = "none"
    }

        document.querySelector(".quantity-container").style.display = "none"
        document.querySelector(".price-container").style.display = "none"
        document.querySelector(".finish").style.display = "none"
        return document.querySelector(".empty-cart").style.display = "flex"
        
}

function removeItem () {
    const ul = document.querySelector(".cart-ul")
    ul.addEventListener("click", event => {
        if(event.target.className === 'remove-button' || event.target.className === 'remove-img'){
            cart = cart.filter(product => product.id !== parseInt(event.target.id))
          }
          renderCart ()
          cartDetails (cart)
          if(cart.length === 0){
            hideEmptyCard ()
          }
        })
} 

function thanks () {
    const btn = document.querySelector(".finish")
    btn.addEventListener("click", event => {
        const click = event.target
        if(click.id == "goodbye"){
            window.alert("Obrigado por comprar na minha loja :)")
            location.reload()
        }
    })
}

function main () {

    renderAllProducts ()
    buttonFilter ()
    searchFilter ()
    removeItem ()
    thanks ()

    }

main ()
