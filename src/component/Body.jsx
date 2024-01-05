const Body = ({ clothes, layout }) => {
	console.log(clothes[0].products)

	return (
		<>
			<div className={`grid ${layout} place-content-center gap-1  p-8`}>
				{clothes.map(item => (
					<div className=' ' key={item.name}>
						{item.products.map(item => {
							return (
								<div
									className=' flex flex-col items-center my-1  border-2 rounded-xl p-2 py-4 '
									key={item.name}>
									<h3 className='my-2 text-xl bg-slate-100 p-1 px-4 rounded-lg'>
										{item.name}
									</h3>
									<div>
										<img
											className=' rounded-md w-36 h-36 object-cover'
											src={item.image}
											alt={item.name}
										/>
									</div>
									<p className='text-sm text-gray-400 my-2 font-thin'>
										{item.price}.00 $
									</p>
								</div>
							)
						})}
					</div>
				))}
			</div>
		</>
	)
}
export default Body
