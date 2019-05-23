import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import Users from '../../components/Users/'
import { UserType } from '../../store/users/types'
import { getUsers, createUser } from '../../store/users/actions'

import { HobbyType } from '../../store/hobbies/types'
import { getHobbies, createHobby, removeHobby } from '../../store/hobbies/actions'
import HobbiesList from '../../components/HobbiesList/'

import { Content, Header } from './styles'

interface Props {
  users: UserType[],
  hobbies: HobbyType[],
  dispatch(action: object): void,
}

class Home extends PureComponent<Props, any> {
  state = {
    selectedUser: undefined
  }

  createUser = (name: string) => {
    this.props.dispatch(createUser(name))
  }

  createHobby = (hobby: HobbyType) => {
    this.props.dispatch(createHobby(hobby))
  }

  removeHobby = (hobby: HobbyType) => {
    this.props.dispatch(removeHobby(hobby))
  }

  selectUser = (user: UserType) => {
    this.setState({ selectedUser: user.id }) 
    this.props.dispatch(getHobbies(user.id))
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getUsers())
  }

  render() {
    const { users, hobbies } = this.props
    const { selectedUser } = this.state

    return (
      <div>
        <Header>User hobbies</Header>
        <Content>
          <Users
            users={users}
            selectedUser={selectedUser}
            onAdd={this.createUser}
            onSelect={this.selectUser}
          />
          {selectedUser && <HobbiesList
            onRemove={this.removeHobby}
            onAdd={this.createHobby}
            hobbies={hobbies}
          />}
        </Content>
      </div>
    );
  }
}

const mapState = (state: any) => ({
  users: state.users,
  hobbies: state.hobbies,
})

export default connect(mapState)(Home)

