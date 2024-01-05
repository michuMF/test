import { IoHome } from "react-icons/io5"
const Header = ({ tagName, setFilter, items, setLayout }) => {
	const filterHandler = e => {
		setLayout("grid-cols-4")
		const filterTags = items.filter(item => {
			return item.name === e
		})
		setFilter(filterTags)
	}
	return (
		<div className='bg-black text-white p-5'>
			<div className='flex justify-center gap-10 uppercase items-center '>
				<button onClick={() => setFilter(items)}>
					<IoHome className=' text-3xl' />
				</button>
				{tagName.map((item, index) => {
					return (
						<button
							key={index}
							onClick={e => {
								filterHandler(e.target.innerHTML)
							}}
							className='border uppercase flex-1 rounded-md  p-2   hover:bg-white hover:text-black hover:transition-colors duration-500'>
							{item}
						</button>
					)
				})}
			</div>
		</div>
	)
}
export default Header
