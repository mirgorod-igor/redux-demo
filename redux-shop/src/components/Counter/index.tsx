import { Provider } from 'react-redux'
import store from './store'

import './index.sass'


export default () => {

    return <Provider store={store.$}>
        <div className='counter'>
            <button onClick={store.incremented}>+</button>
            <Input />
            <button onClick={store.decremented}>-</button>
        </div>
    </Provider>
}


const Input = () => {
    const value = store.use()
    return <input type='number' value={value} onChange={store.changeEventHandler} />
}