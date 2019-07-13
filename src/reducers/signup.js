const signup = (state, action) => {
    switch (action.type) {
        case 'OPEN_DIALOG':
            return {
                ...state,
                signupDialog: {
                    ...state.signupDialog,
                    isOpen: true
                }
            }
    }
}