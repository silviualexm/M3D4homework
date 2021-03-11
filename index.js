// 0) Get all the products from the API using a fetch

window.onload = function () {
    console.log("Loaded...")
  //const products = fetch("https://striveschool-api.herokuapp.com/books").then(response=>response.json()).then(data=>console.log(data)).catch(err=>console.log("some error here"))
}

// 1) Display the list of items available on the page using template literals `` and .forEach

const displayList = () => {
    const products = fetch("https://striveschool-api.herokuapp.com/books").then(response=>response.json()).catch(err=>console.log("some error here"))
    console.log(typeof products)
    let boddy = document.querySelector("*")
    let list = document.createElement("ul")
    let listItem = document.createElement("li")
    listItem.innerHTML = "something"
    boddy.appendChild(list)
    list.appendChild(listItem)
    products.forEach(item=>item.innerHTML = 
        `<div class="card" style="width: 18rem;">
        <img src="products.img" class="card-img-top" alt="products.title">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>`
    
)

}
displayList()