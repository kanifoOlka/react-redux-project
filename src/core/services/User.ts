import axios from "axios";
import {User} from "../types/User";

const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/users/'
});

export default class UserService {
    static async getAll(limit = 10, page = 1) {
        return await instance.get<User[]>('', {
            params: {
                _limit: limit,
                _page: page
            }
        }).then(response => response.data)
    }

    static async getById(id: string) {
        return await instance.get<User>(id)
            .then(response => response.data);
    }
}