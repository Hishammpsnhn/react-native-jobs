import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useCallback } from "react";

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])
    if (!fontsLoaded) return null;
    return <Stack  />;
};

export default Layout;