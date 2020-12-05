import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { fetchShoppingList } from '../../data/actions/shop.actions'
import { fetchGetUserMoney } from '../../data/actions/user.actions'

import { Panel, Row, Col, Divider, Button, Rate } from 'rsuite'

const Home = ({ fetchShoppingList, fetchGetUserMoney, shoppingList, user }) => {
	useEffect(() => {
		fetchShoppingList()
		fetchGetUserMoney()
	}, [fetchShoppingList, fetchGetUserMoney])

	const Card = ({ id, title, price, description, rate, countInBase }) => (
		<Panel shaded bordered header={title + ' - ' + countInBase} style={{ margin: 10 }}>
			<div>Cena: {price}</div>
			<div>Opis: {description}</div>
			<Rate value={rate} allowHalf readOnly size="xs" />
			<Divider />
			<Button color="cyan" block onClick={() => addProductToCard(id)}>
				Dodaj do koszyka
			</Button>
		</Panel>
	)

	const addProductToCard = id => {
		console.log(id, 'add')
	}

	const isLoaded = useMemo(() => !!shoppingList && Object.keys(shoppingList).length === 0, [
		shoppingList,
	])

	return (
		<>
			<Row>
				{!isLoaded
					? shoppingList.map(item => (
							<Col key={item.id} sm={6}>
								<Card key={item.id} {...item} />
							</Col>
					  ))
					: 'loadingasdas'}
			</Row>
		</>
	)
}

export default connect(
	state => {
		return {
			shoppingList: state.shop.shoppingList,
			user: state.user,
		}
	},
	{
		fetchShoppingList,
		fetchGetUserMoney,
	}
)(Home)
