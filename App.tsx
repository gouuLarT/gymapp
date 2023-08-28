import { View, StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base'


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  
  return (
    <NativeBaseProvider>
      <StatusBar
      translucent
      barStyle='light-content'
      backgroundColor='transparent'
      />
      {fontsLoaded ? <View /> : <View />}
    </NativeBaseProvider>
  );
}