import React, { useEffect, useMemo, useCallback } from 'react'
import { connect } from 'react-redux'
import { fetchShoppingList, fetchDeleteProductFromShopList } from '../../data/actions/shop.actions'
import { fetchGetUserMoney, fetchAddProductToCard } from '../../data/actions/user.actions'
import { setLoadingTrue, setLoadingFalse } from '../../data/actions/common.actions'

import { Panel, Row, Col, Divider, Button, Rate } from 'rsuite'

const Home = ({
	fetchShoppingList,
	fetchGetUserMoney,
	fetchAddProductToCard,
	fetchDeleteProductFromShopList,
	setLoadingTrue,
	setLoadingFalse,
	shoppingList,
	loadingState,
}) => {
	useEffect(() => {
		fetchShoppingList()
		fetchGetUserMoney()
	}, [fetchShoppingList, fetchGetUserMoney])

	const Card = ({ id, title, price, description, rate, loadingState }) =>
		useMemo(() => {
			return (
				<Panel shaded bordered header={title} style={{ margin: 10 }}>
					<div>Cena: {price}</div>
					<div>Opis: {description}</div>
					<Rate value={rate} allowHalf readOnly size="xs" />
					<Divider />
					<Button
						appearance="primary"
						block
						loading={loadingState && id === loadingState.id ? loadingState.loading : false}
						onClick={() => addProductToCard(id)}
					>
						Dodaj do koszyka
					</Button>
				</Panel>
			)
		}, [id, title, price, description, rate, loadingState])

	const addProductToCard = useCallback(
		id => {
			const findProduct = shoppingList.find(item => item.id === id)
			delete findProduct.quantityInStock

			setLoadingTrue(id)

			setTimeout(() => {
				fetchAddProductToCard({
					data: findProduct,
				}).then(() => {
					setLoadingFalse()
					fetchDeleteProductFromShopList(id)
					fetchShoppingList()
				})
			}, 600)
		},
		[
			fetchAddProductToCard,
			fetchDeleteProductFromShopList,
			fetchShoppingList,
			setLoadingFalse,
			setLoadingTrue,
			shoppingList,
		]
	)

	const isLoaded = useMemo(() => !!shoppingList && Object.keys(shoppingList).length === 0, [
		shoppingList,
	])

	return (
		<>
			<Row style={{ maxWidth: 1200, margin: 'auto' }}>
				{!isLoaded
					? shoppingList.map(item => (
							<Col key={item.id} sm={8}>
								<Card key={item.id} {...item} loadingState={loadingState} />
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
			loadingState: state.common.loadingState,
		}
	},
	{
		fetchShoppingList,
		fetchGetUserMoney,
		fetchAddProductToCard,
		fetchDeleteProductFromShopList,
		setLoadingTrue,
		setLoadingFalse,
	}
)(Home)
