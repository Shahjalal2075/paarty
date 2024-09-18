import { Redirect, Stack } from "expo-router";


const HomeLayout = () => {

    /* const { user } = useGlobalContext();
    if (!user) return <Redirect href="/signin" />; */

    return (
        <>
            <Stack>
                <Stack.Screen
                    name="home"
                    options={{ headerShown: false }}
                />
            </Stack>
        </>
    )
}

export default HomeLayout