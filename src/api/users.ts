import { configureStore, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchItemById = createAsyncThunk(
    'items/fetchItemById',
    async (itemId: string) => {
        const item = await fetch(itemId)
        return item
    }
)

const store = configureStore({
    reducer,
})