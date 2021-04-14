import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID YGGMc3qjq5OLyki5BXQAKCV9ZMkJd59c7LRUI6kVlb0'
    }
});