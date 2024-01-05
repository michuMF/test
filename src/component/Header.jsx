import { useState } from "react"

const Header = ({ tagName, filter, setFilter, items }) => {
	const [test, setTest] = useState(items)
	const filterHandler = e => {
		const filterTags = items.filter(item => {
			return item.name === e
		})
		setFilter(filterTags)
	}
	return (
		<div className=' '>
			<nav>
				<ul className='flex justify-center gap-10 uppercase my-5'>
					{tagName.map((item, index) => {
						return (
							<li key={index}>
								<button
									onClick={e => {
										filterHandler(e.target.innerHTML)
									}}
									className='border uppercase border-black bg-slate-50 rounded-md p-2'>
									{item}
								</button>
							</li>
						)
					})}
				</ul>
			</nav>
		</div>
	)
}
export default Header
