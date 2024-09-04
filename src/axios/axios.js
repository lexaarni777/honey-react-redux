import axios from 'axios'

export default axios.create({
    baseURL: 'https://honey-react-redux-default-rtdb.europe-west1.firebasedatabase.app/'
})

