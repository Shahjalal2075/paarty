import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { useState } from "react";

import backIcon from "../../assets/icon/back.png";
import photo1 from "../../assets/product/p1.jpg";
import searchIcon from "../../assets/icon/search.png";

const Product = () => {
    const { plan } = useLocalSearchParams();
    const [isLoading, setIsLoading] = useState(false);



    return (
        <SafeAreaView className="bg-[#fff] h-full">
            <ScrollView>
                <View className="w-full h-full min-h-[100vh] px-4 pt-2 pb-6">
                    <View className="flex flex-row items-center gap-3">
                        <TouchableOpacity
                            onPress={() => router.back()}
                            activeOpacity={0.7}
                            className={`rounded-3xl ${isLoading ? "opacity-50" : ""}`}
                            disabled={isLoading}
                        >
                            <Image
                                source={backIcon}
                                className="w-[18px] h-[14px]"
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <Text className="text-[#000] text-xl font-semibold capitalize">
                            {(plan === "home-care" ? "Home Care" : plan)}
                        </Text>
                    </View>

                    <View className="mt-8 w-full p-2 rounded-lg bg-[#fafafaed] border border-[#fafafaed] focus:border-[#D2D5EC] flex flex-row items-center">
                        <Image
                            source={searchIcon}
                            className="w-[28px] h-[28px] "
                            resizeMode="contain"
                        />
                        <TextInput
                            className="flex-1 text-[#000] font-hregular text-lg ml-2"
                            placeholder="Search"
                            placeholderTextColor="#3c3c4399"
                        />
                    </View>

                    <View className="mt-6">
                        <TouchableOpacity
                            onPress={() => router.back()}
                            activeOpacity={0.7}
                            className={`rounded-3xl ${isLoading ? "opacity-50" : ""} bg-[#493f3f] mb-3`}
                            disabled={isLoading}
                        >
                            <Image
                                source={photo1}
                                className="w-full h-[200px] rounded-t-2xl"
                                resizeMode="cover"
                            />
                            <View className="py-2 px-2">
                                <View className="flex flex-row justify-between">
                                    <Text className="text-[#fff] font-bold text-base">Location: Hotel Royal International</Text>
                                    <Text className="text-[#fff] font-bold text-base">1 Day</Text>
                                </View>
                                <View className="flex flex-row justify-between">
                                    <Text className="text-[#fff] font-bold text-base">Price: ৳250000</Text>
                                    <Text className="text-[#fff] font-bold text-base">Capacity: 600</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => router.back()}
                            activeOpacity={0.7}
                            className={`rounded-3xl ${isLoading ? "opacity-50" : ""} bg-[#493f3f] mb-3`}
                            disabled={isLoading}
                        >
                            <Image
                                source={photo1}
                                className="w-full h-[200px] rounded-t-2xl"
                                resizeMode="cover"
                            />
                            <View className="py-2 px-2">
                                <View className="flex flex-row justify-between">
                                    <Text className="text-[#fff] font-bold text-base">Location: Hotel Royal International</Text>
                                    <Text className="text-[#fff] font-bold text-base">1 Day</Text>
                                </View>
                                <View className="flex flex-row justify-between">
                                    <Text className="text-[#fff] font-bold text-base">Price: ৳250000</Text>
                                    <Text className="text-[#fff] font-bold text-base">Capacity: 600</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => router.back()}
                            activeOpacity={0.7}
                            className={`rounded-3xl ${isLoading ? "opacity-50" : ""} bg-[#493f3f] mb-3`}
                            disabled={isLoading}
                        >
                            <Image
                                source={photo1}
                                className="w-full h-[200px] rounded-t-2xl"
                                resizeMode="cover"
                            />
                            <View className="py-2 px-2">
                                <View className="flex flex-row justify-between">
                                    <Text className="text-[#fff] font-bold text-base">Location: Hotel Royal International</Text>
                                    <Text className="text-[#fff] font-bold text-base">1 Day</Text>
                                </View>
                                <View className="flex flex-row justify-between">
                                    <Text className="text-[#fff] font-bold text-base">Price: ৳250000</Text>
                                    <Text className="text-[#fff] font-bold text-base">Capacity: 600</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => router.back()}
                            activeOpacity={0.7}
                            className={`rounded-3xl ${isLoading ? "opacity-50" : ""} bg-[#493f3f] mb-3`}
                            disabled={isLoading}
                        >
                            <Image
                                source={photo1}
                                className="w-full h-[200px] rounded-t-2xl"
                                resizeMode="cover"
                            />
                            <View className="py-2 px-2">
                                <View className="flex flex-row justify-between">
                                    <Text className="text-[#fff] font-bold text-base">Location: Hotel Royal International</Text>
                                    <Text className="text-[#fff] font-bold text-base">1 Day</Text>
                                </View>
                                <View className="flex flex-row justify-between">
                                    <Text className="text-[#fff] font-bold text-base">Price: ৳250000</Text>
                                    <Text className="text-[#fff] font-bold text-base">Capacity: 600</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => router.back()}
                            activeOpacity={0.7}
                            className={`rounded-3xl ${isLoading ? "opacity-50" : ""} bg-[#493f3f] mb-3`}
                            disabled={isLoading}
                        >
                            <Image
                                source={photo1}
                                className="w-full h-[200px] rounded-t-2xl"
                                resizeMode="cover"
                            />
                            <View className="py-2 px-2">
                                <View className="flex flex-row justify-between">
                                    <Text className="text-[#fff] font-bold text-base">Location: Hotel Royal International</Text>
                                    <Text className="text-[#fff] font-bold text-base">1 Day</Text>
                                </View>
                                <View className="flex flex-row justify-between">
                                    <Text className="text-[#fff] font-bold text-base">Price: ৳250000</Text>
                                    <Text className="text-[#fff] font-bold text-base">Capacity: 600</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => router.back()}
                            activeOpacity={0.7}
                            className={`rounded-3xl ${isLoading ? "opacity-50" : ""} bg-[#493f3f] mb-3`}
                            disabled={isLoading}
                        >
                            <Image
                                source={photo1}
                                className="w-full h-[200px] rounded-t-2xl"
                                resizeMode="cover"
                            />
                            <View className="py-2 px-2">
                                <View className="flex flex-row justify-between">
                                    <Text className="text-[#fff] font-bold text-base">Location: Hotel Royal International</Text>
                                    <Text className="text-[#fff] font-bold text-base">1 Day</Text>
                                </View>
                                <View className="flex flex-row justify-between">
                                    <Text className="text-[#fff] font-bold text-base">Price: ৳250000</Text>
                                    <Text className="text-[#fff] font-bold text-base">Capacity: 600</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
            <StatusBar backgroundColor="#fff" color="#030319" style="dark" />
        </SafeAreaView>
    );
};

export default Product;