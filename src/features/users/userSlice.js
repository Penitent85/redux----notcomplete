import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {id: 0,  name:'Dude Name'},
    {id: 1,  name:'Another Dude'},
    {id: 2, name:'different'},
    //... more posts
    {id: 1000, name:'Last Dude'}
]
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        deleteUser: (state, action) => {
            return state.filter(user => user.id!== action.payload)
        }
    }
})

export const selectAllUsers = (state) =>state.users;


export const { addUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer; 