import {
	LOADING_STATES,
	GET_USER_MONEY_REQUEST,
	GET_USER_MONEY_SUCCESS,
	GET_USER_MONEY_FAILURE,
	ADD_PRODUCT_TO_CARD_REQUEST,
	ADD_PRODUCT_TO_CARD_SUCCESS,
	ADD_PRODUCT_TO_CARD_FAILURE,
} from '../constants'

const inictialState = {
	loadingState: null,
	money: undefined,
	card: [],
	boughtProducts: {},
}

const user = (state = inictialState, action) => {
	const newLoadingState = { ...state.loadingState }

	switch (action.type) {
		case GET_USER_MONEY_REQUEST:
			return {
				...state,
				loadingState: {
					...state.loadingState,
					[action.type]: LOADING_STATES.LOADING,
				},
			}
		case GET_USER_MONEY_SUCCESS:
			delete newLoadingState.GET_USER_MONEY_REQUEST

			return {
				...state,
				money: action.payload.money,
				loadingState: newLoadingState,
			}
		case GET_USER_MONEY_FAILURE:
			delete newLoadingState.GET_USER_MONEY_REQUEST

			return {
				...state,
				money: undefined,
				loadingState: newLoadingState,
			}
		case ADD_PRODUCT_TO_CARD_REQUEST:
			return {
				...state,
				loadingState: {
					...state.loadingState,
					[action.type]: LOADING_STATES.LOADING,
				},
			}
		case ADD_PRODUCT_TO_CARD_SUCCESS:
			delete newLoadingState.ADD_PRODUCT_TO_CARD_REQUEST

			return {
				...state,
				card: [...state.card, action.payload],
				loadingState: newLoadingState,
			}
		case ADD_PRODUCT_TO_CARD_FAILURE:
			delete newLoadingState.ADD_PRODUCT_TO_CARD_REQUEST

			return {
				...state,
				card: [],
				loadingState: newLoadingState,
			}
		default:
			return state
	}
}

export default user
