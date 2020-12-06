import { ALL_SHOPPING_LIST_GET, DELETE_PRODUCT_FROM_SHOP_LIST } from '../constants'
import API from '../fetch'

export const fetchShoppingList = () => {
	const promise = API.shop.fetchShoppingList()

	return {
		type: ALL_SHOPPING_LIST_GET,
		promise,
	}
}

export const fetchDeleteProductFromShopList = id => {
	const promise = API.shop.fetchDeleteProductFromShopList(id)

	return {
		type: DELETE_PRODUCT_FROM_SHOP_LIST,
		promise,
	}
}
