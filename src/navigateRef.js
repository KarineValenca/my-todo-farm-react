import { NavigationActions, StackActions } from 'react-navigation'
let navigator

export const setNavigator = (nav) => {
    navigator = nav
}

export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}

export const clearNav = async () => {
    await navigator.dispatch(StackActions.popToTop())
}