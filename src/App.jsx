import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navbar, Home, Card } from './pages'

import { Container, Content } from 'rsuite'

const App = () => {
	const navigationItems = [
		{ content: 'Strona główna', to: '/', icon: 'home' },
		{ content: 'Zarządzanie', to: '/manage', icon: 'cogs' },
		{ content: 'Zakupione produkty', to: '/your-products', icon: 'dashboard' },
		{ content: 'Koszyk', to: '/card', icon: 'shopping-cart' },
	]

	return (
		<>
			<Router>
				<div className="navbar-page">
					<Container>
						<Navbar items={navigationItems} />
					</Container>
				</div>

				<Card />

				<Switch>
					<Route exact path="/">
						<Content style={{ margin: 10 }}>
							<Home />
						</Content>
					</Route>
					<Route path="/manage">Zarządzanie</Route>
				</Switch>
			</Router>
		</>
	)
}

export default App
