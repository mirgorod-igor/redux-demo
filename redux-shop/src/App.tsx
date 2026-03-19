//import api from './api'
import * as comp from './components'


/*
export default () => {
  const st = api.use('users')
  <button disabled={st != 'idle'}  onClick={handler}></button>
}*/


export default () => {
    return <comp.Counter />
}