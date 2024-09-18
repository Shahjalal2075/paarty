import { Stack } from 'expo-router'

const OrderLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="profile"
                    options={{ headerShown: false }}
                />
            </Stack>
        </>
    )
}

export default OrderLayout