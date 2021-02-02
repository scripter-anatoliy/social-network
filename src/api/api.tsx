import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2067694b-117f-4587-82e5-3d897a729707"
    }
})

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getUsers2(id: string) {
        return instance.get(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}




