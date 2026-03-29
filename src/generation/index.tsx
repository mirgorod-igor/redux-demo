import { useGenerationQuery } from '../api'

import sty from './index.module.sass'


type Props = Id

export default (p: Props) => {
    const t = useGenerationQuery<Data<Generation>>(p.id)
console.log('useGenerationQuery', t)

    return <ul className={sty.list}>{
        
        
    }</ul>
}

