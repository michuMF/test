import { useState } from "react"
import Body from "./component/Body"
import Header from "./component/Header"
import { clothes } from "./data/data"

function App() {
	const [items, setItems] = useState(clothes)

	const [filter, setFilter] = useState(items)

	const [layout, setLayout] = useState("grid-cols-4")
	const tagName = items.map(item => item.name)
	return (
		<>
			<Header
				tagName={tagName}
				filter={filter}
				setFilter={setFilter}
				items={items}
				setLayout={setLayout}
			/>
			<Body clothes={filter} setFilter={setFilter} layout={layout} />
		</>
	)
}

export default App
