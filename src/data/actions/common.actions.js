import { LOADING_FALSE, LOADING_TRUE } from '../constants'

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
