import React, { PureComponent } from 'react';
import { HobbyType } from '../../store/hobbies/types'
import { AddPanel, Wrapper, HobbiesTable, RemoveButton } from './styles'

interface Props {
  hobbies: HobbyType[],
  onAdd(hobby: HobbyType): void,
  onRemove(hobby: HobbyType): void
}

class HobbiesList extends PureComponent<Props, any>  {
  private passionLevelSelectorRef = React.createRef<HTMLSelectElement>()
  private textInputRef = React.createRef<HTMLInputElement>()
  private yearInputRef = React.createRef<HTMLInputElement>()

  onAdd = () => {
    const { onAdd } = this.props

    const newHobby = {
      id: 0,
      text: this.textInputRef.current!.value,
      passionLevel: parseInt(this.passionLevelSelectorRef.current!.value),
      year: parseInt(this.yearInputRef.current!.value),
    }

    onAdd(newHobby)
  }

  onRemove = (hobby: HobbyType) => {
    const { onRemove } = this.props
    onRemove(hobby)
  }

  getTextPassionLevel = (level: number) => {
    if (level === 0) return 'Low'
    if (level === 1) return 'Medium'
    if (level === 2) return 'Hight'
    if (level === 3) return 'Very Hight'
  }

  render() {
    const { hobbies } = this.props

    return (
      <Wrapper>
        <AddPanel>
          <select ref={this.passionLevelSelectorRef} defaultValue="">
            <option value="" disabled>Select passion level</option>
            <option value={0}>Low</option>
            <option value={1}>Medium</option>
            <option value={2}>Hight</option>
            <option value={3}>Very Hight</option>
          </select>
          <input ref={this.textInputRef} placeholder='Enter user hobby' />
          <input ref={this.yearInputRef} placeholder='Enter year' type="number"/>
          <button onClick={this.onAdd}>Add user</button>
        </AddPanel>
        <div>
          {hobbies.length === 0 ? 'No hobbies' :
          <HobbiesTable>
            <tbody>
              <tr>
                <th>Passion</th>
                <th>Text</th>
                <th>Year</th>
                <th>Remove</th>
              </tr>
              {hobbies.map(hobby => (
                <tr key={hobby.id}>
                  <td>{this.getTextPassionLevel(hobby.passionLevel)}</td>
                  <td>{hobby.text}</td>
                  <td>{hobby.year}</td>
                  <td><RemoveButton onClick={() => this.onRemove(hobby)}>Remove</RemoveButton></td>
                </tr>
              ))}
            </tbody>
          </HobbiesTable>}
        </div>
      </Wrapper>
    )
  }
}

export default HobbiesList

