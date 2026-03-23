// thunk.js
// определение thunk-функции
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from './actions'

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsRequest())
  try {
    const response = await fetch('/api/posts')
    const data = await response.json()
    dispatch(fetchPostsSuccess(data))
  } catch (error) {
    dispatch(fetchPostsFailure(error.message))
  }
}