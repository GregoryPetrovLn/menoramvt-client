const initialState = {
}

export const reducer = (state = initialState, {type, payload}) => {
    console.log(type, payload)
    switch (type) {

        default:
            return state
    }
}