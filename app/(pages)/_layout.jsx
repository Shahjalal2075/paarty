import React from 'react'
import { Stack } from 'expo-router'

const PagesLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="profilePage"
                    options={{ headerShown: false }}
                />
            </Stack>
        </>
    )
}

export default PagesLayout