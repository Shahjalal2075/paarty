import { View, Text, Image, ScrollView } from 'react-native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import profileIcon from "../../assets/icon/users.png";
import { StatusBar } from 'expo-status-bar';
import { useFocusEffect } from 'expo-router';

const ProfilePage = () => {

    const [userDetails, setUserDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchUserDetails = () => {
        setIsLoading(true);
        fetch(`https://nlaundry-server.vercel.app/user-list/shahjalal2075@gmail.com`)
            .then(res => res.json())
            .then(data => {
                setUserDetails(data);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    };

    useFocusEffect(
        useCallback(() => {
            fetchUserDetails();
        }, [])
    );

    return (
        <SafeAreaView className="bg-[#fff] h-full">
            <ScrollView>
                <View className="w-full h-full min-h-[85vh] px-4 pt-4">
                    <View className="flex flex-row justify-center items-center">
                        <Text className="text-[#1e1e1e] text-2xl font-medium">
                            Personal Details
                        </Text>
                    </View>
                    <View className="mt-7">
                        <View className="items-center">
                            <Image
                                source={profileIcon}
                                className="w-[130px] h-[130px] rounded-full"
                                resizeMode="contain"
                            />
                            <View className="bg-[#fa7c59] w-full rounded-full px-4 py-2 mt-8">
                                <Text className="text-lg text-[#1e1e1e] font-pmedium">
                                    <Text className="font-semibold">Name:</Text> {userDetails?.name}
                                </Text>
                            </View>
                            <View className="bg-[#fa7c59] w-full rounded-full px-4 py-2 mt-4">
                                <Text className="text-lg text-[#1e1e1e] font-pmedium">
                                    <Text className="font-semibold">Subscription:</Text> {userDetails?.subscription}
                                </Text>
                            </View>
                            <View className="bg-[#fa7c59] w-full rounded-full px-4 py-2 mt-4">
                                <Text className="text-lg text-[#1e1e1e] font-pmedium">
                                    <Text className="font-semibold">Email:</Text> {userDetails?.email}
                                </Text>
                            </View>
                            <View className="bg-[#fa7c59] w-full rounded-full px-4 py-2 mt-4">
                                <Text className="text-lg text-[#1e1e1e] font-pmedium">
                                    <Text className="font-semibold">Phone Number:</Text> {userDetails?.phone}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <StatusBar
                backgroundColor="#Fff" color="#030319" style="dark"
            />
        </SafeAreaView>
    )
}

export default ProfilePage