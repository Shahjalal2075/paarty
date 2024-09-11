import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="signup"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="signin"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="verification"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="success"
                    options={{ headerShown: false }}
                />
            </Stack>
        </>
    )
}

export default AuthLayout