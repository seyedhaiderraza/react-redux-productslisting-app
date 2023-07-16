import axios from 'axios'

 const fakeStoreApi = axios.create({
    baseURL:'http://fakestoreapi.com',
    
})



export default fakeStoreApi
