import { View, Text, ScrollView, Image, ActivityIndicator, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import logo from '../../assets/logo/logo-black.png';
import user from '../../assets/icon/user.png';
import email from '../../assets/icon/email.png';
import lock from '../../assets/icon/lock.png';
import eye from '../../assets/icon/eye.png';
import eyeHide from '../../assets/icon/eye-hide.png';
import flag from '../../assets/icon/flag.png';
import { Link, router } from 'expo-router';

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [form, setForm] = useState({
        name: "Shahjalal",
        email: "shah@mail.com",
        phone: "01763628770",
        password: "123123",
    })

    const createAccount = () => {
        if (form.name === '' || (form.name).length < 3) {
            ToastAndroid.show(`Enter Full Name`, ToastAndroid.SHORT);
            return;
        }
        if (form.email == '') {
            ToastAndroid.show('Enter Your Email', ToastAndroid.SHORT);
            return;
        }
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(form.email)) {
            ToastAndroid.show(`Enter Correct Email`, ToastAndroid.SHORT);
            return;
        }
        if (parseInt(form.phone) < 1299999999) {
            ToastAndroid.show('Enter Correct Phone Number', ToastAndroid.SHORT);
            return;
        }
        if (form.password === '' || (form.password).length < 6) {
            ToastAndroid.show(`Enter Six Digit Password`, ToastAndroid.SHORT);
            return;
        }
        console.log(form)
        router.push('verification');
    }

    return (
        <SafeAreaView className="bg-[#F8FDFE] h-full">
            <ScrollView>
                <View className="w-full h-full min-h-[100vh] px-4 flex flex-col justify-between">
                    <View className="flex flex-row justify-center items-center mt-16">
                        <Image
                            source={logo}
                            className="w-[135px] h-[55px]"
                            resizeMode="contain"
                        />
                    </View>
                    <View className="">
                        <Text className="text-[#081E32] text-2xl font-hregular font-[500] text-center ">Create an account</Text>
                        <View>
                            <View className="space-y-2 mt-5">
                                <View className="w-full h-12 px-4 rounded-lg border-2 border-[#D2D5EC] focus:border-[#D2D5EC] flex flex-row items-center">
                                    <Image
                                        source={user}
                                        className="w-[20px] h-[20px] "
                                        resizeMode="contain"
                                    />
                                    <TextInput
                                        className="flex-1 text-[#797DA2] font-hregular text-lg ml-2"
                                        value={form.name}
                                        placeholder="Full name"
                                        placeholderTextColor="#797DA2"
                                        onChangeText={(e) => setForm({ ...form, name: e })}
                                    />
                                </View>
                            </View>
                            <View className="space-y-2 mt-5">
                                <View className="w-full h-12 px-4 rounded-lg border-2 border-[#D2D5EC] focus:border-[#D2D5EC] flex flex-row items-center">
                                    <Image
                                        source={email}
                                        className="w-[20px] h-[20px] "
                                        resizeMode="contain"
                                    />
                                    <TextInput
                                        className="flex-1 text-[#797DA2] font-hregular text-lg ml-2"
                                        value={form.email}
                                        placeholder="Email address"
                                        placeholderTextColor="#797DA2"
                                        onChangeText={(e) => setForm({ ...form, email: e })}
                                    />
                                </View>
                            </View>
                            <View className="mt-5 flex flex-row">
                                <View className="w-1/4 h-12 px-2 rounded-lg border-2 border-[#D2D5EC] focus:border-[#D2D5EC] flex flex-row items-center mr-1">
                                    <Image
                                        source={flag}
                                        className="w-[25px] h-[15px] "
                                        resizeMode="contain"
                                    />
                                    <Text className=" text-[#797DA2] font-hregular text-lg ml-2">+88</Text>
                                </View>
                                <View className="w-3/4 h-12 px-1 rounded-lg border-2 border-[#D2D5EC] focus:border-[#D2D5EC] flex flex-row items-center">
                                    <TextInput
                                        className="flex-1 text-[#797DA2] font-hregular text-lg ml-2"
                                        value={form.phone}
                                        placeholder="01XXXXXXXXX"
                                        placeholderTextColor="#797DA2"
                                        onChangeText={(e) => setForm({ ...form, phone: e })}
                                    />
                                </View>
                            </View>
                            <View className="space-y-2 mt-5">
                                <View className="w-full h-12 px-4 rounded-lg border-2 border-[#D2D5EC] focus:border-[#D2D5EC] flex flex-row items-center">
                                    <Image
                                        source={lock}
                                        className="w-[24px] h-[24px] "
                                        resizeMode="contain"
                                    />
                                    <TextInput
                                        className="flex-1 text-[#797DA2] font-hregular text-lg ml-2"
                                        value={form.password}
                                        placeholder="Your password"
                                        placeholderTextColor="#797DA2"
                                        onChangeText={(e) => setForm({ ...form, password: e })}
                                        secureTextEntry={!showPassword}
                                    />
                                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                        <Image
                                            source={!showPassword ? eye : eyeHide}
                                            className="w-6 h-6"
                                            resizeMode="contain"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <TouchableOpacity
                                onPress={createAccount}
                                activeOpacity={0.7}
                                className={`bg-[#f65f34] w-full rounded-lg min-h-[48px] flex flex-row justify-center items-center mt-8 ${isLoading ? 'opacity-50' : ''}`}
                                disabled={isLoading}
                            >
                                <Text className={`text-[#fff] font-hregular font-[500] text-center text-lg`}>
                                    Create Account
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
                    <View className="mb-8">
                        <Text className="text-lg font-hregular font-[400] text-center text-[#797DA2] mt-12">
                            Already have an account? <Link className='text-[#f65f34] font-hregular font-[600] underline' href={'signin'}>Sign in</Link>
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <StatusBar
                backgroundColor="#F8FDFE" style="dark"
            />
        </SafeAreaView>
    )
}

export default Signup