export const fetchShoppingList = () => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/shoppingList`)

	return promise
}
