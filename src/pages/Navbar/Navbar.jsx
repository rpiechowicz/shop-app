import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Header, Nav, Navbar, Icon, Badge, Drawer, Tag } from 'rsuite'

const NavbarMenu = ({ items, card, money }) => {
	const countProductsInCard = card.length
	const itemsNavigation = items.map(item => {
		return (
			<Nav key={item}>
				{item.content === 'Koszyk' ? (
					countProductsInCard === 0 ? (
						<Nav.Item
							componentClass={Link}
							key={item}
							to={item.to}
							icon={<Icon icon={item.icon} />}
						>
							{item.content}
						</Nav.Item>
					) : (
						<Badge content={countProductsInCard} key={item}>
							<Nav.Item
								componentClass={Link}
								key={item}
								to={item.to}
								icon={<Icon icon={item.icon} />}
							>
								{item.content}
							</Nav.Item>
						</Badge>
					)
				) : (
					<Nav.Item componentClass={Link} to={item.to} key={item} icon={<Icon icon={item.icon} />}>
						{item.content}
					</Nav.Item>
				)}
			</Nav>
		)
	})

	return (
		<>
			<Header style={{ maxWidth: 1200, margin: 'auto' }}>
				<Navbar appearance="default" style={{ marginTop: 20 }}>
					<Navbar.Body>
						<Nav>{itemsNavigation}</Nav>
						<Nav pullRight>
							<Nav.Item icon={<Icon icon="money" />}>
								Dostępne środki: <Tag color="green">{money} zł</Tag>
							</Nav.Item>
						</Nav>
					</Navbar.Body>
				</Navbar>
			</Header>
		</>
	)
}

export default connect(state => {
	return {
		card: state.user.card,
		money: state.user.money,
	}
})(NavbarMenu)
