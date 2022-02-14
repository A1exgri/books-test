import axios from "@/api/axios"

const getCategories = apiUrl => {
    return axios.post(apiUrl)
}
export default {
    getCategories
}