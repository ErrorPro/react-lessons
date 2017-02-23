import React, { Component } from 'react';
import { UsersListItemContainer } from '../UsersListItem';

export default class UsersList extends Component {
  render() {
    const { users } = this.props;

    return (
      <div>
        {users.map(e => <UsersListItemContainer key={e.id} user={e}/>)}
      </div>
    )
  }
}
