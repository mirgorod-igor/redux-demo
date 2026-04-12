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

type Front = {
    front_default: string
    front_female: string|null
    front_shiny: string
    front_shiny_female: string|null
}

type Back = {
    back_default: string
    back_female: string|null
    back_shiny: string
    back_shiny_female: string|null
}

type Sprites = Front & Back & {
    other: {
        dream_world: {
            front_default: string
            front_female: string|null
        }
        home: Front
        "official-artwork": {
            front_default: string
            front_female: string|null
        }
        showdown: Front & Back
    }
}


interface Pokemon extends IdName {
    abilities: Ability[]
    base_experience: number
    past_stats: PastStat[]
    species: NameUrl
    sprites: Sprites
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