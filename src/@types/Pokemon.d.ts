module pokemon {

    type Base = {
        name: string
        url: string
    }

    type Ability = Base & {
        
    }



    type Type = Base & {
        type: Base & {
        }
    }

    
    
    type Item = Base & {
        
    }



}

interface Pokemon extends Id, pokemon.Base {
    abilities: Ability[]
    types: Type[]
}


interface Data<T> {
    data: T
    status: 'pending' | 'fulfilled' | 'rejected'
}