import axios from "@/api/axios"

const getBooks = (apiUrl, params) => {
    return axios.post(apiUrl, params)
}
export default {
    getBooks
}