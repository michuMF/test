const Header = ({ tagName }) => {
	return (
		<div className=' '>
			<nav>
				<ul className='flex justify-center gap-10 uppercase my-5'>
					{tagName.map((item, index) => {
						return (
							<li key={index}>
								<button className='border uppercase border-black bg-slate-50 rounded-md p-2'>
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
