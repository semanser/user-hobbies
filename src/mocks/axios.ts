import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import usersMockData from './users.json'
import hobbiesMockData from './hobbies.json'

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const mock = new MockAdapter(axios, { delayResponse: 300 })

  mock.onGet('/users').reply(200, usersMockData.get)
  mock.onPost('/users').reply(config => [200,
    {
      id: Math.random(),
      name: JSON.parse(config.data).name
    }]
  )

  mock.onGet('/hobbies/1').reply(200, hobbiesMockData.get['1'])
  mock.onGet('/hobbies/2').reply(200, hobbiesMockData.get['2'])
  mock.onGet(/\/hobbies\/\d+/).reply(200, [])
  mock.onPost('/hobbies').reply(config => [200,
    {
      id: Math.random(),
      passionLevel: JSON.parse(config.data).passionLevel,
      text: JSON.parse(config.data).text,
      year: JSON.parse(config.data).year,
    }] 
  )

  mock.onDelete(/\/hobbies\/\d+/).reply(config => {
    return [200,
      {
        id: parseFloat(config.url!.split('/')[2])
      }]}
  )
}

export default axios
