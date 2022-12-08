import { ThemeProvider } from 'styled-components/native';
import { Todolist } from '@screens/Todolist';
import theme from './src/theme';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [ fontsLoaded ] = useFonts({Inter_400Regular, Inter_700Bold});
  return (
    <ThemeProvider theme={theme}>
      {
        fontsLoaded ?  <Todolist /> : <ActivityIndicator/>
      }
    </ThemeProvider>
  );
}
