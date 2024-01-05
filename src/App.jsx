import { useState } from "react"
import Body from "./component/Body"
import Header from "./component/Header"
import { clothes } from "./data/data"

function App() {
	const [items, setItems] = useState(clothes)
	const tagName = items.map(item => item.name)
	return (
		<>
			<Header tagName={tagName} />
			<Body clothes={items} />
		</>
	)
}

export default App
