import {
	LOADING_STATES,
	ALL_SHOPPING_LIST_GET_REQUEST,
	ALL_SHOPPING_LIST_GET_SUCCESS,
	ALL_SHOPPING_LIST_GET_FAILURE,
} from '../constants'

const inictialState = {
	loadingState: null,
	shoppingList: {},
}

const shop = (state = inictialState, action) => {
	const newLoadingState = { ...state.loadingState }

	switch (action.type) {
		case ALL_SHOPPING_LIST_GET_REQUEST:
			return {
				...state,
				loadingState: {
					...state.loadingState,
					[action.type]: LOADING_STATES.LOADING,
				},
			}
		case ALL_SHOPPING_LIST_GET_SUCCESS:
			delete newLoadingState.ALL_SHOPPING_LIST_GET_REQUEST

			return {
				...state,
				shoppingList: action.payload,
				loadingState: newLoadingState,
			}
		case ALL_SHOPPING_LIST_GET_FAILURE:
			delete newLoadingState.ALL_SHOPPING_LIST_GET_REQUEST

			return {
				...state,
				shoppingList: {},
				loadingState: newLoadingState,
			}
		default:
			return state
	}
}

export default shop
