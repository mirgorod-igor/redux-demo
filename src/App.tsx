//import api from './api'
import * as ui from './ui'


/*
export default () => {
  const st = api.use('users')
  <button disabled={st != 'idle'}  onClick={handler}></button>
}*/



export default () => {
    return <ui.Counter positive />
}