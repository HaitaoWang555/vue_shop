import axios from 'axios'
import url from './index.js'

function fetch (api, data) {
  return new Promise((resolve, reject) => {
    axios.get(url[api]).then(res => {
      resolve(res)
    }).catch(err => {
      console.error(err)
    })
  })
}

export default fetch
