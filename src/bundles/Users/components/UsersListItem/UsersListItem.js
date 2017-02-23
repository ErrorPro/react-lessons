import React, { Component } from 'react';

export default class UsersListItem extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <img src={user.avatar_url}/>
        <span>{user.login}</span>
      </div>
    )
  }
}
