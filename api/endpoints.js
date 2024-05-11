import axios from "axios"
import API_URL from "../config/api"

export const getDoctors = async () => {
    return axios.get(`${API_URL}/getDoctores`)
}
