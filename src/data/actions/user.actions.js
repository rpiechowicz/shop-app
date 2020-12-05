import { GET_USER_MONEY } from '../constants'
import API from '../fetch'

export const fetchGetUserMoney = () => {
	const promise = API.user.fetchGetUserMoney()

	return {
		type: GET_USER_MONEY,
		promise,
	}
}
