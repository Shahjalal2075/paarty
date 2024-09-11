import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from "expo-font";
import { useEffect } from 'react';
/* import GlobalProvider from '../context/GlobalProvider'; */

SplashScreen.preventAutoHideAsync();

export default function App() {

    const [fontsLoaded, error] = useFonts({
          "Helvetica-Regular": require("../assets/fonts/Helvetica.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if (!fontsLoaded && !error) return null;

    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        </Stack>
    )
}
