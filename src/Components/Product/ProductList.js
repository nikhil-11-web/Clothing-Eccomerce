const product = [
    // --- Original 12 Products (IDs 1-12) ---
    {
        id: 1,
        name: 'Sports TShirts',
        img: 'https://i.pinimg.com/236x/8c/b6/29/8cb629427c0a3bcbf6180eb3350a83d7.jpg',
        Price: 25.99,
        oldPrice: 35.99,
        onSale: true,
        NewArrival: false,
        category: 'Mens'
    },
    
    {
        id: 2,
        name: 'High-Rise Skinny Jeans',
        img: 'https://assets.ajio.com/medias/sys_master/root/20240801/36gh/66ab8b171d763220fa541f12/-473Wx593H-700039187-blue-MODEL.jpg',
        Price: 59.99,
        oldPrice: 79.99,
        onSale: true,
        NewArrival: true,
        category: 'Womens'
    },
    {
        id: 3,
        name: 'Dino Graphic T-Shirt',
        img: 'https://urbanpitara.com/cdn/shop/files/DINO_60fe5c0c-54a9-45eb-ad96-479787597fc8.jpg?v=1743747886',
        Price: 19.50,
        oldPrice: 25.00,
        onSale: true,
        NewArrival: false,
        category: 'Kids'
    },
    {
        id: 4,
        name: 'Essential Fleece Hoodie',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4SlMSA4vw3z3uBaDxdO2RiVIRYcXZ_e7Y5lkafN2YpCPHmkjmevkljsTh4pUi2-5VIJM&usqp=CAU',
        Price: 49.00,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Mens'
    },
    {
        id: 5,
        name: 'Floral Maxi Dress',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXnRlPhJKGGOcAvYuPxbyEWMLR_8ubDCx3uw&s',
        Price: 69.99,
        oldPrice: 99.99,
        onSale: true,
        NewArrival: true,
        category: 'Womens'
    },
    {
        id: 6,
        name: 'Lightweight Running Shorts',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCL-yfWzX34mp_5ciOTyF-LP2Dq83ic9aNw&s',
        Price: 35.00,
        oldPrice: null,
        onSale: false,
        NewArrival: true,
        category: 'Mens'
    },
    {
        id: 7,
        name: 'Kids\' Play Sneakers',
        img: 'https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/22163936/2023/5/16/f582eb3e-7ec6-4515-a0a6-40138ca8246e1684229983572-Future-Rider-Play-On-Kids-Sneakers-181684229983320-1.jpg',
        Price: 45.99,
        oldPrice: null,
        onSale: false,
        NewArrival: true,
        category: 'Kids'
    },
    {
        id: 8,
        name: 'Cozy Knit Cardigan',
        img: 'https://m.media-amazon.com/images/I/71j5l0Dj7OL._AC_UY350_.jpg',
        Price: 75.00,
        oldPrice: 95.00,
        onSale: false,
        NewArrival: false,
        category: 'Womens'
    },
    {
        id: 9,
        name: 'Slim Fit Stretch Chinos',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeUbJTdKjewchM2g2iey7R3h2JH6oKXVggw&s',
        Price: 55.00,
        oldPrice: 70.00,
        onSale: true,
        NewArrival: false,
        category: 'Mens'
    },
    {
        id: 10,
        name: 'Rainbow Raincoat',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUxeXCEqm0w6ISyAwg2Mrce4kIXrmmExypw&s',
        Price: 42.00,
        oldPrice: null,
        onSale: false,
        NewArrival: true,
        category: 'Kids'
    },
    {
        id: 11,
        name: 'Seamless Yoga Leggings',
        img: 'https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/26880378/2024/3/7/39a11044-76bc-4462-b3eb-b5c0cc3f131f1709796404305-HRX-by-Hrithik-Roshan-Women-Navy-Self-Design-Seamless-Tights-1.jpg',
        Price: 49.99,
        oldPrice: 60.00,
        onSale: true,
        NewArrival: false,
        category: 'Womens'
    },
    {
        id: 12,
        name: 'Space Explorer Backpack',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBw2RCxRjAFPqFTXFBZmD0etF_oioOWuAZjA&s',
        Price: 34.99,
        oldPrice: null,
        onSale: false,
        NewArrival: true,
        category: 'Kids'
    },
    
    // --- 38 New Products (IDs 13-50) ---
    {
        id: 13,
        name: 'High-Waist Yoga Pants',
        img: 'https://placehold.co/400x600/609d84/white?text=Womens+Yoga',
        Price: 45.00,
        oldPrice: null,
        onSale: false,
        NewArrival: true,
        category: 'Womens'
    },
    {
        id: 14,
        name: 'Classic Leather Wallet',
        img: 'https://placehold.co/400x600/9d6060/white?text=Mens+Wallet',
        Price: 30.00,
        oldPrice: 40.00,
        onSale: true,
        NewArrival: false,
        category: 'Mens'
    },
    {
        id: 15,
        name: 'Dinosaur Pajama Set',
        img: 'https://placehold.co/400x600/609d9d/white?text=Kids+Pajamas',
        Price: 22.99,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Kids'
    },
    {
        id: 16,
        name: 'Button-Up Denim Shirt',
        img: 'https://placehold.co/400x600/5c609d/white?text=Mens+Denim',
        Price: 55.50,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Mens'
    },
    {
        id: 17,
        name: 'Summer Sundress',
        img: 'https://placehold.co/400x600/b1609d/white?text=Womens+Dress',
        Price: 39.99,
        oldPrice: 55.00,
        onSale: true,
        NewArrival: false,
        category: 'Womens'
    },
    {
        id: 18,
        name: 'Superhero Rain Boots',
        img: 'https://placehold.co/400x600/9d9460/white?text=Kids+Boots',
        Price: 28.00,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Kids'
    },
    {
        id: 19,
        name: 'Wool Blend Trench Coat',
        img: 'https://placehold.co/400x600/60829d/white?text=Mens+Coat',
        Price: 120.00,
        oldPrice: null,
        onSale: false,
        NewArrival: true,
        category: 'Mens'
    },
    {
        id: 20,
        name: 'Sterling Silver Necklace',
        img: 'https://placehold.co/400x600/9d6091/white?text=Womens+Jewelry',
        Price: 85.00,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Womens'
    },
    {
        id: 21,
        name: 'Graphic Swim Trunks',
        img: 'https://placehold.co/400x600/9d6d60/white?text=Kids+Swim',
        Price: 18.99,
        oldPrice: 25.00,
        onSale: true,
        NewArrival: false,
        category: 'Kids'
    },
    {
        id: 22,
        name: 'Vintage Distressed Jeans',
        img: 'https://placehold.co/400x600/60759d/white?text=Mens+Jeans',
        Price: 65.00,
        oldPrice: 85.00,
        onSale: true,
        NewArrival: false,
        category: 'Mens'
    },
    {
        id: 23,
        name: 'Silk Scarf',
        img: 'https://placehold.co/400x600/9d6071/white?text=Womens+Scarf',
        Price: 22.00,
        oldPrice: null,
        onSale: false,
        NewArrival: true,
        category: 'Womens'
    },
    {
        id: 24,
        name: 'Unicorn Headband Set',
        img: 'https://placehold.co/400x600/609d73/white?text=Kids+Accessory',
        Price: 15.00,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Kids'
    },
    {
        id: 25,
        name: 'Performance Golf Polo',
        img: 'https://placehold.co/400x600/7a9d60/white?text=Mens+Polo',
        Price: 40.00,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Mens'
    },
    {
        id: 26,
        name: 'Leopard Print Blouse',
        img: 'https://placehold.co/400x600/9d7a60/white?text=Womens+Blouse',
        Price: 48.00,
        oldPrice: 60.00,
        onSale: true,
        NewArrival: true,
        category: 'Womens'
    },
    {
        id: 27,
        name: 'Cotton Leggings 3-Pack',
        img: 'https://placehold.co/400x600/609d9d/white?text=Kids+Leggings',
        Price: 30.00,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Kids'
    },
    {
        id: 28,
        name: 'Heavy Duty Work Boots',
        img: 'https://placehold.co/400x600/51609d/white?text=Mens+Workwear',
        Price: 99.99,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Mens'
    },
    {
        id: 29,
        name: 'Quilted Crossbody Bag',
        img: 'https://placehold.co/400x600/9d5189/white?text=Womens+Bag',
        Price: 55.00,
        oldPrice: 70.00,
        onSale: true,
        NewArrival: false,
        category: 'Womens'
    },
    {
        id: 30,
        name: 'Star Wars T-Shirt',
        img: 'https://placehold.co/400x600/9d8151/white?text=Kids+Tee',
        Price: 21.00,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Kids'
    },
    {
        id: 31,
        name: 'Henley Long Sleeve Shirt',
        img: 'https://placehold.co/400x600/608f9d/white?text=Mens+Henley',
        Price: 32.00,
        oldPrice: null,
        onSale: false,
        NewArrival: true,
        category: 'Mens'
    },
    {
        id: 32,
        name: 'Pleated Midi Skirt',
        img: 'https://placehold.co/400x600/9d606f/white?text=Womens+Skirt',
        Price: 52.00,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Womens'
    },
    {
        id: 33,
        name: 'Plush Teddy Bear Hoodie',
        img: 'https://placehold.co/400x600/609d6f/white?text=Kids+Hoodie',
        Price: 38.00,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Kids'
    },
    {
        id: 34,
        name: 'Casual Blazer (Navy)',
        img: 'https://placehold.co/400x600/60699d/white?text=Mens+Blazer',
        Price: 89.00,
        oldPrice: 110.00,
        onSale: true,
        NewArrival: false,
        category: 'Mens'
    },
    {
        id: 35,
        name: 'Lace Trim Camisole',
        img: 'https://placehold.co/400x600/9d608d/white?text=Womens+Top',
        Price: 28.00,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Womens'
    },
    {
        id: 36,
        name: 'Adjustable Roller Skates',
        img: 'https://placehold.co/400x600/60829d/white?text=Kids+Skates',
        Price: 65.00,
        oldPrice: null,
        onSale: false,
        NewArrival: true,
        category: 'Kids'
    },
    {
        id: 37,
        name: 'Striped Crew Neck Sweater',
        img: 'https://placehold.co/400x600/8d9d60/white?text=Mens+Sweater',
        Price: 59.99,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Mens'
    },
    {
        id: 38,
        name: 'Suede Ankle Boots',
        img: 'https://placehold.co/400x600/9d8d60/white?text=Womens+Boots',
        Price: 115.00,
        oldPrice: null,
        onSale: false,
        NewArrival: true,
        category: 'Womens'
    },
    {
        id: 39,
        name: 'ABC Learning Blocks',
        img: 'https://placehold.co/400x600/609d93/white?text=Kids+Toy',
        Price: 19.99,
        oldPrice: 25.00,
        onSale: true,
        NewArrival: false,
        category: 'Kids'
    },
    {
        id: 40,
        name: 'Aviator Sunglasses',
        img: 'https://placehold.co/400x600/9d607a/white?text=Mens+Glasses',
        Price: 25.00,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Mens'
    },
    {
        id: 41,
        name: 'Cashmere Wrap',
        img: 'https://placehold.co/400x600/9d5160/white?text=Womens+Wrap',
        Price: 150.00,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Womens'
    },
    {
        id: 42,
        name: 'Fleece Snowsuit',
        img: 'https://placehold.co/400x600/609d6f/white?text=Kids+Snowsuit',
        Price: 79.99,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Kids'
    },
    {
        id: 43,
        name: 'Tech Backpack',
        img: 'https://placehold.co/400x600/60759d/white?text=Mens+Backpack',
        Price: 70.00,
        oldPrice: 90.00,
        onSale: true,
        NewArrival: false,
        category: 'Mens'
    },
    {
        id: 44,
        name: 'Pearl Drop Earrings',
        img: 'https://placehold.co/400x600/9d608d/white?text=Womens+Earrings',
        Price: 35.00,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Womens'
    },
    {
        id: 45,
        name: 'Reversible Bucket Hat',
        img: 'https://placehold.co/400x600/609d73/white?text=Kids+Hat',
        Price: 14.50,
        oldPrice: null,
        onSale: false,
        NewArrival: true,
        category: 'Kids'
    },
    {
        id: 46,
        name: 'Slim Fit Dress Pants',
        img: 'https://placehold.co/400x600/7a9d60/white?text=Mens+Pants',
        Price: 68.00,
        oldPrice: null,
        onSale: false,
        NewArrival: true,
        category: 'Mens'
    },
    {
        id: 47,
        name: 'Velvet Hair Scrunchies 5-Pack',
        img: 'https://placehold.co/400x600/9d7a60/white?text=Womens+Hair',
        Price: 12.00,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Womens'
    },
    {
        id: 48,
        name: 'Water Blaster Toy',
        img: 'https://placehold.co/400x600/609d84/white?text=Kids+Blaster',
        Price: 17.00,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Kids'
    },
    {
        id: 49,
        name: 'Silk Blend Tie Set',
        img: 'https://placehold.co/400x600/5c609d/white?text=Mens+Tie',
        Price: 45.00,
        oldPrice: 65.00,
        onSale: true,
        NewArrival: false,
        category: 'Mens'
    },
    {
        id: 50,
        name: 'Diamond Tennis Bracelet',
        img: 'https://placehold.co/400x600/9d6091/white?text=Womens+Bracelet',
        Price: 350.00,
        oldPrice: null,
        onSale: false,
        NewArrival: false,
        category: 'Womens'
    }
];

export default product;
