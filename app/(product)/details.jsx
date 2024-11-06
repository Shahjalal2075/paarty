import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Image, ScrollView, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";

import backIcon from "../../assets/icon/back.png";

const Details = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { plan } = useLocalSearchParams();
    const [program, setProgram] = useState(null);

    const fetchUserDetails = () => {
        setIsLoading(true);
        fetch(`https://paarty-server.vercel.app/programs/${plan}`)
            .then((res) => res.json())
            .then((data) => {
                setProgram(data);
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

    // Function to handle booking
    const handleBooking = () => {
        ToastAndroid.show('Booking Success', ToastAndroid.SHORT);
        router.push("home");
    };

    return (
        <SafeAreaView className="bg-[#fff] h-full">
            {isLoading ? (
                <View className="flex-1 justify-center items-center">
                    <ActivityIndicator size="large" color="#000" />
                </View>
            ) : (
                <ScrollView>
                    <View className="w-full min-h-[100vh] px-4 pt-2 pb-6">
                        <View className="flex flex-row items-center gap-3 mb-4">
                            <TouchableOpacity
                                onPress={() => router.back()}
                                activeOpacity={0.7}
                                className="rounded-3xl"
                                disabled={isLoading}
                            >
                                <Image
                                    source={backIcon}
                                    className="w-[18px] h-[14px]"
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                            <Text className="text-[#000] text-xl font-semibold capitalize">
                                {program?.category}
                            </Text>
                        </View>

                        {program?.cover && (
                            <Image
                                source={{ uri: program.cover }}
                                className="w-full h-64 rounded-lg mb-4"
                                resizeMode="cover"
                            />
                        )}
                        
                        <Text className="text-lg font-bold text-[#000] mb-2">
                            {program?.category}
                        </Text>

                        {program?.description && (
                            <Text className="text-base text-gray-700 mb-4">
                                {program.description}
                            </Text>
                        )}

                        {program?.location && (
                            <Text className="text-base font-bold text-gray-700 mb-2">
                                Location: {program.location}
                            </Text>
                        )}

                        {program?.price && (
                            <Text className="text-base font-bold text-gray-700 mb-2">
                                Price: ${program.price}
                            </Text>
                        )}

                        {program?.capacity && (
                            <Text className="text-base font-bold text-gray-700 mb-2">
                                Capacity: {program.capacity} people
                            </Text>
                        )}

                        {program?.duration && (
                            <Text className="text-base font-bold text-gray-700 mb-2">
                                Duration: {program.duration} hours
                            </Text>
                        )}

                        {/* Book Now Button */}
                        <TouchableOpacity
                            onPress={handleBooking}
                            activeOpacity={0.7}
                            className="bg-[#007AFF] py-3 mt-6 rounded-lg"
                        >
                            <Text className="text-center text-white font-semibold text-lg">
                                Book Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            )}
            <StatusBar backgroundColor="#fff" color="#030319" style="dark" />
        </SafeAreaView>
    );
};

export default Details;
