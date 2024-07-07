import React, { useState } from "react";
import Filter from './Filter';
import Dishes from "./Dishes";

let menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: 'https://b.zmtcdn.com/data/pictures/chains/6/800126/a27bd9588a65ab593c977b7d6fbf6617_o2_featured_v2.jpg?output-format=webp',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: 'https://b.zmtcdn.com/data/pictures/chains/0/800260/3750aac8d138fbee606579cf54412b88_o2_featured_v2.jpg?output-format=webp',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: 'https://b.zmtcdn.com/data/pictures/1/20440111/67eae013aa4d3ea8d7d8442925fff614_o2_featured_v2.jpg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: 'https://b.zmtcdn.com/data/pictures/6/800896/e4cb3c17841122d533ad4aa00ea5aa85_o2_featured_v2.jpg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: 'https://b.zmtcdn.com/data/pictures/chains/1/801511/cb7c453a14b20232efab4253c9e102d7_o2_featured_v2.jpg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: 'https://b.zmtcdn.com/data/pictures/9/20456139/23b66f7bf2cfce08c4874c2a4439399a_o2_featured_v2.jpg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: 'https://b.zmtcdn.com/data/pictures/8/18708308/572c72e0ee77bc945c3756d63d667fa7_o2_featured_v2.jpg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: 'https://b.zmtcdn.com/data/pictures/chains/1/18238641/5935edc1fd9b982ab3531ea364c03df8_o2_featured_v2.jpg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: 'https://b.zmtcdn.com/data/pictures/chains/0/800910/55bc3ca3172d678a005f9c152949154b_o2_featured_v2.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]

let haveCategory = ["All", "breakfast", "lunch", "shakes"];

function Menu() {

    const [category, setCategory] = useState(haveCategory[0]);

    let selectedCategory = menu.filter(dish => dish.category === category || category === "All");

  return (
    <>
     <h2 className="heading">Our Menu</h2>
     <Filter haveCategory= {haveCategory} selectedCategory={category} setCategory={setCategory}/>
     <Dishes dishes={selectedCategory}/>
    </>
  );
}

export default Menu;
