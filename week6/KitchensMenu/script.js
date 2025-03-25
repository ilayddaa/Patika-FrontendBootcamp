// Menu items array with objects
const menu = [
    {
        id: 1,
        title: "Pancake Stack",
        category: "breakfast",
        price: 153.99,
        img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000",
        desc: "Bu pankek dünyanın en güzel pankeklerinden biri. İçinde çikolata, muz, çilek ve krem şanti var.",
    },
    {
        id: 2,
        title: "Classic Burger",
        category: "lunch",
        price: 134.99,
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000",
        desc: "Bu burger dünyanın en güzel burgerlerinden biri. İçinde et, peynir, marul, domates ve soğan var.",
    },
    {
        id: 3,
        title: "Grilled Salmon",
        category: "dinner",
        price: 227.99,
        img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000",
        desc: "Bu somon dünyanın en güzel somonlarından biri. İçinde limon, tuz ve biber var.",
    },
    {
        id: 4,
        title: "Avocado Toast",
        category: "breakfast",
        price: 821.99,
        img: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?q=80&w=1000",
        desc: "Bu avokado tost dünyanın en güzel avokado tostlarından biri. İçinde avokado, tuz ve biber var.",
    },
    {
        id: 5,
        title: "Caesar Salad",
        category: "lunch",
        price: 104.99,
        img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1000",
        desc: "Bu salata dünyanın en güzel salatalarından biri. İçinde marul, peynir, kruton ve caesar sos var.",
    },
    {
        id: 6,
        title: "Steak Dinner",
        category: "dinner",
        price: 277.99,
        img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1000",
        desc: "Bu biftek dünyanın en güzel bifteklerinden biri. İçinde et, tuz ve biber var.",
    },
    {
        id: 7,
        title: "Chocolate Cake",
        category: "dessert",
        price: 665.99,
        img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000",
        desc: "Bu çikolatalı kek dünyanın en güzel çikolatalı keklerinden biri. İçinde çikolata, un, yumurta ve şeker var.",
    },
    {
        id: 8,
        title: "Cappuccino",
        category: "drinks",
        price: 413.99,
        img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1000",
        desc: "Bu kahve dünyanın en güzel kahvelerinden biri. İçinde kahve, süt ve köpük var.",
    },
    {
        id: 9,
        title: "Fruit Smoothie",
        category: "drinks",
        price: 325.99,
        img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=1000",
        desc: "Bu smoothie dünyanın en güzel smoothielerinden biri. İçinde muz, çilek, kivi ve portakal var.",
    },
    {
        id: 10,
        title: "Tiramisu",
        category: "dessert",
        price: 757.99,
        img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1000",
        desc: "Bu tiramisu dünyanın en güzel tiramisularından biri. İçinde kahve, kakao, yumurta ve mascarpone peyniri var.",
    },
];

// Burada menüdeki kategorilere göre butonlar oluşturuyoruz.
document.addEventListener("DOMContentLoaded", function () {
    // Get the container elements
    const buttonContainer = document.querySelector(".btn-container");
    const menuContainer = document.querySelector(".section-center");

    // Display ile menüyü oluşturuyoruz.
    displayMenuItems(menu);
    displayMenuButtons();

    // Burada menüdeki itemları oluşturuyoruz.
    function displayMenuItems(menuItems) {
        let displayMenu = menuItems.map(function (item) {
            return `
        <article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
            <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
        </article>
    `;
        });

        displayMenu = displayMenu.join("");
        menuContainer.innerHTML = displayMenu;
    }

    // Burada menüdeki kategorilere göre butonlar oluşturuyoruz.
    function displayMenuButtons() {
        // Burada menüdeki kategorileri alıyoruz.
        const categories = menu.reduce(
            function (values, item) { // Reduce methodu ile menüdeki kategorileri alıyoruz.
                if (!values.includes(item.category)) { // Eğer kategori daha önce eklenmediyse kategoriyi ekliyoruz.
                    values.push(item.category); // Kategoriyi ekliyoruz.
                }
                return values;
            },
            ["all"] // Kategorilerin başına "all" kategorisini ekliyoruz.
        );

        // Kategori butonlarını oluşturuyoruz.
        const categoryBtns = categories.map(function (category) {
            return `
        <button class="filter-btn" type="button" data-id="${category}">
        ${category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
    `;
        }).join("");

        buttonContainer.innerHTML = categoryBtns;

        // Burada kategori butonlarına event ekliyoruz.
        const filterBtns = document.querySelectorAll(".filter-btn");
        filterBtns.forEach(function (btn) {
            btn.addEventListener("click", function (e) {
                const category = e.currentTarget.dataset.id;

                // Burada butonlardan seçili olanı belirliyoruz.
                filterBtns.forEach(btn => btn.classList.remove("active")); // Tüm butonlardan "active" classını kaldırıyoruz.
                e.currentTarget.classList.add("active"); // Seçili butona "active" classını ekliyoruz.

                // Burada menüdeki kategorilere göre filtreleme yapıyoruz.
                const menuCategory = category === "all" // Eğer kategori "all" ise tüm menüyü göster, değilse kategoriye göre filtrele.
                    ? menu
                    : menu.filter(function (menuItem) { // Kategoriye göre filtreleme yapıyoruz.
                        return menuItem.category === category;
                    });

                displayMenuItems(menuCategory);
            });
        });

        // Burada tüm butonları seçili hale getiriyoruz.
        document.querySelector('[data-id="all"]').classList.add("active");
    }
});