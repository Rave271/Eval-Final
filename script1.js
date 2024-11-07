const products = [
    {id: 1, name: 'Microsoft', price: 1000, image: 'Images 1/Microsoft.jpg', description: '<details><summary><b>Specifications</b></summary><p>Microsoft software enhances <br>productivity with tools <br>for collaboration and creativity.</p><button>Buy Now</button></details>' },
    {id: 2, name: 'Zomato', price: 2000, image: 'Images 1/Zomato.png', description: '<details><summary><b>Specifications</b></summary><p>Food delivery platform <br>connecting users with<br> restaurants and reviews.</p><button>Buy Now</button></details>'},
    {id: 3, name: 'Adobe', price: 1000, image: 'Images 1/Adobe.webp', description: '<details><summary><b>Specifications</b></summary><p>Creative software suite <br>empowering designers with<br> powerful tools and features.</p><button>Buy Now</button></details>'},
    {id: 4, name: 'Amazon', price: 2000, image: 'Images 1/Amazon.jpg', description: '<details><summary><b>Specifications</b></summary><p>E-commerce giant offering<br> diverse products and <br>services globally.</p><button>Buy Now</button></details>'},
    {id: 5, name: 'Bootstrap', price: 1000, image: 'Images 1/Bootstrap.jpg', description: '<details><summary><b>Specifications</b></summary><p>Front-end framework <br>for responsive web <br>design and development.</p><button>Buy Now</button></details>'},
    {id: 6, name: 'BookMyShow', price: 2000, image: 'Images 1/Book.png', description: '<details><summary><b>Specifications</b></summary><p>Ticketing platform for <br>movies, events, and <br>entertainment bookings.</p><button>Buy Now</button></details>'},
    {id: 7, name: 'Uber', price: 1000, image: 'Images 1/Uber.png', description: '<details><summary><b>Specifications</b></summary><p>Ride-hailing service <br>connecting drivers and<br> passengers via app.</p><button>Buy Now</button></details>'},
    {id: 8, name: 'CamScanner', price: 2000, image: 'Images 1/cams.png', description: '<details><summary><b>Specifications</b></summary><p>Mobile app for <br>scanning documents and <br>managing PDFs easily.</p><button>Buy Now</button></details>'}
];

function addProductsToHTML(products) {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <h2>Price: ${product.price}</h2>
            <p>${product.description}</p>
        `;

        productList.appendChild(productDiv);
    });
}
addProductsToHTML(products);