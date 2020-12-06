export const fetchGetUserMoney = () => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/money`)

	return promise
}

export const fetchAddProductToCard = ({ data }) => {
	const promise = fetch(`${process.env.REACT_APP_API_URL}/card`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(data),
	})

	return promise
}
