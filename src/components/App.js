import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GlobalNav from '../components/nav.js';
import Homepage from '../pages/Home';
import List from '../pages/List';
import AddRestaurant from '../pages/AddRestaurant';
import Select from '../pages/Select';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
	state = {
		userId: '001',
		user: {
			firstName: 'Geoff',
			topList: {
				name: 'Restaurants'
			}
		}
	};

	render() {
		return (
			<Router>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/list">View List</Link>
					</li>
					<li>
						<Link to="/add">Add Restaurant</Link>
					</li>
					<li>
						<Link to="/pick">Pick a Place</Link>
					</li>
				</ul>
				<div>
					<Switch>
						<Route exact path="/">
							<Homepage user={this.state.user} />
						</Route>
						<Route path="/list">
							<List />
						</Route>
						<Route path="/add">
							<AddRestaurant />
						</Route>
						<Route path="/pick">
							<Select />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
