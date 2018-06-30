import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class ListItems extends React.Component {
	state = {
		showGamesPlayed: true,
	};

	toggleGamesPlayedPanel = () => {
		this.setState(currState => ({
			showGamesPlayed: !currState.showGamesPlayed,
		}));
	};

	render() {
		const { showGamesPlayed } = this.state;
    	const { items } = this.props;

    	const gamesPlayedButton = (
    		<div>
    			<button className="smallButton" onClick={this.toggleGamesPlayedPanel}>
    				{showGamesPlayed ? 'Hide' : 'Show'}
    				the Number of Games Played
    			</button>
    		</div>
    	);

		return (
			<div>
				<h1>Items</h1>
				{items && items.length > 0 ? gamesPlayedButton : ''}
				<ol>
					{items.map(item => (
						<Item key={item.username} user={item} showGamesPlayed={showGamesPlayed}/>
					))}
				</ol>
             </div>
		);
	}
}
          
ListItems.propTypes = {
  items: PropTypes.array.isRequired,
};
export default ListItems;