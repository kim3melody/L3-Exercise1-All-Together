import React from 'react';
import PropTypes from 'prop-types';

class SubmitInfo extends React.Component {
  state = {
  	user: {
    	firstName: '',
      	lastName: '',
      	username: '',
    },
    userExists: false,
  };

  isDisabled = () => {
  	const { firstName, lastName, username } = this.state.user;
  	return firstName==='' || lastName==='' || username==='';
  };

  handleInputChange = (event) => {
  	const {name, value} = event.target;
  	this.setState(currState => ({
  		...currState,
  		user: {
  			...currState.user,
  			[name]: value,
  		},
  	}));
  };

  handleSubmit = (event) => {
  	event.preventDefault();
  	const userExists = this.contactExists(this.state.user.username);
  	if (!userExists) {
  		this.props.onSubmitInfo(this.state.user);
  	}
  	this.setState(() => ({
  		userExists,
  	}));
  };

  contactExists = currUsername => {
  	const users = this.props.users;
  	for (let user of users) {
  		if (user.username === currUsername) {
  			return true;
  		}
  	}
  	return false;
  };

  render() { 
    const { firstName, lastName, username } = this.state.user;
	return (
		<form onSubmit={this.handleSubmit}>
			<div>
				<input
					type="text"
					name="firstName"
					placeholder="enter first name"
					value={firstName}
					onChange={this.handleInputChange}
				/>
				<input
					type="text"
					name="lastName"
					placeholder="enter last name"
					value={lastName}
					onChange={this.handleInputChange}
				/>
				<input
					type="text"
					name="username"
					placeholder="enter user name"
					value={username}
					onChange={this.handleInputChange}
				/>
			</div>
			<button disabled={this.isDisabled()}>Add</button>
			{this.state.userExists ? (
				<p className="error">You cannot add a user that already exsits.</p>
			) : ('')}
		</form>
    );  
  }
}

SubmitInfo.propTypes = {
  users: PropTypes.array.isRequired,
  onSubmitInfo: PropTypes.func.isRequired,
};
export default SubmitInfo;