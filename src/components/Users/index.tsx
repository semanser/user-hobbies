import React, { PureComponent } from 'react';
import { UserType } from '../../store/users/types'
import { User } from './styles'

import { Wrapper, AddPanel } from './styles'

interface Props {
  users: UserType[],
  onAdd(name: string): void,
  selectedUser?: number,
  onSelect(user: UserType): void,
}

class Users extends PureComponent<Props, any>  {
  private nameInputRef = React.createRef<HTMLInputElement>()

  onAdd = () => {
    const { onAdd } = this.props
    onAdd(this.nameInputRef.current!.value)
  }

  onSelect = (user: UserType) => {
    const { onSelect } = this.props
    onSelect(user)
  }

  render() {
    const { users = [], selectedUser } = this.props

    return (
      <Wrapper>
        <AddPanel>
          <input ref={this.nameInputRef} placeholder='Enter user name'/>
          <button onClick={this.onAdd}>Add user</button>
        </AddPanel>
        <ul>
          {users.map((user: UserType) => (
            <User
              key={user.id}
              isSelected={selectedUser === user.id}
              onClick={() => this.onSelect(user)}
            >
              {user.name}
            </User>
          ))}
        </ul>
      </Wrapper>
    );
  }
 }

export default Users;

