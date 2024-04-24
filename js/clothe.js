let clothes = document.getElementById('product-cards');

let clothesCard = [{
    id: 11,
    name: "Girls Heel.",
    price: 12.3,
    price_desc: 15.5,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p1.png"
},
{
    id: 12,
    name: "Men Hoodie",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p2.png"
},
{
    id: 13,
    name: "Smart Watch",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p3.png"
},
{
    id: 14,
    name: "Men T-Shirt",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p4.png"
},
{
    id: 15,
    name: "Hand Bag",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p5.png"
},
{
    id: 16,
    name: "Sport Shoes",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p6.png"
},
{
    id: 17,
    name: "Girls Heel",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p7.png"
}, 
{
    id: 18,
    name: "Means Jeans",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p8.png"
}, 
{
    id: 19,
    name: "Dark Pant",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p9.jpg"
}, {
    id: 20,
    name: "Mwalk Billies",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p10.jpg"
}, {
    id: 12,
    name: "Sweet Shirt",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p11.jpg"
},{
    id: 12,
    name: "Black T-Shirt",
    price: 45,
    price_desc: 38,
    desc: "Lorem ipsum dolor sit amet.",
    img: "./image/p12.jpg"
}];

let generateClothesCards = () =>{
    return (clothes.innerHTML = clothesCard.map((x) =>{
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

generateClothesCards();