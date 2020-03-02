import React, { Component } from 'react';
import CardList from '../components/cardList';
import { robots } from './robots';
import SearchBox from '../components/searchBox';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/errorBoundry';
import './app.css';


class App extends Component {
	constructor() {
		super()
			this.state = {
				robots: robots,
				searchfield: ''
			} 
		}
		
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return !robots.length ?
			<h1 className= 'tc'> Still Loading, Please Wait </h1> :
		(
			<div className= 'tc' > 
				<h1 className= 'f1' > My Robofamily </h1>
				<SearchBox searchChange= {this.onSearchChange} />
				<Scroll>
					<ErrorBoundry>
					<CardList robots={filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}

export default App;