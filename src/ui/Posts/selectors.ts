//selectors.js

import { useSelector } from "react-redux"

// определение селектора
export const postsSelector = state => state.posts

export const use = () => ({
    posts: useSelector(state => state.posts)
})