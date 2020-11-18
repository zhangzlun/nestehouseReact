import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserForm } from '../modules/userModules';
import { IUserInsert } from '~/entity/user';

export const insertUser = createAsyncThunk('user/ADD_USER', async (data: IUserInsert) => {
    console.log(data);
    const response = await axios
        .post('http://localhost:8011/api/user/addUser', data)
        .then((response) => response)
        .catch((error) => {
            console.log(error);
        });
    return response;
});

const userFormModules = createSlice({
    name: 'user',
    initialState: UserForm,
    reducers: {
        CHANGE_USER: (state, action: PayloadAction<IUserInsert>) => {
            return { ...state, formData: action.payload };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(insertUser.fulfilled, (state, action) => {
            console.log(action, 1);
            return state;
        });
    },
});

export const { CHANGE_USER } = { ...userFormModules.actions };
export const userFormModule = userFormModules.reducer;
