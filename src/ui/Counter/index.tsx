import { Provider } from 'react-redux'
import $ from './store'

import sty from './index.module.sass'
import { useEffect } from 'react'

type Props = {
    positive?: boolean
}

export default (p: Props) => {
    useEffect(() => {
        if (p.positive)
            $.positive()
    }, [])

    return <Provider store={$.store}>
        <div className={sty.counter}>
            <button onClick={$.incremented}>+</button>
            <Input />
            <button onClick={$.decremented}>-</button>
        </div>
    </Provider>
}


const Input = () => {
    const value = $.use()
    return <input type='number' value={value} onChange={$.changeEventHandler} />
}