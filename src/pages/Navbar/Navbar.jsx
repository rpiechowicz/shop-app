import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import { Header, Nav, Navbar, Icon } from 'rsuite'

const NavbarMenu = ({ items }) => {
	const itemsNavigation = items.map(item => {
		return (
			<Nav.Item componentClass={Link} to={item.to} key={item} icon={<Icon icon={item.icon} />}>
				{item.content}
			</Nav.Item>
		)
	})

	return (
		<>
			<Header>
				<Navbar appearance="default">
					<Navbar.Body>
						<Nav>{itemsNavigation}</Nav>
					</Navbar.Body>
				</Navbar>
			</Header>
		</>
	)
}

export default NavbarMenu
