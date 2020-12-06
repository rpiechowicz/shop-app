import React from 'react'
import { connect } from 'react-redux'

import { setShoppingCardFalse } from '../../data/actions/common.actions'

import { Drawer, Button } from 'rsuite'

const ShoppingCard = ({ shoppingCard, setShoppingCardFalse }) => {
	const display = shoppingCard && shoppingCard.display

	const closeDrawer = () => {
		setShoppingCardFalse()
	}

	return (
		<>
			<Drawer show={display} size="sm" backdrop onHide={closeDrawer}>
				<Drawer.Header>
					<Drawer.Title>Twój koszyk z produktami</Drawer.Title>
				</Drawer.Header>
				<Drawer.Body>asdas</Drawer.Body>
				<Drawer.Footer style={{ paddingBottom: 15 }}>
					<Button appearance="ghost">Wyczyść koszyk</Button>
					<Button onHide={closeDrawer} appearance="primary">
						Zatwierdź i kup
					</Button>
				</Drawer.Footer>
			</Drawer>
		</>
	)
}

export default connect(
	state => {
		return {
			shoppingCard: state.common.shoppingCard,
		}
	},
	{ setShoppingCardFalse }
)(ShoppingCard)
