const { save } = require('../src/model/products')

module.exports = async () => {
    try {

        const dumy = [
            {
                "id": 111,
                "name": "Color Black",
                "type": "Basic Tee",
                "price": 35,
                "image": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            },
            {
                "id": 112,
                "name": "Iso Dots",
                "type": "Basic Tee",
                "price": 40,
                "image": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg"
            },
            {
                "id": 113,
                "name": "Color Aspen White",
                "type": "Basic Tee",
                "price": 45,
                "image": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg"
            },
            {
                "id": 114,
                "name": "Charcoal",
                "type": "Basic Tee",
                "price": 50,
                "image": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg"
            },
            {
                "id": 115,
                "name": "Earthe Bottle",
                "type": "Accessories",
                "price": 48,
                "image": "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
            },
            {
                "id": 116,
                "name": "Nomad Tumbler",
                "type": "Accessories",
                "price": 35,
                "image": "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
            },
            {
                "id": 117,
                "name": "Focus Paper Refill",
                "type": "Accessories",
                "price": 89,
                "image": "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
            },
            {
                "id": 118,
                "name": "Machined Mechanical Pencil",
                "type": "Accessories",
                "price": 35,
                "image": "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
            },
            {
                "id": 119,
                "name": "Focus Card Tray",
                "type": "Accessories",
                "price": 64,
                "image": "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg"
            },
            {
                "id": 120,
                "name": "Focus Multi-Pack",
                "type": "Accessories",
                "price": 39,
                "image": "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg"
            },
            {
                "id": 121,
                "name": "Brass Scissors",
                "type": "Accessories",
                "price": 50,
                "image": "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg"
            },
            {
                "id": 122,
                "name": "Focus Carry Pouch",
                "type": "Accessories",
                "price": 32,
                "image": "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg"
            },
        ]

        for await (const data of dumy) {
            await save(data)
        }

        console.log(`${dumy.length} products created`);
    } catch (error) {
        throw error
    }
}