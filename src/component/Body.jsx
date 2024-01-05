import { useState } from "react"

const Body = ({ clothes }) => {
	const [items, setItems] = useState(clothes)

	const clearHandler = () => {
		const test = document.getElementById
		setItems([])
	}

	return (
		<>
			<div className='flex justify-around'>
				{items.map(item => (
					<div key={item.name}>
						{item.products.map(item => {
							return <div key={item}>{item}</div>
						})}
					</div>
				))}
			</div>
			<div className='flex justify-center mt-5 '>
				<button onClick={clearHandler} className='bg-red-300 p-2 rounded-md'>
					Clear
				</button>
			</div>
		</>
	)
}
export default Body
