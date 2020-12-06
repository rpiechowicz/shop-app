import {
	LOADING_FALSE,
	LOADING_TRUE,
	SET_SHOPPING_CARD_TRUE,
	SET_SHOPPING_CARD_FALSE,
} from '../constants'

export const setLoadingTrue = id => {
	return {
		type: LOADING_TRUE,
		payload: {
			loading: true,
			id,
		},
	}
}

export const setLoadingFalse = () => {
	return {
		type: LOADING_FALSE,
		payload: {
			loading: false,
		},
	}
}

export const setShoppingCardTrue = () => {
	return {
		type: SET_SHOPPING_CARD_TRUE,
		payload: {
			display: true,
		},
	}
}

export const setShoppingCardFalse = () => {
	return {
		type: SET_SHOPPING_CARD_FALSE,
		payload: {
			display: false,
		},
	}
}
