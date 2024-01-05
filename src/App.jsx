import { useState } from "react"
import Body from "./component/Body"
import Header from "./component/Header"
import { clothes } from "./data/data"

function App() {
	const [items, setItems] = useState(clothes)

	const [filter, setFilter] = useState(items)
	const tagName = items.map(item => item.name)
	return (
		<>
			<Header
				tagName={tagName}
				filter={filter}
				setFilter={setFilter}
				items={items}
			/>
			<Body clothes={filter} setFilter={setFilter} />
		</>
	)
}

export default App
