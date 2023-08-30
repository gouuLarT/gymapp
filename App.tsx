import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base'

import { THEME } from './src/theme';
import { Loading } from '@components/loading';
import { SignUp } from '@screens/signUp';

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
      {fontsLoaded ? <SignUp /> : <Loading />}
    </NativeBaseProvider>
  );
}