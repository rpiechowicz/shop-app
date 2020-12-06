import { GET_USER_MONEY, ADD_PRODUCT_TO_CARD } from '../constants'
import API from '../fetch'

export const fetchGetUserMoney = () => {
	const promise = API.user.fetchGetUserMoney()

	return {
		type: GET_USER_MONEY,
		promise,
	}
}

export const fetchAddProductToCard = ({ data }) => {
	const promise = API.user.fetchAddProductToCard({ data })

	return {
		type: ADD_PRODUCT_TO_CARD,
		promise,
		successMessage: 'Produkt został prawidłowo dodany do koszyka!',
	}
}
