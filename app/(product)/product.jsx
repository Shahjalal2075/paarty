import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Image, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";

import backIcon from "../../assets/icon/back.png";
import photo1 from "../../assets/product/p1.jpg";
import searchIcon from "../../assets/icon/search.png";

const Product = () => {
    const { plan } = useLocalSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [programs, setPrograms] = useState([]);
    const [filteredPrograms, setFilteredPrograms] = useState([]);
    const [location, setLocation] = useState("");
    const [capacity, setCapacity] = useState("");
    const [budget, setBudget] = useState("");
    const [showFilters, setShowFilters] = useState(false);

    const fetchUserDetails = () => {
        setIsLoading(true);
        fetch(`https://paarty-server.vercel.app/program/${plan}`)
            .then(res => res.json())
            .then(data => {
                setPrograms(data);
                setFilteredPrograms(data);
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

    const applyFilters = () => {
        const filtered = programs.filter(program =>
            (location ? program.location.toLowerCase().includes(location.toLowerCase()) : true) &&
            (capacity ? program.capacity >= parseInt(capacity) : true) &&
            (budget ? program.price <= parseInt(budget) : true)
        );
        setFilteredPrograms(filtered);
        //setShowFilters(true); // Hide filters after applying
    };

    const clearFilters = () => {
        setLocation("");
        setCapacity("");
        setBudget("");
        setFilteredPrograms(programs);
        //setShowFilters(true); // Hide filters after clearing
    };


    return (
        <SafeAreaView className="bg-[#fff] h-full">
            {isLoading ? (
                <View className="flex-1 justify-center items-center">
                    <ActivityIndicator size="large" color="#000" />
                </View>
            ) : (
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
                                {plan}
                            </Text>
                        </View>

                        {/* Toggle Filter Button */}
                        <TouchableOpacity
                            onPress={() => setShowFilters(prev => !prev)}
                            activeOpacity={0.7}
                            className="mt-4 bg-[#493f3f] p-2 rounded-lg"
                        >
                            <Text className="text-center text-white font-bold">
                                {showFilters ? "Hide Filters" : "Show Filters"}
                            </Text>
                        </TouchableOpacity>

                        {/* Filter Options */}
                        {showFilters && (
                            <View className="mt-4 p-2 rounded-lg bg-[#fafafaed] border border-[#fafafaed]">
                                {/* Location Filter */}
                                <View className="flex flex-row items-center mb-2">

                                    <TextInput
                                        placeholder="Location"
                                        value={location}
                                        onChangeText={setLocation}
                                        className="flex-1 text-[#000] font-hregular text-lg"
                                        placeholderTextColor="#3c3c4399"
                                    />
                                </View>

                                {/* Capacity and Budget Filters */}
                                <View className="flex flex-row justify-between">
                                    <TextInput
                                        placeholder="Minimum Capacity"
                                        value={capacity}
                                        onChangeText={setCapacity}
                                        keyboardType="numeric"
                                        className="flex-1 text-[#000] font-hregular text-lg mr-2"
                                        placeholderTextColor="#3c3c4399"
                                    />
                                    <TextInput
                                        placeholder="Maximum Budget"
                                        value={budget}
                                        onChangeText={setBudget}
                                        keyboardType="numeric"
                                        className="flex-1 text-[#000] font-hregular text-lg"
                                        placeholderTextColor="#3c3c4399"
                                    />
                                </View>

                                {/* Apply and Clear Filters Buttons */}
                                <View className="flex flex-row justify-between mt-3">
                                    <TouchableOpacity
                                        onPress={applyFilters}
                                        activeOpacity={0.7}
                                        className="flex-1 bg-[#493f3f] p-2 rounded-lg mr-2"
                                    >
                                        <Text className="text-center text-white font-bold">Apply Filters</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={clearFilters}
                                        activeOpacity={0.7}
                                        className="flex-1 bg-[#e0e0e0] p-2 rounded-lg"
                                    >
                                        <Text className="text-center text-black font-bold">Clear Filters</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}

                        {/* Filtered Programs */}
                        <View className="mt-6">
                            {filteredPrograms.map((program, idx) => (
                                <TouchableOpacity
                                    key={idx}
                                    onPress={() => { router.push({ pathname: 'details', params: { plan: program._id } }) }}
                                    activeOpacity={0.7}
                                    className={`rounded-3xl ${isLoading ? "opacity-50" : ""} bg-[#493f3f] mb-3`}
                                    disabled={isLoading}
                                >
                                    <Image
                                        source={{ uri: program.cover }}
                                        className="w-full h-[200px] rounded-t-2xl"
                                        resizeMode="cover"
                                    />
                                    <View className="py-2 px-2">
                                        <View className="flex flex-row justify-between">
                                            <Text className="text-[#fff] font-bold text-base">Location: {program.location}</Text>
                                            <Text className="text-[#fff] font-bold text-base">{program.duration}</Text>
                                        </View>
                                        <View className="flex flex-row justify-between">
                                            <Text className="text-[#fff] font-bold text-base">Price: ৳{program.price}</Text>
                                            <Text className="text-[#fff] font-bold text-base">Capacity: {program.capacity}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            )
            }
            < StatusBar backgroundColor="#fff" color="#030319" style="dark" />
        </SafeAreaView>
    );
};

export default Product;