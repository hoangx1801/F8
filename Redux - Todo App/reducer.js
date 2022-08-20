const initState = {
    cars: ['BMW']
}

export default function reducer(state = initState, action, args){
    switch(action) {
        case 'ADD':
            const [newCars] = args
            return {
                ...state,
                cars: [...state.cars, newCars]
            }
        default:
            return state
    }
}