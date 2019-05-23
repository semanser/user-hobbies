import React from 'react';
import ReactDOM from 'react-dom';
import HobbiesList from './';
import mockHobbies from '../../mocks/hobbies.json'
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const defaultProps = {
  onAdd: () => {},
  onRemove: () => {},
  hobbies: mockHobbies.get['1'],
}

it('renders HobbiesList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HobbiesList {...defaultProps}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('calls onAdd callback', () => {
  defaultProps.onAdd = jest.fn()

  const wrapper = mount(<HobbiesList {...defaultProps} />);

  wrapper.find("button").at(0).simulate('click')

  expect(defaultProps.onAdd).toHaveBeenCalledTimes(1)
});

it('calls onRemove callback', () => {
  defaultProps.onRemove = jest.fn()

  const wrapper = mount(<HobbiesList {...defaultProps} />);

  wrapper.find("button").at(1).simulate('click')

  expect(defaultProps.onRemove).toHaveBeenCalledTimes(1)
});
