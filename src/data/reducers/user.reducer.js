import {
	LOADING_STATES,
	GET_USER_MONEY_REQUEST,
	GET_USER_MONEY_SUCCESS,
	GET_USER_MONEY_FAILURE,
} from '../constants'

const inictialState = {
	loadingState: null,
	money: {},
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
				money: {},
				loadingState: newLoadingState,
			}
		default:
			return state
	}
}

export default user
