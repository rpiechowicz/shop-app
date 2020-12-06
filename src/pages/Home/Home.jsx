import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { fetchShoppingList, fetchDeleteProductFromShopList } from '../../data/actions/shop.actions'
import { fetchGetUserMoney, fetchAddProductToCard } from '../../data/actions/user.actions'

import { Panel, Row, Col, Divider, Button, Rate } from 'rsuite'

const Home = ({
	fetchShoppingList,
	fetchGetUserMoney,
	fetchAddProductToCard,
	fetchDeleteProductFromShopList,
	shoppingList,
	card,
	user,
}) => {
	useEffect(() => {
		fetchShoppingList()
		fetchGetUserMoney()
	}, [fetchShoppingList, fetchGetUserMoney])

	const Card = ({ id, title, price, description, rate }) => (
		<Panel shaded bordered header={title} style={{ margin: 10 }}>
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
		const findProduct = shoppingList.find(item => item.id === id)
		delete findProduct.quantityInStock

		fetchAddProductToCard({
			data: findProduct,
		}).then(() => {
			fetchDeleteProductFromShopList(id)
			fetchShoppingList()
		})
	}

	const isLoaded = useMemo(() => !!shoppingList && Object.keys(shoppingList).length === 0, [
		shoppingList,
	])

	return (
		<>
			<Row style={{ maxWidth: 1200, margin: 'auto' }}>
				{!isLoaded
					? shoppingList.map(item => (
							<Col key={item.id} sm={8}>
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
		fetchAddProductToCard,
		fetchDeleteProductFromShopList,
	}
)(Home)
