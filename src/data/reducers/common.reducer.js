import {
	LOADING_FALSE,
	LOADING_TRUE,
	SET_SHOPPING_CARD_TRUE,
	SET_SHOPPING_CARD_FALSE,
} from '../constants'

const inictialState = {
	loadingState: { loading: false, id: undefined },
	shoppingCard: { display: false },
}

const user = (state = inictialState, action) => {
	switch (action.type) {
		case LOADING_TRUE:
			return {
				loadingState: {
					loading: action.payload.loading,
					id: action.payload.id,
				},
			}
		case LOADING_FALSE:
			return {
				loadingState: {
					loading: action.payload.loading,
					id: undefined,
				},
			}
		case SET_SHOPPING_CARD_TRUE:
			return {
				shoppingCard: {
					display: action.payload.display,
				},
			}
		case SET_SHOPPING_CARD_FALSE:
			return {
				shoppingCard: {
					display: action.payload.display,
				},
			}
		default:
			return state
	}
}

export default user
