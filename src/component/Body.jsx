import { useState } from "react"

const Body = ({ clothes }) => {
	console.log(clothes)

	return (
		<>
			<div className='flex justify-around'>
				{clothes.map(item => (
					<div key={item.name}>
						{item.products.map(item => {
							return <div key={item}>{item}</div>
						})}
					</div>
				))}
			</div>
		</>
	)
}
export default Body
