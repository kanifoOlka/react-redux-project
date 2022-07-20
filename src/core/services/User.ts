import {User} from "../types/user";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        fetchAllUsers: builder.query<User[], number>({
            query: (limit: number = 10, page: number = 1) => ({
                url: '/users',
                params: {
                    _limit: limit,
                    _page: page
                }
            })
        }),
        fetchUserById: builder.query({
            query: userId => ({
                url: `/users/${userId}`
            })
        })
    })
})

export const {
    useFetchAllUsersQuery,
    useFetchUserByIdQuery
} = userAPI;