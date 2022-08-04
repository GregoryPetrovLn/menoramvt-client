const initialState = {
    isLoading: false,
    error: null,
    data: null,
    list: []
}

export const reducer = (state = initialState, {type, payload}) => {
    console.log(type, payload)
    switch (type) {

        default:
            return state
    }
}