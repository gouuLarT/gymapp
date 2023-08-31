import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { Exercise } from '@screens/exercise'
import { History } from '@screens/history'
import { Home } from '@screens/home'
import { Profile } from '@screens/profile'

import { useTheme } from "native-base";

import HomeSvg from '@assets/home.svg'
import ProfileSvg from '@assets/profile.svg'
import HistorySvg from '@assets/history.svg'

type AppRoutes = {
    home: undefined
    exercise: undefined
    history: undefined
    profile: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()


export function AppRoutes(){

    const { sizes } = useTheme()
    
    const IconSize = sizes[6]
    
    return(
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false
        }}>
            <Screen 
            name="home"
            component={Home}
            options={{
                tabBarIcon: ({ color }) => (
                    <HomeSvg 
                    fill={color}
                    width={IconSize}
                    height={IconSize}
                    />
                )
            }}
            />
            <Screen 
            name="history"
            component={History}
            options={{
                tabBarIcon: ({ color }) => (
                    <HistorySvg 
                    fill={color}
                    width={IconSize}
                    height={IconSize}
                    />
                )
            }}
            />
            <Screen 
            name="profile"
            component={Profile}
            options={{
                tabBarIcon: ({ color }) => (
                    <ProfileSvg 
                    fill={color}
                    width={IconSize}
                    height={IconSize}
                    />
                )
            }}
            />
            <Screen 
            name="exercise"
            component={Exercise}
            />
        </Navigator>
    )
}