import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base'

import { THEME } from './src/theme';
import { Loading } from '@components/loading';
import { Routes } from './src/routes';

import { AuthContextProvider } from '@contexts/AuthContexts';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <NativeBaseProvider theme={THEME} >
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor='transparent'
      />
      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}