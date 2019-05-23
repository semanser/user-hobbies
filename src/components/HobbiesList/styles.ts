import styled from 'styled-components'
import * as colors from '../../colors'

export const Wrapper = styled.div`
  width: 80%;
  border: 1px solid black;
`

export const AddPanel = styled.div`
  padding: 15px;
  display: flex;

  & > select {
    height: 30px;
  }

  & > * {
    width: 25%;
  }

  & > button {
    background: ${colors.main};
    color: #fff;
    font-size: 13px;
    border: 0;
    padding: 5px 15px;
  }
`

export const HobbiesTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid black;

  & > tr, td, th {
    padding: 15px;
    border: 1px solid black;
  }
`

export const RemoveButton = styled.button`
  background: ${colors.warning};
  color: #fff;
  padding: 6px 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;
`
