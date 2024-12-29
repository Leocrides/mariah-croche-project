document.addEventListener('DOMContentLoaded', () => {
    const burger = document.createElement('div');
    burger.classList.add('burger');
    burger.innerHTML = '<div class="line1"></div><div class="line2"></div><div class="line3"></div>';

    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('li')
    const menu = document.querySelector('.menu');

    menu.insertBefore(burger, nav);

    function toggleMenu() {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    }

    burger.addEventListener('click', e => {
        e.stopPropagation()
        toggleMenu()
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                toggleMenu();
            }
        });
    });

    document.addEventListener('click', e => {
        if (nav.classList.contains('nav-active') && !nav.contains(e.target) && !burger.contains(e.target)) {
            toggleMenu()
        }
    });

    displayProducts()

    document.querySelectorAll('.category-filter').forEach(button => {
        button.addEventListener('click', () => {
            filterProducts(button.dataset.category);
        })
    });

    window.onclick = function (e) {
        const modal = document.getElementById('product-details-modal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    }
});

const products = [
    { id: 1, name: "Bolsa Geométrica em Square", image: 'assets/img/bolsa-geometrica-square.png', description: 'Bolsa de crochê feita a mão, ideal para o uso diário.' },
    { id: 2, name: "Bolsa Saco de Barbante", image: 'assets/img/bolsa-saco-barbante.png', description: 'Bolsa de crochê feita a mão, ideal para o uso diário.' },
    { id: 3, name: "Bolsa<br> Tiracolo", image: 'assets/img/bolsa-tira-colo.png', description: 'Bolsa de crochê feita a mão, ideal para eventos festivos.' }
]

function displayProducts() {
    const productList = document.getElementById('product-list')
    productList.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('article');
        productElement.classList.add('product-item');
        productElement.innerHTML = `<img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="description">${product.description}</p>
        <button onclick="showProductDetails(${product.id})">Ver Detalhes</button>`;
        productList.appendChild(productElement);
    });
}

function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const detailsModal = document.getElementById('product-details-modal');
    const detailsContent = document.getElementById('product-details-content');

    detailsContent.innerHTML = `<h2>${product.name}</h2>
    <img src="${product.image}" alt="${product.name}">
    <p class="description">${product.description}</p>`

    detailsModal.style.display = 'block';
}

function closeProductDetails() {
    document.getElementById('product-details-modal').style.display = 'none';
}

function filterProducts(category) {
    console.log(`Filtrando produtos por: ${category}`)
}