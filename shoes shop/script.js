let container= document.querySelector('.container');

let shoesProducts=[
    {id:1 , title:'SPORT SHOE', img:'./images/image1.png', price:'$53', detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? (Sport Shoe)'},
    {id:2 , title:'WOMEN SHOE', img:'./images/image2.png', price:'$81' , detail:'Lorem ipsum dolor sit amet, consecteturadipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? (Women Shoe)'},
    {id:3 , title:'BOOTS', img:'./images/image3.png', price:'$34' , detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? (Boots)'}
]

shoesProducts.forEach(function(shoe){

    container.insertAdjacentHTML('afterbegin','<div class="product-card"><h1>' + shoe.title + '</h1><p>Lorem ipsum, or lipsum as it sometimes known</p><div class="product-pic" style="background-image: url(' + shoe.img + ');"></div><div class="product-info"><div class="product-price">' + shoe.price + '</div><a href="product.html?id=' + shoe.id + '" class="product-button">See More</a></div></div>')
})

