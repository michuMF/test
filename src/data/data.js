import whiteShirt from "../assets/white-shirt.jpg"
import blackShirt from "../assets/black-shirt.jpg"
import blackSweatshirt from "../assets/b-sweatshirt.jpg"
import whiteSweatshirt from "../assets/w-sweatshirt.jpg"
import blackTrousers from "../assets/b-trousers.jpg"
import whiteTrousers from "../assets/w-trousers.jpg"
import blackShoes from "../assets/b-shoes.jpg"
import whiteShoes from "../assets/w-shoes.jpg"

export const clothes = [
	{
		name: "sweatshirt",
		products: [
			{ name: "White Sweatshirt", image: whiteSweatshirt, price: 34 },
			{ name: "Black Sweatshirt", image: blackSweatshirt, price: 11 },
		],
	},
	{
		name: "shirt",
		products: [
			{ name: "Black Shirt", image: blackShirt, price: 71 },
			{ name: "White Shirt", image: whiteShirt, price: 29 },
		],
	},
	{
		name: "trouser",
		products: [
			{ name: "Black trousers", image: blackTrousers, price: 54 },
			{ name: "White trousers", image: whiteTrousers, price: 13 },
		],
	},
	{
		name: "shoes",
		products: [
			{ name: "White Shoes", image: whiteShoes, price: 21 },
			{ name: "Black Shoes", image: blackShoes, price: 53 },
		],
	},
]
