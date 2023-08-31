import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { Exercise } from '@screens/exercise'
import { History } from '@screens/history'
import { Home } from '@screens/home'
import { Profile } from '@screens/profile'

type AppRoutes = {
    home: undefined
    exercise: undefined
    history: undefined
    profile: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes(){
    return(
        <Navigator>
            <Screen 
            name="home"
            component={Home}
            />
            <Screen 
            name="history"
            component={History}
            />
            <Screen 
            name="profile"
            component={Profile}
            />
            <Screen 
            name="exercise"
            component={Exercise}
            />
        </Navigator>
    )
}