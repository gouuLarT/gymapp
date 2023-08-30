import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const { Navigator, Screen } = createBottomTabNavigator()

import { Exercise } from '@screens/exercise'
import { History } from '@screens/history'
import { Home } from '@screens/home'
import { Profile } from '@screens/profile'


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