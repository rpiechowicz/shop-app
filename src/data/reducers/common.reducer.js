import { LOADING_FALSE, LOADING_TRUE } from '../constants'

const inictialState = {
	loadingState: { loading: false, id: undefined },
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
		default:
			return state
	}
}

export default user
