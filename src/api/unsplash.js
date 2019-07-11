import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID e9827b5c0704cd41f0a92cbeaaa44523f813a771b441a583a754c2e2d557ebd2'
  }
})