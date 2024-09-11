import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import successIcon from '../../assets/icon/success.png'
import { router } from 'expo-router';

const Success = () => {

    const [isLoading, setIsLoading] = useState(false);

    const handleGo = () => {
        router.push('home');
    }

    return (
        <SafeAreaView className="bg-[#F8FDFE] h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full h-full min-h-[100vh] px-4 flex flex-col justify-between">
                    <View className="h-5/6 flex flex-col justify-center items-center">
                        <Image
                            source={successIcon}
                            className="w-32 h-32"
                            resizeMode="contain"
                        />
                        <Text className="text-[#081E32] text-3xl font-hregular font-[500] mt-6">Awesome!</Text>
                        <Text className="text-[#081E32] text-base font-hregular font-[400] mt-3">Your profile is ready to using Paarty</Text>
                    </View>
                    <View className="h-1/6 flex flex-col justify-center items-center">
                        <TouchableOpacity
                            onPress={handleGo}
                            activeOpacity={0.7}
                            className={`bg-[#f65f34] w-full rounded-lg min-h-[48px] flex flex-row justify-center items-center ${isLoading ? 'opacity-50' : ''}`}
                            disabled={isLoading}
                        >
                            <Text className={`text-[#fff] font-hregular font-[500] text-center text-lg`}>
                                Get Start
                            </Text>

                            {isLoading && (
                                <ActivityIndicator
                                    animating={isLoading}
                                    color="#fff"
                                    size="small"
                                    className="ml-2"
                                />
                            )}

                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <StatusBar
                backgroundColor="#F8FDFE" style="dark"
            />
        </SafeAreaView>
    )
}

export default Success