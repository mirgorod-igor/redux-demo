import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchItemById = createAsyncThunk(
  'items/fetchItemById',
  async (itemId: string) => {
    const item = await someHttpRequest(itemId)
    return item
  }
)