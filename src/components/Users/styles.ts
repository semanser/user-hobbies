import styled from 'styled-components'
import * as colors from '../../colors'

export const Wrapper = styled.div`
  width: 20%;
  border: 1px solid black;
`

interface UserProps {
  isSelected: boolean,
}

export const User = styled.li`
  padding: 10px;
  background: ${(props: UserProps) => props.isSelected ? colors.main : ''};
  color: ${(props: UserProps) => props.isSelected ? '#fff' : ''};
  
  &:hover {
    background: ${(props: UserProps) => !props.isSelected ? '#e4e4e4' : ''};
    cursor: pointer;
  }
`

export const AddPanel = styled.div`
  padding: 10px;
  display: flex;

  & > input {
    width: 50%;
  }

  & > button {
    width: 50%;
    background: ${colors.main};
    color: #fff;
    font-size: 13px;
    border: 0;
    padding: 5px 15px;
  }
`

