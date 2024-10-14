import p2_img from '../Assets/women1.jpeg';
import p5_img from '../Assets/women2.jpeg';
import p8_img from '../Assets/women3.jpeg';
import p11_img from '../Assets/women4.jpeg';
import p14_img from '../Assets/women5.jpeg';
import p17_img from '../Assets/women6.jpeg';
import p20_img from '../Assets/women7.jpeg';
import p23_img from '../Assets/women8.jpeg';
import p26_img from '../Assets/women9.jpeg';

import p3_img from '../Assets/men 1.jpeg';
import p6_img from '../Assets/men2.jpeg';
import p9_img from '../Assets/men3.jpeg';
import p12_img from '../Assets/men4.jpeg';
import p15_img from '../Assets/men5.jpeg';
import p18_img from '../Assets/men6.jpeg';
import p21_img from '../Assets/men7.png';
import p24_img from '../Assets/men8.jpg';
import p27_img from '../Assets/men9.png';

import p1_img from '../Assets/kids1.jpeg';
import p4_img from '../Assets/kids2.jpg';
import p7_img from '../Assets/kids3.jpeg';
import p10_img from '../Assets/kids4.jpeg';
import p13_img from '../Assets/kids5.jpeg';
import p16_img from '../Assets/kids6.jpeg';
import p19_img from '../Assets/kids7.jpeg';
import p22_img from '../Assets/kids8.jpeg';
import p25_img from '../Assets/kids9.jpeg';
import p28_img from '../Assets/kids10.jpeg';

import p29_img from '../Assets/NewCollection1.jpg';
import p30_img from '../Assets/NewCollection4.jpg';
import p31_img from '../Assets/NewCollection5.jpg';
import p32_img from '../Assets/NewCollection6.webp';
import p33_img from '../Assets/newcollection7.jpg';
import p34_img from '../Assets/newcollection2.jpg';
import p35_img from '../Assets/product-img4.png';
import p36_img from '../Assets/product-img3.png';

