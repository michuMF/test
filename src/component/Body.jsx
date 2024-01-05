import { useState } from "react"

const Body = ({ clothes }) => {
	const [items, setItems] = useState(clothes)

	const clearHandler = () => {
		console.log(items)
		const test = document.getElementById
		setItems([{ products: [] }, { products: [] }])
	}
	const sweatshirts = items[0]
	const shirts = items[1]

	const word = "word"

	let newWord = word.split("")

	newWord = newWord.filter((word, i) => {
		return i % 2 === 0
	})

	console.log(newWord)

	return (
		<>
			<div className='flex justify-around'>
				{sweatshirts.products.map(item => (
					<div key={item}>{item}</div>
				))}
			</div>
			<div className='flex justify-around'>
				{shirts.products.map(item => (
					<div key={item}>{item}</div>
				))}
			</div>
			<div className='flex justify-center '>
				<button onClick={clearHandler} className='p-3 mt-5 rounded-lg bg-slate-100'>
					Clear
				</button>
			</div>
		</>
	)
}
export default Body
