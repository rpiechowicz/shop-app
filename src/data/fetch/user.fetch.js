export const fetchGetUserMoney = () => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/user`)

	return promise
}
