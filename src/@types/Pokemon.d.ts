type NameUrl = {
    name: string
    url: string
}

type Ability = {
    is_hidden: boolean
    ability: NameUrl
    slot: number
}


type PastStat = {
    generation: NameUrl
    stats: StatItem[]
}

type StatItem = {
    base_stat: number
    effort: number
    stat: NameUrl
}

type Stat = IdName & {
    names: any[]
}

type Type = NameUrl & {
    type: NameUrl & {
    }
}


module pokemon {
    
    type Item = NameUrl & {
        
    }



}

type Attribute = {

}

interface Pokemon extends IdName {
    abilities: Ability[]
    base_experience: number
    past_stats: PastStat[]
    species: NameUrl
    stats: StatItem[]
    types: Type[]
}


interface Generation extends Id, NameUrl {
    abilities: Ability[]
    names: {
        language: NameUrl
        name: string
    }[]
}

interface Data<T> {
    data: T
    status: 'pending' | 'fulfilled' | 'rejected'
}