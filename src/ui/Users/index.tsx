import { useEffect } from "react"
import { List } from "../base"
import httpRequest from '../../httpRequest'
import { createApi } from "../../api"

const store = createApi('users')

function initEffect() {
    store.loading()
    httpRequest('https://jsonplaceholder.typicode.com/users').then(res => {
        if (res.ok) {
            store.loaded(res.data)
        }
        else {
            store.failure(res.data)
        }
    })
}

export default () => {
    useEffect(initEffect, [])

    store.use()

    return <List items={[]}  />
}