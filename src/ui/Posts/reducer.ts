// reducer.js
// начальное состояние Redux-стейта
const initialState = {
  items: [],
  isLoading: false,
  error: null
}

// определение редюсеров
export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      // устанавливаем isLoading в true, пока данные загружаются
      return { ...state, isLoading: true };
    case 'FETCH_POSTS_SUCCESS':
      // устанавливаем isLoading в false и записываем полученные данные в стейт
      return { ...state, isLoading: false, posts: action.payload };
    case 'FETCH_POSTS_FAILURE':
      // устанавливаем isLoading в false и записываем сообщение об ошибке в стейт
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}