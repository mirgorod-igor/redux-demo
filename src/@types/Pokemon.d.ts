type Base = {
    name: string
    url: string
}

type Ability = {
    is_hidden: boolean
    ability: Base
    slot: number
}


type PastStat = {
    generation: Base
    stats: Stat[]
}

type Stat = {
    base_stat: number
    effort: number
    stat: Base
}

type Type = Base & {
    type: Base & {
    }
}


module pokemon {
    
    type Item = Base & {
        
    }



}

interface Pokemon extends Id, Base {
    abilities: Ability[]
    past_stats: PastStat[]
    types: Type[]
}


interface Data<T> {
    data: T
    status: 'pending' | 'fulfilled' | 'rejected'
}