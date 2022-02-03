
export type AppReducerStateType = typeof initState;

export type AppReducerActionsType = ReturnType<typeof setIsFetching>



const initState = {
    isFetching: false,
}


export const appReducer =(state: AppReducerStateType = initState, action: AppReducerActionsType): AppReducerStateType => {
    switch (action.type) {
        case 'mona/appReducer/SET_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}


//*  Action creators ------------------------------------------------------------------->

export const setIsFetching = (isFetching: boolean) =>
    ({type: 'mona/appReducer/SET_IS_FETCHING', isFetching} as const)
