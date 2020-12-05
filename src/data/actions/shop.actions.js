import { ALL_SHOPPING_LIST_GET } from '../constants'
import API from '../fetch'

export const fetchShoppingList = () => {
	const promise = API.shop.fetchShoppingList()

	return {
		type: ALL_SHOPPING_LIST_GET,
		promise,
	}
}