const all_product = [
    {
        id: 1,
        name: "Women's Orange Colourblocked Hooded Sweatshirt",
        category: "women",
        image: p2_img,
        new_price: 85.0,
        old_price: 120.5,
    },
    {
        id: 2,
        name: "Women's Grey Long-Sleeve Top",
        category: "women",
        image: p5_img,
        new_price: 90.0,
        old_price: 130.5,
    },
    {
        id: 3,
        name: "Women's Blue Printed Dress",
        category: "women",
        image: p8_img,
        new_price: 95.0,
        old_price: 140.0,
    },
    {
        id: 4,
        name: "Women's Green Casual Blouse",
        category: "women",
        image: p11_img,
        new_price: 78.0,
        old_price: 110.0,
    },
    {
        id: 5,
        name: "Women's Red Sweater",
        category: "women",
        image: p14_img,
        new_price: 80.0,
        old_price: 100.0,
    },
    {
        id: 6,
        name: "Women's Yellow Jacket",
        category: "women",
        image: p17_img,
        new_price: 100.0,
        old_price: 150.0,
    },
    {
        id: 7,
        name: "Women's Black Hoodie",
        category: "women",
        image: p20_img,
        new_price: 85.0,
        old_price: 120.0,
    },
    {
        id: 8,
        name: "Women's White T-Shirt",
        category: "women",
        image: p23_img,
        new_price: 70.0,
        old_price: 110.0,
    },
    {
        id: 9,
        name: "Women's Pink Dress",
        category: "women",
        image: p26_img,
        new_price: 95.0,
        old_price: 135.0,
    },

    {
        id: 10,
        name: "Men's Black Jacket",
        category: "men",
        image: p3_img,
        new_price: 85.0,
        old_price: 120.0,
    },
    {
        id: 11,
        name: "Men's Grey Hoodie",
        category: "men",
        image: p6_img,
        new_price: 80.0,
        old_price: 110.0,
    },
    {
        id: 12,
        name: "Men's Blue Sweatshirt",
        category: "men",
        image: p9_img,
        new_price: 78.0,
        old_price: 105.0,
    },
    {
        id: 13,
        name: "Men's Red T-Shirt",
        category: "men",
        image: p12_img,
        new_price: 70.0,
        old_price: 100.0,
    },
    {
        id: 14,
        name: "Men's Black Jeans",
        category: "men",
        image: p15_img,
        new_price: 90.0,
        old_price: 130.0,
    },
    {
        id: 15,
        name: "Men's Green Shirt",
        category: "men",
        image: p18_img,
        new_price: 95.0,
        old_price: 140.0,
    },
    {
        id: 16,
        name: "Men's Blue Denim Jacket",
        category: "men",
        image: p21_img,
        new_price: 100.0,
        old_price: 150.0,
    },
    {
        id: 17,
        name: "Men's White Polo",
        category: "men",
        image: p24_img,
        new_price: 80.0,
        old_price: 110.0,
    },
    {
        id: 18,
        name: "Men's Grey Suit",
        category: "men",
        image: p27_img,
        new_price: 150.0,
        old_price: 200.0,
    },

    {
        id: 19,
        name: "Boys' Orange Colourblocked Hooded Sweatshirt",
        category: "kid",
        image: p1_img,
        new_price: 85.0,
        old_price: 120.0,
    },
    {
        id: 20,
        name: "Girls' Pink Hoodie",
        category: "kid",
        image: p4_img,
        new_price: 90.0,
        old_price: 130.0,
    },
    {
        id: 21,
        name: "Boys' Green Sweatshirt",
        category: "kid",
        image: p7_img,
        new_price: 80.0,
        old_price: 115.0,
    },
    {
        id: 22,
        name: "Girls' Blue Denim Jacket",
        category: "kid",
        image: p10_img,
        new_price: 95.0,
        old_price: 140.0,
    },
    {
        id: 23,
        name: "Boys' Black T-Shirt",
        category: "kid",
        image: p13_img,
        new_price: 75.0,
        old_price: 100.0,
    },
    {
        id: 24,
        name: "Girls' Yellow Dress",
        category: "kid",
        image: p16_img,
        new_price: 90.0,
        old_price: 130.0,
    },
    {
        id: 25,
        name: "Boys' Grey Hoodie",
        category: "kid",
        image: p19_img,
        new_price: 85.0,
        old_price: 120.0,
    },
    {
        id: 26,
        name: "Girls' Purple Jacket",
        category: "kid",
        image: p22_img,
        new_price: 95.0,
        old_price: 135.0,
    },
    {
        id: 27,
        name: "Boys' Red T-Shirt",
        category: "kid",
        image: p25_img,
        new_price: 70.0,
        old_price: 100.0,
    },
    {
        id: 28,
        name: "Girls' Green Skirt",
        category: "kid",
        image: p28_img,
        new_price: 85.0,
        old_price: 120.0,
    },

    // New Collection
    {
        id: 29,
        name: "New Collection - Item 1",
        category: "new",
        image: p29_img,
        new_price: 100.0,
        old_price: 150.0,
    },
    {
        id: 30,
        name: "New Collection - Item 2",
        category: "new",
        image: p30_img,
        new_price: 110.0,
        old_price: 160.0,
    },
    {
        id: 31,
        name: "New Collection - Item 3",
        category: "new",
        image: p31_img,
        new_price: 120.0,
        old_price: 170.0,
    },
    {
        id: 32,
        name: "New Collection - Item 4",
        category: "new",
        image: p32_img,
        new_price: 130.0,
        old_price: 180.0,
    },
    {
        id: 33,
        name: "New Collection - Item 5",
        category: "new",
        image: p33_img,
        new_price: 140.0,
        old_price: 190.0,
    },
    {
        id: 34,
        name: "New Collection - Item 6",
        category: "new",
        image: p34_img,
        new_price: 150.0,
        old_price: 200.0,
    },
    {
        id: 35,
        name: "New Collection - Item 7",
        category: "new",
        image: p35_img,
        new_price: 160.0,
        old_price: 210.0,
    },
    {
        id: 36,
        name: "New Collection - Item 8",
        category: "new",
        image: p36_img,
        new_price: 170.0,
        old_price: 220.0,
    },
];

export default all_product;
