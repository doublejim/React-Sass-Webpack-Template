import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
	render() {
		return (
			<div>
				<h1>My Favorite Foods</h1>
				<ul>
					<li>Sushi Burrito</li>
					<li>Rhubarb Pie</li>
					<li>Nacho Cheez Straight Out The Jar</li>
					<li>Broiled Grapefruit</li>
				</ul>
			</div>
		);
	}
}

ReactDOM.render(
	<App/>, 
	document.getElementById('app')
);
