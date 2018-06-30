import React from 'react';
import PropTypes from 'prop-types';

const Item = props => {
	return (
		<li className="user">
			<p>Username: {props.user.username}</p>
			<p>Number of games Played: {props.showGamesPlayed ? props.user.numGamesPlayed : '*'}</p>
		</li>
	);
};

Item.propTypes = {
	showGamesPlayed: PropTypes.bool.isRequired,
	user: PropTypes.object.isRequired,
};

export default Item;