import { NavigationContainer, DefaultTheme} from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { Box, useTheme } from 'native-base'
import { useAuth } from '@hooks/useAuth';
import { useContext } from 'react';
import App from "App";
import { Loading } from "@components/loading";

export function Routes(){
    const { colors } = useTheme();
    const { user, isLoadingUserStorageData } = useAuth()
    
    const theme = DefaultTheme;
    theme.colors.background = colors.gray[700]

    if(isLoadingUserStorageData){
        return <Loading />
    }

    return(
        <Box flex={1} bg='gray.700'>
        <NavigationContainer theme={theme}>
            { user.id ? <AppRoutes /> : <AuthRoutes /> }
        </NavigationContainer>
        </Box>
    )
}