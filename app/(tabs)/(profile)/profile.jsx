import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import profileIcon from "../../../assets/icon/pProfile.png";
import homeIcon from "../../../assets/icon/pHome.png";
import supportIcon from "../../../assets/icon/pSupport.png";
import detailsIcon from "../../../assets/icon/pDetails.png";
import backIcon from "../../../assets/icon/rightB.png";
import rightIcon from "../../../assets/icon/rightR.png";
import logoutIcon from "../../../assets/icon/logout.png";
import { router } from "expo-router";

const Profile = () => {

    const handleLogout = () => {
        signOutUser();
        ToastAndroid.show('Logout Success', ToastAndroid.SHORT);
    }

    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className="px-4 pt-4 flex-1">
                    <Text className="text-lg font-semibold text-[#3A3F6D] my-4">Accounts</Text>
                    <TouchableOpacity
                        className="flex flex-row items-center justify-between py-3 px-4 mb-4 bg-[#F9F9FF] rounded-xl border border-[#D7DAEE]"
                        onPress={() => router.push('profilePage')}
                    >
                        <View className="flex flex-row items-center space-x-3">
                            <Image source={profileIcon} className="w-[18px] h-[18px]" />
                            <Text className="text-lg text-[#636583]">Personal details</Text>
                        </View>
                        <Image source={backIcon} className="w-[18px] h-[18px]" />
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        className="flex flex-row items-center justify-between py-3 px-4 mb-4 bg-[#F9F9FF] rounded-xl border border-[#D7DAEE]"
                        onPress={() => (console.log('term'))}
                    >
                        <View className="flex flex-row items-center space-x-3">
                            <Image source={homeIcon} className="w-[18px] h-[18px]" />
                            <Text className="text-lg text-[#636583]">Address</Text>
                        </View>
                        <Image source={backIcon} className="w-[18px] h-[18px]" />
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        className="flex flex-row items-center justify-between py-3 px-4 mb-4 bg-[#F9F9FF] rounded-xl border border-[#D7DAEE]"
                        onPress={() => (console.log('term'))}
                    >
                        <View className="flex flex-row items-center space-x-3">
                            <Image source={supportIcon} className="w-[18px] h-[18px]" />
                            <Text className="text-lg text-[#636583]">Support Center</Text>
                        </View>
                        <Image source={backIcon} className="w-[18px] h-[18px]" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="flex flex-row items-center justify-between py-3 px-4 mb-4 bg-[#F9F9FF] rounded-xl border border-[#D7DAEE]"
                        onPress={() => (console.log('term'))}
                    >
                        <View className="flex flex-row items-center space-x-3">
                            <Image source={detailsIcon} className="w-[18px] h-[18px]" />
                            <Text className="text-lg text-[#636583]">Terms of use</Text>
                        </View>
                        <Image source={backIcon} className="w-[18px] h-[18px]" />
                    </TouchableOpacity>

                    {/* Logout Button */}
                    <View className="mt-auto">
                        <TouchableOpacity
                            className="flex flex-row items-center justify-between py-3 px-4 mb-4 bg-[#FFE8E8] rounded-xl border border-[#F198A8]"
                            onPress={handleLogout}
                        >
                            <View className="flex flex-row items-center space-x-3">
                                <Image source={logoutIcon} className="w-[18px] h-[18px]" />
                                <Text className="text-lg text-[#FF2020]">Logout</Text>
                            </View>
                            <Image source={rightIcon} className="w-[18px] h-[18px]" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#fff" color="#030319" style="dark" />
        </SafeAreaView>
    );
};

export default Profile;
