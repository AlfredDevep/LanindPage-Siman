let cards = document.getElementById('product-cards');
console.log(cards);

let productcard = [{
    id: 1,
    name: "Men T-Shirt",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p13.png"
},
{
    id: 2,
    name: "Office T-Shirt",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p16.png" 
},
{
    id: 3,
    name: "Shirt",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p14.png"
},
{
    id: 4,
    name: "Men T-Shirt",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p15.png"
},
{
    id: 1,
    name: "Men T-Shirt",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p13.png"
},
{
    id: 2,
    name: "Office T-Shirt",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p16.png" 
},
{
    id: 3,
    name: "Shirt",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p14.png"
},
{
    id: 4,
    name: "Men T-Shirt",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p15.png"
}];

let generateCards = () =>{
    return (cards.innerHTML = productcard.map((x) =>{
        let {id, name, price, price_desc, desc, img} = x;
        return `
        <div class="col-md-3 py-3 py-md-0">
            <div class="card" id="">
                <img src=${img} alt="">
                <div class="card-body">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="star">
                        <i class="fas fa-star checked"></i>
                        <i class="fas fa-star checked"></i>
                        <i class="fas fa-star checked"></i>
                        <i class="fas fa-star checked"></i>
                        <i class="fas fa-star checked"></i>
                    </div>
                    <h5>$${price} <strike>$${price_desc}</strike> <span><i class="fa-solid fa-cart-shopping"></i></span></h5>
                </div>
            </div>
        </div>
    `
    }).join(""));
};

generateCards();