import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View, Linking, ActivityIndicator, ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useState } from "react";
import { router, useFocusEffect } from "expo-router";

import backIcon from "../../../assets/icon/back.png";
import searchIcon from "../../../assets/icon/search.png";

const Message = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [programs, setPrograms] = useState([]);
    const [filteredPrograms, setFilteredPrograms] = useState([]);
    const [aiSuggestedPrograms, setAiSuggestedPrograms] = useState([]);
    const [location, setLocation] = useState("");
    const [capacity, setCapacity] = useState("");
    const [budget, setBudget] = useState("");
    const [showFilters, setShowFilters] = useState(false);

    const fetchUserDetails = () => {
        setIsLoading(true);
        fetch(`https://paarty-server.vercel.app/program`)
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(program =>
                    program.category !== 'Bridal Salon' && program.category !== 'Beauty Salon'
                );
                setPrograms(filteredData);
                setFilteredPrograms(filteredData);
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
        generateAiPackages(location, capacity, budget);
    };

    const generateAiPackages = (location, capacity, budget) => {
        // AI generation logic (for demo purposes, generating simple examples)
        if (parseInt(capacity) * 450 < parseInt(budget)) {
            setAiSuggestedPrograms([]);
        }
        else if (capacity !== "" && budget === "") {
            const aiPackages = [
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: capacity,
                    price: parseInt(capacity) * 500,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
                {
                    location: location || "Random City",
                    capacity: capacity,
                    price: parseInt(capacity) * 560,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "3 hours",
                },
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: parseInt(capacity) ? parseInt(capacity) * 0.8 : 80,
                    price: parseInt(budget) ? parseInt(budget) * 0.8 : 40000,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: parseInt(capacity) ? parseInt(capacity) * 0.9 : 90,
                    price: parseInt(budget) ? parseInt(budget) * 0.9 : 45000,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
                {
                    location: location || "Random City",
                    capacity: parseInt(capacity) || 100,
                    price: parseInt(budget) || 50000,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "3 hours",
                },
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: parseInt(capacity) ? parseInt(capacity) * 1.2 : 120,
                    price: parseInt(budget) ? parseInt(budget) * 1.2 : 60000,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: parseInt(capacity) ? parseInt(capacity) * 1.35 : 130,
                    price: parseInt(budget) ? parseInt(budget) * 1.35 : 67500,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: parseInt(capacity) ? parseInt(capacity) * 1.5 : 150,
                    price: parseInt(budget) ? parseInt(budget) * 1.5 : 75000,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
            ];
            setAiSuggestedPrograms(aiPackages);
        }
        else if (capacity === "" && budget !== "") {
            const aiPackages = [
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: parseInt(budget) / 500,
                    price: budget,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
                {
                    location: location || "Random City",
                    capacity: parseInt(budget) / 560,
                    price: budget,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "3 hours",
                },
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: parseInt(capacity) ? parseInt(capacity) * 0.8 : 80,
                    price: parseInt(budget) ? parseInt(budget) * 0.8 : 40000,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: parseInt(capacity) ? parseInt(capacity) * 0.9 : 90,
                    price: parseInt(budget) ? parseInt(budget) * 0.9 : 45000,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
                {
                    location: location || "Random City",
                    capacity: parseInt(capacity) || 100,
                    price: parseInt(budget) || 50000,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "3 hours",
                },
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: parseInt(capacity) ? parseInt(capacity) * 1.2 : 120,
                    price: parseInt(budget) ? parseInt(budget) * 1.2 : 60000,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: parseInt(capacity) ? parseInt(capacity) * 1.35 : 130,
                    price: parseInt(budget) ? parseInt(budget) * 1.35 : 67500,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: parseInt(capacity) ? parseInt(capacity) * 1.5 : 150,
                    price: parseInt(budget) ? parseInt(budget) * 1.5 : 75000,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
            ];
            setAiSuggestedPrograms(aiPackages);
        }
        else {
            const aiPackages = [
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: capacity,
                    price: parseInt(capacity) * 500,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
                {
                    location: location || "Random City",
                    capacity: capacity,
                    price: parseInt(capacity) * 560,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "3 hours",
                },
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: parseInt(budget) / 500,
                    price: budget,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
                {
                    location: location || "Random City",
                    capacity: parseInt(budget) / 560,
                    price: budget,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "3 hours",
                },
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: parseInt(capacity) ? parseInt(capacity) * 0.8 : 80,
                    price: parseInt(budget) ? parseInt(budget) * 0.8 : 40000,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: parseInt(capacity) ? parseInt(capacity) * 0.9 : 90,
                    price: parseInt(budget) ? parseInt(budget) * 0.9 : 45000,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
                {
                    location: location || "Random City",
                    capacity: parseInt(capacity) || 100,
                    price: parseInt(budget) || 50000,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "3 hours",
                },
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: parseInt(capacity) ? parseInt(capacity) * 1.2 : 120,
                    price: parseInt(budget) ? parseInt(budget) * 1.2 : 60000,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: parseInt(capacity) ? parseInt(capacity) * 1.35 : 130,
                    price: parseInt(budget) ? parseInt(budget) * 1.35 : 67500,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
                {
                    location: location ? `${location} Deluxe` : "Lux City",
                    capacity: parseInt(capacity) ? parseInt(capacity) * 1.5 : 150,
                    price: parseInt(budget) ? parseInt(budget) * 1.5 : 75000,
                    cover: "https://i.ibb.co.com/5jsstsm/top-10-event-planner-in-kuwait.jpg",
                    duration: "5 hours",
                },
            ];
            setAiSuggestedPrograms(aiPackages);
        }
    };

    const clearFilters = () => {
        setLocation("");
        setCapacity("");
        setBudget("");
        setFilteredPrograms(programs);
        setAiSuggestedPrograms([]);
    };

    const openGoogleSearch = () => {
        const query = `Program management package ${location || ""}`;
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        Linking.openURL(url);
    };

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
                                Customize Package
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
                        <Text className="mt-6 text-lg font-bold">Filtered Programs</Text>
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

                        {/* AI Suggested Packages */}
                        <Text className="mt-6 text-lg font-bold">AI-Generated Packages</Text>
                        {aiSuggestedPrograms.map((program, idx) => (
                            <TouchableOpacity
                                key={idx}
                                onPress={handleBooking}
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

                        {/* Google Search Option */}
                        <TouchableOpacity
                            onPress={openGoogleSearch}
                            activeOpacity={0.7}
                            className="mt-4 bg-blue-600 p-3 rounded-lg"
                        >
                            <Text className="text-center text-white font-bold">Find More Packages on Google</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            )
            }
            <StatusBar style="dark" />
        </SafeAreaView>
    );
};

export default Message;
